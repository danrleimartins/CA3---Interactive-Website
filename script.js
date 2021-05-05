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

 //Calculate Bills for Staff 


 var totalItems = 12;

 function calculateBill(){
 
     var total = 0;
     var startersTotal = 0;
     var mainCoursesTotal = 0;
     var dessertsTotal = 0;
     var drinksTotal = 0;
     var vegTotal = 0
     var nonVegTotal = 0;
    
     //For loop for Total Bill
     for (let a = 1; a <= totalItems; a++) {

         itemID = document.getElementById('item_' + a);
         total += parseInt(itemID.value) * parseFloat(itemID.getAttribute("data-price"));
     }
     //For loop for Starters Bill
     for (let b = 1; b <= 3; b++) {

        startersID = document.getElementById('item_' + b);
        startersTotal += parseInt(startersID.value) * parseFloat(startersID.getAttribute("data-price"));
    }
     //For loop for Main Courses Bill
     for (let c = 4; c <= 6; c++) {

        mainCoursesID = document.getElementById('item_' + c);
        mainCoursesTotal += parseInt(mainCoursesID.value) * parseFloat(mainCoursesID.getAttribute("data-price"));
    }
    //For loop for Desserts Bill
    for (let d = 7; d <= 9; d++) {

        dessertsID = document.getElementById('item_' + d);
        dessertsTotal += parseInt(dessertsID.value) * parseFloat(dessertsID.getAttribute("data-price"));
    }
    //For loop for Drinks Bill
    for (let e = 10; e <= 12; e++){

        drinksID = document.getElementById('item_' + e);
        drinksTotal += parseInt(drinksID.value) * parseFloat(drinksID.getAttribute('data-price'));
    }
    //For loop for Vegetable Plates Bill
 /*   for (let g = 4; g <= totalItems; g++){

        vegID = document.getElementsByClassName('veg_' + g);
        console.log(vegID);
        vegTotal += parseInt(vegID.value) * parseFloat(vegID.getAttribute('data-price'));
        console.log(vegTotal);
        
    }*/
    
    //Printing final bills
    document.getElementById('finalBill').innerHTML = "Total Bill: €" + total;
    document.getElementById('startersBill').innerHTML = "Starters: €" + startersTotal;
    document.getElementById('mainCoursesBill').innerHTML = "Main Courses: €" + mainCoursesTotal;
    document.getElementById('dessertsBill').innerHTML = "Desserts: €" + dessertsTotal; 
    document.getElementById('drinksBill').innerHTML = "Drinks: €" + drinksTotal;
    document.getElementById('vegBill').innerHTML = "Vegetarian: €" + vegTotal;
 }
 document.getElementById('calculate-button').addEventListener('click', calculateBill, false);