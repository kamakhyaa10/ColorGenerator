function getColor(){
    const randomNum = Math.floor(Math.random() * 16777215); //we will get a random value but not in decimals, This is 16777215 the code to generated hexadecimal values so need to remember
    const randomCode = "#" +randomNum.toString(16); //this will put hash sign infront of the number generated and 16 is written bz we need a hexadecimal code
    document.body.style.backgroundColor = randomCode; // by this we told the exact location where the code needs to be sent inorder for it to change color or work
    document.getElementById("color-code").innerText = randomCode; //this will show the color code of the color on the screen
    navigator.clipboard.writeText(randomCode) //the generated code is already copied on the clipboard through this step
}
document.getElementById("btn").addEventListener(
    "click",
    getColor
)
getColor();//initial call so that when we open the page there is some sort of color present
