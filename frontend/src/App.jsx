import { Routes, Route, Link, Navigate, useNavigate } from 'react-router-dom'
import './App.css'
import { AuthProvider, useAuth } from './AuthContext'

function Home() {
  return (
    <div className="text-center space-y-3">
      <h2 className="text-2xl font-semibold">Welcome</h2>
      <p className="text-muted-foreground">
        Please <Link className="text-blue-600 hover:underline" to="/login">Login</Link> or{' '}
        <Link className="text-blue-600 hover:underline" to="/register">Register</Link>.
      </p>
    </div>
  )
}

function App() {
  return (
    <AuthProvider>
      <div className="min-h-screen bg-gray-50 text-gray-900">
        <header className="border-b bg-white">
          <div className="mx-auto max-w-6xl px-4 h-14 flex items-center gap-4">
            <Link to="/" className="font-semibold">Auth Portal</Link>
            <nav className="flex items-center gap-4 text-sm">
              <Link className="text-gray-600 hover:text-gray-900" to="/login">Login</Link>
              <Link className="text-gray-600 hover:text-gray-900" to="/register">Register</Link>
            </nav>
            <div className="ml-auto"><UserMenu /></div>
          </div>
        </header>
        <main className="mx-auto max-w-6xl px-4 py-10">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </div>
    </AuthProvider>
  )
}

function Login() {
  const { login } = useAuth()
  const navigate = useNavigate()
  const onSubmit = async (e) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const email = form.get('email')
    const password = form.get('password')
    try {
      await login(email, password)
      navigate('/')
    } catch (e) {
      alert('Login failed')
    }
  }
  return (
    <div className="mx-auto max-w-md">
      <div className="bg-white shadow-sm rounded-lg p-6">
        <h3 className="text-xl font-semibold mb-6">Login</h3>
        <form onSubmit={onSubmit} className="grid gap-4">
          <div className="grid gap-2">
            <label htmlFor="email" className="text-sm text-gray-700">Email</label>
            <input id="email" name="email" type="email" placeholder="you@example.com" required className="h-10 rounded-md border border-gray-300 px-3 outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div className="grid gap-2">
            <label htmlFor="password" className="text-sm text-gray-700">Password</label>
            <input id="password" name="password" type="password" placeholder="••••••••" required className="h-10 rounded-md border border-gray-300 px-3 outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <button type="submit" className="h-10 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition">Login</button>
        </form>
      </div>
    </div>
  )
}

function Register() {
  const { register } = useAuth()
  const navigate = useNavigate()
  const onSubmit = async (e) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const name = form.get('name')
    const email = form.get('email')
    const password = form.get('password')
    try {
      await register(name, email, password)
      navigate('/login')
    } catch (e) {
      alert('Registration failed')
    }
  }
  return (
    <div className="mx-auto max-w-md">
      <div className="bg-white shadow-sm rounded-lg p-6">
        <h3 className="text-xl font-semibold mb-6">Create an account</h3>
        <form onSubmit={onSubmit} className="grid gap-4">
          <div className="grid gap-2">
            <label htmlFor="name" className="text-sm text-gray-700">Full name</label>
            <input id="name" name="name" placeholder="Jane Doe" required className="h-10 rounded-md border border-gray-300 px-3 outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div className="grid gap-2">
            <label htmlFor="reg-email" className="text-sm text-gray-700">Email</label>
            <input id="reg-email" name="email" type="email" placeholder="you@example.com" required className="h-10 rounded-md border border-gray-300 px-3 outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div className="grid gap-2">
            <label htmlFor="reg-password" className="text-sm text-gray-700">Password</label>
            <input id="reg-password" name="password" type="password" placeholder="••••••••" required className="h-10 rounded-md border border-gray-300 px-3 outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <button type="submit" className="h-10 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition">Create account</button>
        </form>
      </div>
    </div>
  )
}

function UserMenu() {
  const { user, logout } = useAuth()
  if (!user) return null
  return (
    <div className="flex items-center gap-2 text-sm">
      <span className="text-gray-600">Signed in as</span>
      <span className="font-medium">{user.name}</span>
      <button className="h-8 px-3 rounded-md border border-gray-300 hover:bg-gray-50" onClick={logout}>Logout</button>
    </div>
  )
}

export default App
