/*
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
*/

function fetchData(){
    return new Promise((keep_the_promise, reject_the_promise)=>{
        setTimeout(()=>{
            let success = false;
            if(success){
                keep_the_promise("The promise we made are not broken yet");
            } else{
                reject_the_promise("All the promise we made are broken!!!");
            }

        }, 2000);
    })
    
}


fetchData()
    .then((data)=>{
        console.log(data);
        
        

    })
    .catch((error)=>{
        let who_end = "It was you!!!";
        console.log(error, who_end);
        
    })