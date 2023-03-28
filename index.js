let convertBtn = document.getElementById("convert-btn")
let inputEl = document.getElementById("input")
let lengthEl = document.getElementById("length-el")
let volumeEl = document.getElementById("volume-el")
let massEl  = document.getElementById("mass-el")


const meterToFeet =  3.281
const literToGallon =  0.264
const kiloToPound =  2.204

convertBtn.addEventListener("click", function() {
    let baseValue = inputEl.value
    
    lengthEl.textContent = `${baseValue} meter = ${(baseValue * meterToFeet).toFixed(3)} feet | ${baseValue} feet = ${((1/meterToFeet)*baseValue).toFixed(3)} meters` 
    
     
    volumeEl.textContent = `${baseValue} liter = ${(baseValue * literToGallon).toFixed(3)} gallon | ${baseValue} gallon = ${((1/literToGallon)*baseValue).toFixed(3)} liters` 
    
     
    massEl.textContent = `${baseValue} kilos = ${(baseValue * kiloToPound).toFixed(3)} pounds | ${baseValue} pounds = ${((1/kiloToPound)*baseValue).toFixed(3)} kilos` 
})

