const numbersArr = [1,2,3,-1,-2,-3];
function isPositive(arr) {
    const exampleArr = [];
    if(arr.lenth === 0) {
        return "Some eror";
    }
    for(i=0; i<=arr.lenth - 1; i++) {
        if(arr[i]>=0) {
            exampleArr.push(arr[i])
        }
    }
    if(exampleArr.lenth === 0) {
        return null;
    } else {
        return exampleArr;
    }
}
console.log(isPositive(numbersArr));