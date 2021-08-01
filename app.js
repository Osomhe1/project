
const colorPicker = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']
const color = document.querySelector('.color')

const  btn = document.getElementById("btn")

btn.addEventListener('click', ()=>{
let colorPickerHex = '#'
    for(let i = 0; i < 6; i++){
        colorPickerHex += colorPicker[getRandomNumber()];
    }
    // console.log('hey')

    color.textContent = colorPickerHex
    document.body.style.backgroundColor = colorPickerHex
})

const getRandomNumber = () =>{
    return Math.floor(Math.random() * colorPicker.length)
}



