
const time = document.getElementById('boxId');
// const time = document.querySelector('#box');

const localTime = () => {
    const localtime = new Date().toLocaleTimeString();
    //console.log(localtime);

    time.innerHTML = `${localtime}`;
    setTimeout(localTime, 1000);
}

localTime();