import React, { useEffect  , useState} from 'react'
// import { useParams  , Link} from 'react-router-dom'
import Navbar from './Navbar'



export default function View() {
    
    const  Item = (props) => {
        let  {value, id} = props
        
        return(
            <>
            <div className="item_view"><span>{value}</span>
            <img src="https://cdn-icons-png.flaticon.com/512/1345/1345874.png" className ='dlt' id ='dlt_img' onClick={dlt} id1 = {id} alt="" />
            </div>
            </>
        )
    
    }
    async function dlt(event){
        let id_send= event.target.getAttribute('id1')
        let api = JSON.stringify({
            "id":id_send,
        })
        let data = await fetch(('https://backend-6lie.onrender.com/api/main/delete'),
            {
                method:'POST',
                headers:{ 
                    "Content-type":"application/json",
                },  
                body:api,            
            })
        console.log('bheja to he')
        main()
        
    }
    let item_data = ['2','2']
    const [item_get , setItem] = useState([])
    async function main(){
        let data = await fetch(('https://backend-6lie.onrender.com/api/main/'),
        {
            method:'POST',
            headers:{ 
                "Content-type":"application/json",
                "id":localStorage.getItem("id")
            },            
        })
        let data_pr = await data.json()
        let arr = []
        console.log(data_pr)
        
        // for(let i in data_pr){
            
        //     let items = data_pr[i].item
        //     arr = arr.concat([items]) 
        //     // console.log(items)
        // }
        // item_data = data_pr
        
        await setItem(data_pr)
        console.log('item set')
        console.log(item_get,'dekh le')
        
    }
    // 
    
    useEffect(()=>{main()
       ;} ,[])
    
  return (
    <div className='container'>
        <Navbar/>
    {!localStorage.getItem('id')? window.location.assign('https://frontend-yd5b.onrender.com/auth'):console.log('pass')}
    {item_get.map((element)=>{
        return(<Item value={element.item} key={element._id} id={element._id}></Item>)
    })}
    </div>
  )
}
