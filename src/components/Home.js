import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
async function redirect() {
    let iii = 'https://frontend-yd5b.onrender.com/add/'+localStorage.getItem('id')
    await navigator.clipboard.writeText(iii)
    window.alert('Link copied to clipboard')
    window.location.assign('https://frontend-yd5b.onrender.com/add/'+localStorage.getItem('id'))
    
}

export default function Home() {
    
    return (
        <div className="container">
            <div className="bg-image">
                {/* <img src="https://coincentral.com/wp-content/uploads/2018/11/buy-bitcoin-anonymously-874x437.png" alt="" srcset="" /> */}
            </div>
            <div className="content">
                <Navbar />
                <div className="heading1">
                    <p className="heading left">Tell something without Revealing Yourself</p>
                    <p className="heading right">Ask anything Anonymously</p>
                </div>
                <div >
                    <Link to='/auth' className="link">Start your own quiz</Link>
                </div>
             <div>
            {(()=>{
                 if(localStorage.getItem('id')){
                    return(<div className="condition"> <span onClick={redirect}>Your link here</span></div>)}
                    
                else{   
                    console.log('khali')
                } } )()}
                </div>
            </div>

        </div>
    )
}
