import React,{useState} from 'react'
import { Button, Input,Modal } from "antd";
import axios from 'axios'

export const Home = () => {
    const [name,setName]=useState()
    const [link,setLink]=useState()
   
   
const addbookmark=async (e)=>{
    e.preventDefault()
  
    const result = await fetch('http://localhost:8000/bookmarks/add',{
      method:'POST',
      headers:{
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        link
      }),
    })
  
    const data = await result.json()
    // console.log('sucess')
    // console.log(data)
  
    if(data.status === 'ok'){
    console.log('sucess')
    }
  
  }


  //display and delete bookmark
 const getBookmarks=()=> {
    axios.get("http://localhost:8000/bookmarks/").then((res) => {
      if (res.data.success) {
        this.setState({
          posts: res.data.posts,
        });
        console.log("post: ", this.state.posts);
      }
    });
  }

 const onDelete = (id) => {
    axios.delete(`/bookmarks/delete/${id}`).then((res) => {
      alert(res.data.name + " has been deleted successfully");
      this.getBookmarks();
    });
  };
  


  return (
    <div>
     <div > 
     <h1>Fvourites</h1>
     <Input placeholder="Search"  style={{marginLeft:20, marginBottom:5, width:'10%',borderWidth:2}} />;

     {/* modal */}
   <div>



   <form onSubmit={addbookmark}>

   <Input 
   value={name}
   onChange={(e)=> setName(e.target.value)}
   type="name" placeholder='Name' />

<br />


<Input
value={link} 
onChange={(e)=> setLink(e.target.value)}
type="link" placeholder='Link' />

<br />
<label style={{marginLeft:22}}>Add</label>
<Input type='submit' value='+'  style={{ marginLeft: 8,borderRadius:10, width:'5%', backgroundColor:"blue" }}/>

</form>
    
   
    </div>
</div>

      
     {/* bottom */}
     <h1>Frequently Visited</h1>

    </div>
  )
}

export default Home