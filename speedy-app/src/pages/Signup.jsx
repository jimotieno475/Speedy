import { useState } from 'react'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import { Btn } from '@/shared/components/ui'
import AuthLayout from './AuthLayout'
import RoleTabs from './RoleTabs'
import { TextField, PasswordField } from './FormField'
import { ROLES } from './roles'

// Admin accounts are provisioned internally, not self-served
const SIGNUP_ROLES = ROLES.filter(r => r.key !== 'admin')

export default function Signup() {
  const [params] = useSearchParams()
  const initial = SIGNUP_ROLES.find(r => r.key === params.get('role'))?.key || 'customer'
  const [role, setRole] = useState(initial)
  const [form, setForm] = useState({ name: '', email: '', phone: '', password: '', confirm: '' })
  const [error, setError] = useState('')
  const navigate = useNavigate()
  const set = k => e => setForm({ ...form, [k]: e.target.value })

  const submit = e => {
    e.preventDefault()
    if (!form.name.trim() || !form.email.trim() || !form.phone.trim() || !form.password)
      return setError('Fill in every field to continue.')
    if (form.password.length < 6) return setError('Password should be at least 6 characters.')
    if (form.password !== form.confirm) return setError('Passwords do not match.')
    // No backend yet — this creates the session locally and drops you into the portal.
    navigate(ROLES.find(r => r.key === role).home)
  }

  return (
    <AuthLayout eyebrow="Get started" title="Create your account" sub="Join Speedy as a customer or a rider"
      footer={<>Already have an account? <Link to="/login" className="font-semibold text-brand">Log in</Link></>}>
      <form onSubmit={submit} className="flex flex-col gap-4">
        <RoleTabs value={role} onChange={setRole} options={SIGNUP_ROLES} />

        <TextField label="Full name" icon="users" placeholder="Amina Otieno" value={form.name} onChange={set('name')} />
        <TextField label="Email" icon="phone" placeholder="you@example.com" value={form.email} onChange={set('email')} />
        <TextField label="Phone number" icon="phone" placeholder="07XX XXX XXX" value={form.phone} onChange={set('phone')} />
        <div className="grid grid-cols-2 gap-3">
          <PasswordField placeholder="••••••••" value={form.password} onChange={set('password')} />
          <PasswordField label="Confirm" placeholder="••••••••" value={form.confirm} onChange={set('confirm')} />
        </div>

        {error && <div className="rounded-lg bg-bad/10 px-3 py-2 text-[12.5px] text-bad">{error}</div>}

        <Btn onClick={submit} className="w-full">Create {ROLES.find(r => r.key === role).label.toLowerCase()} account</Btn>
        <div className="text-center text-[11.5px] text-dim">Applying as a rider? Your documents can be verified after signup.</div>
      </form>
    </AuthLayout>
  )
}
