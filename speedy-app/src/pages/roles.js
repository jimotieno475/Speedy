// shared between login/signup — one source of truth for the role picker
export const ROLES = [
  { key: 'customer', label: 'Customer', icon: 'users', desc: 'Order food & deliveries', home: '/customer' },
  { key: 'rider', label: 'Rider', icon: 'bike', desc: 'Deliver and earn', home: '/rider' },
  { key: 'admin', label: 'Admin', icon: 'shield', desc: 'Manage operations', home: '/admin' },
]
