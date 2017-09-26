unsigned char* memory = 0;

{
  *(memory + offset) = value;
}

{
  return *(memory + offset);
}
