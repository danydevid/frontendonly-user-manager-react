import { useState } from 'react'
import { useGlobal } from './GlobalContext'
import '../App.css'

export default function UserTable() {
  let { users, setUsers, setFormData } = useGlobal()
  const [searchTerm, setSearchTerm] = useState('')
  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  let handleEdit = (userData) => {
    console.log(userData)
    setFormData(userData)
  }

  let handleDelete = (username) => {
    console.log(username)
    let deletedUser = users.filter(user => user.username !== username);
    console.log(deletedUser)
    setUsers(deletedUser)
  }
  return(
    <div className='flex flex-col items-center py-5'>
      <div className="search">
        <label htmlFor="search">Search Name: </label>
        <input
          type="text"
          name="search"
          id="search"
          placeholder='search...'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <table className="table">
        <thead>
          <tr>
            <td>no</td>
            <td>username</td>
            <td>name</td>
            <td>email</td>
            <td>action</td>
          </tr>
        </thead>
        <tbody>
            {filteredUsers.length > 0 ? (
            filteredUsers.map((user, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{user.username}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <button
                    className="hover:bg-red-500" 
                    onClick={() => handleDelete(user.username)}>hapus</button> /
                  <button
                    className="hover:bg-yellow-300" 
                    onClick={() => handleEdit(user)}>edit</button>
                </td>
              </tr>
            ))
          ) : (
          <tr>
            <td>0</td>
              <td>item not found</td>
              <td>item not found</td>
              <td>item not found</td>
              <td>item not found</td>
          </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}