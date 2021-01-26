import React, {useState} from 'react'

const UserForm =() =>{
    const INITIAL_STATE = {
        username: "",
        password: ""
    }
    const [formData, setFormData] = useState(INITIAL_STATE)

    const handleChange = (e) =>{
        const {name, value} = e.target
        setFormData(formData => ({...formData, [name]:value}))
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log(`${formData.username} logged in!`)
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