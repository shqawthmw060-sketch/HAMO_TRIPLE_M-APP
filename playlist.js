function loadPlaylist(){

let file = document.getElementById("playlistFile").files[0]

let reader = new FileReader()

reader.onload = function(e){

parseM3U(e.target.result)

}

reader.readAsText(file)

}

function parseM3U(data){

let channels = document.getElementById("channels")

channels.innerHTML=""

let lines = data.split("\n")

for(let i=0;i<lines.length;i++){

if(lines[i].startsWith("#EXTINF")){

let name = lines[i].split(",")[1]

let url = lines[i+1]

let div = document.createElement("div")

div.className="poster"

div.innerText=name

div.onclick=()=>playStream(url)

div.oncontextmenu=function(e){

e.preventDefault()

addFavorite(name,url)

}

channels.appendChild(div)

}

}

}

function addFavorite(name,url){

let fav = JSON.parse(localStorage.getItem("favorites")||"[]")

fav.push({name,url})

localStorage.setItem("favorites",JSON.stringify(fav))

renderFavorites()

}

function renderFavorites(){

let favDiv = document.getElementById("favorites")

favDiv.innerHTML=""

let fav = JSON.parse(localStorage.getItem("favorites")||"[]")

fav.forEach(c=>{

let div=document.createElement("div")

div.className="poster"

div.innerText=c.name

div.onclick=()=>playStream(c.url)

favDiv.appendChild(div)

})

}

renderFavorites()
let searchInput = document.getElementById("search")

searchInput.addEventListener("input", function(){

let value = this.value.toLowerCase()

let posters = document.querySelectorAll(".poster")

posters.forEach(p=>{

if(p.innerText.toLowerCase().includes(value))
p.style.display="flex"
else
p.style.display="none"

})

})
