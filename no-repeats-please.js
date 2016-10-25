/*
**  Author:     Alex Cholakis (@jkid314159)
**  File Name:  no-repeats-please
**  Date:       October, 2016
**
**  Exercise completed for Free Code Camp
**
w**  Return the number of total permutations of the provided
**  string that don't have repeated consecutive letters. Assume
**  that all characters in the provided string are each unique.
**
**  For example, aab should return 2 because it has 6 total
**  permutations (aab, aab, aba, aba, baa, baa), but only 2 of
**  them (aba and aba) don't have the same letter (in this 
**  case a) repeating.
**
** Comment:
*/

//"use strict";
function permAlone(str) {
   //Declare Global variables.
   var arrIn        = [];
   var arrOut       = [];
   var permutation  = '';
   var strOut       = '';

   for( var i = 0; i < str.length; i++ ) {
	//Convert string to array.
	arrIn = str.split('');

    //Assign letter from converted string in the array.
    //Letter removed from array.
    var letter = arrIn.splice( i, 1 );
    console.log("letter: "+letter);
    
    var len = arrIn.length;
    for( var j = 0; j < len+1; j++ ) {
    	//Declare Local variables.
    	var arrTemp = [];
    	
    	//Insert letter into index of array.
    	arrIn.splice( j, 0, letter );
    	console.log("arrIn: "+arrIn);
    	permutation = arrIn.join('');
    	
    	//Original string set here.
    	var arrString = str.split('');
    	console.log("permutation: "+permutation);
    	
    	if( arrTemp.length === 0 ) {
    		//Insert letter into index of array then push.
    		arrTemp.push( permutation );
    	} else if( !( arraTemp.includes( permutation ) ) ) {
    		arrTemp.push( permutation );
    		console.log("arrTemp: "+arrTemp);
    	}

    	//Reset parameters.
    	//Remove letter from array to reset for repeat step.
    	arrIn = arrIn;
    	arrIn.splice( j, 1 );
    	permutation = '';
    	arrOut.push(arrTemp);
    }//for_inner-end
    console.log("* * * * *");
  }//for_outter-end
  console.log(arrOut);
  return arrOut.length-1;
}//permAlone()-end


permAlone('abc');
