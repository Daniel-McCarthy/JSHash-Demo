pub fn adler32(input: &str ) -> u32 {

	let bytes = input.as_bytes();

	let mut a: u32 = 1;
	let mut b: u32 = 0;
	let mut c: u32;
	
	for byte in bytes
	{
		let byte_val: u32 = *byte as u32;
	
		c = a;
		a = (a.wrapping_add(byte_val)) % 65521;
		b = (b.wrapping_add(byte_val.wrapping_add(c))) % 65521;

	}
	
	let hash = (b << 16).wrapping_add(a);
	hash

}