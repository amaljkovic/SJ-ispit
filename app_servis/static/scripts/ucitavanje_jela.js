window.addEventListener("load", function () {
  fetch('/jela')
    .then(response => {
      if (!response.ok) {
        throw new Error(`Failed to fetch data from ${filePath}`);
      }
      return response.json();

    })
    .then(data => {

     
      for (let i = 0; i < data.length; i++) {
        let tr = document.createElement("tr");

        let td1 = document.createElement("td");
        td1.innerHTML = data[i].naziv;
        console.log("naziv " + data[i].naziv);
        tr.appendChild(td1);

        let td2 = document.createElement("td");
        td1.innerHTML = data[i].opis;
        console.log("opis " + data[i].opis);
        tr.appendChild(td2);

        let td3 = document.createElement("td");
        td1.innerHTML = data[i].kategorija;
        console.log("kategorija " + data[i].kategorija);
        tr.appendChild(td3);

        let td4 = document.createElement("td");
        td1.innerHTML = data[i].cena;
        console.log("cena " + data[i].cena);
        tr.appendChild(td4);


        document.getElementById("spisak").appendChild(tr);

        //ovde ide i pridruzivanje click eventa na <button>  Promena cene
        let btn = document.createElement("button");

      }
    })
    .catch(error => {
      console.error('Error:', error);
    });

});
/* <tr>
          <td>Pizza</td>
          <td>Kaprićoza-velika</td>
          <td>1000</td>
          <td><button class="btn btn-primary" onclick="">Promena cene</button>
            <a href="jelo.html?id=1" class="btn btn-primary">Izmeni</a>
          </td>
        </tr> */