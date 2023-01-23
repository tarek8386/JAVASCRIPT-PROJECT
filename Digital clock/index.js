function Time(){
    var date = new Date();
    var hrs = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    var session1 = document.getElementById('ampm1');
     var session2 = document.getElementById('ampm2');

    hrs = hrs < 10 ? "0" + hrs : hrs;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;

    if(hrs >= 12){
        session1.innerHTML = 'PM';
        session2.innerHTML = 'PM';
    }else{
        session1.innerHTML = 'AM';
        session2.innerHTML = 'AM';
    }

    if(hrs > 12){
        hrs = hrs - 12;
    }
    document.getElementById('hour').innerHTML = hrs;
    document.getElementById('minute').innerHTML = min;
    document.getElementById('second').innerHTML = sec;
}
setInterval(Time, 1000);
