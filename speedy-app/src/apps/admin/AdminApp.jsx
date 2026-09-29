import { Routes, Route, useLocation } from 'react-router-dom'
import useTheme from '@/hooks/useTheme'
import ThemeButton from '@/shared/components/ThemeButton'
import TopBar from '@/shared/components/TopBar'
import { AdminProvider } from './AdminContext'
import Sidebar from './components/Sidebar'
import MobileTabs from './components/MobileTabs'
import Dashboard from './views/Dashboard'
import Orders from './views/Orders'
import Riders from './views/Riders'
import Customers from './views/Customers'
import Complaints from './views/Complaints'
import Payouts from './views/Payouts'
import Promos from './views/Promos'
import Settings from './views/Settings'
import { admin, pageMeta, alerts } from './data'

function Shell() {
  const [theme, toggleTheme] = useTheme()
  const { pathname } = useLocation()
  const segment = pathname.replace(/^\/admin\/?/, '').split('/')[0]
  const meta = pageMeta[segment] || pageMeta['']

  return (
    <div className="flex h-dvh w-screen">
      <Sidebar theme={theme} onToggleTheme={toggleTheme} />

      <div className="flex h-full min-w-0 flex-1 flex-col">
        <TopBar title={meta.title} sub={meta.sub} initials={admin.initials}
          messages={alerts} panelTitle="Alerts" profilePath="/admin/settings" />

        <main className="flex-1 overflow-y-auto px-4 pb-10 pt-5 min-[900px]:px-8 min-[900px]:pt-7">
          <MobileTabs />
          <div key={segment} className="animate-fade">
            <Routes>
              <Route index element={<Dashboard />} />
              <Route path="orders" element={<Orders />} />
              <Route path="riders" element={<Riders />} />
              <Route path="customers" element={<Customers />} />
              <Route path="complaints" element={<Complaints />} />
              <Route path="payouts" element={<Payouts />} />
              <Route path="promos" element={<Promos />} />
              <Route path="settings" element={<Settings />} />
            </Routes>
          </div>
        </main>
      </div>

      <ThemeButton theme={theme} onToggle={toggleTheme}
        className="fixed bottom-4 left-4 z-[60] shadow-[0_10px_24px_rgba(0,0,0,0.35)] min-[900px]:hidden" />
    </div>
  )
}

export default function AdminApp() {
  return <AdminProvider><Shell /></AdminProvider>
}
