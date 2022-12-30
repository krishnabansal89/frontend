import React from 'react'
import {Link} from 'react-router-dom'
function kar() {
    document.getElementById('hmm').classList.toggle('hide')
}
export default function Navbar() {
    return (
        <div className="nav">
            <p className='nav-image'  onClick={kar} ></p>
            <ul className="navbar hide"  id = 'hmm'>
                <Link to={'/'} className='element1'>Home</Link>
                <Link to={'/auth'} className='element1'>Signup</Link>
                <Link to={'/'} className='element1'>About</Link>
                <Link to={'/view/'} className='element1'>View</Link>
                
            </ul>
        </div>
    )
}
