/*
 ------ SUBMIT NEW TASK ------
*/
function submitTask() {
  console.log("Called submitTask");

  let taskNameParam = document.getElementById("taskName").value;
  let taskDueDate = document.getElementById("taskDueDate").value;
  let group = document.getElementById("group").value;
  let person = document.getElementById("firstName").value;
  let priority = document.getElementById("priority").value;

  console.log("TaskName:" + taskNameParam);
  console.log("taskDueDate:" + taskDueDate);
  data = { 
    'taskDueDate': taskDueDate, 
    'taskName': taskNameParam, 
    'group': group, 
    'person': person, 
    'priority': priority 
  };

  console.log(JSON.stringify(data))
  let taskURL = "http://localhost:4000/task";
  const fetchPromise = fetch(taskURL, {
    method: 'POST', headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    }, body: JSON.stringify(data)
  });

  fetchPromise
    .then((response) => {
      return response.json();
    })
    .then((task) => {
      console.log("Here POST");
      console.log(task);
      let taskId, taskName, taskDueDate;
      let message = "ERROR: " + task.message;
      if (typeof task.id !== "undefined") {
        taskName = task.data.name;
        taskId = task.id;
        taskDueDate = task.data.dueDate;
        message = "Message: " + task.message + " ID: " + taskId + "<br>TaskName: " + taskName + "<br> Due Date: " + taskDueDate;
      }
      document.getElementById("postTaskContent").innerHTML = message;
    })
    .catch((err) => {
      console.log(err);
      document.getElementById("postTaskContent").innerHTML = "Invalid task id: " + taskIdParam;
    });

}

/*
 ------  GET TASK BY ID ------
*/
function getTask() {
  console.log("Called getTask");

  let taskIdParam = document.getElementById("taskId").value;
  console.log("TaskId:" + taskIdParam);
  let taskURL = "http://localhost:4000/task?taskId=" + taskIdParam;
  const fetchPromise = fetch(taskURL);

  fetchPromise
    .then((response) => {
      return response.json();
    })
    .then((task) => {
      console.log("Here");
      console.log(task);
      let taskId, taskName, taskDate;
      let message = "ERROR";
      if (typeof task.data.id !== "undefined") {
        taskName = task.data.taskName;
        taskId = task.data.id;
        taskFirstName = task.data.firstName;
        taskGroupName = task.data.groupName;
        taskPriority = task.data.priority;
        taskDueDate = task.data.dueDate;
        taskComplete = task.data.complete;
        message = "ID: " + taskId + "<br>TaskName: " + taskName 
           +  "<br>Group Name: " + taskGroupName
           + "<br>FirstName: " + taskFirstName 
           + "<br>TaskPriority: " + taskPriority
           + "<br>TaskComplete: " + taskComplete
           +  "<br> Due Date: " + taskDueDate;
      }
      document.getElementById("getTaskContent").innerHTML = message;
    })
    .catch((err) => {
      console.log(err);
      document.getElementById("getTaskContent").innerHTML = "Invalid task id: " + taskIdParam;
    });

}

