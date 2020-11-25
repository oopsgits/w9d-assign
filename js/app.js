function addAndMultipy(numOne, numTwo) {
    return (numOne + numTwo) * 5;
}

function lengthChecker(stringToCheck) {
    if (stringToCheck.length > 10) {
        return true;
    } else if (stringToCheck.length <= 10) {
        return false;
    } else {
        console.log("there has been an error!");
    }
}

function arrayChecker(arrayToCheck) {
    for(var index = 0; index < arrayToCheck.length; index++) {
       if(arrayToCheck[index].startsWith("ph")) {
           return arrayToCheck[index];
       }

    }
   return "No string starts with ph";
}


    console.log(addAndMultipy(2, 2));
    console.log(addAndMultipy(3, 4));
    console.log(addAndMultipy(1, 5));

    console.log(lengthChecker("short"));
    console.log(lengthChecker("thisisverylong"));
    console.log(lengthChecker("shortshort"));

console.log(arrayChecker(["phone", "notphone"]));
console.log(arrayChecker(["blah", "notphone"]));
console.log(arrayChecker(["notphone", "blah", "phone"]));


