import React from 'react'

const AdminNavbar = () => {
  return (
    <div className='w-full h-14 bg-teal-900 flex justify-between'>
      <div className=' w-44 h-14  ml-7 flex justify-center items-center '>
        <h1 className='text-white font-bold text-xl' >ADMIN PANEL</h1>
      </div>
      <div>
        <ul className=' flex w-52 h-14  space-x-5 mr-[150px]  justify-center items-center'>

          <li className={`admin_nav_li`}>
            ADD FORM
            </li>
          <li className={`admin_nav_li`}>BOOKS</li>
        </ul>
      </div>
    </div>
  )
}

export default AdminNavbar
