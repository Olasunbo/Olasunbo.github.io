let express = require('express')
let groupRouter = express.Router()
let db = require('../database');

//GET all groups
groupRouter.get('/allGroups', (req, res) => {
    
    console.log("Get all groups");
    let sql = "select * from groups";
    db.all(sql,  (err, row) => {
        if (err) {
          res.status(400).json({"error":err.message});
          return;
        }
        res.json({
            "message":"success",
            "data":row
        })
      });
})

// POST localhost:<port>/(task for group)
groupRouter.post('/group', async (req, res) => {
  // now we have access to req.body due to body-parser (see index.js)
  if (!req.body) {
    return resizeBy.status(400).send('Request body is missing')
  }

  let group = {
    //what user of the site requested on the site
    groupName: req.body.groupName
  }

  // First make sure that a record doesn't already exist
  let checkIfExistSql = "select * from groups where groupName = ?"
  //??log what they asked for in the console to check??
  console.log("req.body.groupName: " + req.body.groupName)
  //make some variables for sql stuff
  let params = [req.body.groupName]
  let nameExists = false;
  //?? not sure what this line does??
  const rows = await new Promise((resolve, reject) => {
      db.all(checkIfExistSql, params, (err, rows) => {
        if (err) {
          res.status(400).json({ "error": err.message }).send();
          return;
        }
        //log the count of rows where this name exsists
        console.log("ROWS:" + rows.length);
        if(rows.length > 0){
          nameExists = true;
          // this would be the output json to the screen and QUIT
          res.json({
            "message": "Name already exists" 
          }).send()
          resolve(rows);
        }
        else{
          resolve(rows);
        }
      });
    });

  //what did the check return true/false
  console.log("Nameexists:"+ nameExists);
  if(nameExists)
    return;
  
  var insertsql = 'INSERT INTO groups (groupName) VALUES (?)'
  db.run(insertsql, params, function (err, result) {
    if (err) {
      res.status(400).json({ "error": err.message })
      return;
    }
    //if we get this far this would be the output to the screen QUIT
    res.json({
      "message": "success",
      "data": group,
      "id": this.lastID
    })
  });

})



module.exports = groupRouter