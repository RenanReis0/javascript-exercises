const leapYears = function(num) {
    let divisivelpor4 = num%4
    let divisivelpor100 = num%100
    let divisivelpor400 = num%400

    if(divisivelpor4 == 0){
        if(divisivelpor100 == 0){
            if(divisivelpor400 == 0){
                return true
            } else{
                return false
            }
        } else{
            return true
        }
    } else{
        return false
    }

};

// Do not edit below this line
module.exports = leapYears;
