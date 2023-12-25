
function combineArrayElement(arr1,arr2){
    let arr=[]
        for(let i=0;i<arr1.length;i++){
            for(let j=0;j<arr2.length;j++){
                if(arr1[i]==arr2[j]){
                    arr.push(arr1[i])
                    
                }
            }
        }
       

        return removeDuplicateElements(arr)
        
    }
    
    



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
    
    
    console.log(combineArrayElement([1,2,3],[2,3,4,2]))