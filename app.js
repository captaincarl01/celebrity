// MOBILE MENU
function toggleMenu(){

const nav = document.querySelector("nav");

nav.classList.toggle("active");

}

// TYPING EFFECT
const text = "Chris Brown";
let index = 0;

function typeEffect(){

if(index < text.length){

document.getElementById("typing").innerHTML += text.charAt(index);

index++;

setTimeout(typeEffect,120);

}

}

if(document.getElementById("typing")){
typeEffect();
}

// GSAP
if(typeof gsap !== "undefined"){

gsap.from(".hero h1",{
y:-80,
opacity:0,
duration:1.2
});

gsap.from(".card",{
opacity:0,
y:40,
stagger:0.2
});

}

// PAYMENT
let paymentType = "";

function showPayment(type){

paymentType = type;

document.getElementById("paymentModal").style.display = "flex";

}

function confirmPayment(){

const email = document.getElementById("userEmail").value;

if(!email){
alert("Enter Email");
return;
}

generateTicket(email);

}

// SAVE DATA
function saveTicket(data){

let tickets = JSON.parse(localStorage.getItem("tickets")) || [];

tickets.push(data);

localStorage.setItem("tickets",JSON.stringify(tickets));

}

function saveFan(data){

let fans = JSON.parse(localStorage.getItem("fans")) || [];

fans.push(data);

localStorage.setItem("fans",JSON.stringify(fans));

}

// GENERATE TICKET
function generateTicket(email){

const { jsPDF } = window.jspdf;

const type = document.getElementById("ticketType").value;

const id = "CB-" + Math.floor(Math.random()*100000);

saveTicket({
type,
email,
id
});

const doc = new jsPDF();

doc.text("Concert Ticket",20,20);

doc.text(`Type: ${type}`,20,40);

doc.text(`Email: ${email}`,20,50);

doc.text(`ID: ${id}`,20,60);

doc.save("concert-ticket.pdf");

alert("Ticket Downloaded!");

}

// FAN CARD
function buyFanCard(type,price){

const email = prompt("Enter Email");

if(!email) return;

saveFan({
type,
email
});

generateFanCard(type,email);

}

function generateFanCard(type,email){

const id = "FAN-" + Math.floor(Math.random()*100000);

document.getElementById("cardDisplay").innerHTML = `

<div class="fan-ui">

<h2>${type} MEMBER</h2>

<p>${email}</p>

<p>ID: ${id}</p>

<div id="qrcode"></div>

<button onclick="downloadFanCard('${type}','${email}','${id}')">
Download Card
</button>

</div>

`;

new QRCode(document.getElementById("qrcode"),id);

}

function downloadFanCard(type,email,id){

const { jsPDF } = window.jspdf;

const doc = new jsPDF();

doc.text("Fan Membership",20,20);

doc.text(`Membership: ${type}`,20,40);

doc.text(`Email: ${email}`,20,50);

doc.text(`ID: ${id}`,20,60);

doc.save("fan-card.pdf");

}

// BOOKING
function submitBooking(e){

e.preventDefault();

alert("Booking Request Sent!");

}

// MEET PAGE
function bookMeet(){

const { jsPDF } = window.jspdf;

const id = "MEET-" + Math.floor(Math.random()*100000);

const doc = new jsPDF();

doc.text("Meet & Greet Ticket",20,20);

doc.text(`ID: ${id}`,20,40);

doc.save("meet-ticket.pdf");

alert("Meet & Greet Ticket Downloaded!");

}

// CURSOR
const cursor = document.querySelector(".cursor");

if(cursor){

document.addEventListener("mousemove",(e)=>{

cursor.style.left = e.clientX + "px";

cursor.style.top = e.clientY + "px";

});

}

// PARTICLES
const canvas = document.getElementById("particles");

if(canvas){

const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;

canvas.height = window.innerHeight;

let particles = [];

for(let i=0;i<40;i++){

particles.push({

x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
r:Math.random()*3

});

}

function animateParticles(){

ctx.clearRect(0,0,canvas.width,canvas.height);

particles.forEach(p=>{

ctx.beginPath();

ctx.arc(p.x,p.y,p.r,0,Math.PI*2);

ctx.fillStyle="#00f0ff";

ctx.fill();

p.y += 0.4;

if(p.y > canvas.height){
p.y = 0;
}

});

requestAnimationFrame(animateParticles);

}

animateParticles();

}
// OPEN MEET MODAL
function openMeetPayment(){

document.getElementById("meetModal").style.display = "flex";

}

// CONFIRM PAYMENT
function confirmMeetPayment(){

const email =
document.getElementById("meetEmail").value;

if(!email){

alert("Enter Email");

return;

}

generateMeetTicket(email);

}

// GENERATE MEET TICKET
function generateMeetTicket(email){

const { jsPDF } = window.jspdf;

const id = "MEET-" + Math.floor(Math.random()*100000);

let tickets =
JSON.parse(localStorage.getItem("tickets")) || [];

tickets.push({

type:"Meet & Greet",
email,
id

});

localStorage.setItem("tickets",JSON.stringify(tickets));

const doc = new jsPDF();

doc.text("Meet & Greet Ticket",20,20);

doc.text(`Email: ${email}`,20,40);

doc.text(`Ticket ID: ${id}`,20,50);

doc.save("meet-ticket.pdf");

alert("Meet & Greet Ticket Downloaded!");

}

// COUNTDOWN
const countdown = document.getElementById("countdown");

if(countdown){

const targetDate =
new Date("July 19, 2026 18:00:00").getTime();

setInterval(()=>{

const now = new Date().getTime();

const distance = targetDate - now;

const days =
Math.floor(distance / (1000*60*60*24));

const hours =
Math.floor((distance%(1000*60*60*24))/(1000*60*60));

const minutes =
Math.floor((distance%(1000*60*60))/(1000*60));

const seconds =
Math.floor((distance%(1000*60))/1000);

countdown.innerHTML =
`${days}d ${hours}h ${minutes}m ${seconds}s`;

},1000);

}

// GSAP
if(typeof gsap !== "undefined"){

gsap.from(".meet-hero h1",{
y:-50,
opacity:0,
duration:1
});

gsap.from(".card",{
opacity:0,
y:40,
stagger:0.2
});

}