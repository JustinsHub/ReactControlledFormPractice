import React, {useState} from 'react'
import UserForm from './UserForm'

const Users =() =>{
    const [users, setUsers] = useState([])
    const addUser = (user) =>{
        setUsers(users => [...users, {...user}])
    }
    return (
        <div>
            <div>
                {users.map(u => {
                    return(
                    <>
                    {u.username}
                    {u.password}
                    </>
                    )
                })}
            </div>
        <UserForm addUser={addUser}/>
        </div>
    )
}

export default Users