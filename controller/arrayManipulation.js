function removeDuplicateElements(ogArray){
    let newArr=[];
    let obj={};
    let ind=0;
    for(let i=0;i<ogArray.length;i++){
        if(!obj[ogArray[i]]){
              obj[ogArray[i]] = 1;
            newArr[ind] = ogArray[i];
            ind++;
        }
    }
    return newArr;
}



console.log(removeDuplicateElements([1,2,2,3,5,4,2,5,3,8]))