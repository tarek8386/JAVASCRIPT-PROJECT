function Time(){
    var date = new Date();
    var hrs = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    var session = document.getElementById('ampm');

    hrs = hrs < 10 ? "0" + hrs : hrs;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;

    if(hrs >= 12){
        session.innerHTML = 'PM';
    }else{
        session.innerHTML = 'AM';
    }

    if(hrs > 12){
        hrs = hrs - 12;
    }
    document.getElementById('hour').innerHTML = hrs;
    document.getElementById('minute').innerHTML = min;
    document.getElementById('second').innerHTML = sec;
}
setInterval(Time, 1000);