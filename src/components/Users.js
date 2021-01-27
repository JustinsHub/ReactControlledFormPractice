import React, {useState} from 'react'
import UserForm from './UserForm'
import User from './User'

const Users =() =>{
    const [users, setUsers] = useState([])
    //addUser adds object/user from UserForm component. 
    //The form includes username and password to add on to the initial state of users.
    const addUser = (user) =>{
        setUsers(users => [...users, {...user}])
    }
    return (
        <div>
        <UserForm addUser={addUser}/>
        <div>
                {users.map(u => {
                    return(
                    <User username={u.username} password={u.password}/>
                    )
                })}
            </div>
        </div>
    )
}

export default Users