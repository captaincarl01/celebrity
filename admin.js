const tickets = JSON.parse(localStorage.getItem("tickets")) || [];

const fans = JSON.parse(localStorage.getItem("fans")) || [];

// DOM
const ticketDiv = document.getElementById("tickets");

const fanDiv = document.getElementById("fans");

const meetDiv = document.getElementById("meetings");

// COUNTS
document.getElementById("ticketCount").innerText =
tickets.filter(t => t.type !== "Meet & Greet").length;

document.getElementById("fanCount").innerText =
fans.length;

document.getElementById("meetCount").innerText =
tickets.filter(t => t.type === "Meet & Greet").length;

// DISPLAY TICKETS
tickets.forEach((t,index)=>{

if(t.type === "Meet & Greet"){

meetDiv.innerHTML += `

<div class="card">

<h3>Meet & Greet</h3>

<p>Email: ${t.email}</p>

<p>ID: ${t.id}</p>

<button onclick="deleteTicket(${index})">
Delete
</button>

</div>

`;

}else{

ticketDiv.innerHTML += `

<div class="card">

<h3>${t.type}</h3>

<p>Email: ${t.email}</p>

<p>ID: ${t.id}</p>

<button onclick="deleteTicket(${index})">
Delete
</button>

</div>

`;

}

});

// DISPLAY FANS
fans.forEach((f,index)=>{

fanDiv.innerHTML += `

<div class="card">

<h3>${f.type} Fan</h3>

<p>Email: ${f.email}</p>

<button onclick="deleteFan(${index})">
Delete
</button>

</div>

`;

});

// DELETE TICKET
function deleteTicket(index){

tickets.splice(index,1);

localStorage.setItem("tickets",JSON.stringify(tickets));

location.reload();

}

// DELETE FAN
function deleteFan(index){

fans.splice(index,1);

localStorage.setItem("fans",JSON.stringify(fans));

location.reload();

}

// SEARCH
document.getElementById("searchInput")
.addEventListener("keyup",function(){

const value = this.value.toLowerCase();

document.querySelectorAll(".card").forEach(card=>{

card.style.display =
card.innerText.toLowerCase().includes(value)
? "block"
: "none";

});

});