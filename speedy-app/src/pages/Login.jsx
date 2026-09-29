import { useState } from 'react'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import { Btn } from '@/shared/components/ui'
import AuthLayout from './AuthLayout'
import RoleTabs from './RoleTabs'
import { TextField, PasswordField } from './FormField'
import { ROLES } from './roles'

export default function Login() {
  const [params] = useSearchParams()
  const initial = ROLES.find(r => r.key === params.get('role'))?.key || 'customer'
  const [role, setRole] = useState(initial)
  const [form, setForm] = useState({ email: '', password: '' })
  const [error, setError] = useState('')
  const navigate = useNavigate()
  const set = k => e => setForm({ ...form, [k]: e.target.value })

  const submit = e => {
    e.preventDefault()
    if (!form.email.trim() || !form.password) return setError('Enter your email/phone and password.')
    // No backend yet — any credentials sign you into the chosen portal.
    navigate(ROLES.find(r => r.key === role).home)
  }

  return (
    <AuthLayout eyebrow="Welcome back" title="Log in to Speedy" sub="Choose your portal and sign in to continue"
      footer={<>New to Speedy? <Link to="/signup" className="font-semibold text-brand">Create an account</Link></>}>
      <form onSubmit={submit} className="flex flex-col gap-4">
        <RoleTabs value={role} onChange={setRole} />

        <TextField label="Email or phone" icon="phone" placeholder="you@example.com" value={form.email} onChange={set('email')} />
        <PasswordField placeholder="••••••••" value={form.password} onChange={set('password')} />

        {error && <div className="rounded-lg bg-bad/10 px-3 py-2 text-[12.5px] text-bad">{error}</div>}

        <div className="text-right">
          <span className="cursor-pointer text-[12.5px] font-medium text-dim hover:text-ink">Forgot password?</span>
        </div>

        <Btn onClick={submit} className="w-full">Log in as {ROLES.find(r => r.key === role).label}</Btn>
      </form>
    </AuthLayout>
  )
}
