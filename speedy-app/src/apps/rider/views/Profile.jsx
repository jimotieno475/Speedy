import ProfilePanel from '@/shared/components/ProfilePanel'
import { rider, profileRows } from '../data'

export default function Profile({ avatar, onAvatarChange }) {
  return (
    <ProfilePanel avatar={avatar} onAvatarChange={onAvatarChange} initials={rider.initials}
      name={rider.name} meta={`Rider ID ${rider.id} · ${rider.vehicle}`}
      chip={`★ ${rider.rating} rating`} rows={profileRows} />
  )
}
