var lastInput = "";
var lastAlgorithm = "";
var lastLanguage;
var isWASMEnabled = true;

function startTimer()
{
	setInterval(checkInput, 250);
}

function checkInput()
{
	var input = document.getElementById("hashInput").value;
	var algorithm = document.getElementById("algorithmDropDownMenu").value;
	
	if((input != lastInput) || (algorithm != lastAlgorithm))
	{
		lastInput = input;
		lastAlgorithm = algorithm;
		hashInput();
	}
}

function hashInput()
{
	var algorithm = document.getElementById("algorithmDropDownMenu").value;

	if(!isWASMEnabled)
	{
		var input = document.getElementById("hashInput").value;
		
		switch(algorithm)
		{
			case "FNV-0":
			{
			
				break;
			}
			case "FNV-1":
			{
				break;
			}
			case "FNV-1A":
			{
				break;
			}
		}
	}
	else
	{
		
		fetch('hash.wasm').then(response =>
		  response.arrayBuffer()
		).then(bytes =>
		  WebAssembly.instantiate(bytes)
		).then(results => {

			var wasm = results.instance.exports;
			var input = document.getElementById("hashInput").value;
			let memory = new Uint32Array(wasm.memory.buffer);
			
			const readMemory = wasm.readMemory;
			const writeMemory = wasm.writeMemory;
			
			if(algorithm == "FNV-0")
			{
				const fnv0 = wasm.fnv0;

				for(var i = 0; i < input.length; i++)
				{
				  writeMemory(i, input.charCodeAt(i));
				}
				
				var hash = fnv0(10);
				var hashString = hash.toString(16);
				
				if (hashString.charAt(0) == '-')
				{
					hashString = hashString.substring(1);
				}
				
				document.getElementById("hashOutput").value = hashString;
			}
			else if(algorithm == "FNV-1")
			{
				const fnv1 = wasm.fnv1;

				for(var i = 0; i < input.length; i++)
				{
				  writeMemory(i, input.charCodeAt(i));
				}
				
				var hash = fnv1(10);
				var hashString = hash.toString(16);
				
				if (hashString.charAt (0) == '-')
				{
					hashString = hashString.substring(1);
				}
				
				document.getElementById("hashOutput").value = hashString;
		
			}
			else if(algorithm == "FNV-1A")
			{
				const fnv1a = wasm.fnv1a;

				for(var i = 0; i < input.length; i++)
				{
				  writeMemory(i, input.charCodeAt(i));
				}
				
				var hash = fnv1a(10);
				var hashString = hash.toString(16);
				
				if (hashString.charAt (0) == '-')
				{
					hashString = hashString.substring(1);
				}
				
				document.getElementById("hashOutput").value = hashString;
		
			}
			else if(algorithm == "Adler-32")
			{
				const adler32 = wasm.adler32;

				for(var i = 0; i < input.length; i++)
				{
				  writeMemory(i, input.charCodeAt(i));
				}
				
				var hash = adler32(10);
				var hashString = hash.toString(16);
				
				if (hashString.charAt (0) == '-')
				{
					hashString = hashString.substring(1);
				}
				
				document.getElementById("hashOutput").value = hashString;
		
			}


		});
	}
}

function swapLanguage()
{
	isWASMEnabled = !isWASMEnabled;
}
