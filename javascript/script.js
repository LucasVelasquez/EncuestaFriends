
// Verificar si el DOM esta listo
$(document).ready (function() {
    console.log (" Bienvenido al Central Perk, ya estamos listos para empezar")
});

// Iniciar animación Friends
// const dudas_btn =document.querySelector(".dudas_btn button");


// dudas_btn.onclick = () => {
//     $("#btn1").animate({
//         color: yellow
//     });
// };
// dudas_btn.onclick = () => {
//     $("#btn2").animate({
//         color: "red"
//     });
// };
// dudas_btn.onclick = () => {
//     $("#btn3").animate({
//         color: blue
//     });
// };
// dudas_btn.onclick = () => {
//     $("#btn4").animate({
//         color: yellow
//     });
// };
// dudas_btn.onclick = () => {
//     $("#btn5").animate({
//         color: blue
//     });
// };
// dudas_btn.onclick = () => {
//     $("#btn6").animate({
//         color: red
//     });
// };
// por algun motivo no me lo estaría tomando...

$(".dudas_btn").click(function(){
    $("#btn1").css({
        color: "yellow"
    });
    $("#btn2").css({
        color: "red"
    });
    $("#btn3").css({
        color: "blue"
    });
    $("#btn4").css({
        color: "yellow"
    });
    $("#btn5").css({
        color: "blue"
    });
    $("#btn6").css({
        color: "red"
    });
});


//selecting all required elements
const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz_box");
const result_box = document.querySelector(".result_box");
const option_list = document.querySelector(".option_list");
const time_line = document.querySelector("header .time_line");
const timeText = document.querySelector(".timer .time_left_txt");
const timeCount = document.querySelector(".timer .timer_sec");

// al darle a Empezar! que se genere
start_btn.onclick = () => {
    info_box.classList.add("activeInfo");
};

// al darle a Salir que se genere
exit_btn.onclick = () => {
    info_box.classList.remove("activeInfo"); // que esconda la info del box
};

// al darle a Continuar que se genere
continue_btn.onclick = () => {
    info_box.classList.remove("activeInfo"); // que esconda la info del box
    quiz_box.classList.add("activeQuiz"); // Veo el quiz box
    showQuetions(0); // llamo a la funcion showQestions 
    queCounter(1); //paso 1 parameter para queCounter
    startTimer(30); //llamo a la funcion startTimer
    startTimerLine(0); //llamo a la funcion startTimerLine



    // aca deberia guardar el nombre del player
};

let timeValue =  30;
let que_count = 0;
let que_numb = 1;
let userScore = 0;
let counter;
let counterLine;
let widthValue = 0;
const restart_quiz = result_box.querySelector(".buttons .restart");
const quit_quiz = result_box.querySelector(".buttons .quit");


// En el caso de tocar el boton para reiniciar "restartQuiz" :
restart_quiz.onclick = () => {
    quiz_box.classList.add("activeQuiz"); //ver el quiz box
    result_box.classList.remove("activeResult"); //esconder resultado
    timeValue = 30; 
    que_count = 0;
    que_numb = 1;
    userScore = 0;
    widthValue = 0;
    showQuetions(que_count);
    queCounter(que_numb);
    clearInterval(counter);
    clearInterval(counterLine);
    startTimer(timeValue);
    startTimerLine(widthValue);
    timeText.textContent = "Time Left";
    next_btn.classList.remove("show");
};

// Al hacer click en el boton Salir al finalizar el quiz
quit_quiz.onclick = () => {
    window.location.reload(); //recargar la ventana actual
};

const next_btn = document.querySelector("footer .next_btn");
const bottom_ques_counter = document.querySelector("footer .total_que");

// Al hacer click en siguiente para las preguntas
next_btn.onclick = () => {
    if(que_count < questions.length - 1){
        que_count++;
        que_numb++;
        showQuetions(que_count);
        queCounter(que_numb);
        clearInterval(counter);
        clearInterval(counterLine);
        startTimer(timeValue);
        startTimerLine(widthValue);
        timeText.textContent = "Time Left";
        next_btn.classList.remove("show");
    }else{
        clearInterval(counter);
        clearInterval(counterLine);
        showResult();
    }
};

// Ver las preguntas y opciones 
function showQuetions(index){
    const que_text = document.querySelector(".que_text");
    //Crear un nuevo span y div para preguntas y opciones
    let que_tag = '<span>'+ questions[index].numb + ". " + questions[index].question +'</span>';
    let option_tag = '<div class="option"><span>'+ questions[index].options[0] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[1] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[2] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[3] +'</span></div>';
    que_text.innerHTML = que_tag; //crear un nuevo span con el nombre que_tag
    option_list.innerHTML = option_tag; //crear un nuevo div adentro del option_tag
    
    const option = option_list.querySelectorAll(".option");

    // Darle le posibilidad de clickear las opciones
    for(i=0; i < option.length; i++){
        option[i].setAttribute("onclick", "optionSelected(this)");
    }
};

