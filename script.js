var lastInput = "";

function startTimer()
{
	setInterval(checkInput, 250);
}

function checkInput()
{
	var input = document.getElementById("hashInput").value;
	
	if(input != lastInput)
	{
		lastInput = input;
		hashInput();
	}
}

