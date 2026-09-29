export const user = {
  name: 'Amina Otieno', first: 'Amina', initials: 'AM',
  city: 'Nairobi', since: 'Feb 2024', orderCount: 240, wallet: 1240,
}

export const nav = [
  { to: '/customer', end: true, label: 'Home', icon: 'home' },
  { to: '/customer/orders', label: 'Orders', icon: 'orders' },
  { to: '/customer/addresses', label: 'Addresses', short: 'Places', icon: 'pin' },
  { to: '/customer/payments', label: 'Payments', icon: 'card' },
  { to: '/customer/profile', label: 'Profile', icon: 'user' },
]

// keyed by the first path segment after /customer
export const pageMeta = {
  '': { title: 'Home', sub: `Good afternoon, ${user.first}` },
  orders: { title: 'Orders', sub: 'Your active and past orders' },
  addresses: { title: 'Addresses', sub: 'Manage your delivery locations' },
  payments: { title: 'Payments', sub: 'Wallet and payment methods' },
  profile: { title: 'Profile', sub: 'Account & settings' },
}

export const orders = [
  { id: 1, status: 'active', name: 'Northgate Kitchen', meta: '4 items · Ordered 12 min ago', total: 1480, label: 'On the way' },
  { id: 2, status: 'past', name: 'Java Blend', meta: '3 items · Yesterday, 1:20 PM', total: 940, label: 'Delivered' },
  { id: 3, status: 'past', name: "Mama Kim's", meta: '2 items · Sat, 7:45 PM', total: 1250, label: 'Delivered' },
  { id: 4, status: 'past', name: 'Chapati Point', meta: '5 items · Thu, 12:10 PM', total: 760, label: 'Delivered' },
  { id: 5, status: 'cancelled', name: 'Grill House CBD', meta: 'Cancelled by restaurant · Tue', total: 0, label: 'Refunded' },
]

export const favourites = [
  { code: 'NK', name: 'Northgate Kitchen', meta: 'Kenyan · 4.7 ★' },
  { code: 'JB', name: 'Java Blend', meta: 'Cafe · 4.8 ★' },
  { code: 'MK', name: "Mama Kim's", meta: 'Grill · 4.6 ★' },
  { code: 'CP', name: 'Chapati Point', meta: 'Local · 4.9 ★' },
]

export const trackingSteps = [
  { label: 'Confirmed', state: 'done' },
  { label: 'Preparing', state: 'done' },
  { label: 'On the way', state: 'current' },
  { label: 'Delivered', state: 'todo' },
]

export const messages = [
  { from: 'James — your rider', text: 'On my way, 8 minutes out', time: '2m', initials: 'JM' },
  { from: 'Speedy Support', text: 'Your refund has been processed', time: '1h', initials: 'SP' },
]

export const addresses = [
  { label: 'Home', icon: 'home', isDefault: true, lines: ['14 Riverside Apartments, Blk C', 'Westlands, Nairobi'] },
  { label: 'Work', icon: 'briefcase', lines: ['Sasson Mall, 3rd Floor', 'Kilimani, Nairobi'] },
  { label: "Mum's place", icon: 'user', lines: ['Green House Mall area', 'Lavington, Nairobi'] },
]

export const paymentMethods = [
  { name: 'M-Pesa', meta: '•••• 4821', logo: 'M-PESA', tone: 'text-ok', isDefault: true },
  { name: 'Visa Debit', meta: '•••• 7743 · Exp 09/28', logo: 'VISA', tone: 'text-dim' },
]

export const transactions = [
  { name: 'Order #SP-2291', meta: 'M-Pesa · Today', amount: -1480 },
  { name: 'Wallet top-up', meta: 'M-Pesa · Yesterday', amount: 2000 },
]

export const profileRows = {
  Account: [
    { icon: 'user', text: 'Personal details' },
    { icon: 'pin', text: 'Saved addresses' },
    { icon: 'card', text: 'Payment methods' },
  ],
  Support: [
    { icon: 'chat', text: 'Help centre' },
    { icon: 'bell', text: 'Notifications' },
  ],
}

export const ksh = n => `KSh ${n.toLocaleString()}`
