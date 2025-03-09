let BaseUrl = "https://restcountries.com/v3.1/all"
let dataContainer = document.getElementById("data-container")
fetch(BaseUrl)
.then(response => response.json())
.then(datas => {
   console.log(datas)
   datas.forEach(data => { 
   dataContainer.innerHTML += ` 
   <div class="card" style="width: 18rem; margin: 4px 4px;">
   <img src="${data.flags.svg}" alt="..." width="265" height="135">
   <div class="card-body">
   <h5 class="card-title">${data.name.common}</h5>
     <ul>
            <li>Region : ${data.region}</li>
            <li>Capital : ${data.capital}</li>
            <li>Continents : ${data.continents}</li>   
            <li>Subregion : ${data.subregion}</li>   
            <li>Timezone : ${data.timezones}</li>   
     </ul>
   </div>` });
})
const mode = localStorage.getItem("themeMode")
if( mode == "dark-mode")
{
    document.body.classList.replace("dark-mode", "light-mode")
    logo.classList.replace("dark-mode", "light-mode")
    navlinks.forEach(x=> x.classList.replace("dark-mode", "light-mode"))

}
mode || localStorage.setItem("currentTheme", "light-mode")
document.addEventListener("DOMContentLoaded", function(){
  let button= document.querySelector("#Button")
  let logo= document.querySelector("#Logo")
  let navlinks= document.querySelectorAll(".nav-link")
  let currentTheme= localStorage.getItem("themeMode") ?? "light"
  document.body.classList.add(currentTheme + "-mode")
  logo.classList.add(currentTheme + "-mode")
  navlinks.forEach(x=> x.classList.add(currentTheme + "-mode"))
  button.addEventListener("click", function(){
  if(document.body.classList.contains("light-mode"))
  {
    document.body.classList.replace("light-mode", "dark-mode")
    logo.classList.replace("light-mode", "dark-mode")
    navlinks.forEach(x=> x.classList.replace("light-mode", "dark-mode"))
    localStorage.setItem("currentTheme", "dark-mode")
  }
  else
  {
    document.body.classList.replace("dark-mode", "light-mode")
    logo.classList.replace("dark-mode", "light-mode")
    navlinks.forEach(x=> x.classList.replace("dark-mode", "light-mode"))
    localStorage.setItem("currentTheme", "light-mode")
  }
  })
})