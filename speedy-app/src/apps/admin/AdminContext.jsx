import { createContext, useContext, useState, useRef } from 'react'
import { seed } from './data'
import { ksh } from './utils'

const Ctx = createContext(null)
export const useAdmin = () => useContext(Ctx)

const upd = (set, id, changes, key = 'id') =>
  set(list => list.map(x => (x[key] === id ? { ...x, ...(typeof changes === 'function' ? changes(x) : changes) } : x)))

export function AdminProvider({ children }) {
  const [riders, setRiders] = useState(seed.riders)
  const [customers, setCustomers] = useState(seed.customers)
  const [orders, setOrders] = useState(seed.orders)
  const [complaints, setComplaints] = useState(seed.complaints)
  const [payouts, setPayouts] = useState(seed.payouts)
  const [promos, setPromos] = useState(seed.promos)
  const [settings, setSettings] = useState(seed.settings)
  const [toastMsg, setToastMsg] = useState(null)
  const timer = useRef()

  const toast = msg => {
    setToastMsg(msg)
    clearTimeout(timer.current)
    timer.current = setTimeout(() => setToastMsg(null), 2400)
  }

  const actions = {
    setRiderStatus: (id, status) => {
      upd(setRiders, id, r => ({ status, online: status === 'active' ? r.online : false }))
      toast(status === 'active' ? 'Rider activated' : 'Rider suspended')
    },
    setCustomerStatus: (id, status) => {
      upd(setCustomers, id, { status })
      toast(status === 'blocked' ? 'Customer blocked' : 'Customer unblocked')
    },
    creditCustomer: (id, amount) => {
      upd(setCustomers, id, c => ({ wallet: c.wallet + amount }))
      toast(`${ksh(amount)} added to wallet`)
    },
    assignRider: (orderId, riderId) => {
      upd(setOrders, orderId, { riderId })
      toast('Rider assigned')
    },
    cancelOrder: id => {
      upd(setOrders, id, { status: 'cancelled' })
      toast('Order cancelled')
    },
    replyComplaint: (id, text) => {
      upd(setComplaints, id, c => ({
        thread: [...c.thread, { from: 'admin', text, time: 'Just now' }],
        status: c.status === 'open' ? 'in_progress' : c.status,
      }))
    },
    setComplaintStatus: (id, status) => {
      upd(setComplaints, id, { status })
      toast(status === 'resolved' ? 'Complaint resolved' : 'Marked in progress')
    },
    refundComplaint: (id, amount) => {
      const c = complaints.find(x => x.id === id)
      upd(setCustomers, c.customerId, x => ({ wallet: x.wallet + amount }))
      upd(setComplaints, id, x => ({
        refunded: true, status: 'resolved',
        thread: [...x.thread, { from: 'admin', text: `We have refunded ${ksh(amount)} to your wallet. Sorry for the trouble.`, time: 'Just now' }],
      }))
      toast(`${ksh(amount)} refunded`)
    },
    decidePayout: (id, status) => {
      upd(setPayouts, id, { status })
      toast(status === 'approved' ? 'Payout approved' : 'Payout rejected')
    },
    addPromo: p => { setPromos(l => [{ ...p, uses: 0, active: true }, ...l]); toast(`Promo ${p.code} created`) },
    togglePromo: code => upd(setPromos, code, x => ({ active: !x.active }), 'code'),
    saveSettings: s => { setSettings(s); toast('Settings saved') },
  }

  return (
    <Ctx.Provider value={{ riders, customers, orders, complaints, payouts, promos, settings, toast, ...actions }}>
      {children}
      {toastMsg && (
        <div className="fixed bottom-24 left-1/2 z-[70] -translate-x-1/2 animate-fade rounded-xl border border-line bg-panel px-4 py-2.5 text-[13px] font-medium shadow-[0_12px_30px_rgba(0,0,0,0.4)] min-[900px]:bottom-8">
          {toastMsg}
        </div>
      )}
    </Ctx.Provider>
  )
}
