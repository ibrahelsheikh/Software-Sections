const serachBtn = document.querySelector('.search-btn');
const movieList = document.querySelector('.movies');

const API_key = "your key"
const API_URL = `https://www.omdbapi.com/?apikey=${API_key}`;

serachBtn.addEventListener('click', getMovieList);

function getMovieList(e){
    const searchContent = document.querySelector('.search-content');
    const searchText = searchContent.value.trim();
    console.log(searchText);

    fetch(`${API_URL}&s=${searchText}`)
    .then(response => response.json())
    .then(data => {
        let html = "";
        if(data.Search){
            data.Search.forEach(
                movie => {
                    html += `
                    <div class="movie-item">
                        <div class="movie-poster">
                            <img src=${movie.Poster} alt="movie poster">
                        </div>
                        <div class="movie-title">
                            <h3>${movie.Title}</h3>
                            <a href="#" class="details-btn">Movie Details</a>
                        </div>
                    </div>
                `
                }
            )
        }
        else{
            html = '<h3> Sorry we couldnt find your movie </h3>';
        }
        movieList.innerHTML = html;
    })
}