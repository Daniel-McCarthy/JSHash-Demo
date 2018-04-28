let input: string = "HelloKitty";

alert(fnv0(input).toString(16));
alert(fnv1(input).toString(16));
alert(fnv1a(input).toString(16));

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