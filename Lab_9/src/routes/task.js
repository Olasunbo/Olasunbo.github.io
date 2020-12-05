let express = require('express')
let router = express.Router()
let db = require('../database');

// Create a new task
// POST localhost:<port>/task
router.post('/task', (req, res) => {
    // now we have access to req.body due to body-parser (see index.js)
    if (!req.body) {
        return resizeBy.status(400).send('Request body is missing')
    }

    let task = {
        name: req.body.taskName, 
        dueDate: req.body.taskDueDate // Example 2020-11-24
    }
    
    var sql ='INSERT INTO tasklist (taskName, dueDate) VALUES (?,?)'
    var params =[task.name, task.dueDate]
    db.run(sql, params, function (err, result) {
        if (err){
            res.status(400).json({"error": err.message})
            return;
        }
        res.json({
            "message": "success",
            "data": task,
            "id" : this.lastID
        })
    });
    
})

//GET
router.get('/task', (req, res) => {
    if (!req.query.taskId) { //it wants a query computer is asking what do you want
        return res.status(400).send('Missing URL parameter id')
    }
    let sql = "select * from tasklist where id = ?"
    console.log("req.query.taskId: " + req.query.taskId) //log what it's asking you to
    let params = [req.query.taskId] //gets the id specified-> query because it's asking?
    db.get(sql, params, (err, row) => {
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

//Update
router.put('/task', (req, res) => {
    console.log("PUT called")
    var data = {
        id : req.query.taskId, //asking what do you want from me
        taskName: req.body.taskName //needs new values from body to assign id
        
    }
    console.log("data.id:" + data.id + " name:" + data.taskName)
    if (!data.id) {
        return res.status(400).send('Missing URL parameter id')
    }
    db.run(
        `UPDATE tasklist set 
           taskName = ? 
           WHERE id = ?`,
        [data.taskName, data.id],
        function (err, result) {
            if (err){
                res.status(400).json({"error": res.message})
                return;
            }
            res.json({
                message: "success",
                data: data,
                changes: this.changes
            })
    });
})

//Delete
router.delete('/task', (req, res) => {
    if(!req.query.taskId){ //make sure that something is in the field
        return res.status(400).send('Missing URL parameter email')
    }
    db.run(
        'DELETE FROM tasklist WHERE id = ?', //name of your table
        [req.query.taskId], //brackets for your parameters
        function (err, result) {
            if (err){
                res.status(400).json({"error": res.message})
                return;
            }
            res.json({"message":"deleted", changes: this.changes})
    });
})


module.exports = router