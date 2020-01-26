
function clearErrors() {    
    for (var loopCounter = 0; 
        loopCounter < document.forms["numberFun"].elements.length; 
        loopCounter++) {
        if (document.forms["numberFun"].elements[loopCounter]
           .parentElement.className.indexOf("has-") != -1) {
            
            document.forms["numberFun"].elements[loopCounter]
               .parentElement.className = "form-group";
        }
    }    
} 


function resetForm() {
    clearErrors();
    document.forms["numberFun"]["num1"].value = "";
    document.getElementById("results").style.display = "none";
    document.getElementById("submitButton").innerText = "Play";
    document.forms["numberFun"]["num1"].focus();
}

//Roledice function

function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

// this is the main function of Lucky Seven 
function validateItems() {
    clearErrors();
    var num1 = document.forms["numberFun"]["num1"].value;

	var first_dice;
	var second_dice;
	var temp;
	var count=0;
	var max_numb;
	var max_at=0;
  
    if (num1 == "" || isNaN(num1) || num1 <= 0) {
        alert("Your bet should be greater than $0.00 !");
        document.forms["numberFun"]["num1"]
           .parentElement.className = "form-group has-error";
        document.forms["numberFun"]["num1"].focus();
        return false;
    }
	
	temp = num1*1;
	max_numb = temp;
	
	while (temp>0)
	{ 	count++;
		console.log(count); 
		first_dice=rollDice(); 
		console.log("first_dice:"+first_dice); //to validate whether the code work properly
		second_dice=rollDice();
		console.log("second_dice:"+second_dice);
		total = first_dice + second_dice;
		console.log("total:" + total);
		if (total == 7){
			temp = temp + 4;
		}
		else {
			temp = temp - 1; 
		}
		if (temp >= max_numb)
		{
			max_numb = temp;
			max_at = count;
		}
		console.log("temp:" + temp);
	}
	console.log("max_number:" + max_numb); //to validate whether the code work properly
	console.log("max_at:" + max_at); //to validate whether the code work properly
	document.getElementById("results").style.display = "block";
	document.getElementById("submitButton").innerText = "Replay"; 
	document.getElementById("startingbet").innerText = Number(num1);
	document.getElementById("totalrolls").innerText = count;
	document.getElementById("won").innerText = max_numb;
	document.getElementById("rollcount").innerText = max_at;
   // We are returning false so that the form doesn't submit 
   // and so that we can see the results
   return false;
}

