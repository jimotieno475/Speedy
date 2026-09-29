import ProfilePanel from '@/shared/components/ProfilePanel'
import { user, profileRows } from '../data'

export default function Profile({ avatar, onAvatarChange }) {
  return (
    <ProfilePanel avatar={avatar} onAvatarChange={onAvatarChange} initials={user.initials}
      name={user.name} meta={`Customer since ${user.since}`} chip={`★ ${user.orderCount} orders`} rows={profileRows} />
  )
}
