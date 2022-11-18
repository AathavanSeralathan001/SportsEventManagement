import { useState, useEffect } from 'react';
import './styles/crud.css'
import './styles/card.css'
import Button from 'react-bootstrap/Button';
import Axios from 'axios';
// import Display from './Display';
import Banner from './Capture.PNG'
function Crud() {

  const [eventname, setEventName] = useState("");
  const [sportsname, setSportsName] = useState("");
  const [members, setMembers] = useState("");
  const [description, setDescription] = useState("");
  const [listOfEvents, setListOfEvents] = useState([])
  const addSport = ()=>{
    Axios.post('http://localhost:3001/insert', {
      eventname:eventname, sportsname:sportsname, members:members, description:description
     }).then((response)=>{
      setListOfEvents([
        ...listOfEvents,
        {_id: response.data._id,eventname:eventname, sportsname:sportsname, members:members, description:description},
      ])
    })
    
  }

  const updateSport = (id)=>{
    const newMembersCount = prompt("Enter new Members Count: ")

    Axios.put('http://localhost:3001/update', {newMembersCount:newMembersCount, id:id}).then(()=>{
      setListOfEvents(listOfEvents.map((val)=>{
        return val._id == id ? {_id: id, eventname: val.eventname, sportsname:val.sportsname, members:newMembersCount, description:val.description} : val;
      }))
    });

  }

  const deleteSport = (id) =>{
    Axios.delete(`http://localhost:3001/delete/${id}`).then(()=>{
      setListOfEvents(
        listOfEvents.filter((val)=> {
        return val._id != id;
      }))
    })
  }

  useEffect(()=>{
    Axios.get('http://localhost:3001/read')
    .then((response)=>{
      setListOfEvents(response.data);
      // const update = prompt("Enter val: ");
      // console.log(update);
    }).catch(()=>{
      console.log("Error")
    })
  },[])
  return (
    <div >
     <img src="https://img.freepik.com/free-vector/realistic-soccer-football-stadium-illustration_52683-60377.jpg?w=1380&t=st=1668702384~exp=1668702984~hmac=9e210dccd3a55caabab1522a83403ed2ec3535cc049edbb5bc11823925e8348d" className='crud-banner-img'/>

    <div className='inputs'>
    <row>
    <input type="text" placeholder='Event Name' required onChange={(event)=> {setEventName(event.target.value)}}/>
    <input type="text" placeholder='Sports Name' required onChange={(event)=> {setSportsName(event.target.value)}}/>
    </row>
    <input type="number" placeholder='Members' required onChange={(event)=> {setMembers(event.target.value)}}/>
    <textarea placeholder='Decription' className='description' required onChange={(event)=> {setDescription(event.target.value)}}></textarea>
    <button onClick={addSport} type='submit'>Add Event</button>
    </div>
   
   <div className='listOfEvents'>
   {listOfEvents.map((val)=>{
    return (
<>     
        <div className="card " >
        <div className="card-body">
    <h4>Event Name:</h4><p>{val.eventname} </p> 
    <h4>Sports Name:</h4><p>{val.sportsname}</p> 
    <h4>Members:</h4> <p>{val.members} </p>
    <h4>Description:</h4> <p>{val.description}</p>
    <Button onClick={() =>{updateSport(val._id)}} variant='info' size='lg' >Update</Button>
    <Button className='danger' variant='danger' size='lg' onClick={() =>{deleteSport(val._id)}}>Delete</Button>
        </div>
        </div>
       
    </>
   )
})}
    </div>
    </div>
   

  );
}

export default Crud;
