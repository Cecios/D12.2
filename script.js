
const fetchGruppo = (input) => {
    fetch(`http://striveschool-api.herokuapp.com/api/deezer/search?q=${input}`, {method: "GET",
}).then((response)=>{
    //console.log(response);
    return response.json();
}).then((data)=>{
    console.log(data.data);
    const brani = data.data
    const gruppo = document.querySelector('#gruppoSection')
    const titoloGruppo = document.querySelector('#titoloGruppo')
    gruppo.innerHTML = ''
for (let i = 0; i < brani.length; i++) {
    gruppo.innerHTML += `                  <div class="card bg-transparent">
    <img src="${brani[i].artist.picture_big}" class="card-img-top w-100" alt="">
    <div class="card-body">
      <h4>${brani[i].title}</h4>
      <h6>Durata:${brani[i].duration} </h6>
      <a href="#" class="card-link">Card link</a>
      <a href="#" class="card-link">Another link</a>
    </div>
    <div class="card-footer bg-transparent border-success">

      <audio class="w-100" controls>
        <source src="${brani[i].preview}" type="audio/mp3">
        
      </audio>
    </div>
  </div>
    `
    titoloGruppo.innerHTML = `${brani[i].artist.name}`
}
const gruppoClass = document.querySelector('#gruppo')
gruppoClass.classList.remove('d-none')
})

}
//fetchEminem();
const creaLista = document.querySelector('#creaLista')


const search = () => {

    let input = document.querySelector('#searchField')
    console.log(input.value);
    input = input.value
    fetchGruppo(input)
}