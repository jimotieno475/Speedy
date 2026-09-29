import { useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import useTheme from '@/hooks/useTheme'
import ThemeButton from '@/shared/components/ThemeButton'
import TopBar from '@/shared/components/TopBar'
import BottomNav from '@/shared/components/BottomNav'
import Sidebar from './components/Sidebar'
import Home from './views/Home'
import Orders from './views/Orders'
import Earnings from './views/Earnings'
import Profile from './views/Profile'
import { rider, nav, pageMeta, messages } from './data'

export default function RiderApp() {
  const [theme, toggleTheme] = useTheme()
  const [avatar, setAvatar] = useState(null)
  const [online, setOnline] = useState(true)
  const { pathname } = useLocation()

  const segment = pathname.replace(/^\/rider\/?/, '').split('/')[0]
  const meta = pageMeta[segment] || pageMeta['']
  const toggleOnline = () => setOnline(o => !o)

  return (
    <div className="flex h-dvh w-screen">
      <Sidebar avatar={avatar} online={online} onToggleOnline={toggleOnline} theme={theme} onToggleTheme={toggleTheme} />

      <div className="flex h-full min-w-0 flex-1 flex-col">
        <TopBar title={meta.title} sub={meta.sub} avatar={avatar} initials={rider.initials}
          messages={messages} profilePath="/rider/profile" />

        <main className="flex-1 overflow-y-auto px-4 pb-[90px] pt-5 min-[900px]:px-8 min-[900px]:pb-[60px] min-[900px]:pt-7">
          <div key={segment} className="animate-fade">
            <Routes>
              <Route index element={<Home online={online} onToggleOnline={toggleOnline} />} />
              <Route path="orders" element={<Orders />} />
              <Route path="earnings" element={<Earnings />} />
              <Route path="profile" element={<Profile avatar={avatar} onAvatarChange={setAvatar} />} />
            </Routes>
          </div>
        </main>
      </div>

      <BottomNav items={nav} />
      <ThemeButton theme={theme} onToggle={toggleTheme}
        className="fixed bottom-4 left-4 z-[60] shadow-[0_10px_24px_rgba(0,0,0,0.35)] min-[900px]:hidden" />
    </div>
  )
}
