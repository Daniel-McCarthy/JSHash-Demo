unsigned char* memory = 0;

void writeMemory(int offset, unsigned char value)
{
  *(memory + offset) = value;
}

unsigned int readMemory(int offset)
{
  return *(memory + offset);
}
