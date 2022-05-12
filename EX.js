
 
// Javascript program to count deletions
// to reduce the string to its
// shortest length by deleting a
// pair of same adjacent characters
 
// Function count
// the operations
function reduce(s, l)
{
    let count = 1, step = 0;
 
    // Traverse in the string
    for(let i = 1; i < l; i++)
    {
         
        // If adjacent characters
        // are same
        if (s[i] == s[i - 1])
            count += 1;
        else
        {
             
            // If same adjacent pairs
            // are more than 1
            step += parseInt(count / 2, 10);
            count = 1;
        }
    }
    step += parseInt(count / 2, 10);
    return step;
}
 
// Driver code
let s = "cccc";
let l = s.length;
 
console.log((reduce(s, l)))
 
// This code is contributed by mukesh07  
 
