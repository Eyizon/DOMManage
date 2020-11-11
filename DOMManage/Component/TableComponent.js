fetch('https://reqres.in/api/users?page=2')
    .then(res => {
        
        if(res.ok){
            console.log('Success')
        } else {
            console.log('NotSucess')
        }
        })
    .then(data => console.log(data))
    .catch(error => console.log('Error') )


function loadCa(){
    LoadDataTableBuild(dataSet);
}

function LoadDataTableBuild(dataObject){
    const table = document.getElementById("table__users");
    let dataHtml = '';
    for(let dataUser of dataObject){
        dataHtml += `<tr><td>${dataUser.email}</td>
                        <td>${dataUser.first_name}</td>
                        <td>${dataUser.last_name}</td>
                    </tr>`;
    }
    console.log(dataHtml);
    table.innerHTML = dataHtml;

}