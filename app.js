
function getTime() {
    let today = new Date();
    let hour = today.getHours();
    let minutes = today.getMinutes();
    let seconds = today.getSeconds();
    let anteDay = hour >= 12 ? 'PM' : 'AM';
    hour = hour > 12 ? hour - 12 : hour;

    let timeTag = document.getElementById('time');
    timeTag.textContent = `${hour}:${minutes}:${seconds} ${anteDay}`;

}

setInterval(getTime, 1000);