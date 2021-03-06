$(document).ready(function(){

    //---------Hover över meny och kontaktformulärs-knapp-------------
    $('.inactive, #contactBoxFormSubmit').mouseenter(function(e){
        $(e.target).css('background-color', '#D4AF37');
    })
    $('.inactive, #contactBoxFormSubmit').mouseleave(function(e){
        $(e.target).css('background-color', '#d4d4d4');
    })

    //---------Öpnna och stäng meny i mobil version-------------
    $('#navBox').click(function(){
        let $nav = $('#navList');
        
        if($nav.hasClass('unvisible')){
            $nav.removeClass('unvisible');
            $nav.addClass('visible'); 
            $('#navBoxImg').attr('src', 'img/navX.png');
        }else{
            $nav.removeClass('visible');
            $nav.addClass('unvisible');
            $('#navBoxImg').attr('src', 'img/nav.png');
        };
    });

    //--------Animering slideIn text när man öppnar sidan--------
    $(window).scroll(slideInText)

    function slideInText(){
        $('.boxContentBox').slideDown(4000);
    }
    
    //--------------Validering kontakt-formulär------------
    let validName = false; 
    let validPhone = false; 
    let validEmail = false; 
    let validMsg = false; 

    // Validate name
    let $nameInput = $('#contactBoxFormName');

    $nameInput.on('focus keyup', function(){
        if($nameInput.val().length >= 3 ){
            $nameInput.css('background-color', 'lightgreen');
            validName = true;
        }
        else{
            $nameInput.css('background-color', '#FF6060');
            validName = false;
        }
    });

    $nameInput.blur(function(){
        if($nameInput.val() == ""){
            $nameInput.css('background-color', 'white');
        }
    });

    // Validate phone
    let $phoneInput = $('#contactBoxFormPhone');

    $phoneInput.on('focus keyup', function(){
        let regExPhone = /^\d+$/;
        
        if(regExPhone.test($phoneInput.val())){
            $phoneInput.css('background-color', 'lightgreen');
            validPhone = true;
        }
        else{
            $phoneInput.css('background-color', '#FF6060');
            validPhone = false;
        }
    });

    $phoneInput.blur(function(){
        if($phoneInput.val() == ""){
            $phoneInput.css('background-color', 'white');
        }
    });

    // Validate email
    let $emailInput = $('#contactBoxFormEmail');

    $emailInput.on('focus keyup', function(){
        let regExEmail = /[^@]+@[^@]+/;
        
        if(regExEmail.test($emailInput.val())){
            $emailInput.css('background-color', 'lightgreen');
            validEmail = true;
        }
        else{
            $emailInput.css('background-color', '#FF6060');
            validEmail = false;
        }
    });

    $emailInput.blur(function(){
        if($emailInput.val() == ""){
            $emailInput.css('background-color', 'white');
        }
    });

    // Validate message box
    let $msgInput = $('#contactBoxFormMsg');

    $msgInput.on('focus keyup', function(){

        if($msgInput.val() != ""){
            $msgInput.css('background-color', 'lightgreen');
            validMsg = true;
        }
        else{
            $msgInput.css('background-color', '#FF6060');
            validMsg = false;
        }
    });

    $msgInput.blur(function(){
        if($msgInput.val() == ""){
            $msgInput.css('background-color', 'white');
        }
    });

    //Send form event
    let $submitBtn = $('#contactBoxFormSubmit');

    $submitBtn.click(function(e){
        e.preventDefault();
        let errMsg = $('#contactBoxFormError');

        if(validName && validPhone && validEmail && validMsg){
            $nameInput.css('background-color', 'white');
            $phoneInput.css('background-color', 'white');
            $emailInput.css('background-color', 'white');
            $msgInput.css('background-color', 'white');

            $('#contactBoxForm')[0].reset(); //Gör om från JQ till JS

            validName = false; 
            validPhone = false; 
            validEmail = false; 
            validMsg = false; 
            errMsg.text("");
        }
        else if(!validName){
            errMsg.text('Namn måste vara minst 3 tecken');
        }
        else if(!validPhone){
            errMsg.text('Telefon måste anges i siffror');
        }
        else if(!validEmail){
            errMsg.text('Email adressen är felaktigt inmatad');
        }
        else if(!validMsg){
            errMsg.text('Meddelande saknas');
        }
    });
});