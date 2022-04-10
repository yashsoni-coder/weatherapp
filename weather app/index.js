var button = document.querySelector('.button')
var inputValue = document.querySelector('.inputValue')
var Name = document.querySelector('.Name');
var desc = document.querySelector('.desc');
var temp = document.querySelector('.temp');

button.addEventListener('click',function(){
fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=649588b0d0a5884d92c8667925107897' )
    .then(responce => responce.json())
    .then(data => {

    var nameValue = data['Name'];
    var tempValue = data['main']['temp'];
    var descValue = data['weather'][0]['description'];

    Name.innerHTML =nameValue;
    temp.innerHTML =tempValue;
    desc.innerHTML =descValue;

    
    })
    .catch(err => alert("wrong city name!"))
})