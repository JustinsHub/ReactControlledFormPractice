import React, {useState} from 'react'
import UserForm from './UserForm'
import User from './User'
import './Users.css'

const Users =() =>{
    const [users, setUsers] = useState([])

    //addUser adds object/user from UserForm component. 
    //The form from UserForm includes *username and *password to add on to the initial state of users (array).
    //It is passed down as a prop for UserForm and receives back the information to append to the User component. 
    const addUser = (user) =>{
        setUsers(users => [...users, {...user}])
    }
    return (
        <div>
        <UserForm addUser={addUser}/>
        <div>
                {users.map(u => {
                    //Users UI for any users that are being added.
                    return(
                    <User username={u.username} password={u.password}/>
                    )
                })}
            </div>
        </div>
    )
}

export default Users