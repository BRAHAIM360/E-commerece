


function divisors(integer) {
    const List=[]
     for (let i = 2; i < integer; i++) {
        if( integer/i>=1  )
        {
            console.log(i);
             List.push(i)
        }
       }
     
     if(List.length ===0){
               
             return List;
             
     } 
     else return  "is prime" ;
     
   };
 
 divisors(12);
 divisors(25);
 divisors(13);
 