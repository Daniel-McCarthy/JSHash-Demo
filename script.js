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
	var input = document.getElementById("hashInput").value;

	fetch('hash.wasm').then(response =>
	  response.arrayBuffer()
	).then(bytes =>
	  WebAssembly.instantiate(bytes)
	).then(results => {

		var wasm = results.instance.exports;
		let memory = new Uint32Array(wasm.memory.buffer);
		
		const readMemory = wasm.readMemory;
		const writeMemory = wasm.writeMemory;
		
		if(algorithm == "FNV-0")
		{
			const fnv0 = wasm.fnv0;

			var input = document.getElementById("hashInput").value;

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

			var input = document.getElementById("hashInput").value;

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

			var input = document.getElementById("hashInput").value;

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

	});
}
