/*
**  Author:     Alex Cholakis (@jkid314159)
**  File Name:  inventory-update
**  Date:       October, 2016
**
**  Exercise completed for Free Code Camp.
**
**  Compare and update the inventory stored in a 2D array 
**  against a second 2D array of a fresh delivery. Update 
**  the current existing inventory item quantities (in array1). 
**  If an item cannot be found, add the new item and quantity 
**  into the inventory array. The returned inventory array 
**  should be in alphabetical order by item.
*/

"use strict";
function updateInventory( array1, array2 ) {
	//Sort array alphabetically on value
	function sorter( arrayIn ) {
	    arrayIn.sort( function (a, b) {
			if( a[1] > b[1] ) {
				return 1;
			}
			if( a[1] < b[1] ) {
				return -1;
			}
			//a equal to b
			return 0;
	    } );//sort()-end
	    return arrayIn;
	}//sorter()-end
	
	array1 = sorter( array1 );
	array2 = sorter( array2 );
		
	for( var i = 0; i < array1.length; i++ ) {
		for ( var j = 0; j < array2.length; j++ ){		
			if ( array1[i][1] === array2[j][1] ){
			//Element matches then make assignment
				array1[i][0] = array1[i][0] + array2[j][0];
				//Delete element from array2.
				var element = array2[j];	
				var indx = array2.indexOf( element );
				array2.splice(indx,1);
			}
		}//for_inner-end
	}//for_outer-end
	
	//Push remaining elements of array2 into array1.
	for( var k = 0; k < array2.length; k++ ) {
		array1.push( array2[k] );
	} 
	array1 = sorter( array1 );
	return array1;

}//updateInventory()-end


// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory(curInv, newInv);

