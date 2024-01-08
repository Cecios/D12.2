const url = 'http://striveschool-api.herokuapp.com/api/deezer/search?q=eminem';

const fetchEminem = () => {
    fetch(url, {method: "GET",
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
})
}
fetchEminem();