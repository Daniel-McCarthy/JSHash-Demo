
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

function fnv1(message)
{
	var hash = 0x811C9DC5
	
	for(var i = 0; i < message.length; i++)
	{
		hash = Math.imul(hash, 16777619);
		hash =  (hash ^ message.charCodeAt(i));
	}
	
	return hash | 0;
}

function fnv1a(message)
{
	var hash = 0x811C9DC5
	
	for(var i = 0; i < message.length; i++)
	{
		hash =  (hash ^ message.charCodeAt(i));
		hash = Math.imul(hash, 16777619);
	}
	
	return hash | 0;
}