export const ksh = n => `KSh ${Number(n).toLocaleString()}`
export const initials = name => name.split(' ').map(w => w[0]).slice(0, 2).join('').toUpperCase()

// status key -> [tone, label]
export const STATUS = {
  active: ['ok', 'Active'], pending: ['brand', 'Pending'], suspended: ['bad', 'Suspended'], blocked: ['bad', 'Blocked'],
  open: ['bad', 'Open'], in_progress: ['brand', 'In progress'], resolved: ['ok', 'Resolved'],
  high: ['bad', 'High'], medium: ['brand', 'Medium'], low: ['dim', 'Low'],
  approved: ['ok', 'Approved'], rejected: ['bad', 'Rejected'],
  placed: ['dim', 'Placed'], preparing: ['brand', 'Preparing'], on_way: ['brand', 'On the way'],
  delivered: ['ok', 'Delivered'], cancelled: ['bad', 'Cancelled'],
}
export const CATEGORY = {
  late: 'Late delivery', missing_item: 'Missing item', rider_conduct: 'Rider conduct',
  payment: 'Payment issue', quality: 'Food quality',
}
