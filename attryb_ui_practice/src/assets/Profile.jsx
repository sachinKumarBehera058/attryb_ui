import React from 'react'
import './Profile.css';

const Profile = () => {
  return (
    <div className='chota-daba'>
        <div className='heading-name'>RATATOUILLE</div>
        <div className='naam'>Remy <div className='chota-naam'>@remy</div> </div>
        <div className='n'><img src="https://cdn.imgchest.com/files/myd5czpld34.png" alt="pic" /></div>
        <div className='Follow-details'>
        <div className="teen">Tweets <div className='no'>5057</div></div>
        <div className="teen">Following <div className='no'>324</div></div>
        <div className="teen">Followers <div className='no'>809</div></div>
        </div>
    </div>
  )
}

export default Profile;