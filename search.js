function ls(x, arr) {
	for(let i = 0; i < arr.length; i++) {
		if( arr[i] == x) return i;
	}
	return -1;
}
console.log(10, [10, 20 ,30, 40, 50])
