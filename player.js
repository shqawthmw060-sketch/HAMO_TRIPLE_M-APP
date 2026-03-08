let video = document.getElementById("video")

function playStream(url){

if(Hls.isSupported()){

let hls = new Hls()

hls.loadSource(url)

hls.attachMedia(video)

}

else{

video.src = url

}

saveHistory(url)

}

function saveHistory(url){

localStorage.setItem("lastChannel",url)

}
