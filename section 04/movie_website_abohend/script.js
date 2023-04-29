const api_key = "50eb2e93";
const url = `https://www.omdbapi.com/?apikey=${api_key}`;

const search = document.querySelector('.search-btn');
search.addEventListener('click', function(e) {
    const movie_input = document.querySelector('.search-txt');
    const movie = movie_input.value;
    const movie_list = document.querySelector('.main-container');

    fetch(`${url}&s=${movie}`)
    .then(responce => responce.json())
    .then(data => {
        console.log(data);
        let html = "";
        if (data.Search)
        {
            data.Search.forEach (
                d=>{
                html += `<section class="movie-container">
                            <img src="${d.Poster}" alt="Movie Poster">
                            <h2 class="movie-label">${d.Title}</h2>
                            <a href="#">More Details</a>
                        </section>`
                }
            )
        }
        else
        {
            html += "<h3>Sorry the movie not found!</h3>"
        }
        movie_list.innerHTML = html;
    })
})
