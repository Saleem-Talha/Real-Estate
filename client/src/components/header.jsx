import React from 'react'
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import {useSelector} from 'react-redux';

export default function Header() {
  const {currentUser} = useSelector(state => state.user)
  return (
    <div>
      <header className='bg-slate-200 shadow-md'>
        <div className='flex justify-between items-center max-w-6xl mx-auto'>
          <Link to='/'>
            <h1 className='font-bold text-sm sm:text-xl flex flex-wrap mx-auto p-3'>
              <span className='text-slate-500'>Dream</span>
              <span className='text-slate-700'>Estate</span>
            </h1>
          </Link>
          <form className='bg-slate-100 p-3 rounded-lg flex item-center my-2'>
            <input type='text' placeholder='Search Here' className='bg-transparent focus:outline-none w-24 sm:w-64'></input>
            <FaSearch className='text-slate-500'></FaSearch>
          </form>
          <ul className='flex gap-4'>
            <Link to='/'>
              <li className='text-slate-700 hover:underline'>Home</li>
            </Link>
            <Link to='/about'>
              <li className='text-slate-700 hover:underline'>About</li>
            </Link>
            <Link to='/profile'>
            {currentUser ? (
               <img className='rounded-full h-7 w-7 object-cover' src={currentUser.avatar} alt="Profile" />
            ):(
              <li className='text-slate-700 hover:underline'>Sign in</li>
            ) 
          }
          </Link>
            
              
          </ul>
        </div>
      </header>
    </div>
  )
}
