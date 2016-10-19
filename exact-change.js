/*
**  Author:     Alex Cholakis (@jkid314159)
**  File Name:  exact-change
**  Date:       September, 2016
**

**  Design a cash register drawer function checkCashRegister() that accepts
**  purchase price as the first argument (price), payment as the second
**  argument (cash), and cash-in-drawer (cid) as the third argument.
**
**  cid is a 2D array listing available currency.
**
**  Return the string "Insufficient Funds" if cash-in-drawer is less than 
**  the change due. Return the string "Closed" if cash-in-drawer is equal 
**  to the change due.
**
**  Otherwise, return change in coin and bills, sorted in highest to 
**  lowest order.
*/

"use strict";
function checkCashRegister(price, cash, cid) {
	//Declare variables.
	var strOut  = "";
	var change  = 0;
	var total   = 0;
	var cidIn   = [];
	var cidTemp = [];
	var cidOut  = [];
	var obj = { "PENNY":0.00, "NICKEL":0.00, "DIME":0.00, "QUARTER":0.00, "ONE":0.00, "FIVE":0.00, "TEN":0.00, "TWENTY":0.00, "HUNDRED":0.00
	};
	 
	//Swap values from lowest-highest to highest-lowest.
	function swap( array1, array2 ) {
		for ( var i = 0; i < array1.length; i++ ) {
			var swapIndex = ( array1.length -1 ) - i;
			var array00 = array1[i][0];
			var arrayStr = array1[i][1];
			console.log("arrayStr: "+arrayStr);
			console.log(typeof(arrayStr));
			var array01 = parseFloat( arrayStr );
			//var array01 = Math.round( arrayStr * 100 )/100;
			console.log("array01: "+array01);
			console.log(typeof(array01));
			array2[swapIndex] = [array00, array01];
		}
		return array2;
	}//swap()-end
	
	//Call Helper-Function.
	//cidIn = swap( cid, cidIn );
	cidIn = cid;
	console.log("cidIn =");
	console.log(cidIn);
	//Input cash-in-draw (cid) values into global object.
	var index = 0;
	for( var property in obj ) {
		//Set value to two decimal number.
		var valueIn = cidIn[index][1];
		//Assign value to property name.
  		obj[property] = valueIn;
		index++;
	}
	console.log("obj");
	console.log(obj);

	//Add up values in draw.	
	for( var propName in obj ) {
  		total += +(obj[propName]);
  		total = +total.toFixed(2);
  	}
  	
  	change = cash - price;
  	console.log(" - - - - - ");
  	console.log("total:  "+total);
  	console.log("change: "+change);
  	
  	if ( total < change ) {
  	//Check for insufficent funds.
  		strOut = "Insufficient Funds";
  		return strOut;
  	} 
  	
  	if ( total == change ) {
  	//Check for cid equal to change.
  		strOut = "Closed"; 
  		return strOut;
  	}
 
  	console.log(" - - - - - ");

	var index2 = 0;
	for ( var key in obj ) {
		var num = 0;
		//Set num based on key.
		switch ( key ) {
			case "HUNDRED": 
				num = 100.00;
				break;
			case "TWENTY": 
				num = 20.00;
				break;
			case "TEN": 
				num = 10.00;
				break;
			case "FIVE": 
				num = 5.00;
				break;
			case "ONE": 
				num = 1.00;
				break;
			case "QUARTER": 
				num = 0.25;
				break;
			case "DIME": 
				num = 0.10;
				break;
			case "NICKEL": 
				num = 0.05;
				break;
			default: 
				num = 0.01;
				break;
		}//switch-end
		
		//Check how many of key in draw.
		//ie: How many 100's in draw.
		var chkDraw = ( obj[key] / num ).toFixed(2);
		//Set multiplier for key.
		//ie:  Find how many 100's in change.
		var changeMult = Math.floor( change / num );
		//console.log("chkDraw: "+chkDraw+"  changeMult: "+changeMult);
		if( chkDraw > changeMult  && changeMult > 0 ) {
		//ie:  More 100's than needed in cid slot.
			//console.log("if");
			obj[key] = ( chkDraw - changeMult ) * num;
			cidTemp[index2] = [ key, ( ( changeMult ) * num ).toFixed(2) ];
			change = ( change - ( ( changeMult ) * num ) ).toFixed(2);
			//console.log("cidTemp[index2]: "+cidTemp[index2]+"  change: "+change);
			index2++;
		}  else if ( chkDraw < changeMult && chkDraw > 0  ) {
			obj[key] = ( changeMult - chkDraw ) * num;
			cidTemp[index2] = [ key, ( ( chkDraw ) * num ).toFixed(2) ];
			change = ( change - ( ( chkDraw ) * num ) ).toFixed(2);
			//console.log("cidTemp[index2]: "+cidTemp[index2]+"  change: "+change);
			index2++;
			
		}  else if ( chkDraw === changeMult ) {
		//ie:  Enough 100's in cid slot to give change.
			obj[key] = ( chkDraw - changeMult ) * num;
			//console.log(key+":  "+obj[key]);
			cidTemp[index2] = [ key, ( changeMult ) * num ];
			change = change - ( changeMult * num );
			//console.log("if else:");
			//console.log("new obj[key]: "+obj[key]);
			//console.log("cidTemp[index2]"+cidTemp[index2]);
			//console.log("change: "+change);
			//console.log(" * * * end * * * ");
			index2++;
			
		} else {
			change = change;
		}

	}//for-end

  // Here is your change, ma'am.
  cidOut = swap( cidTemp, cidOut);
  return cidOut; 
  
}//checkCashRegister()-end

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.10],
// ["QUARTER", 4.25],
// ["ONE", 90.00],
// ["FIVE", 55.00],
// ["TEN", 20.00],
// ["TWENTY", 60.00],
// ["ONE HUNDRED", 100.00]]

checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);

