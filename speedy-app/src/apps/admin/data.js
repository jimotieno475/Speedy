export const admin = { name: 'Grace Njeri', initials: 'GN', role: 'Super admin' }

export const nav = [
  { to: '/admin', end: true, label: 'Dashboard', icon: 'grid' },
  { to: '/admin/orders', label: 'Orders', icon: 'orders' },
  { to: '/admin/riders', label: 'Riders', icon: 'bike' },
  { to: '/admin/customers', label: 'Customers', icon: 'users' },
  { to: '/admin/complaints', label: 'Complaints', icon: 'flag', badge: 'complaints' },
  { to: '/admin/payouts', label: 'Payouts', icon: 'dollar' },
  { to: '/admin/promos', label: 'Promos', icon: 'tag' },
  { to: '/admin/settings', label: 'Settings', icon: 'sliders' },
]

export const pageMeta = {
  '': { title: 'Dashboard', sub: 'Live overview of Speedy operations' },
  orders: { title: 'Orders', sub: 'Track, assign and cancel orders' },
  riders: { title: 'Riders', sub: 'Approve, monitor and manage your fleet' },
  customers: { title: 'Customers', sub: 'Accounts, wallets and access' },
  complaints: { title: 'Complaints', sub: 'Customer issues and resolutions' },
  payouts: { title: 'Payouts', sub: 'Rider cash-out requests' },
  promos: { title: 'Promos', sub: 'Discount codes and campaigns' },
  settings: { title: 'Settings', sub: 'Pricing, operations and support' },
}

export const alerts = [
  { from: 'Rider applications', text: '2 new riders waiting for approval', time: '5m', initials: 'RA' },
  { from: 'Complaints', text: 'New high-priority complaint from Amina', time: '12m', initials: 'CP' },
  { from: 'Payments', text: '3 payout requests pending', time: '1h', initials: 'PY' },
]

export const weeklyOrders = [
  { day: 'Mon', v: 310 }, { day: 'Tue', v: 355 }, { day: 'Wed', v: 332 }, { day: 'Thu', v: 410 },
  { day: 'Fri', v: 468 }, { day: 'Sat', v: 502 }, { day: 'Sun', v: 386, today: true },
]

