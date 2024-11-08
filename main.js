console.log("has been connected"); 

const buttons = document.querySelectorAll("button"); 


let num_value = []; 
let num_of_clicks = 0; 

for(const btn of buttons){
    btn.addEventListener("click", () => {
        let curr_val = Number(btn.id);
        num_value.push(curr_val);   
        num_of_clicks+=1;
        stopEvent(num_of_clicks); 
    })
}

function stopEvent(num_of_clicks){
    if(num_of_clicks === 3){
        for(const btn of buttons){
            btn.disabled = true; 
        }
        solveEquation(); 
    }
}
function solveEquation(){
    const first_equation = (2*(num_value[0])) + 11;
    const second_equation = ((2*(num_value[2])) + num_value[1]) - 5; 
    const third_equation = Math.abs((num_value[1] + num_value[2]) - num_value[0]);  

    console.log(first_equation + " " + second_equation + " " + third_equation);

    const val_of_x = document.querySelector(".var_X"); 
    const val_of_y = document.querySelector(".var_Y"); 
    const val_of_z = document.querySelector(".var_Z"); 

    val_of_x.textContent = first_equation; 
    val_of_y.textContent = second_equation; 
    val_of_z.textContent = third_equation; 
}


// 2x + 11
//(2Z + Y) -5 
//|(y + z) - x|



