import React from 'react'
import UserDetails from './UserDetails'
import { Link } from 'react-router-dom'
import { UserContext } from '../Context/Context'
import { useContext } from 'react'

const User = () => {
  const {user} = useContext(UserContext);

  return (
    <div>
      <h1 className='text-4xl'>User List</h1>
      <div className='flex flex-col mt-10'>
        {user.map((u)=>(
          <Link key={u.id} to={`/user/${u.id}`}
           className='p-3 mb-2  bg-blue-100'>{u.username}</Link>
        ))}
        
      </div>
    </div>
  )
}

export default User
