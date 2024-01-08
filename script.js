const url_eminem = 'http://striveschool-api.herokuapp.com/api/deezer/search?q=eminem';
const url_metallica = 'http://striveschool-api.herokuapp.com/api/deezer/search?q=metallica';
const url_queen = 'http://striveschool-api.herokuapp.com/api/deezer/search?q=queen';

const fetchEminem = () => {
    fetch(url_eminem, {method: "GET",
}).then((response)=>{
    //console.log(response);
    return response.json();
}).then((data)=>{
    console.log(data.data);
    const brani = data.data
    const eminem = document.querySelector('#eminemSection')
    console.log(brani);
for (let i = 0; i < brani.length; i++) {
    eminem.innerHTML += `<div class="col-3">
                           <img src="${brani[i].artist.picture_big}" alt="">
                           <h5>${brani[i].title}</h5>
                         </div>
    `
}
const eminemClass = document.querySelector('#eminem')
console.log(eminemClass);
eminemClass.classList.toggle('d-none')
})

}
//fetchEminem();
const creaLista = document.querySelector('#creaLista')
creaLista.onclick = fetchEminem