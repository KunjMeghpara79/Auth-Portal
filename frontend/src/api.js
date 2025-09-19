import axios from 'axios'

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: { 'Content-Type': 'application/json' },
})

export async function registerUser(payload) {
  const res = await api.post('/auth/register', payload)
  return res.data
}

export async function loginUser(payload) {
  const res = await api.post('/auth/login', payload)
  return res.data
}


