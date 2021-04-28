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
                <div> 
                        <ul> 
                            <li><h2>Name: ${api.name.title} ${api.name.first} ${api.name.last}</h2></li>
                            <li> <img src="${api.picture.large}"></li>
                            <li><h2>Phone Number: ${api.cell}</h2></li>
                            <li><h2>Age: ${api.dob.age}</h2></li>
                            <li><h2>Email: ${api.email}</h2></li>
                            <li><h2>City: ${api.location.city}</h2></li>
                            <li><h2>Country: ${api.location.country}</h2></li>
                        </ul>
                <hr></div>`;
        });

        $('#output').html(output);
    });
 };