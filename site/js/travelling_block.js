console.log("он хоть подключен? ну хоть так");

window.addEventListener('load', height_photo);
window.addEventListener("resize", height_photo);
function height_photo(){
    let photo_1 = document.querySelector(".block_diploms_photo .photos .photo_for_height .photo_1");
    let photo_2 = document.querySelector(".block_diploms_photo .photos .photo_for_height");
    
    let get_height = getComputedStyle(photo_1).height;
    photo_2.style.height = get_height;
}

/*=================*/
/*    Open menu    */
/*=================*/
// sidebar - боковая панель
function func_sidebar(){
    let button_open = document.querySelector(".open_menu");
    let button_close = document.querySelector(".close_menu")
    let open_window = document.querySelector(".window_menu");

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


/*===================*/
/*    SLide video    */
/*===================*/
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
        video.pause();
        video.currentTime = 0;
    }
}

function func_scroll(lift_arrow, right_arrow, list_video, bool_video, block_or_flex){
    console.log(list_video);

    let list_style_video = list_video.map(i => {return getComputedStyle(i)});

    let last_index = list_style_video.length;
    let penultimate_index = last_index - 1;

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

/*=========================*/
/*    Full screen photo    */
/*=========================*/
function func_open_photo(){
    let footer = document.querySelector("footer");
    let arr_photo = Array.from(document.querySelectorAll("img"));

    let new_element_div = document.createElement("div");
    let new_element_photo = document.createElement("img");
    let new_element_close = document.createElement("button");

    arr_photo.map(photo => {
        photo.addEventListener("click", () => {
            let screen_height = window.innerHeight;
            screen_height = Number(screen_height) - 100;

            new_element_div.appendChild(new_element_photo);
            new_element_div.appendChild(new_element_close);

            new_element_close.className = "close_open_photo";
            new_element_div.className = "div_open_photo";
            new_element_photo.className = "img_open_photo";

            new_element_div.style.display = "flex";
            new_element_div.style.flexDirection = "column";
            new_element_div.style.justifyContent = "center";
            new_element_div.style.alignItems = "center";
            new_element_div.style.backgroundColor = "rgba(0, 0, 0, 0.7)"
            new_element_div.style.position = "fixed";
            new_element_div.style.width = "100%";
            new_element_div.style.height = "100%";
            new_element_div.style.top = "0";
            new_element_div.style.left = "0";

            new_element_photo.src = photo.src;
            new_element_photo.style.objectFit = "contain";
            new_element_photo.style.maxHeight = (screen_height*0.9).toString() + "px";
            new_element_photo.style.maxWidth = "90%";
            new_element_photo.style.margin = "10%";

            new_element_close.innerHTML = "&#x2715";
            new_element_close.style.position = "fixed";
            new_element_close.style.top = "0";
            new_element_close.style.right = "0";
            new_element_close.style.margin = "20px";
            new_element_close.style.fontSize = "20px";
            new_element_close.style.background = "#e9e9f3";
            new_element_close.style.border = "5px solid #e9e9f3";

            footer.after(new_element_div);
        })
    });

    new_element_close.addEventListener("click", () => {
        new_element_div.remove();
    });
}


/*====================*/
/*    Void all func   */
/*====================*/
function Arrows(){
    let lift_arrow_1 = document.querySelector(".block_diploms_photo .photos .photo_for_height .left_arrow");
    let right_arrow_1 = document.querySelector(".block_diploms_photo .photos .photo_for_height .right_arrow");
    let list_photo_1 = Array.from(document.querySelectorAll(".block_diploms_photo .photos .photo_for_height .photo"));

    let lift_arrow_2 = document.querySelector(".procedure_photos .photo_scroll .left_arrow");
    let right_arrow_2 = document.querySelector(".procedure_photos .photo_scroll .right_arrow");
    let list_photo_2 = Array.from(document.querySelectorAll(".procedure_photos .photo_scroll .photo"));


    func_scroll(lift_arrow_1, right_arrow_1, list_photo_1, false, "flex"); 
    func_scroll(lift_arrow_2, right_arrow_2, list_photo_2, false, "flex");

    /*---Logic for videos---*/
    // func_scroll(lift_arrow_1, right_arrow_1, list_video_1, true, "block");
}

/*====================*/
/*    Void all func   */
/*====================*/
function window_make_appointment(){
    let left_button = document.querySelector(".left_button");
    let window_make_appointment = document.querySelector(".window_make_appointment");

    left_button.addEventListener("click", () => {
        window_make_appointment.style.display = "flex";
    });
}

/*==============================*/
/*    loade height for video    */
/*==============================*/
function loade_height_video(){
    const videos = document.querySelectorAll(".video");

    videos.forEach((video, i) => {
        video.addEventListener("loadedmetadata", () => {
            const { width, height } = video.getBoundingClientRect();
            
            if (videos[i + 1]) {
                videos[i + 1].style.width = `${width}px`;
                videos[i + 1].style.height = `${height}px`;
            }
        });
    });
}

func_sidebar();
Arrows();
func_open_photo();
window_make_appointment();
// loade_height_video();

/*========================*/
/*    Additional  code    */
/*========================*/

function none(){
    // - var имеет область видимости функции.
    // - let имеет блочную область видимости.
    // Здесь можно разместить ваш JavaScript код, который будет выполняться только при ширине экрана более 1000px
    if (window.innerWidth > 1000){
        // func_main_procedure();
    }
    video.pause();         // Останавливает воспроизведение видео
    video.currentTime = 0; // Сбрасывает видео к н z ачалу
}

/*
cc
c 
\ rtcvb 
*/