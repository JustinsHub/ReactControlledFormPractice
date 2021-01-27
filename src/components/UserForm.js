import React, {useState} from 'react'

const UserForm =({addUser}) =>{
    const INITIAL_STATE = {
        username: "",
        password: ""
    }
    const [formData, setFormData] = useState(INITIAL_STATE)

    //Updating the value of the current state by handleChange
    const handleChange = (e) =>{
        const {name, value} = e.target
        setFormData(formData => ({...formData, [name]:value}))
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        addUser({...formData})
        setFormData(INITIAL_STATE)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username:</label>
                <input 
                id="username" 
                type="text" 
                placeholder="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                />   

                <label htmlFor="password">Password:</label>
                <input 
                id="password" 
                type="password" 
                placeholder="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                />
                <button>Login</button>
            </form>
        </div>
    )
}

export default UserForm