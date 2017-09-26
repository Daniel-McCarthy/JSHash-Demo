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
			
			var hash = fnv0(10).toString(16);
			document.getElementById("hashOutput").value = hash;
		}
		else if(algorithm == "FNV-1")
		{
			
		}
		else if(algorithm == "FNV-1A")
		{
			
		}

	});
}
