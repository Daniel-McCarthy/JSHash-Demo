pub fn fnv0(input: &str ) -> u32 {

	let bytes = input.as_bytes();
	let mut hash: u32 = 0x00000000;
	
	for byte in bytes
	{
		hash = hash.wrapping_mul(16777619);
		hash ^= *byte as u32;
	}
	
	hash
}

pub fn fnv1(input: &str ) -> u32 {

	let bytes = input.as_bytes();
	let mut hash: u32 = 0x811C9DC5;
	
	for byte in bytes
	{
		hash = hash.wrapping_mul(16777619);
		hash ^= *byte as u32;
	}
	
	hash
}

pub fn fnv1a(input: &str ) -> u32 {


	let bytes = input.as_bytes();
	let mut hash: u32 = 0x811C9DC5;
	
	for byte in bytes
	{
		hash ^= *byte as u32;
		hash = hash.wrapping_mul(16777619);
	}
	
	hash
}

