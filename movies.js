let movies = [

{
title:"Movie 1",
poster:"https://via.placeholder.com/200x300",
video:"movie1.m3u8"
},

{
title:"Movie 2",
poster:"https://via.placeholder.com/200x300",
video:"movie2.m3u8"
}

]

let movieRow = document.getElementById("movies")

movies.forEach(m=>{

let div=document.createElement("div")

div.className="poster"

div.style.backgroundImage=`url(${m.poster})`
div.style.backgroundSize="cover"

div.onclick=()=>playStream(m.video)

movieRow.appendChild(div)

})
