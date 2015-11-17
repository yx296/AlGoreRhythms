var a = [34, 203, 3, 15, 2];

function mergeSort(arr) { 
	
	if (arr.length < 2) {
		return arr;
	}
	if (arr.length === 2) {
		return merge([arr[0]], [arr[1]]);
	}

	//if array is even middle will on the right side 
	var middle = Math.floor(arr.length / 2);

	var left = arr.slice(0, middle);
	var right = arr.slice(middle, arr.length);
	// once two halves are sorted, merge them
	var sortedLeft = mergeSort(left);
	var sortedRight = mergeSort(right);

	return merge(sortedLeft, sortedRight);
}

// function merge(left, right) {
// 	var result = [];

// 	while (left.length && right.length) {
// 		if (left[0] <= right[0]) {
// 			result.push(left.shift());
// 		}
// 		else {
// 			result.push(right.shift());
// 		}
// 	}

// 	while (left.length) {
// 		result.push(left.shift());
// 	}

// 	while(right.length) {
// 		result.push(right.shift());
// 	}

// 	return result;
// }

function merge(left, right) {
	var results = [];

	var i = 0; 
	var j = 0;

	while (i < left.length && j < right.length) {
		if (left[i] < right[j]) {
			results.push(left[i]);
			i++;
		}
		if (left[i] > right[j]) {
			results.push(right[j]);
			j++;
		}
		if (left[i] === right[j]) {
			results.push(left[i])
			results.push(right[j]);
			i++;
			j++;
		}
	}

	while (i < left.length) {
		results.push(left[i])
		i++;
	}
	
	while (j < right.length) {
		results.push(right[j]);
		j++;
	}
	return results;
}

console.log(mergeSort(a));

// console.log(merge([34, 203], [2, 3, 15]));












