

setInterval(displayClock, 500);
function displayClock()
{
    var time = new Date();
    console.log(time);
    var hrs = time.getHours();
    var min = time.getMinutes();
    var sec = time.getSeconds();
    var ampm = 'AM';

    if(hrs > 12)
    {
        ampm = 'PM';
    }
    if(hrs > 12)
    {
        hrs = hrs - 12;
    }
    if(hrs == 0)
    {
        hrs = 12;
    }
    if(hrs < 10)
    {
        hrs = '0' + hrs;
    }
    if(min < 10)
    { 
        min = '0' + min;
    }
    if(sec < 10)
    {
        sec = '0' + sec;
    }
    document.getElementById('clock').innerHTML = hrs + ':' + min + ':' + sec + ' ' + ampm ;
}