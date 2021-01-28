import React from 'react'

const User = ({username, password}) =>{
    return (
        <div>
            <p>Username: {username}</p>
            <p>Password: {password}</p>
        </div>
    )
}

export default User