/*
 ------  GET TASK To UPDATE BY ID ------
*/
function getTaskToUpdate() {
  console.log("Called getTaskToUpdate");

  let taskIdParam = document.getElementById("taskToUpdateId").value;
  console.log("TaskId:" + taskIdParam);
  let taskURL = "http://localhost:4000/task?taskId=" + taskIdParam;
  const fetchPromise = fetch(taskURL);
  let message = "";
  
  fetchPromise
    .then((response) => {
      return response.json();
    })
    .then((task) => {
      console.log("Here");
      console.log(task);
      let taskId, taskName, taskPriority, taskDueDate, taskComplete,taskPersonId, taskGroupId;
      let message = "ERROR";
      if (typeof task.data.id !== "undefined") {
        taskName = task.data.taskName;
        taskId = task.data.id;
        taskDueDate = task.data.dueDate;
        taskPriority = task.data.priority;
        taskComplete = task.data.complete;
        taskPersonId = task.data.personId;
        console.log("taskPersonId:" + taskPersonId);
        taskGroupId = task.data.groupId;
        //message = "ID: " + taskId + "<br>TaskName: " + taskName + "<br> Due Date: " + taskDueDate;
        message = "";
        document.getElementById("updateTaskName").value = taskName;
        document.getElementById("updatefirstName").selectedIndex = taskPersonId;
        document.getElementById("updategroup").selectedIndex = taskGroupId;
        document.getElementById("updateTaskId").value = taskId;
        document.getElementById("updateTaskDueDate").value = taskDueDate;
        document.getElementById("updateTaskPriority").value = taskPriority;
        document.getElementById("updateTaskComplete").selectedIndex = taskComplete;
        
      }
      else{
        document.getElementById("updateTaskName").value = "";
        document.getElementById("updateTaskId").value = "";
        document.getElementById("updateTaskDueDate").value = "2020-11-30";
        document.getElementById("updateTaskComplete").value = "";
 
        message = "ERROR";
      }
      //document.getElementById("updatedTaskContent").innerHTML = message;
      
      
    })
    .catch((err) => {
      console.log(err);
      document.getElementById("updatedTaskContent").innerHTML = "<font color=red>Invalid task id: " + taskIdParam + "</font>";
    });

}
/*
 ------ UPDATE TASK BY ID ------
*/
function updateTask() {
  console.log("Called updateTask");

  let updateTaskId = document.getElementById("updateTaskId").value;
  let updateTaskName = document.getElementById("updateTaskName").value;
  let updateTaskFirstName = document.getElementById("updatefirstName").value;
  let updateTaskGroup = document.getElementById("updategroup").value;
  let updateTaskDueDate = document.getElementById("updateTaskDueDate").value;
  let updateTaskPriority = document.getElementById("updateTaskPriority").value;
  let updateTaskComplete = document.getElementById("updateTaskComplete").value;
  console.log("TaskId:" + updateTaskId);
  console.log("TaskName:" + updateTaskName);
  console.log("updateTaskFirstName:" + updateTaskFirstName);
  console.log("updateTaskGroup:" + updateTaskGroup);
  console.log("updateTaskDueDate:" + updateTaskDueDate);
  console.log("updateTaskPriority:" + updateTaskPriority);
  console.log("updateTaskComplete:" + updateTaskComplete);
  data = { 'taskId': updateTaskId,
          'taskName':updateTaskName,
          'taskFirstName':updateTaskFirstName,
          'taskGroup':updateTaskGroup,
          'taskDueDate':updateTaskDueDate,
          'taskPriority': updateTaskPriority,
          'taskComplete':updateTaskComplete };

  console.log(JSON.stringify(data))
  let taskURL = "http://localhost:4000/task?taskId=" + updateTaskId;

  const fetchPromise = fetch(taskURL, {
    method: 'PUT', headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    }, body: JSON.stringify(data)
  });

  fetchPromise
    .then((response) => {
      return response.json();
    })
    .then((task) => {
      console.log("Here Update");
      console.log(task);
      let taskId, taskName, taskDate;
      let message = "ERROR";
      if (typeof task.data.id !== "undefined") {
        taskName = task.data.taskName;
        taskId = task.data.id;
        message = "ID: " + taskId + "<br>TaskName: " + taskName;
      }
      document.getElementById("updatedTaskContent").innerHTML = message;
    })
    .catch((err) => {
      console.log(err);
      document.getElementById("updatedTaskContent").innerHTML = "Invalid task id: " + updateTaskId;
    });

}

/*
 ------ DELETE TASK BY ID ------
*/
function deleteTask() {
  console.log("Called deleteTask");

  let taskIdParam = document.getElementById("deleteTaskId").value;
  console.log("TaskId:" + taskIdParam);

  let taskURL = "http://localhost:4000/task?taskId=" + taskIdParam;
  const fetchPromise = fetch(taskURL, { method: 'DELETE' });

  fetchPromise
    .then((response) => {
      return response.json();
    })
    .then((task) => {
      console.log("Here Delete");
      console.log(task);
      let taskId = "";
      let message = "ERROR";
      if (typeof task.message !== "undefined") {
        message = task.message;
      }
      document.getElementById("deleteTaskContent").innerHTML = message;
    })
    .catch((err) => {
      console.log(err);
      document.getElementById("deleteTaskContent").innerHTML = "Invalid task id: " + taskIdParam;
    });

}

/*
 ------ ADD NEW PERSON ------
*/
function submitNewPerson() {

  console.log("Called submitNewPerson");
  let firstName = document.getElementById("addFirstName").value;

  console.log("firstName:" + firstName);
  data = { 'firstName': firstName };

  //console.log(JSON.stringify(data))
  let personURL = "http://localhost:4000/person"; 
  const fetchPromise = fetch(personURL, {
    method: 'POST', headers: {
      'Content-Type': 'application/json'

    }, body: JSON.stringify(data)
  });

  let personId; //this is from the people js file that is in the server ...
  fetchPromise
    .then((response) => {
      return response.json();
    })
    //to confirm post?
    .then((person) => {
      console.log("Here POST person");
      console.log(person);

      let message = "ERROR";
      if (typeof person.id !== "undefined") {
        firstName = person.data.firstName;
        personId = person.id;
        message = "Message: " + person.message + " firstName: " + firstName + "<br>personId: " + personId + "<br> ";
      }
      else if(typeof person !== "undefined"){
        message = "Message: " + person.message ;
      }
      document.getElementById("postNewPersonContent").innerHTML = message;
    })
    .catch((err) => {
      console.log(err);
      document.getElementById("postNewPersonContent").innerHTML = "Invalid person : " + data.firstName;
    });

}



