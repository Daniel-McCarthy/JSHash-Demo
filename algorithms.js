
function fnv0(message)
{
	var hash = 0
	
	for(var i = 0; i < message.length; i++)
	{
		hash = Math.imul(hash, 16777619);
		hash =  (hash ^ message.charCodeAt(i));
	}
	
	return hash | 0;
}

