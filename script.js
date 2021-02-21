 let weather={
     "apikey": "e65ed65979e863c6b8812c2734e8fba6",
     fetchweather: function(city){
         fetch(
             "https://api.openweathermap.org/data/2.5/weather?q="
             + city 
             +"&units=metric&appid=e65ed65979e863c6b8812c2734e8fba6" 
             
             )
             .then((Response) => Response.json())
             .then((data) => this.displayweather(data));
     },
     displayweather:function(data){
         try{
            const{ name}=data;
            const{ icon, description }=data.weather[0];
            const{ temp, humidity }=data.main;
            const{speed }=data.wind;
           document.querySelector(".city").innerText = "weather in " + name;
           document.querySelector(".icon").src = 
           "https://openweathermap.org/img/wn/" + icon + ".png" ;
           if(temp<10){
            document.querySelector(".description").innerText = "cold";
           }
           else if(10<temp<35){
            document.querySelector(".description").innerText = "moderate";
           }
           else if(temp>35){
            document.querySelector(".description").innerText = "hot";
           }
           
           document.querySelector(".temp").innerText = temp +"°C";
           document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
           document.querySelector(".wind").innerText = "Wind speed: " + speed + " km/h";
           document.querySelector(".weather").classList.remove("loading");
           document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + name +"')"

         }
         catch(error){
             alert('city not found... try again...');
         }
     },
     search: function(){
        this.fetchweather(document.querySelector(".search-bar").value);
     }
 };
 document.querySelector(".search button").addEventListener("click", function() { 
        weather.search();
 });

 document.querySelector(".search-bar").addEventListener("keyup", function(event) {
     if(event.key == "Enter"){
         weather.search();
     }
 });
weather.fetchweather(" ");