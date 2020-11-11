var TableUserComponent = (function () {
    // Private variables / properties
    var p1 ='hola from table component', p2;

    var dataUsers;
    fetch('https://reqres.in/api/users?page=2')
    .then(res => res.json())
    .then(res => SetDataUser(res.data))
    .then(res => LoadDataTableBuild(dataUsers));



    function CreateTable(){
        const title = document.createElement("h1");
        var titleText = document.createTextNode("-----");
        title.appendChild(titleText);
        title.setAttribute("id", "idTitle");
        document.body.appendChild(title);
        var tableUsers = document.createElement('table');
        var tableHead = document.createElement('thead');
        var tableBody = document.createElement('tbody');

        tableUsers.setAttribute('border','2');
        tableHead.setAttribute('id','idTH');
        tableBody.setAttribute('id','idTB');

        tableUsers.appendChild(tableHead);
        tableUsers.appendChild(tableBody);
        document.body.appendChild(tableUsers);

    }

    function LoadDataOnTable(dataUser)
    {   var table = document.querySelector('#idTH');
        const headerTable = document.createElement('tr');
        for(var user in dataUser){
            var nameColumn = document.createElement('th');
            if(user != 'id' && user != "avatar"){
                nameColumn.appendChild(document.createTextNode(user));
                headerTable.appendChild(nameColumn);
            }

        }
        table.appendChild(headerTable);
    }

    function SetDataUser(dataObject){
        dataUsers = dataObject;
        console.log(dataUsers);
    }

    function LoadDataTableBuild(dataObject){
        CreateTable();
        LoadDataOnTable(dataObject[0]);
        const table = document.getElementById("table__users");
        const table2 = document.getElementById("idTB");
        let dataHtml = '';
        for(let dataUser of dataObject){
            dataHtml += `<tr><td>${dataUser.email}</td>
                            <td>${dataUser.first_name}</td>
                            <td>${dataUser.last_name}</td>
                        </tr>`;
        }
        console.log(dataHtml);
        table.innerHTML = dataHtml;
        table2.innerHTML = dataHtml;
    }

    function GetUserEmail(name){
        var email = "No existe coincidencia";
        for(let dataUser of dataUsers){
            if(dataUser.first_name == name){
                email = dataUser.email;
            }
        }
        return email;
    }

    // Public API
    return {
      LoadData: LoadDataTableBuild,
      GetUserEmail: GetUserEmail
    }
  }());


