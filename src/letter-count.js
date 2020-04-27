export const getLetterCount=(string)=>{
    if(!string){
        return ({});
    }
    const stringArray = string.split('');
    let stringObj = {};

    stringArray.forEach((letter)=>{
        if(!stringObj[letter]){
            stringObj[letter]= 1;
        }
        else {
            stringObj[letter]+=1;
        }        
    })

    return stringObj;
}