const btn= document.getElementById('btn')
var map = L.map('map').setView([36.82, 5.7667], 13);
var marker = L.marker([36.821, 5.763]).addTo(map);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);


btn.addEventListener('click',()=>{
const IP=document.getElementById('IP').value
if (IP==''){
    alert('sdsdfs')
}else{
    const apikey='at_0jghSUW5goMQJAp1KLJqt3IrL1yTu'
const api=`https://geo.ipify.org/api/v2/country,city?apiKey=${apikey}&ipAddress=${IP}`

fetch (api).then(Response => Response.json()).then(data=>{
    document.getElementById('ipA').innerText=data.ip;
    document.getElementById('loc').innerText=data.location.region
    document.getElementById('city').innerText=", "+data.location.city;
    document.getElementById('postcode').innerText=data.location.postalCode
    document.getElementById('time').innerText="UTC "+data.location.timezone;
    document.getElementById('isp').innerText=data.isp
   
   const lat= data.location.lat;
   const lng = data.location.lng;
    // Update the marker's position
    marker.setLatLng([lat, lng]);

    // Set the map view to the new marker position
    map.setView([lat, lng], 13);
    const errorName = data.messages
}).catch(error => {
   
    alert('Error fetching data:', errorName);
  });
}
})
