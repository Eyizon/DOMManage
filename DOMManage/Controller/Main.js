const title = document.createElement("h1");
var titleText = document.createTextNode("Tabla");
title.appendChild(titleText);
title.setAttribute("id", "idTitle");
document.body.appendChild(title);


function CreateTable(){
    var tableUsers = document.createElement('table');    
    var tableHead = document.createElement('thead');
    var tableBody = document.createElement('tbody');

    tableUsers.setAttribute('border','2');
    tableHead.setAttribute('id','idTH');
    tableUsers.appendChild(tableHead);
    tableUsers.appendChild(tableBody);
    document.body.appendChild(tableUsers);
}

function LoadDataOnTable(dataUser)
{   var table = document.querySelector('#idTH');
    const headerTable = document.createElement('tr');
    for(var user in dataUser){
        var nameColumn = document.createElement('th');
        nameColumn.appendChild(document.createTextNode(user));
        headerTable.appendChild(nameColumn);
    }
    table.appendChild(headerTable);
}

function load(data){
    CreateTable();
    loadDataOnTable(data);
}