export const seed = {
  riders: [
    { id: 'SP-10432', name: 'James Mwangi', phone: '0712 345 678', vehicle: 'Boda boda', plate: 'KMFB 214X', zone: 'Westlands', status: 'active', online: true, rating: 4.92, deliveries: 1284, earnings: 18940, joined: 'Mar 2023' },
    { id: 'SP-10433', name: 'Peter Otieno', phone: '0723 111 222', vehicle: 'Boda boda', plate: 'KMGH 901A', zone: 'Kilimani', status: 'active', online: true, rating: 4.81, deliveries: 962, earnings: 12300, joined: 'Jun 2023' },
    { id: 'SP-10441', name: 'Faith Wanjiru', phone: '0734 555 019', vehicle: 'Scooter', plate: 'KMEX 330T', zone: 'Lavington', status: 'active', online: false, rating: 4.95, deliveries: 730, earnings: 9800, joined: 'Aug 2023' },
    { id: 'SP-10450', name: 'Brian Kiprop', phone: '0700 908 771', vehicle: 'Boda boda', plate: 'KMDW 118B', zone: 'CBD', status: 'active', online: true, rating: 4.67, deliveries: 415, earnings: 5100, joined: 'Jan 2024' },
    { id: 'SP-10402', name: 'Ruth Chebet', phone: '0745 660 412', vehicle: 'Bicycle', plate: '—', zone: 'Westlands', status: 'active', online: true, rating: 4.88, deliveries: 690, earnings: 7450, joined: 'Oct 2023' },
    { id: 'SP-10388', name: 'Kevin Maina', phone: '0711 800 300', vehicle: 'Boda boda', plate: 'KMCZ 445Q', zone: 'Eastlands', status: 'suspended', online: false, rating: 3.9, deliveries: 210, earnings: 1200, joined: 'Feb 2023' },
    { id: 'SP-10467', name: 'Hassan Ali', phone: '0722 190 445', vehicle: 'Boda boda', plate: 'KMHA 602C', zone: 'Parklands', status: 'pending', online: false, rating: 0, deliveries: 0, earnings: 0, joined: 'Sep 2026' },
    { id: 'SP-10468', name: 'Mercy Achieng', phone: '0733 245 876', vehicle: 'Scooter', plate: 'KMJB 077D', zone: 'Karen', status: 'pending', online: false, rating: 0, deliveries: 0, earnings: 0, joined: 'Sep 2026' },
  ],
  customers: [
    { id: 'C-1001', name: 'Amina Otieno', phone: '0710 222 333', email: 'amina@mail.com', orders: 240, spent: 312400, wallet: 1240, status: 'active', joined: 'Feb 2024' },
    { id: 'C-1002', name: 'Daniel Kamau', phone: '0722 404 505', email: 'daniel.k@mail.com', orders: 96, spent: 118900, wallet: 0, status: 'active', joined: 'May 2024' },
    { id: 'C-1003', name: 'Lucy Njoki', phone: '0733 818 292', email: 'lucy.njoki@mail.com', orders: 58, spent: 64200, wallet: 350, status: 'active', joined: 'Jul 2024' },
    { id: 'C-1004', name: 'Samuel Omondi', phone: '0701 622 941', email: 'sam.omondi@mail.com', orders: 31, spent: 39800, wallet: 0, status: 'active', joined: 'Nov 2024' },
    { id: 'C-1005', name: 'Zawadi Mutua', phone: '0745 300 117', email: 'zawadi@mail.com', orders: 12, spent: 15600, wallet: 500, status: 'active', joined: 'Mar 2025' },
    { id: 'C-1006', name: 'Peter Karanja', phone: '0712 909 808', email: 'pkaranja@mail.com', orders: 7, spent: 6100, wallet: 0, status: 'blocked', joined: 'Jan 2025' },
  ],
  orders: [
    { id: 'SP-2291', customerId: 'C-1001', restaurant: 'Northgate Kitchen', riderId: 'SP-10432', total: 1480, status: 'on_way', time: '12 min ago' },
    { id: 'SP-2292', customerId: 'C-1002', restaurant: 'Java Blend', riderId: null, total: 940, status: 'placed', time: '4 min ago' },
    { id: 'SP-2293', customerId: 'C-1003', restaurant: "Mama Kim's", riderId: null, total: 1250, status: 'preparing', time: '9 min ago' },
    { id: 'SP-2290', customerId: 'C-1004', restaurant: 'Chapati Point', riderId: 'SP-10433', total: 760, status: 'delivered', time: '35 min ago' },
    { id: 'SP-2289', customerId: 'C-1005', restaurant: 'Grill House CBD', riderId: 'SP-10450', total: 2100, status: 'delivered', time: '1 h ago' },
    { id: 'SP-2288', customerId: 'C-1001', restaurant: 'Java Blend', riderId: 'SP-10441', total: 880, status: 'delivered', time: '2 h ago' },
    { id: 'SP-2287', customerId: 'C-1002', restaurant: 'Northgate Kitchen', riderId: 'SP-10402', total: 1620, status: 'delivered', time: '3 h ago' },
    { id: 'SP-2286', customerId: 'C-1006', restaurant: "Mama Kim's", riderId: null, total: 1100, status: 'cancelled', time: '4 h ago' },
  ],
  complaints: [
    { id: 'CMP-104', customerId: 'C-1001', orderId: 'SP-2288', riderId: 'SP-10441', subject: 'Order arrived cold and 40 minutes late', category: 'late', priority: 'high', status: 'open', created: 'Today, 10:42 AM', refunded: false,
      thread: [{ from: 'customer', text: 'My order was supposed to take 25 minutes. It took 65 and the food was cold. I would like a refund.', time: '10:42 AM' }] },
    { id: 'CMP-103', customerId: 'C-1004', orderId: 'SP-2290', riderId: 'SP-10433', subject: 'Missing chapati in my order', category: 'missing_item', priority: 'medium', status: 'in_progress', created: 'Today, 9:15 AM', refunded: false,
      thread: [
        { from: 'customer', text: 'I paid for 5 chapatis but only received 4.', time: '9:15 AM' },
        { from: 'admin', text: 'Sorry about that, Samuel. We are checking with the restaurant.', time: '9:30 AM' },
      ] },
    { id: 'CMP-102', customerId: 'C-1005', orderId: 'SP-2289', riderId: 'SP-10450', subject: 'Rider was rude at drop-off', category: 'rider_conduct', priority: 'high', status: 'open', created: 'Yesterday, 7:50 PM', refunded: false,
      thread: [{ from: 'customer', text: 'The rider shouted at me when I asked him to wait a moment. Not acceptable.', time: '7:50 PM' }] },
    { id: 'CMP-101', customerId: 'C-1003', orderId: 'SP-2293', riderId: null, subject: 'Charged twice via M-Pesa', category: 'payment', priority: 'medium', status: 'open', created: 'Yesterday, 2:10 PM', refunded: false,
      thread: [{ from: 'customer', text: 'I got two M-Pesa deductions for the same order.', time: '2:10 PM' }] },
    { id: 'CMP-099', customerId: 'C-1002', orderId: 'SP-2287', riderId: 'SP-10402', subject: 'Food quality was poor', category: 'quality', priority: 'low', status: 'resolved', created: 'Mon, 1:00 PM', refunded: true,
      thread: [
        { from: 'customer', text: 'The fries were soggy and the burger was undercooked.', time: '1:00 PM' },
        { from: 'admin', text: 'We have refunded KSh 500 to your wallet. Sorry about the experience.', time: '1:40 PM' },
      ] },
  ],
  payouts: [
    { id: 'PO-311', riderId: 'SP-10432', amount: 18940, method: 'M-Pesa', requested: 'Today', status: 'pending' },
    { id: 'PO-310', riderId: 'SP-10433', amount: 12300, method: 'M-Pesa', requested: 'Today', status: 'pending' },
    { id: 'PO-309', riderId: 'SP-10441', amount: 9800, method: 'M-Pesa', requested: 'Yesterday', status: 'pending' },
    { id: 'PO-308', riderId: 'SP-10402', amount: 7450, method: 'M-Pesa', requested: 'Mon', status: 'approved' },
  ],
  promos: [
    { code: 'FREEDROP', desc: 'Free delivery on orders over KSh 800', min: 800, uses: 1240, active: true },
    { code: 'WELCOME200', desc: 'KSh 200 off first order', min: 500, uses: 386, active: true },
    { code: 'WEEKEND10', desc: '10% off weekend orders', min: 1000, uses: 92, active: false },
  ],
  settings: { baseFee: 150, perKm: 30, commission: 18, autoAssign: true, peakBonus: true, maintenance: false, supportPhone: '0800 123 456', supportEmail: 'help@speedy.co.ke' },
}