/*
 ------ ADD NEW GROUP ------
*/
function submitNewGroup() {

  console.log("Called submitNewGroup");
  let groupName = document.getElementById("addGroupName").value;

  console.log("groupName:" + groupName);
  data = { 'groupName': groupName };

  //console.log(JSON.stringify(data))
  //calling to the post method for groups within the server
  let groupURL = "http://localhost:4000/group"; 
  const fetchPromise = fetch(groupURL, {
    //??confirming post method and activating it??
    method: 'POST', headers: {
      'Content-Type': 'application/json'

    }, body: JSON.stringify(data)
  });
  //this is created by running the group js in the server
  let groupId; 
  
  //?? come back when you have a deeper understanding of promises??
  fetchPromise
    .then((response) => {
      return response.json();
    })
    .then((group) => {
      //telling peeps what we are doing
      console.log("Here POST group");
      console.log(group);

      //creating an error message if nothing runs
      let message = "ERROR";
      //if the group ?? requested is weird (doesn't fit standard or possibly some regex)
      if (typeof group.id !== "undefined") {
        groupName = group.data.groupName;
        groupId = group.id;
        message = "Message: " + group.message + " groupName: " + groupName + "<br>groupId: " + groupId + "<br> ";
      }
      //if the group ?? is weird (doesn't fit standard or possibly some regex)
      else if(typeof group !== "undefined"){
        message = "Message: " + group.message ;
      }
      //posting whatever nonsense comes from above
      document.getElementById("postNewGroupContent").innerHTML = message;
    })
    //??log in error files if whatever comes out is invalid in general??
    .catch((err) => {
      console.log(err);
      document.getElementById("postNewGroupContent").innerHTML = "Invalid group : " + data.groupName;
    });

}



/*
 ------ SEARCH TASKS ------
*/
// assitance from https://www.youtube.com/watch?v=y4gZMJKAeWs
//let settings = { method: "Get" };
// need to set endpoint as a json file of the list of tasks that I currently have
let searchURL = "http://localhost:4000/allTasks"; 
//create an empty arrary for results from ^
let tasks = [];
const fetchPromise = fetch(searchURL);
fetchPromise
  .then(response => response.json())
  .then(data => tasks.push(...data))

//findmatches function - VIDEO
function findMatches(word, tasks){
  return tasks.filter( chore => {
    // find the word all over string and don't care about case
    const regex = new RegExp(word, 'gi');
    return chore.taskName.match(regex) 
    }
  )
}

// display matches function -VIDEO
function displayMatches(){
  const matchArray = findMatches(this.value, tasks);
  const html = matchArray.map(chore => {
    const regex = new RegExp(this.value, 'gi');
    const taskname = chore.taskName.replace(regex, `<mark>
    ${this.value}</mark>`);
    return `
    <li>
      <span class ="item">${taskname}</span>
    </li>
  `;
  });
  suggestions.innerHTML = html;
}

//event listners and queryselectors 
const searchInput = document.getElementById('findtasks');
const suggestions = document.getElementById('suggestions');

searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);




/*
   ------------   Code for onload of page ------------
   1) Fills out drop down boxes
*/
function addPTag() {
  let pTag = document.createElement("P");   // Create a <p> element
  pTag.innerHTML = "Added paragraph";       // Insert text
  document.body.appendChild(pTag);          // Append <p> to <body>
}

let groupValues = []; //?? don't know where this is applied
let settings = { method: "Get" };

async function getPageData(prepend = "") {
  await fetch('./allGroups', settings)
    .then(res => res.json())
    .then((json) => {
      let listSize = json.data.length;
      json.data.forEach(element => {
        let optionTag = document.createElement("option");   // Create a <p> element
        let groupName = prepend + "group"
        optionTag.innerHTML = element.name;       // Insert text
        optionTag.setAttribute("value", element.id);
        document.getElementById(groupName).appendChild(optionTag);          // Append <p> to <body>
      });
    })

  await fetch('./allPeople', settings)
    .then(res => res.json())
    .then((json) => {
      let listSize = json.data.length;
      json.data.forEach(element => {
        let optionTag = document.createElement("option");   // Create a <p> element
        let personName = prepend + "firstName"
        optionTag.innerHTML = element.firstName;       // Insert text
        optionTag.setAttribute("value", element.id);
        document.getElementById(personName).appendChild(optionTag);          // Append <p> to <body>
      });
    })

};

window.onload = async function loadPage() {
  getPageData();
  getPageData("update");


}