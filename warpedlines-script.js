/* global $ */

// Triggers menu animation and displays "work" page to user.

$("#menu-work").click(function() {

    $(this).animate({
    marginLeft: "-22px",
    marginTop: "-22px"


    }, 400)

    $("#menu-word-scrambler").animate({
        opacity: "0.75",
        marginLeft: "20px",
    })

    $("#menu-contact").animate({
       opacity: "0.5",
       marginLeft: "50px",

    })

    $("#menu-about").animate({
        opacity: "0.25",
        marginLeft:"50px",
        marginTop: "20px"

    }, function() {

        $("#menu-word-scrambler").fadeOut(500);
        $("#menu-contact").fadeOut(970);
        $("#menu-about").fadeOut(1300);
        $("#work-content").fadeIn(1750);

    })
    
    $("#work-node").fadeIn(2200);

});

// Displays portfolio of work to user.  

$("#work-node").click(function() {
                
    $(".work-nodes").fadeIn(1500);
                
});

$("#fiction-node").click(function() {
                
    $("#ember-intro").fadeIn(500);
    $("#ember-text").fadeIn(500);
    $("#ember-nodes").fadeIn(500);
    $("#criticism-container").fadeOut(500);
    $("#art-container").fadeOut(500);
                
});

$("#criticism-node").click(function() {
                
    $("#criticism-container").fadeIn(500);
    $("#ember-text").fadeOut(500);
    $("#ember-nodes").fadeOut(500);
    $("#ember-intro").fadeOut(500);
    $("#art-container").fadeOut(500);
                
});   

$("#graphics-node").click(function() {
                
    $("#art-container").fadeIn(500);
    $("#art-container-nodes").fadeIn(500);
    $("#ember-text").fadeOut(500);
    $("#ember-nodes").fadeOut(500); 
    $("#ember-intro").fadeOut(500);
    $("#criticism-container").fadeOut(500);

});

$( function() {

    $("#accordion").accordion();
    
    collapsible: true

});
  
// Triggers menu animation and displays "word scrambler" page to user. 

$("#menu-word-scrambler").click(function() {

    $(this).animate({
        marginRight: "50px",
        marginTop: "-10px"

    }, 400)

    $("#menu-work").animate({
        opacity: "0.75",
        marginLeft: "-20px",
        marginTop: "20px"

    })

    $("#menu-about").animate({
        opacity: "0.50",
        marginLeft: "-45px",
        marginTop: "30px"

    })

    $("#menu-contact").animate({
        opacity: "0.25",
        marginLeft: "-40px",
        marginTop: "80px"

    }, function() {

        $("#menu-work").fadeOut(500);
        $("#menu-about").fadeOut(950);
        $("#menu-contact").fadeOut(1300);
        $("#word-scrambler-content").fadeIn(1750);
        $("#scramble-animation").fadeIn(1750);

    })

});

// Triggers menu animation and displays "contact" page to user. 

$("#menu-contact").click(function() {

    $(this).animate({
        marginLeft: "15px",
        marginTop: "15px"

    }, 400)

    $("#menu-about").animate({
        opacity: "0.75",
        marginLeft: "-30px"

    })

    $("#menu-work").animate({
        opacity: "0.50",
        marginTop: "-15px",
        marginLeft: "-10px"

    })

    $("#menu-word-scrambler").animate({
        opacity: "0.25",
        marginTop: "-40px"

    }, function() {

        $("#menu-about").fadeOut(600);
        $("#menu-work").fadeOut(1000);
        $("#menu-word-scrambler").fadeOut(1600);
        $("#contact-content").fadeIn(2000);

    })

});

// Triggers menu animation and isplays "about" page to user. 

$("#menu-about").click(function(){

    $(this).animate({
        marginLeft: "-20px",
        marginTop: "30px"

    }, 400)

    $("#menu-work").animate({
        opacity: "0.75",
        marginLeft: "-5px"

    })

    $("#menu-word-scrambler").animate({
        opacity: "0.5",
        marginTop: "-35px"

    })

    $("#menu-contact").animate({
        opacity: "0.25",
        marginLeft: "17px"

    }, function() {

        $("#menu-work").fadeOut(600);
        $("#menu-word-scrambler").fadeOut(1000);
        $("#menu-contact").fadeOut(1000);
        $("#about-content").fadeIn(1000);

    })

});

