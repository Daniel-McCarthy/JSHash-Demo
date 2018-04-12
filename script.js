var lastInput = "";
var lastAlgorithm = "";


function startTimer()
{
	setInterval(checkInput, 250);
}

function checkInput()
{
	var input = document.getElementById("hashInput").value;
	var algorithm = document.getElementById("algorithmDropDownMenu").value;
	
	if( (input != lastInput) || (algorithm != lastAlgorithm) )
	{
		lastInput = input;
		lastAlgorithm = algorithm;
		hashInput();
	}
}

function hashInput()
{
	var algorithm = document.getElementById("algorithmDropDownMenu").value;

	var input = document.getElementById("hashInput").value;
	
	switch(algorithm)
	{
		case "FNV-0":
		{
			var hash = fnv0(input);
			var hashString = hash.toString(16);
			
			if (hashString.charAt (0) == '-')
			{
				hashString = hashString.substring(1);
			}
			
			document.getElementById("hashOutput").value = hashString;
			break;
		}
		case "FNV-1":
		{
			var hash = fnv1(input);
			var hashString = hash.toString(16);
			
			if (hashString.charAt (0) == '-')
			{
				hashString = hashString.substring(1);
			}
			
			document.getElementById("hashOutput").value = hashString;
			break;
		}
		case "FNV-1A":
		{
			var hash = fnv1a(input);
			var hashString = hash.toString(16);
			
			if (hashString.charAt (0) == '-')
			{
				hashString = hashString.substring(1);
			}
			
			document.getElementById("hashOutput").value = hashString;
			break;
		}
		case "Adler-32":
		{
			var hash = adler32(input);
			var hashString = hash.toString(16);
			
			if (hashString.charAt (0) == '-')
			{
				hashString = hashString.substring(1);
			}
			
			document.getElementById("hashOutput").value = hashString;
			break;
		}
		case "CRC-32":
		{
			var hash = crc_32Hash(input);
			var hashString = hash.toString(16);
			
			if (hashString.charAt (0) == '-')
			{
				hashString = hashString.substring(1);
			}
			
			document.getElementById("hashOutput").value = hashString;
			break;
		}
		case "CRC-32B":
		{
			var hash = crcB_32Hash(input);
			var hashString = hash.toString(16);
			
			if (hashString.charAt (0) == '-')
			{
				hashString = hashString.substring(1);
			}
			
			document.getElementById("hashOutput").value = hashString;
			break;
		}
		case "JOAAT":
		{
			var hash = joaat32_Hash(input);
			var hashString = hash.toString(16);
			
			if (hashString.charAt (0) == '-')
			{
				hashString = hashString.substring(1);
			}
			
			document.getElementById("hashOutput").value = hashString;
			break;
		}
	}
	
	
	

}
