 export function* createIdGenerator() {
     let i = 0;
     while (true) {
         yield i++;
     }
 }
