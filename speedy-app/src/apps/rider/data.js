export const rider = {
  name: 'James Mwangi', first: 'James', initials: 'JM',
  id: 'SP-10432', vehicle: 'Boda boda', rating: 4.92,
}

export const nav = [
  { to: '/rider', end: true, label: 'Home', icon: 'home' },
  { to: '/rider/orders', label: 'Orders', icon: 'orders' },
  { to: '/rider/earnings', label: 'Earnings', icon: 'dollar' },
  { to: '/rider/profile', label: 'Profile', icon: 'user' },
]

// keyed by the first path segment after /rider
export const pageMeta = {
  '': { title: 'Home', sub: `Welcome back, ${rider.first}` },
  orders: { title: 'Orders', sub: 'Your queue and delivery history' },
  earnings: { title: 'Earnings', sub: "This week's payout summary" },
  profile: { title: 'Profile', sub: 'Account & settings' },
}

export const activeDelivery = {
  id: '#SP-2291', eta: '8 min',
  pickup: 'Northgate Kitchen, Ring Rd',
  dropoff: '14 Riverside Apartments, Blk C',
}

export const stats = [
  { val: '6.2h', label: 'Online' },
  { val: '38km', label: 'Distance' },
  { val: '4.92', label: 'Rating' },
  { val: '96%', label: 'Accept' },
]

export const today = {
  earnings: 3420, delta: '↑ 18% vs yesterday',
  deliveries: 12, inQueue: 2,
}

// status: queued | done | cancelled
export const jobs = [
  { id: 1, status: 'queued', addr: '22 Marlowe Street — Sasson Mall', meta: '1.8 km · Ready in 5 min', pay: 320, label: 'Queued' },
  { id: 2, status: 'queued', addr: 'Parklands Rd — Beacon Towers', meta: '3.4 km · Ready in 12 min', pay: 460, label: 'Queued' },
  { id: 3, status: 'done', addr: 'Kilimani — Yaya Centre', meta: '2.1 km · 11:42 AM', pay: 280, label: 'Delivered' },
  { id: 4, status: 'done', addr: 'Westlands — The Mirage', meta: '4.6 km · 10:58 AM', pay: 510, label: 'Delivered' },
  { id: 5, status: 'done', addr: 'Lavington — Green House Mall', meta: '1.5 km · 9:20 AM', pay: 260, label: 'Delivered' },
  { id: 6, status: 'cancelled', addr: 'CBD — Kencom House', meta: 'Customer cancelled · 8:47 AM', pay: 0, label: 'Cancelled' },
]

export const weekly = [
  { day: 'Mon', pct: 38 }, { day: 'Tue', pct: 55 }, { day: 'Wed', pct: 44 },
  { day: 'Thu', pct: 70 }, { day: 'Fri', pct: 60 }, { day: 'Sat', pct: 48 },
  { day: 'Sun', pct: 82, today: true },
]

export const payout = { available: 18940, note: 'Next auto-payout: Friday' }

export const breakdown = [
  { label: 'Base delivery fees', amount: 14200 },
  { label: 'Peak-hour bonus', amount: 2640 },
  { label: 'Customer tips', amount: 2100 },
  { label: 'Deductions', amount: 0, negative: true },
]

export const messages = [
  { from: 'Speedy Dispatch', text: 'New order ready for pickup at Northgate', time: '2m', initials: 'SP' },
  { from: 'Customer — Amina', text: 'Please leave it at the gate, thanks!', time: '14m', initials: 'CS' },
  { from: 'Speedy Support', text: 'Your weekly payout has been processed', time: '1h', initials: 'SP' },
]

export const profileRows = {
  Account: [
    { icon: 'user', text: 'Personal details' },
    { icon: 'vehicle', text: 'Vehicle & documents' },
    { icon: 'card', text: 'Payout method' },
  ],
  Support: [
    { icon: 'chat', text: 'Help centre' },
    { icon: 'bell', text: 'Notifications' },
  ],
}

export const ksh = n => `KSh ${n.toLocaleString()}`
