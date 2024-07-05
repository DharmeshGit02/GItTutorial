function ls(x, arr) {
	arr.sort()
	let left = 0, right = arr.length -1 ;
	while(left <= right) {
		let mid = left + (right - left) / 2;
 		if(x == arr[mid])return mid;
		else if(x < arr[mid]) left = mid + 1
		else right = mid - 1;
	}
	return -1;
}
console.log(10, [10, 20 ,30, 40, 50])
