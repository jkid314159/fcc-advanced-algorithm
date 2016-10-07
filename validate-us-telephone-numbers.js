/*
**  Author:     Alex Cholakis (@jkid314159)
**  File Name:  validate-us-telephone-numbers
**  Date:       September, 2016
**

**  Exercise completed for Free Code Camp
**
**  Return true if the passed string is a 
**  valid US phone number.
**
**  The user may fill out the form field any way they 
**  choose as long as it is a valid US number. The 
**  following are examples of valid formats for US 
**  numbers (refer to the tests below for other variants):
**
**  555-555-5555
**  (555)555-5555
**  (555) 555-5555
**  555 555 5555
**  5555555555
**  1 555 555 5555
**
**  For this challenge you will be presented with a string
**  such as 800-692-7753 or 8oo-six427676;laskdjf. Your job
**  is to validate or reject the US phone number based on 
**  any combination of the formats provided above. The area
**  code is required. If the country code is provided, you
**  must confirm that the country code is 1. Return true if
**  the string is a valid US phone number; otherwise return
**  false.
**
**  Comment:
*/

function telephoneCheck ( str ) {
	//Declare variables.
	var lenIn   = 0;
	var char0 = str[0];          //Retain first if is hyphen for negative #.
	var subStr = str.substr(1);  //First character sliced off string

	//Trim string of hyphens or spaces.
	var strTrim = subStr.replace(/-|\s/g, "");
	//Add first character back to trimmed string.
	str = char0 + strTrim;
	
	lenIn = str.length;
	console.log(str);
	console.log("len: "+lenIn)
	//Check string length
	if( lenIn < 10 || lenIn > 13  ) {
		return false;
	}

	//Check for non-numeric characters, excluding left/right parentheses.
	if ( str.match( /[^\d]/gi ) && str.includes( ")" ) === false && str.includes( "(" ) === false ) {
		return false +" \d";
	}
	
	//Test string has format 1-555-555-5555 with wrong country code.
	if( lenIn === 11 &&  ( str.charAt(0) != "1" ) ) {
		return false;
	}
	
	//Test string has format 1 (555) 555 5555 with wrong country code.
	if( lenIn === 13 && str.charAt(1) === "(" && str.charAt(5) === ")" ) {
		if (str.charAt(0) != "1") {
			return false;
		} else {
			return true;
		}
	}
	
	//Test string has format (555) 555 55555 with extra digit.
	if( lenIn === 13 && str.charAt(0) === "(" && str.charAt(4) === ")" ) {
		return false;
	}

	//Test string has format 1 (555 555 5555 missing right parenthesis.
	if( str.charAt(1) === "(" && str.charAt(5) != ")" ) {
		return false;
	}
	
	//Test string has format (6505552368) right parenthesis in wrong position.
	if ( str[0] === '(' && str[4] != ')') {
		return false+" wrg pos";
	}
	
	//Test string has format 555) 555 5555 missing left parenthesis.
	if( str.includes( ")" ) && !str.includes( "(" ) ) {
		return false+" w/o LP";
	}   
	
	return true;
}//telephoneCheck()-end


telephoneCheck ( "(275)76227382" );
