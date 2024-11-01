console.log("он хоть подключен? ну хоть так");

/*
=================
    Open menu    
=================
*/
// sidebar - боковая панель
function func_sidebar(){
    var button_open = document.querySelector(".open_menu");
    var button_close = document.querySelector(".close_menu")
    var open_window = document.querySelector(".window_menu");

    button_open.addEventListener('click', () => {
        console.log("хера заработало");
        open_window.classList.remove("window_menu_close");
        open_window.classList.add("window_menu_open");
    })

    button_close.addEventListener('click', () => {
        open_window.classList.remove("window_menu_open");
        open_window.classList.add("window_menu_close");
    })
}

/*
===================
    SLide video    
===================
*/
function func_for_animation(list_video, i, left_or_right, block_or_flex){
    list_video[i].style.display = block_or_flex;

    if(left_or_right == "right"){
        list_video[i].style.animation = "emergence_left 1s";
    }
    else if(left_or_right == "left"){
        list_video[i].style.animation = "emergence_right 1s";
    }

}

function func_pause(list_video){
    for(let video of list_video){
        video.pause();         // Останавливает воспроизведение видео
        video.currentTime = 0; // Сбрасывает видео к началу
    }
}

function func_scroll(lift_arrow, right_arrow, list_video, bool_video, block_or_flex){
    console.log(list_video);

    var list_style_video = list_video.map(i => {return getComputedStyle(i)});

    var last_index = list_style_video.length;
    var penultimate_index = last_index - 1;

    lift_arrow.addEventListener("click", () => {
        if(bool_video){
            func_pause(list_video);
        }
        
        for(let i=0; i < last_index; i++){
            let j = i - 1;
        
            if(list_style_video[i].display == block_or_flex){
                list_video[i].style.display = "none";

                if(i == 0){
                    func_for_animation(list_video, penultimate_index, "left", block_or_flex);
                }
                else{
                    func_for_animation(list_video, j, "left", block_or_flex);
                }
                return;
            }
        }
    });

    right_arrow.addEventListener("click", () => {
        if(bool_video){
            func_pause(list_video);
        }

        for(let i=0; i < last_index; i++){
            let j = i + 1;

            if(list_style_video[i].display == block_or_flex){
                list_video[i].style.display = "none";

                if(i == penultimate_index){
                    func_for_animation(list_video, 0, "right", block_or_flex);
                }
                else{
                    func_for_animation(list_video, j, "right", block_or_flex);
                }
                return;
            }
        }
    });
}

/*
=========================
    Full screen photo    
=========================
*/
function func_open_photo(){
    var footer = document.querySelector("footer");
    var arr_photo = Array.from(document.querySelectorAll("img"));

    var new_element_div = document.createElement("div");
    var new_element_photo = document.createElement("img");

    arr_photo.map(photo => {
        photo.addEventListener("click", () => {
            let screenHeight = window.innerHeight;
            screenHeight = Number(screenHeight) - 100;

            new_element_div.appendChild(new_element_photo);

            new_element_div.className = "div_open_photo";
            new_element_photo.className = "img_open_photo";

            new_element_div.style.display = "flex";
            new_element_div.style.justifyContent = "center";
            new_element_div.style.alignItems = "center";
            new_element_div.style.backgroundColor = "rgba(0, 0, 0, 0.7)"
            new_element_div.style.position = "fixed";
            new_element_div.style.width = "100%";
            new_element_div.style.height = "100%";
            new_element_div.style.top = "0";
            new_element_div.style.left = "0";

            new_element_photo.src = photo.src;
            new_element_photo.style.height = screenHeight.toString() + "px";

            footer.after(new_element_div);
        })
    });

    new_element_div.addEventListener("click", () => {
        new_element_div.remove();
    });
}

/*
====================
    Void all func   
====================
*/
function Arrows(){
    var lift_arrow_1 = document.querySelector(".my_works .videos .left_arrow");
    var right_arrow_1 = document.querySelector(".my_works .videos .right_arrow");
    var list_video_1 = Array.from(document.querySelectorAll(".my_works .videos .video"));

    var lift_arrow_2 = document.querySelector(".procedure_photos .photo_scroll .left_arrow");
    var right_arrow_2 = document.querySelector(".procedure_photos .photo_scroll .right_arrow");
    var list_video_2 = Array.from(document.querySelectorAll(".procedure_photos .photo_scroll .photo"));


    func_scroll(lift_arrow_1, right_arrow_1, list_video_1, true, "block");
    func_scroll(lift_arrow_2, right_arrow_2, list_video_2, false, "flex");
}

func_sidebar();
Arrows();
func_open_photo();


/*
========================
    Additional  code    
========================
*/
function none(){
    // - var имеет область видимости функции.
    // - let имеет блочную область видимости.
    // Здесь можно разместить ваш JavaScript код, который будет выполняться только при ширине экрана более 1000px
    if (window.innerWidth > 1000){
        // func_main_procedure();
    }
    video.pause();         // Останавливает воспроизведение видео
    video.currentTime = 0; // Сбрасывает видео к началу
}