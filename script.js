function changeColours() {
    let hex_numbers = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];

    let hexcode = '';
    
    console.log(`pre-loop ${hexcode}`)

    for (let i=0; i < 6 ; i++) {
        let random_index = Math.floor(Math.random() * hex_numbers.length);
        hexcode += hex_numbers[random_index];
    }
console.log(`post-loop ${hexcode}`)

document.getElementById("hex-code").innerHTML = hexcode;
document.getElementsByClassName("hex-colours")[0].style.background = "#" + hexcode;//

}
