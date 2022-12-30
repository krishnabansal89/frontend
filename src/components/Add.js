import React from 'react'
import Navbar from './Navbar'
import {useEffect } from 'react'
import {useParams} from 'react-router-dom'


async function Submit(event) {
    event.preventDefault()
    let  text = document.getElementById('form').value
    console.log(text)
    
    let url = window.location.href
    let id = url.substring(26)
    let data1 = await JSON.stringify({item:text})
    let api = await fetch('https://backend-6lie.onrender.com/api/main/new' , {
        method : "POST",
        headers :{
            "Content-Type": "application/json",
            "id" : id,
        },
        body:data1
    })
    let data = api.json()
    document.getElementById('form').value = ''
}

export default function  Add() {
    // let name = []
    const {id} = useParams()
    console.log(id,'f')
    useEffect(()=>{async function fetchdata(){
        let url = window.location.href
        let id = url.substring(26)
        let api = await fetch('https://backend-6lie.onrender.com/api/auth/name' , {
        method : 'GET',
        headers :{
            id : id,
        },
    })
    let name = await api.json()
    localStorage.setItem("name",name)
    // console.log(name)
   
    }
    fetchdata()
},[])

  return (
    <div className="container">
        <Navbar/>
        <div className="add-heading">
            <h3>{localStorage.getItem("name")}'s page</h3>
            <span>Comment something or ask anything </span>
        </div>
        <div className="add-form">
            <form method="post" id='add-form' onSubmit={Submit} >
                <textarea type="text" placeholder='Add Comment here' id='form' rows='10' cols='15'/>
                <button type="submit" >Submit</button>
            </form>
        </div>
    </div>
  )
}
