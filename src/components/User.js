import React from 'react'

const User = ({username, password}) =>{
    return (
        <div>
            <p>{username}</p>
            <p>{password}</p>
        </div>
    )
}

export default User