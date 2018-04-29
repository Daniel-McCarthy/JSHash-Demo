pub mod fnv;
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

}
