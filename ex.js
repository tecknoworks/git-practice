const express = require('express')
const bodyParser = require('body-parser');
const { request } = require('http');
const app = express()
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.raw());
const port = 3001

const user=[{
    id:1,
    username:"Damaris08",
    firstname:"Damaris",
    lastname:"Virtan",
    projects:[1]
}]

const projects=[{
    id:1,
    name:"first",
    type:"test"
}]
//get
app.get('/user',function (req,res)
{
    const allUsers = user.map(u => {
        return {
            id: u.id,
            username: u.username,
            firstname:u.firstname,
            lastname:u.lastname,
            projects: projects.filter(it => (u.projects.indexOf(it.id) != -1))
        }
    })
    res.send(allUsers)
})
app.get('/user/:id', (req,res,next) =>
{
   let u= user.find(x => x.id == req.params.id)
   console.log(req.params.id)
   console.log(u)
   res.send(u)

})
//add user
app.post('/user',function (req,res)
{
    const newId = user.map(u => u.id).reduce(function(a, b) { return Math.max(a, b) }) + 1;
    let newUser = req.body
    newUser.id = newId
    newUser.projects = []
    user.push(newUser)
    console.log(JSON.stringify(req.body))
    res.send(newUser)
})
//add projects
app.post('/project', (req,res) =>
{
    const newId = projects.map(u => u.id).reduce(function(a, b) { return Math.max(a, b) }) + 1;
    let newProject = req.body
    newProject.id = newId
    projects.push(newProject)
    console.log(JSON.stringify(req.body))
    res.send(newProject)
})

// delete user
app.delete('/user/:id',(req,res) => 
{
    var id_=req.params.id
    var remove=user.findIndex(user => user.id==id_);
    user.splice(remove,1);
    res.send(user)
})
//delete project
app.delete('/project/:id',(req,res) => 
{
    var id_=req.params.id
    var remove=projects.findIndex(projects => projects.id==id_);
    user.splice(remove,1);
    res.send(projects)
})

// update user
app.put('/user/:id', (req, res) => {
    var id_=req.params.id
    var update_=user.findIndex(user => user.id==id_)
    let updatedUser = req.body
    updatedUser.id = parseInt(id_)
    user[update_]=updatedUser
    res.send(updatedUser)
 })
//update project
app.put('/project/:id', (req, res) => {
    var id_=req.params.id
    var update_=projects.findIndex(project => project.id==id_)
    let updatedProject = req.body
    updatedProject.id = parseInt(id_)
    projects[update_]=updatedProject
    res.send(updatedProject)
 })

// all the projects from a user with a specific Id

app.get('/user/:id/project',(req,res)=>
{
    var id_=req.params.id
    var paraName=req.query.name;
    const allUsers = user.map(u => {
        return {
            projects: projects.filter(it => (u.projects.indexOf(it.id) != -1)&&(it.name.includes(paraName)))
        }
    })
    res.send(allUsers)
})


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })