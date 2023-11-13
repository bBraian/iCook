import { createContext, useEffect, useState } from 'react'

import { api } from '../lib/axios'
import { destroyCookie, parseCookies, setCookie } from 'nookies'

const fakeUserData = {
  id: 1,
  password: '987654',
  fullName: 'Braian Viacava de Ávila',
  username: 'braian',
  email: 'braian@datacode.com.br',
  photo: ''
}

const fakeUser = {
  id: 2,
  password: '987654',
  fullName: 'Braian Viacava de Ávila',
  username: 'braian',
  email: 'braian@datacode.com.br',
  photo: ''
}

export async function signOut() {
  const { 'icook.accessToken': access_token } = parseCookies()

  if(access_token) {
    try {
      await api.post('/logout')
    } catch (error) {
      console.log(error)
    }
  }

  destroyCookie(null, 'icook.accessToken', { path: '/' })
  return
}

const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  console.log(user)

  useEffect(() => {
    async function initApp() {
        const { 'icook.accessToken': access_token } = parseCookies()

        if(access_token) {
            api.defaults.headers['Authorization'] = access_token
            const res = await getUser()
    
            setUser(res.data[0])
            setLoading(false)
        }
        setLoading(false)
    }
    initApp()
  }, [])

  async function signIn(access_token) {
    try {
        api.defaults.headers['Authorization'] = access_token

        setCookie(null, 'icook.accessToken', access_token, {
            maxAge: 30000,
            path: '/'
        })

        const res = await getUser();
        console.log(res)

        if(!res) {
            return false
        }
        setUser(res.data[0])
        return true
    } catch (error) {
      console.log(error)
      return false
    }
  }

  async function getUser() {
    return api.get('/user')
  }

  function logout() {
    signOut()
    setUser(null)
    router.push('/login')
  }

  const values = {
    user,
    signIn,
    logout
  }

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
}

export { AuthContext, AuthProvider }