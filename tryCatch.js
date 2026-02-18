// Try enclouses the code which might be both dangerous or cause an error. 
    // Erros might be caused by connection or user input
// Catch handles any thrown erros from try {}


//uncaught errors interrupt the normal flow of code and does not execute until the end


const age = 20;

try {
    if(age <= 18) {
        throw new Error("you can't drik")
    }

    console.log("You can drink")


} catch(error) {
    console.error(error)
 };

 console.log("end of the code")