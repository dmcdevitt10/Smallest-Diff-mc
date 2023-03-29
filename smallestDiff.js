function smallestDifference(arr1, arr2){
    let differences = []
    for(let i = 0; i < arr1.length; i++){
        for(let k = 0; k < arr2.length; k++){
            if(arr1[i] > arr2[k]){
                differences.push(arr1[i] - arr2[k])
            }else{
                differences.push(arr2[k] - arr1[i])
            }
        }
    }
    return Math.min(...differences)
}

console.log(smallestDifference([10, 20, 14, 16, 18], [30, 23, 54, 33, 96]))