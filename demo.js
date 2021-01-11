

const myForm=document.getElementById('myForm');
const contries=document.getElementById('contries');
const confirmed=document.getElementById('confirmed');
const recovered=document.getElementById('recovered');
const death=document.getElementById('death');
const details=document.getElementById('details');


myForm.addEventListener('submit',detailedFunction);

function detailedFunction(e){
    e.preventDefault();
    const country=contries.value;
    const url="https://api.covid19api.com/total/dayone/country/"+country;
    fetch(url)
    .then((res)=>res.json()
    )
    .then((data)=>{
        console.log(data)
       const length=data.length;
       const index=length-1;
       
       confirmed.innerHTML=''
       recovered.innerHTML=''
       death.innerHTML=''


       confirmed.append("Confirmed : "+data[index].Confirmed)
       recovered.append("Recovered : "+data[index].Recovered)
       death.append("Death : "+data[index].Deaths)

       details.style.display='flex'
    })
    .catch((err)=>{
        console.error(err.message)
    })
}


