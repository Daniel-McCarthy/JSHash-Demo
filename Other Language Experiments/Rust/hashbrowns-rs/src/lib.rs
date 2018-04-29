pub mod fnv;
pub mod adler;
pub mod crc;
pub mod reverse_endian;

#[cfg(test)]
mod tests {
    use super::*;
	
    #[test]
    fn fnv0_test() {
        assert_eq!( format!( "{:x}", fnv::fnv0("HelloKitty") ), "6077d641");
    }
	
	#[test]
    fn fnv1_test() {
        assert_eq!( format!( "{:x}", fnv::fnv1("HelloKitty") ), "8c974ae0");
    }
	
	#[test]
    fn fnv1a_test() {
        assert_eq!( format!( "{:x}", fnv::fnv1a("HelloKitty") ), "2c934346");
    }
	
	#[test]
    fn adler32_test() {
        assert_eq!( format!( "{:x}", adler::adler32("HelloKitty") ), "152d040a");
    }
	
	#[test]
    fn crc_32_test() {
        assert_eq!( format!( "{:x}", crc::crc_32("HelloKitty") ), "9a133de9");
    }
	
	#[test]
    fn crc_b_32_test() {
        assert_eq!( format!( "{:x}", crc::crc_b_32("HelloKitty") ), "129ca114");
    }
	

}