// The word scrambler performs String manipulation based on user input.

    var rawInput = "";
    var wordCount = 0;
    var tmpl = " ";

    var warpOutput = [];

 // Gets unprocessed user input, processes and displays output.   

 $("#scramble-button").click(function() {

    rawInput = $("#scramble-input").val();
                 
    if (rawInput.length <= 99999) {

        var splitInput = rawInput.split(" ");
        wordCount = splitInput.length;

        for (i = 0; i < wordCount; i++) {
            
            var oldWord = "";
            var newWord = "";
     
            warpOutput[i] = splitInput[i];
            oldWord = warpOutput[i];
            
            // Decides randomly where to send the selected word for manipulation.
            
            var whichFunction = Math.floor(Math.random() * 6);
            
            if (whichFunction == 0 || whichFunction == 1) {
                
                if (!oldWord.includes("<br>")) {            
    
                    newWord = v.swapCase(oldWord);
        
                }    
                
            } else if (whichFunction == 2) {
                
                var randomNum = (Math.floor(Math.random() * 3010) + 2460);
                var randomSymbol = String.fromCodePoint(randomNum);
    
                if (!oldWord.includes("<br>")) {
                    
                    newWord = " " + randomSymbol + oldWord + randomSymbol + " " + " ";
                    
                }
                
            } else if (whichFunction == 3 || whichFunction == 4) {
                
                if (!oldWord.includes("<br>")) {

                    for (j = 0; j < oldWord.length; j++) { 
                    
                        newWord += oldWord.charAt(j) + "  ";  
                    
                    }
        
                }
                
                
            } else if (whichFunction == 5) {
                
                newWord = "<br>" + oldWord;
    
            } 
            
            // Assigns processed string to random spot in output array.
            warpOutput[i] = "<p id = 'word'>" + newWord + "</p>";
            
        }
       
    } else {
                    
        warpOutput += "\u214b \u214b \u214b <br><br> E \u2634 R \u2634 R \u2634 O \u2634 R : <br><br> to prevent a system crash, input text cannot exceed 99,999 words. <br><br> <span style='float:right'> \u2143 \u2143 \u2143 </span>";
                    
    } 
     
    $("#scramble-output-text").html(warpOutput);
                
                
});
                
/* Receives user contact information and sends to administrator's email. Checks if information is valid i.e. includes an email address and other information requested. */

$("#submit").click(function() {
    
    var errorTxt = "";
    var hasInputError = false;
    var userInput = $("#user-input").val();
    console.log("user-input = ",userInput);

    $.ajax({
        
        type: 'POST',
        url: 'submit.php',
        data: 'user_input'+"="+userInput,
        cache: 'false',
        beforeSend: function(){
            
            errorTxt += "<ul>"
            
            if (userInput.search('@') == -1) {
                
                hasInputError = true;
                errorTxt += "<li>invalid email address.<br>";
                
            }
            
            if (userInput.length <= 0) {
            
                hasInputError = true;
                errorTxt += "<li>form is empty. <br>";
            
            }
            
            errorTxt += "</ul>"
            
            if (hasInputError) {
            
                $("#error").html("ruh-roh. errors in your form: <br>" + errorTxt + "please try again.<br>");
                
                return false;
            
            }
        
        },
        
        error: function(jqXHR, textStatus, errorThrown) {
            
            $("#error").html("An error occurred during submit: status="+textStatus+" error="+jqXHR.responseText);
            
        },
        
        success: function() {
    
            $("#error").html("thanks for your request.<br> we'll be contacting you shortly.<br>");
            
        }
        
    });
            
    return false;
    
});
    
    
// Accordion for "work" page.

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
        
    acc[i].addEventListener("click", function() {
    /* Toggles between adding and removing the "active" class,
    to highlight the button that controls the panel. */
    this.classList.toggle("active");

    // Toggles between hiding and showing the active panel. 
    var panel = this.nextElementSibling;
            
    if (panel.style.display === "block") {
            
        panel.style.display = "none";
        
    } else {
            
        panel.style.display = "block";
    
    }
    
    });
        
}