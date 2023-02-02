let checkTwoWord =(word1, word2, order)=>{
    const wordLength1 = word1.length;
    const wordLength2 = word2.length;
    console.log(wordLength1, wordLength2)
    let count =0;
    if(wordLength1<=wordLength2){
         
        let i=0; 

        while(i<wordLength1){
            if(order.indexOf(word1[i]) < order.indexOf(word2[i])){
                if(count==0){
                    return true;
                }else{
                    return false;
                }
            }else if(order.indexOf(word1[i]) > order.indexOf(word2[i])){
                count++;
            }
            i++;
        }
    }else{
        let i=0; 

        while(i<wordLength2){
            if(order.indexOf(word1[i]) < order.indexOf(word2[i])){
                if(count==0){
                    return true;
                }else{
                    return false;
                }
            }else if(order.indexOf(word1[i]) > order.indexOf(word2[i])){
                count++
            }
            i++;
        }
    }

    if(wordLength1>wordLength2){
        if(count==0){
            return false;
        }else{
            return false
        }
    }else if(count==0){
        return true;
    }else if(count){
        return false
    }
       
}
let solution=(word, order)=>{
    let flag=0;
    let i=0; 
    const wordNumber = word.length;
    // console.log(wordNumber)
    while(i<wordNumber-1){
        let checkValue= checkTwoWord(word[i], word[i+1], order)
        if(checkValue==false){
            flag++;
        }
        i++;
    }
    if(flag==0){
        return true;
    }else return false
}

// const a = solution(["my","f"], "gelyriwxzdupkjctbfnqmsavho")
// console.log(a)
