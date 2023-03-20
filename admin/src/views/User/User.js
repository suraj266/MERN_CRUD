import React from 'react'
import MediaCard from '../../components/card/MediaCard'
import UserList from './UserList'

const User = () => {
    return (
        <>
            <MediaCard Message='Users' />
            <UserList />
        </>
    )
}

export default User