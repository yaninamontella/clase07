const users = require('../../data/users.json')
/*const bodyParser = require('body-parser')*/

const getAll = (req, res) => {
    res.send(users)
}

const getById = (req, res) => {
    let paramId = Number(req.params.id)
    const result = users.find( ({id}) => id === paramId)  
    res.send(result)
}

const insert = (req, res) => { 
  let paramId = Number(req.body.id)
  const result = users.find( ({id}) => id === paramId)   
  if (result!=undefined){
    res.send('Already exist a User with that id')
  }
  else {
    users.push(req.body)
    res.send(`New user added: ${req.body.id} - ${req.body.name}`)
  }  
}

const upsert = (req, res) => {
  let paramId = parseInt(req.params.id)
  let index= users.findIndex(element => element.id==paramId)
  if(index==-1){
    res.send("Don't Exist User:\n:" + JSON.stringify(req.body, null, 4));
  }else{
    users.splice(index, 1, req.body)
    res.send("Update Successfully! \n" + JSON.stringify(req.body, null, 4));
  }
}

const update = (req, res) => {
    res.send({data : true})
}

const remove = (req, res) => {
  let paramId = parseInt(req.params.id)
  let index= users.findIndex(element => element.id==paramId)
  if(index==-1){
    res.send("Don't Exist User:\n:" + JSON.stringify(req.body, null, 4));
  }else{
    users.splice(index, 1)
    res.send("Delete Successfully! \n" + JSON.stringify(req.body, null, 4));
  }
}

module.exports = {
    getAll,
    getById,
    insert,
    upsert,
    update, 
    remove
}