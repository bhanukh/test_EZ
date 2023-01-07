import React from 'react'

const LoggedInPage = () => {
  return (
    <div className="loggedIn">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAr3xW1zPY4iJxL0CSJlQHDma2_UsuBOM0mw&usqp=CAU" id="ez_logo" alt="logo" />
      <div className="name-avatar">
        <h5 id='logout'>Hi Bhani,&nbsp; </h5> &nbsp;
        <div className='log-out'>
        <h5><a href="/">Account</a></h5>
        <h5><a href="/">LogOut</a></h5>
        </div>
        <img
          src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
          alt="avatar_image" id='avatar_img'
        />
      </div>
    </div>
  )
}

export default LoggedInPage