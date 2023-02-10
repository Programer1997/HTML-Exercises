function searchBinary(arr,target){
 let left =arr[0];
 let rigth  = arr[arr.length-1];
 
 
 while (left <= rigth ){

    let middle = Math.floor((left +rigth)/4);

    if (arr[middle]==target){
        return middle;
    }

    if (arr[middle]< target ){
left =middle +1;
    }else {
        rigth = middle -1;
    }

    return -1;

 }}




let sortedArr = [1,2,6,7,8,9,20,23];
let target = 20;

let index = searchBinary(sortedArr,target);
console.log(sortedArr[index]);


