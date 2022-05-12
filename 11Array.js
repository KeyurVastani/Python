//in multi type data store in Array

var arr=["male","key"]
// console.log(arr);

//After Es6 we use for-in and for-of loop for retrive the data

//----------------------------for in -------------------------
// for(var i in arr){
//     console.log(i); //give index number
// }

// in == give n index
// of == given elements


//--------------------------------for of ----------------------
// for(var element of arr){
//     console.log(element); //give actual valu of array 
// }

//--------------------------------forEach ----------------------
//it is a combination of for-in and for-of loop
//in forEach we can't use Break keyword


  // ahi je func vaparu te in built func 6  
// arr.forEach(function(element,index,array){ 
//     console.log(element); //element ape
//     console.log(index);   // index ape
//     console.log(array)    // akho array ape
//     console.log(element + "  "+ index + " "+ array);
// })



//----- here we user define func use in forEach--------
// arr.forEach(get)
// function get(element,index,array){
//         console.log(element + " : "+ index );    
// }



//----- fat arrow func in forEach--------
// arr.forEach((ele,index,array)=>{
//      console.log(ele + " : "+ index );    
// })


//---------searching and filterning in array-----------
 
// arr.sort()
// arr.reverse()
// arr.pop()
// arr.push()
//arr.unshift(1,2,3) //add starting
//arr.shift()// remove starting 

//-----this is a searching method------------------
// arr.indexOf()       //no found then -1
// arr.lastIndexOf()  //no found then -1
// arr.includes(element) // given true if element is present in arr


///---------------for a filter----------------------
// ------------------find method--------------------
// only return first value when it found
//it take a func like in built or user define


// arr1=[3,54,34,23,56]
// var result = arr1.find(function(element,index,array){
//     return element >34
// })
// console.log(result);


// arr1=[3,54,34,23,56]
// var age=18
// var result = arr1.find(forse)
// console.log(result);
// function forse(value){
//     return value>age
// }



// arr1=[3,54,34,23,56]
// var result = arr1.find((num)=>{
//     return num>20 //jo value no male to undefine
// })
// console.log(result);



//-------------------findindex method---------------

//this is same like a find method only difference is it give return index

// arr1=[3,54,34,23,56]
// var age=180
// var result = arr1.findIndex(forse)
// console.log(result);
// function forse(value){
//     return value>age   //jo index no male to -1
// }


//---------------------filter method--------------
//return multiple value which is statisfy the condition

arr1=[3,54,34,23,56]
var age=18
var result = arr1.filter(forse)
console.log(result);
function forse(value){
    return value>age   
}