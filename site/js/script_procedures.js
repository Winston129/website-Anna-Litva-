{
var button_read_more = Array.from(document.querySelectorAll(".box_procedure .box_buttons .button_read_more"));
<<<<<<< HEAD
=======
var button_sign_up = Array.from(document.querySelectorAll(".box_procedure .box_buttons .button_sign_up"));
<<<<<<< HEAD
var name_procedure_arr = Array.from(document.querySelectorAll(".name_procedure .procedure .name_procedure"));
>>>>>>> ad7aab0 (add (buy_procedure_ru.html))
=======
var name_procedure_arr = Array.from(document.querySelectorAll(".box_procedure .procedure .name_procedure"));
>>>>>>> 2735967 (add ficha 'cope name procedur')
var button_close =  Array.from(document.querySelectorAll(".box_procedure .button_close"));
var box_description = Array.from(document.querySelectorAll(".box_procedure .box_description"));
var all_num_description = 11;
var arr_height = new Array(all_num_description);
}

window.addEventListener('load', ()=>{
    // list_with_height();
});

button_read_more.map((button, index_button)=>{
    button.addEventListener("click", ()=>{
        let box_show = box_description[index_button]
        
        animation_button(button, true);
        box_show.style.transition = "max-height 3s ease-in-out";
        box_show.style.maxHeight = arr_height[index_button];

        height_button_close(index_button);
    });
});
button_close.map((button, index_button)=>{
    button.addEventListener("click", ()=>{
        let box_show = box_description[index_button];

        animation_button(button, false);
;
        box_show.style.maxHeight = "0";
    });
});

//============
//  All func  
//============
function animation_button(button, if_button_show){
    if(if_button_show){
        button.style.animation = "click_button_show 0.3s linear";
    }
    else{
        button.style.animation = "click_button_close 0.3s linear";
    }

    button.addEventListener("animationend", ()=>{ button.style.animation = ""; });
}

function height_button_close(i){
    button_close[i].style.height = window.getComputedStyle(button_close[i]).height;
}

//======================
//  Func window 'load'  
//======================
function list_with_height(){
    for(let i = 0; i < all_num_description; i++){
        let box_show = box_description[i];

        box_show.style.display = "block";
        box_show.style.maxHeight = "2000px";

        let style_box_show = window.getComputedStyle(box_show);
        arr_height[i] = style_box_show.height;

        box_show.style.maxHeight = "";
        box_show.style.display = "flex";
        console.log(arr_height[i]);
    }
    console.log("===============");
<<<<<<< HEAD
}
=======
}

//=======================
//  cope name procedure  
//=======================
button_sign_up.map((button, index_button)=>{
    // console.log(`${button.innerText}: ${name_procedure_arr[index_button].innerText}`);
    button.addEventListener("click", ()=>{
        navigator.clipboard.writeText(name_procedure_arr[index_button].innerText);
    });
});
>>>>>>> ad7aab0 (add (buy_procedure_ru.html))
