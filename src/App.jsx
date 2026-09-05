import { GlobalProvider } from './components/GlobalContext';

import Form from './components/Form'
import UserTable from './components/UserTable'
import './App.css'

function App() {



  return (
    <GlobalProvider>
      <h1 className='text-3xl font-bold my-3 flex justify-center'>Welcome admin</h1>

      <section>
        <h1 className='text-2xl'>form add</h1>
        <Form/>
      </section>

      <section>
        <h1 className='text-3xl font-bold my-3 flex justify-center'>Users Table</h1>
        <UserTable/>
      </section>
    </GlobalProvider>
  )
}

export default App
