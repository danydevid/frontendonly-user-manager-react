import { useGlobal } from "./GlobalContext"

export default function Form() {
  const { setUsers, formData, setFormData } = useGlobal();

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()


    setUsers((prevData) => {
      const userExists = prevData.some((item) => item.username === formData.username);

      if(userExists) {
        return prevData.map((item) =>
          item.username === formData.username ? formData : item
        );
      }

      return [...prevData, formData];
    })

    setFormData({
      username: '',
      name: '',
      email: ''
    })
  }
  
  let resetHandler = () => {    
    setFormData({
      username: '',
      name: '',
      email: ''
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username: </label>
        <input 
          type="text" 
          name="username"
          value={formData.username}
          onChange={handleChange}
          placeholder="e.g. jhondoe543"
          required
        />
      </div>

      <div>
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="e.g. Jhon Doe"
          required
        />
      </div>

      <div>
        <label htmlFor="email">Email: </label>
        <input 
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          size={30}
          placeholder="e.g. jhondoe543@example.com"
          required
        />
      </div>
      <div>
        <button type="submit">Submit</button>
        <button onClick={resetHandler}>Reset</button>
      </div>
    </form>
  )
}