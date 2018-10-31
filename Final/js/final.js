//localStorage.clear();
var table = document.getElementById("tableBody");
var toDoArray = [];
buildTable();

function buildTable() 
{
	var retrievedTaskObject = localStorage.getItem("task");
	var parsedObject = JSON.parse(retrievedTaskObject);
	for (i = 0; i < parsedObject.length; i++) 
	{
		toDoArray.push(getTaskObj(parsedObject[i].name, parsedObject[i].date));
		addTaskToTable(parsedObject[i]);
	}
}
function addTaskToTable(obj)
{
	var row = table.insertRow(0);
	var cellCheck = row.insertCell(0);
	var cellName = row.insertCell(1);
	var cellDate = row.insertCell(2);
	
	var checkStuff = "<input type='checkbox'>";
	cellCheck.innerHTML = checkStuff;
	cellName.innerHTML= obj.name;
	cellDate.innerHTML= obj.date;
}
function addRow(name,date) 
{
    var addTaskName = document.getElementById("taskName").value;
    var addTaskDate = document.getElementById("dateTask").value;
	var taskSomething = getTaskObj(addTaskName,addTaskDate);
	toDoArray.push(taskSomething);
	addTaskToTable(taskSomething);
	var storedArray = JSON.stringify(toDoArray);
	localStorage.setItem("task",storedArray);
};

function getTaskObj(taskName,taskData){
var taskObject = {
        name: taskName,
        date: taskData,
      };
 return taskObject;
}

function deleteRow()
{
	var tabDel = document.getElementById('myTable');
	var rowCount = tabDel.rows.length;
	for(var i=0; i<rowCount; i++) 
	{
		var row = tabDel.rows[i];
		var chkbox = row.cells[0].childNodes[0];
		if(chkbox.checked) 
		{
			tabDel.deleteRow(i);
			rowCount--;
			i--;
		}
	}
	localStorage.removeItem("task");
};



