/*
**  Author:     Alex Cholakis
**  GitHub:     jkid314159
**  Twitter:    jkid314159
**  File Name:  symmetric-difference
**  Date:       October, 2016
**
**  
**  Exercise completed for Free Code Camp - Advance Algorithm section.
**
**  Create a function that takes two or more arrays and returns an array 
**  of the symmetric difference (△ or ⊕) of the provided arrays.
**
**  Given two sets (for example set A = {1, 2, 3} and set B = {2, 3, 4}),
**  the mathematical term "symmetric difference" of two sets is the set 
**  of elements which are in either of the two sets, but not in both 
**  (A △ B = C = {1, 4}). For every additional symmetric difference you
**  take (say on a set D = {2, 3}), you should get the set with elements
**  which are in either of the two the sets but not both (C △ D = {1, 4} 
**  △ {2, 3} = {1, 2, 3, 4}).
**
**  Comment: I learned to first make a function for two inputs which then used as input function to reduce() method.  I gained a deeper understanding of reduce().
*/

function sym( args ) {
	var arrIn  = [];
	var arrOne = [];
	var arrDiff = [];
	
	
	//Convert arguments object into arrays.
	arrIn = Array.prototype.slice.call(arguments);

	//Eliminate repeat numbers from input arrays.
	for ( outer = 0; outer < arrIn.length; outer++ ) {
		var arrTemp = [];
		for ( inner = 0; inner < arguments[outer].length; inner++) {
			if( arrTemp.includes( arrIn[outer][inner] ) ) {
			//Check array element in temporary array
				arrTemp = arrTemp;
			} else {
				arrTemp.push( arrIn[outer][inner] );
			}
		}//for-innner-end
		//Array cleaned of doubles
		arrOne.push(arrTemp);
	}//for-outer-end
	
	//Helper function to find symmetric difference.
	function diff( array1, array2 ) {
		for ( index = 0; index < array2.length; index++ ) {
			if( array1.includes( array2[index] ) ) {
			//Find index of arr2-element and remove that one element.
				var start = array1.indexOf( array2[index] );
				array1.splice( start, 1 );
			} else {
				array1.push( array2[index] );
			}
		}//for-index-end
		return array1.sort();
	}//diff()-end
	
	arrDiff = arrOne.reduce( diff );
	return arrDiff;
}//sym()-end

sym( [1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5] );
