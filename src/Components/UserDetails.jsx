import React, { useContext } from 'react'
import { UserContext } from '../Context/Context'
import { useNavigate, useParams } from 'react-router-dom';

const UserDetails = () => {

const navigate= useNavigate();

  const{id} = useParams();
  const {user} =useContext(UserContext);
  console.log(user[id]);
  return (
    <div>
     <h1 className='text-4xl font-bold text-red-200 mt-3'>{user[id].username}</h1>
     <h3 className='mt-3 text-3xl font-bold text-blue-200'>{user[id].city}</h3>
    
    <button 
    onClick={()=> navigate(-1)}
    className='rounded mt-4 p-2 bg-green-500 text-white'>go back</button>
    </div>
  )
}

export default UserDetails
