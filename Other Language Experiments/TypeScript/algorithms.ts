let input: string = "HelloKitty";

alert(fnv0(input).toString(16));
alert(fnv1(input).toString(16));
alert(fnv1a(input).toString(16));
alert(adler32(input).toString(16));
alert(joaat32_Hash(input).toString(16));

function fnv0(input: string): number
{
    let hash: number = 0;

    let i: number;
    for (i = 0; i < input.length; i++)
    {
        hash = Math.imul(hash, 16777619);
        hash ^= input.charCodeAt(i);
    }

    return (hash >>> 0);
}

function fnv1(input: string): number
{
    let hash: number = 0x811C9DC5;

    let i: number;
    for (i = 0; i < input.length; i++)
    {
        hash = Math.imul(hash, 16777619);
        hash ^= input.charCodeAt(i);
    }

    return (hash >>> 0);
}

function fnv1a(input: string): number
{
    let hash: number = 0x811C9DC5;

    let i: number;
    for (i = 0; i < input.length; i++)
    {
        hash ^= input.charCodeAt(i);
        hash = Math.imul(hash, 16777619);
    }

    return (hash >>> 0);
}

function adler32(message: string): number
{
	let a: number = 1;
	let b: number = 0;
	let c: number = 0;
	
	let i: number;
	for(i = 0; i < message.length; i++)
	{
		c = a;
		a = (a + message.charCodeAt(i)) % 65521;
		b = (b + message.charCodeAt(i) + c) % 65521;
	}
	
	var fullHash = (Math.imul(b, 0x10000) + a);

	return fullHash >>> 0;
}

function joaat32_Hash (message) {
	let hash: number = 0;

	let i: number;
	for (i = 0; i < message.length; i++)
	{
	  hash += (message.charCodeAt(i) | 0);
	  hash += (hash << 10);
	  hash ^= (hash >>> 6);
	}

	hash += (hash << 3);
	hash ^= (hash >>> 11);
	hash += (hash << 15);

	return ((hash & 0xFFFFFFFF) >>> 0);
}
function reverseEndian (hash) {
	return ((((((hash >>> 0) & 0x000000FF) << 24) | (((hash >>> 0) & 0xFF000000) >>> 24)) | (((hash >>> 0) & 0x00FF0000) >>> 8)) | (((hash >>> 0) & 0x0000FF00) << 8));
}
