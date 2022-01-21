function updateRate(){
	var rateval = document.getElementById('rate').value;
	document.getElementById('rate_val').innerHTML = rateval+"%";
}
function compute()
{
	var principal = document.getElementById("principal").value;
	if(principal<=0) {
		alert("Please enter a positive number.");
		principal.focus();
	}
	else 	{
		var rate = document.getElementById('rate').value;
		var years = document.getElementById('years').value;
		var intrest = principal * years * rate / 100;
		var year = new Date().getFullYear()+parseInt(years);
		document.getElementById("result").innerHTML="If you deposit "+principal+",\<br\>at an interest rate of "+rate+"%\<br\>You will receive an amount of "+intrest+",\<br\>in the year "+year+"\<br\>"
	}
}
        
