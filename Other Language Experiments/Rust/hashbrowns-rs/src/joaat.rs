pub fn joaat(input: &str ) -> u32 {

	let bytes = input.as_bytes();
	let mut hash: u32 = 0x00000000;
	
	for byte in bytes
	{
		hash = hash.wrapping_add(*byte as u32);//hash.wrapping_mul(16777619);
		hash = hash.wrapping_add(hash << 10);
		hash ^= hash >> 6;
	}
	
	hash = hash.wrapping_add(hash << 3);
	hash ^= hash >> 11;
	hash = hash.wrapping_add(hash << 15);
	
	hash
}

