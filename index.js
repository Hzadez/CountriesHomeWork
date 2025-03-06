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