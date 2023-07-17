

let users = [];



// function for displaying users

const outputData = () => {

    let dataToAdd = `<table class="table table-borderless">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Name</th>
        <th scope="col">License Plate</th>
      </tr>
    </thead>
    <tbody>`;

    for(let i=0;i<users.length;i++){
       dataToAdd += `
    <tr>
       <th scope="row">${i+1}</th>
       <td>${users[i].fingerprintName}</td>
       <td>${users[i].LicensePlate}</td>
    </tr>
       `;
    }

    dataToAdd = dataToAdd + `</tbody>
    </table>`;
    document.getElementById('userTable').innerHTML = dataToAdd;

}


// function for fetching books from api
const fetchUsers = async() => {
    try{
        const response = await fetch('https://fingerprint-sensor-production.up.railway.app/users');
        const data = await response.json();
        console.log(data);
        users = data;

        outputData();

    } catch(err){
        console.log(err);
    }
    finally {
        setTimeout(fetchUsers, 1000); // Fetch again after 2 seconds
    }
}

fetchUsers();





