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

app.post('/add/user', (req, res) => {
    const newId = user.map(u => u.id).reduce(function(a, b) { return Math.max(a, b) }) + 1;
    let newUser = req.body
    newUser.id = newId
    newUser.projects = []
    user.push(newUser)
    console.log(JSON.stringify(req.body))
    res.send(newUser)
	//bug solved
})

app.delete('/delete/user/:id', (req, res) => {
    var idreq=req.params.id
    var removeIndex = user.findIndex(user => user.id==idreq)
    user.splice( removeIndex, 1 );
    res.send(user)
 })
