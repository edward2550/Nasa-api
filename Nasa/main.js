let API_KEY = 'iYjFdDfWhLcuxnZdf8kRNYPvaohRauSnnmEfHE2L'
document.querySelector('button').addEventListener('click',fetchNasaData)


function fetchNasaData(){
    let date = document.querySelector('input').value    

    fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${date}`)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        document.querySelector('h2').innerText = data.title
        document.querySelector('img').src = data.url
        document.querySelector('p').innerText = data.explanation
    })

}