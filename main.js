// gets current time id from html
let time = document.getElementById('currentTime');

// shows the current time on the page
setInterval(() => {
    let d = new Date ();
    time.innerHTML = d.toLocaleTimeString();
},1000)

// alert for the page
setTimeout(function () { alert("You've been staring at the clock for 10 seconds now."); }, 10000); // 1000 = 1 second