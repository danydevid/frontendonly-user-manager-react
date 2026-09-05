import { createContext, useState, useContext } from 'react';
import userData from '../data/userObj.json'

// Create context
const GlobalContext = createContext()

// create context provider component
export function GlobalProvider({ children }) {
  const [users, setUsers] = useState(userData)
  const [ formData, setFormData ] = useState({
    username: '',
    name: '',
    email: ''
  })
  return (
    <GlobalContext.Provider value={{ users, setUsers, formData, setFormData }}>
      {children}
    </GlobalContext.Provider>
  );
}

export function useGlobal() {
  return useContext(GlobalContext)
}