// generate trx id
document.getElementById("trx").innerText = "TRX-" + Math.floor(Math.random()*999999);

let progress = 0;

let statusText = document.getElementById("status");
let bar = document.getElementById("bar");

// STATE MACHINE
let states = [
    "Initializing...",
    "Waiting Payment...",
    "Verifying...",
    "Processing...",
    "Finalizing..."
];

let step = 0;

let interval = setInterval(() => {

    if(progress < 100){
        progress += Math.random()*15;
        bar.style.width = progress + "%";

        statusText.innerText = states[step];
        step = (step + 1) % states.length;

    } else {
        clearInterval(interval);
        statusText.innerText = "SUCCESS";
        statusText.className = "success";

        setTimeout(()=>{
            window.location.href = "success.html";
        },1500);
    }

},1000);


// CHAT BOT SIMULATION
function send(){
    let input = document.getElementById("msg");
    let chat = document.getElementById("chat");

    chat.innerHTML += "<div>> " + input.value + "</div>";

    setTimeout(()=>{
        chat.innerHTML += "<div style='color:cyan'>CS: Mohon tunggu, pembayaran sedang diproses...</div>";
    },800);

    input.value="";
}
