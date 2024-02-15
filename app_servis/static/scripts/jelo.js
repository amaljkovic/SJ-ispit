

window.addEventListener("DOMContentLoaded", (event) => {

  document.getElementById("forma").addEventListener("submit", function(event){
    var validno = true;
    var spanovi = document.querySelectorAll("#sastojci > span.badge");
    var niz = [];
    for(let i=0; i<spanovi.length; i++){
        niz.push(spanovi[i].dataset.id);
    }
    if( document.getElementById("naziv").value.length < 3 ){
    validno=event.preventDefault();
    //document.getElementById("naziv").style.borderColor = 'red';
    document.getElementById("naziv").classList.add("error");
    document.getElementById("naziv").classList.remove("success");
    }
    else {
      //document.getElementById("naziv").style.borderColor = 'green';
      document.getElementById("naziv").classList.add("success");
      document.getElementById("naziv").classList.remove("error");
    }
    return validno;
})
});

// window.addEventListener("DOMContentLoaded", (event) => {
// document.getElementById("dodaj-sastojak").addEventListener("click", function(){
    
//     var id = document.getElementById("spisak-sastojaka").value;
//     console.log(document.getElementById("spisak-sastojaka").value);
//     if(!id){
//         console.log("id je:" +id);
//         alert("Izaberi sastojak");
//         return;
//     }
//     dodajSastojak( id );
// })
// });

window.addEventListener("DOMContentLoaded", (event) => {
document.getElementById("naziv").addEventListener("keypress", function(){
    this.classList.remove('success'); 
this.classList.remove('error'); 
});


  window.addEventListener("load", function(){
    document.getElementById("dodaj-sastojak").addEventListener("click", function(){
        var id = document.getElementById("spisak-sastojaka").value;
        console.log(document.getElementById("spisak-sastojaka").value);
        if(!id){
            alert("Izaberi sastojak");
            console.log("id je:" +id);
            return;
        }
        dodajSastojak( id );
    });
	//sadrzaj funkcije koja ce se pozvati kada browser proglasi stranicu ucitanom
//tj DOM tree potpuno formiranim
})
 });

function dodajSastojak(id){  
    console.log("pozvan dodaj sastojak");
    console.log("id sastojka je "+ id);
        document.querySelector(`#spisak-sastojaka > option[value='${id}']`).disabled = true;
        document.getElementById("spisak-sastojaka").selectedIndex = 0;
        var naziv = document.querySelector(`#spisak-sastojaka > option[value='${id}']`).innerHTML;
        var span = document.createElement("span");
    span.classList.add("badge");
    span.classList.add("bg-secondary");
    span.dataset.id = id;
    span.innerHTML = naziv;
    var button = document.createElement("button");
    button.type="button";
    button.classList.add("btn");
    button.classList.add("btn-default");
    button.classList.add("btn-sm");
    button.innerHTML = "X";
    console.log("span je trenutno "+span);
    span.appendChild(button);
    console.log("id sastojci je trenutno "+ document.getElementById("sastojci"));
    document.getElementById("sastojci").appendChild(span);
    //document.getElementById("sastojci").appendChild(span);

    button.addEventListener("click", function(){  
        var id = this.parentNode.dataset.id;
        this.parentNode.parentNode.removeChild( this.parentNode );
        document.querySelector(`#spisak-sastojaka > option[value='${id}']`).disabled = false;
      });
    
     }