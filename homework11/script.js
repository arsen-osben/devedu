async function getRandomChinese(length) {
    let finalStr = '';    
    for (let i=0; i<length; i++) {
         finalStr += String.fromCharCode(Date.now()).slice(-5);
         await new Promise(resolve => setTimeout(resolve, 50));
    }
    console.log(finalStr);
}
getRandomChinese(4);
