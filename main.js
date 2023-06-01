let time = document.getElementById('currentTime');

setInterval(() => {
    let d = new Date ();
    time.innerHTML = d.toLocaleTimeString();
},1000)

setTimeout(function () { alert("You've been staring at the clock for 10 seconds now."); }, 10000); // 1000 = 1 second