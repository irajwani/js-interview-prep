//Given HH:MM, form the next closest time reusing the digits already given; 
//there is no limit on how many times you may reuse a digit

function nCT(militaryTime) {
    let nextClosestTime;
    let digitSpace = militaryTime.split("").filter(digit => digit != ":"), minuteDigits, hourDigits, currentDigits;
    let digitsExistInDigitSpace;

    let HHMM = militaryTime.split(":");
    let hours = Number(HHMM[0]);
    let minutes = Number(HHMM[1]);
    
    for(var m = 0; ; m++) {
        minutes = (minutes+1) % 60;
        // console.log(minutes);
        if(minutes == 0 || minutes < 10) {
            minuteDigits = `0${minutes}`.split("");
        }
        else {
            minuteDigits = minutes.toString().split("");
        }

        if(minutes == 0) {
            hours = (hours + 1) % 24;
            
        }

        if(hours == 0 || hours < 10) {
            hourDigits = `0${hours}`.split("");
        }
        else {
            hourDigits = hours.toString().split("");
        }


        currentDigits = [...hourDigits, ...minuteDigits];
        //TODO: Is line 38 both correct and an improvement over 39?
        digitsExistInDigitSpace = currentDigits.every(digit => digitSpace.includes(digit));
        // digitsExistInDigitSpace = digitSpace.includes(currentDigits[0]) && digitSpace.includes(currentDigits[1]) && digitSpace.includes(currentDigits[2]) && digitSpace.includes(currentDigits[3]);
        if(digitsExistInDigitSpace) {
            return `${hours == 0 || hours < 10 ? "0" + hours : hours}:${minutes == 0 || minutes < 10 ? "0" + minutes : minutes}`
        }
        
        // digitsExistInDigitSpace = digitSpace.includes(minuteDigits[0]) && digitSpace.includes(minuteDigits[1]);
        // // console.log(digitsExistInDigitSpace);
        // if(digitsExistInDigitSpace) {
        //     return `${hours}:${minutes == 0 || minutes < 10 ? "0" + minutes : minutes}`
        // }

        
    }

    // return nextClosestTime


    
}

let ans = nCT("19:34");

console.log(ans);