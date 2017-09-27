unsigned char* memory = 0;

void writeMemory(int offset, unsigned char value)
{
  *(memory + offset) = value;
}

unsigned int readMemory(int offset)
{
  return *(memory + offset);
}

int fnv0(int messageLength)
{
	
  int hash = 0;
  
  for(int i = 0; i < messageLength; i++)
  {
    hash *= 16777619;
    hash ^= readMemory(i);
  }
  
  return hash;
}

int fnv1(int messageLength)
{
	
  int hash = 0x811C9DC5;
  
  for(int i = 0; i < messageLength; i++)
  {
    hash *= 16777619;
    hash ^= readMemory(i);
  }
  
  return hash;
}

int fnv1a(int messageLength)
{
	
  int hash = 0x811C9DC5;
  
  for(int i = 0; i < messageLength; i++)
  {
    hash ^= readMemory(i);
	hash *= 16777619;
  }
  
  return hash;
}

int adler32(int messageLength)
{
	int a = 1;
	int b = 0;
	int c = 0;
	
	for(int i = 0; i < messageLength; i++)
	{
		c = a;
		a = (a + readMemory(i)) % 65521;
		b = (b + readMemory(i) + c) % 65521;
	}
	
	int fullHash = (b * 0x10000 + a);

	return fullHash;
}

