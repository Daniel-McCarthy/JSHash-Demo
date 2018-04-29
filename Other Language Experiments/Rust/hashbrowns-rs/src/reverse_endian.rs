pub fn reverse_endian_u32 (hash: u32) -> u32 {
	( ((hash & 0x000000FF) << 24) | ((hash & 0xFF000000) >> 24) | ((hash & 0x00FF0000) >> 8) | ((hash & 0x0000FF00) << 8) )
}