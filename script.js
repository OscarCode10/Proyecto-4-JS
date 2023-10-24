const hour = document.querySelector(".hour")
const minute = document.querySelector(".minute")
const second = document.querySelector(".second")

//Función del reloj análogo
setInterval(()=>{
    let time = new Date()

    let hr = time.getHours() * 30
    let mt = time.getMinutes() * 6
    let sd = time.getSeconds() * 6

    hour.style.transform = `rotate(${(hr)+(mt/12)}deg)`

    minute.style.transform = `rotate(${mt}deg)`

    second.style.transform = `rotate(${sd}deg)`

})

//Funcion del reloj digital
const calculateTime=()=>{
    const time = new Date()
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();

    hours = hours < 10 ? "0" + hours : hours
    minutes = minutes < 10 ? "0" + minutes : minutes
    seconds = seconds < 10 ? "0" + seconds : seconds

    //Condicional Ternario para preguntar si horas es mayor de 12, en caso de que si se le añade el Pm y se le quita 12 a la hora, en caso de que no solo se le añade Am
    const screenWatch = hours > 12 ? `${hours - 12}:${minutes}:${seconds} Pm` : `${hours}:${minutes}:${seconds} Am`
    const digitalWatch = document.querySelector(".watchD")
    digitalWatch.innerHTML = screenWatch
}

setInterval(calculateTime,  1000)