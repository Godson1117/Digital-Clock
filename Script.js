let time=document.getElementById('time')
let btn=document.getElementById('btn')

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

btn.addEventListener('click',()=> {
  setInterval(()=> {
  let t=new Date()
  let element=`<h4 class="text-danger mx-auto" style="font-size:2rem;text-shadow:0px 2px 1px white">${t.getHours()}:${t.getMinutes()}:${t.getSeconds()}</h4><br><h5 class="text-info mx-auto" style="text-shadow:2px 0px 1px white"><i>${days[t.getDay()]} , ${months[t.getMonth()]} ${t.getDate()} ${t.getFullYear()}</i></h5>`
  time.innerHTML=element
},100)
})
