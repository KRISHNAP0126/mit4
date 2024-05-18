

let token=localStorage.getItem('namelist');

function input(event) {
    let inputname = document.getElementById("input-name").value
    let inputmail = document.getElementById("input-mail").value
    let container = document.querySelector("container1")

  
let namelist


if(token ==null){
    namelist=[]
}
else{  
    namelist=JSON.parse(token)
}
console.log("token")
namelist.push(
    {
        name:input-name,
        id:input-mail
    }
);
localStorage.setItem('namelist', JSON.stringify(namelist));
}



let con =document.querySelector("container2").innerHTML
function container(){
    addEventListener('con',container2)

    if (container1){

    
    document.querySelector("container2").style.display = "block";
    }
    else {
        alert("did not enter the value")
    }
}


