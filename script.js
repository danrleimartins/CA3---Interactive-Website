//Validate Staff Password
function validate(){
    var pass = $('#pass').val();
    var regex = /((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]).{8})/;

    if(regex.test(pass)){
        $('#valid').css ({
            'display': 'contents'
        });
    }
    else {
        $('#invalid').css({
            'display': 'contents'
        });
    }
}

$('#pass-button').on('click', validate);

//User Generator API
$('#user-gen').on('click', getData);

 function getData() {
    //Get API
    fetch('https://randomuser.me/api/?results=5')
    .then(res => res.json())
    .then(data => {
        
        let users = data.results;
        console.log(users);
        
        let output = "";

        users.forEach(function(api){
            output += `
                <br>
                <div> 
                        <ul class="list-unstyled"> 
                            <li><h3>${api.name.title} ${api.name.first} ${api.name.last}</h3></li>
                            <li> <img class="img-user" src="${api.picture.large}"></li>
                            <li>Age: ${api.dob.age}</li>
                            <li>Phone Number: ${api.cell}</li>
                            <li>Email: ${api.email}</li>
                            <li>Location: ${api.location.city}, ${api.location.country} </li>
                        </ul>
                <hr></div>`;
        });

        $('#output').html(output);
    });
 };