import {React, useEffect} from 'react'
import Navbar from './Navbar'


function change_sign() {
  document.getElementById('sign1').style.display = 'none'
  document.getElementById('login1').style.display = 'flex'
}
async function sign(event) {
  event.preventDefault()
  let name = document.getElementById('Name-register').value
  let email = document.getElementById('email-register').value
  let password = document.getElementById('password-register').value
  let data = {
    "name" :name , "username":email , "password":password
  }
  let data12 = await JSON.stringify(data)
  console.log(data)
  let api = await fetch('https://backend-6lie.onrender.com/api/auth/singup' ,{
      method : 'POST' , 
      headers: {
        'Content-Type': 'application/json'
      },
      body: data12
    })
    let api_json = await api.json()
    if(api.status===200){
      // console.log(api_json)
      localStorage.setItem("id",api_json)
      localStorage.setItem("name",name)
      window.location.assign('https://frontend-yd5b.onrender.com/add/'+api_json)
      // let tt = await api.json()
      // console.log(tt)
    }
    if(api.status===412){
      
      window.alert(api_json)
    }
    if(api.status===404){
      console.log(api_json)
      for(let i in api_json){
        console.log(api_json[i].param ,api_json[i].msg)
      }
      window.alert(api_json)
    }
}
async function Login(event) {
  event.preventDefault()
  let email = document.getElementById('email-login').value
  let password = document.getElementById('password_login').value
  let data = {
    username:email , password
  }
  let data_op = await JSON.stringify(data)
  console.log(data_op , 'f')
  let api =  await fetch('https://backend-6lie.onrender.com/api/auth/login',{
      method : "POST",
      headers :{
        "Content-Type": "application/json",
      },
      body: data_op,
    })
    console.log(api.status)
    if(api.status==200){
      let data11 = await api.json()
      localStorage.setItem("id" , data11.id)
      console.log(data11.id)
      window.location.assign('https://frontend-yd5b.onrender.com/view')
      // console.log(api.json().id)
    }
    else{
      console.log('Invalid credentials')
    }
  


} 
function change_login() {
  document.getElementById('sign1').style.display = 'flex'
  document.getElementById('login1').style.display = 'none'
}
export default function Auth() {
  return (
    <div className="container">
    <Navbar/>
    <div className="box">
      <div className="sign" id ='sign1'>
        <h3>Sign Up</h3>
        <div className='line' ></div>
        <form action="" id="sign"onSubmit={sign}>
        <label htmlFor="">Name</label>
          <input type="Name" id="Name-register" />
          <label htmlFor="">Email</label>
          <input type="email" id="email-register" />
          <label htmlFor="">Password</label>
            <input type="password"  id="password-register" />
            <button type="submit" >Register</button>
        </form>
        <div className="cc">
          <div className="prev-sign"></div>
          <div className="next-sign" onClick={change_sign}></div>
        </div>
      </div>
      <div className="login"id = 'login1'>
      <h3>Login</h3>
        <div className='line' ></div>
        <form action="" id="Login" onSubmit={Login}>
          <label htmlFor="">Email</label>
          <input type="email" id="email-login" />
          <label htmlFor="">Password</label>
            <input type="password"  id="password_login" />
            <button type="submit" >Login</button>
        </form>
        <div className="cc">
          <div className="prev-login" onClick={change_login}></div>
          <div className="next-login"></div>
         </div>
      </div>
    </div>
    </div>
  )
}
