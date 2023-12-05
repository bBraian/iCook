import { createContext, useEffect, useState } from 'react'

import { api } from '../lib/axios'
import { destroyCookie, parseCookies, setCookie } from 'nookies'

const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
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

  async function logout() {
    const { 'icook.accessToken': access_token } = parseCookies()

    if(access_token) {
    //   try {
    //     await api.post('/logout')
    //   } catch (error) {
    //     console.log(error)
    //   }
      destroyCookie(null, 'icook.accessToken', { path: '/' })
      setUser(null)
    }
    
    return
  }

  const values = {
    user,
    loading,
    signIn,
    logout
  }

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
}

export { AuthContext, AuthProvider }