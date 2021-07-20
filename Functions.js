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