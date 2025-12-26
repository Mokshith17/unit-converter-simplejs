const inputBox = document.getElementById("input-box");
const submitBtn = document.getElementById("submit-btn");
const lengthPara = document.getElementById("length-para");
const volumePara = document.getElementById("volume-para");
const massPara = document.getElementById("mass-para");





submitBtn.addEventListener("click",()=>{
    const inputValue = Number(inputBox.value);

    let meterValue = inputValue * 3.28084
    let feetValue = inputValue / 3.28084
    let literValue = inputValue * 0.264172
    let gallonValue = inputValue / 0.264172
    let kgValue = inputValue * 2.20462
    let poundValue = inputValue / 2.20462
    

    lengthPara.textContent = `${inputValue} meter = ${meterValue.toFixed(3)} feet | ${inputValue} feet = ${feetValue.toFixed(3)} meter`
    
    volumePara.textContent = `${inputValue} liter = ${literValue.toFixed(3)} gallon | ${inputValue} gallon = ${gallonValue.toFixed(3)} liter`

    massPara.textContent = `${inputValue} kilogram = ${kgValue.toFixed(3)} pound | ${inputValue} pound = ${poundValue.toFixed(3)} Kilogram`

})