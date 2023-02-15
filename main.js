//Check Your Math Exercise
if(1 +1 > 5){
    console.log("True Fact")
} else{
    console.log("LIES")
}

if(4 * 5 <= 20){
    console.log("True Fact")
} else {
    console.log("LIES")
}

if(6-2 >= 0){
    console.log("True Fact")
} else {
    console.log("LIES")
}

//Dog People vs Cat people excercise
let likesDog= true

if(likesDog){console.log("You're a dog person!")
    
} else {
    console.log("You're a cat person!")
}

//Greetings Execercise
let person={
    name:"Me",
    prefferedLanguage:"English"
}

let key = "prefferedLanguage"
let keyLanguage = [person[key], "Spanish", "French"]
let nameof ="Stranger"

console.log(keyLanguage)
/*for(let i= 0; i< keyLanguage.length; i++){
if (keyLanguage[i] === "English"){
    console.log(`Hello, ${nameof}`)
} else if(keyLanguage[i] === "Spanish"){
    console.log(`Hola, ${nameof}`)
} else if(keyLanguage[i] === "French") {
    console.log(`Bonjour, ${nameof}`)
}
}*/

// Second attempt
let islangEnglish = true
let islangSpanish = false
let islangFrench = false

if (islangEnglish=== true && islangFrench === false && islangSpanish=== false){
    console.log(`Hello, ${nameof}`)
}else if(islangEnglish=== false && islangFrench === false && islangSpanish=== true){
    console.log(`Hola, ${nameof}`)
} else if(islangEnglish=== fasle && islangFrench === true && islangSpanish=== false) {
    console.log(`Bonjour, ${nameof}`)
}


//exercise Grades
let grade = 92

if(grade >=0 && grade <= 69){
    console.log("You got an F")
} else if(grade >=70 && grade <= 76){
    console.log("You got an D")
} else if(grade >=77 && grade <= 84){
    console.log("You got an C")
}else if(grade >=85 && grade <= 92){
    console.log("You got an B")
}else if(grade >=93 && grade <= 100){
    console.log("You got an A")
}