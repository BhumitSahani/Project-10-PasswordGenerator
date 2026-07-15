var characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?", "/"];
var charactersLength = characters.length
const samplePassword1 = document.querySelector("#example-1")
const samplePassword2 = document.querySelector("#example-2")
const passwordLength = document.querySelector("#password-length")
const alphaPassword = document.querySelector("#alpha-password")
const alphaNumPassword = document.querySelector("#alpha-num-password")
const allCharactersPassword = document.querySelector("#all-characters-password")
const passwordType = document.querySelector("#password-type")
const passwordGenerator = document.querySelector("#password-generator")


alphaPassword.addEventListener("click",function(){
    charactersLength = 52
    passwordType.textContent = "Password Type - Alphabatic"
})

alphaNumPassword.addEventListener("click",function(){
    charactersLength = 62
    passwordType.textContent = "Password Type - Alpha-numeric"
})

allCharactersPassword.addEventListener("click",function(){
    charactersLength = characters.length
    passwordType.textContent = "Password Type - All Characters"
})

passwordGenerator.addEventListener("click",function(){
    var length = Number(passwordLength.value)
    samplePassword1.textContent = ""
    samplePassword2.textContent = ""
    for(let i=0;i<length;i++){
        var index = Math.floor(Math.random()*charactersLength)
        samplePassword1.textContent += characters[index]
    }
    for(let i=0;i<length;i++){
        var index = Math.floor(Math.random()*charactersLength)
        samplePassword2.textContent += characters[index]
    }
})

samplePassword1.addEventListener("click",function(){
    navigator.clipboard.writeText(samplePassword1.textContent)
    if(samplePassword1.textContent){
        var message = samplePassword1.textContent
        samplePassword1.textContent = "Text Copied"
        setTimeout(function(){
            samplePassword1.textContent = message
        },1000)
    }
})
samplePassword2.addEventListener("click",function(){
    navigator.clipboard.writeText(samplePassword2.textContent)
    if(samplePassword2.textContent){
        var message = samplePassword2.textContent
        samplePassword2.textContent = "Text Copied"
        setTimeout(function(){
            samplePassword2.textContent = message
        },1000)
    }
})