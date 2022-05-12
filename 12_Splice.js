// add update delete and rturn value in one method not use different 
//method like push pop shift like
//splice method return deleted value no any value return

//----------Splice method------------------


// //so1:
// var arr =["jan","feb","mar","april"]
// //arr.splice(staring index, delete String, added string)
// arr.splice(3,0,"keyur","meet") //0 represent how many value delete
// console.log(arr);


//remove duplicate
// var a=["a","b","c","d","a"]
//  var b=a.filter((val,index)=>a.indexOf(val)==index)
// console.log(b);



//sol2:jaya 4 che taya 14 karvana
// a=[1,4,3,2,5,3,5,4]
// y=4
// a.forEach((element,index) => {if(element==y){
//     a.splice(index,1,14)
// }});
// console.log(a);

a=[1,4,3,2,5,3,5,4]
console.log(a);
y=4
for(var i=0;i<a.length;i++){
   if( a[i]==y)
        {a[i]=14
        }       
}    

console.log(a);