// Crear div con simbolos tilde y cruz
let tickIconTag = '<div class="icon tick"><i class="fas fa-check"></i></div>';
let crossIconTag = '<div class="icon cross"><i class="fas fa-times"></i></div>';

//Si se selecciona una opcion
function optionSelected(answer){
    clearInterval(counter);
    clearInterval(counterLine);
    let userAns = answer.textContent;
    let correcAns = questions[que_count].answer;
    const allOptions = option_list.children.length;
    
    if(userAns == correcAns){ //Si selecciona opcion correcta:
        userScore += 1; //suma 1 al puntaje
        answer.classList.add("correct"); //pinta de verde
        answer.insertAdjacentHTML("beforeend", tickIconTag); //agrega la tilde de correcto
        console.log("Correct Answer");
        console.log("Your correct answers = " + userScore);
    }else{
        answer.classList.add("incorrect"); //pinta de rojo si no corresponde
        answer.insertAdjacentHTML("beforeend", crossIconTag); //agrega la cruz de incorrecto
        console.log("Wrong Answer");
        for(i=0; i < allOptions; i++){
            if(option_list.children[i].textContent == correcAns){ //if there is an option which is matched to an array answer 
                option_list.children[i].setAttribute("class", "option correct"); //pinta de verde
                option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag); //agrega la tilde de correcto
                console.log("Auto selected correct answer.");
            }
        }
    }
    for(i=0; i < allOptions; i++){
        option_list.children[i].classList.add("disabled"); //al seleccionar una opcion, ya no puede selecionar otra
    }
    next_btn.classList.add("show"); //aparece el boton siguiente al seleccionar alguna opcion
};

function showResult(){
    info_box.classList.remove("activeInfo");
    quiz_box.classList.remove("activeQuiz");
    result_box.classList.add("activeResult");
    const scoreText = result_box.querySelector(".score_text");
    if (userScore > 8){ // Si saca mas de 8:
        //crea un nuevo span con el resultado del total de preguntas
        let scoreTag = '<span>y felicidades! Obtuviste <p>'+ userScore +'</p> de <p>'+ questions.length +'</p></span>';
        scoreText.innerHTML = scoreTag;  //agrega un nuevo span al score_Text
    }
    else if(userScore > 6){ // Si saca mas de 6:
        let scoreTag = '<span>y muy bien, obtuviste <p>'+ userScore +'</p> de <p>'+ questions.length +'</p></span>';
        scoreText.innerHTML = scoreTag;
    }
    else if(userScore > 3){ // Si saca mas de 3:
        let scoreTag = '<span>y no estuvo tan mal, obtuviste <p>'+ userScore +'</p> de <p>'+ questions.length +'</p></span>';
        scoreText.innerHTML = scoreTag;
    }
    else{ // Si saca menos de 3...
        let scoreTag = '<span>Qué?? Soló tuviste <p>'+ userScore +'</p> de <p>'+ questions.length +'</p></span>';
        scoreText.innerHTML = scoreTag;
    }

    // Aca deberia guardar el userScore en el array de player

    // Aca deberia guardar en el DOM el player para luego tomar el rankings
};

function startTimer(time){
    counter = setInterval(timer, 1000);
    function timer(){
        timeCount.textContent = time; //cambia el valor del timeCount con el time value
        time--; //vaya bajando el tiempo
        if(time < 9){ //Si el tiempo es menor a 9 que agregue el 0 adelante
            let addZero = timeCount.textContent; 
            timeCount.textContent = "0" + addZero;
        }
        if(time < 0){ //Si el tiempo llega a 0
            clearInterval(counter); //limpia el contador
            timeText.textContent = "Time Off"; //se acabo el tiempo
            const allOptions = option_list.children.length;
            let correcAns = questions[que_count].answer;
            for(i=0; i < allOptions; i++){
                if(option_list.children[i].textContent == correcAns){
                    option_list.children[i].setAttribute("class", "option correct");
                    option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag);
                    console.log("Time Off: Auto selected correct answer.");
                }
            }

            for(i=0; i < allOptions; i++){
                option_list.children[i].classList.add("disabled"); //seleccionada una opcion, no permite volver a elegir de las opciones
            }

            next_btn.classList.add("show"); // hace visible el boton Siguiente
        }
    }
};

function startTimerLine(time){
    counterLine = setInterval(timer, 59);
    function timer(){
        time += 1; // va aumentando el valor en la linea de a 1
        time_line.style.width = time + "px"; // va expandiendo la time_line tantos px por el valor de tiempo que pasa
        if(time > 549){ // Si el valor es mayor a 549
            clearInterval(counterLine); // limpia el counterLine
        }
    }
};

function queCounter(index){
    //agrega un span para indicar el numero de pregunta
    let totalQueCounTag = '<span><p>'+ index +'</p> of <p>'+ questions.length +'</p> Questions</span>';
    bottom_ques_counter.innerHTML = totalQueCounTag;
};