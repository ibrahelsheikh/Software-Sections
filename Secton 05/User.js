import { useState } from "react"

const User = ({onAdd}) => {

    const [name, setName] = useState('')
    const [age, setAge] = useState('')

    const onSubmit = (e) =>{
        e.preventDefault()
        onAdd({name,age})
        setName('')
        setAge('')
    }

  return (
    <form onSubmit={onSubmit}>
        <div>
        <label>Name</label>
        <input type="text" placeholder='type name'
        value = {name} onChange= {(e)=>setName(e.target.value)}
        />
      </div>
      <div>
        <label>Age</label>
        <input type="text" placeholder='type age'
        value = {age} onChange= {(e)=>setAge(e.target.value)}
        />
      </div>
      <input type="submit" value='Save User' />
    </form>
  )
}

export default User
