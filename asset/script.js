function randomEmail (){
    var textAreaInput = document.getElementById('mentah').value;
    var result = document.getElementById('result');
    var numSett = document.getElementById('numSett').value;
    if(textAreaInput == '' || undefined){
        textAreaInput = 'randombangetpokoknyayagesya'
    }

    var email = textAreaInput
    var result1 = result;
    var generated = "";
    var emailChar = email.split("");

    function lop() {
        for ( var i = 0; i < email.length; i++){
            generated += emailChar[
                Math.floor(Math.random(emailChar) * email.length )
            ]
            
        }
        return generated +='\n';
    }

    for (let index = 0; index < numSett; index++) {
        result1.value = lop();        
    }


    
}    
