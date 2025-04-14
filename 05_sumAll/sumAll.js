const sumAll = function(numStart, numEnd) {
    let sum = 0;
    let numStartDivisivelPor0 = numStart%1
    let numEndDivisivelPor0 = numEnd%1

    if(numStart<0 || numEnd<0){
        return "ERROR"
    }
    if (numEndDivisivelPor0 != 0 || numStartDivisivelPor0 != 0){
        return "ERROR"
    }
    if(typeof numEnd != "number" || typeof numStart != "number"){
        return "ERROR"
    }
    if(numStart<numEnd){
        for(let i=numStart;i<=numEnd;i++){
            sum += numStart
            numStart++
        }
    } else {
        for(let i=numEnd;i<=numStart;i++){
            sum += numEnd
            numEnd++
        }
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
