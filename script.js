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

//User Customer Generation
