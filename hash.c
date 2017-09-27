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
