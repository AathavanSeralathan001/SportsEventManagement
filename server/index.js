const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const SportsModel = require('./models/Sports')
const { events } = require('./models/Sports')

app.use(cors());
app.use(express.json())

//Database connection
mongoose.connect(
"mongodb://localhost:27017/sports_event_management?readPreference=primary&appname=MongoDB%20Compass&ssl=false",
 {useNewUrlParser: true}
 ).then(()=>{
    console.log("Database connected")
 })

app.post('/insert', async(req,res)=>{
        const eventname= req.body.eventname
        const sportsname = req.body.sportsname
        const members = req.body.members
        const description = req.body.description

        const sport = new SportsModel({eventname:eventname, sportsname:sportsname, members:members, description: description})
        await sport.save()
        res.send(sport)
})

app.get('/read', async(req,res)=>{
    SportsModel.find({}, (err, result)=>{
        if(err){
            res.send(err)
        }
        else{
            res.send(result)
        }
    })
    
});

app.put('/update', async(req,res)=>{
    const newMembersCount = req.body.newMembersCount 
    const id = req.body.id

    try{
      await SportsModel.findById(id, (error, eventToUpdate )=>{
        eventToUpdate.members =Number(newMembersCount  ) ;
        eventToUpdate.save()

      })
    }catch(err){
   console.log(err)
    }

    res.send('Updated');
});

app.delete('/delete/:id', async(req,res)=>{
    const id = req.params.id
    await SportsModel.findByIdAndRemove(id).exec()
    res.send("Item Deleted")
})


app.listen(3001, ()=>{
  console.log("You are connected!!!")  
})