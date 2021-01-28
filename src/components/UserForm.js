import React, {useState} from 'react'
import './UserForm.css'

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
    //Takes parent(Users.js) function addUser to add this forms state input as an object.
    //This function only takes objects in. It's based on how the formData is on this state.
    const handleSubmit = (e)=>{
        e.preventDefault()
        addUser({...formData})
        setFormData(INITIAL_STATE)
    }

    return (
        <div className="UserForm">
            <h3>Mini-Form</h3>
            <form onSubmit={handleSubmit}>
            <div className="UserForm-username">
                <label htmlFor="username">Username:</label>
                <input 
                id="username" 
                type="text" 
                placeholder="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                />
            </div>

            <div className="UserForm-password">
                <label htmlFor="password">Password:</label>
                <input 
                id="password" 
                type="password" 
                placeholder="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                />
            </div>
                <div className="UserForm-button-div">
                <button className="UserForm-button">Login</button>
                </div>
            </form>
        </div>
    )
}

export default UserForm