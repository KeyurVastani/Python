function ThirdGreatest(strArr) { 
    longest = '';
    second = '';
    third = '';
    for (idx in strArr) {
      current = strArr[idx];
      if (current.length > longest.length) {
        third = second;
        second = longest;
        longest = current;
      } else if (current.length > second.length) {
        third = second;
        second = current;
      } else if (current.length > third.length) {
        third = current;
      }
    }
    return third;          
  }

  var ar= ["abc","defg","z","hijk"]

console.log(ThirdGreatest(ar) );

