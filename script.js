const searchForm = document.getElementById("search_form");
const searchRes = document.getElementById("search_res");
const searchBox = document.getElementById("searchbox");
const showMore = document.getElementById("show_more");

let keyword = "";
let page = 1;

const accesKey = "vUH9ivxtkQG1tGlqn9REfNDHNKgElQxzwOeUr3Kodg4";


async function searchImage(){

    keyword = searchBox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accesKey}&per_page=12`

    const response = await fetch(url);
    const data = await response.json();

    const results = data.results;

    if(page === 1){
        searchRes.innerHTML= "";
    }

    results.map ((result) => {
        const image = document.createElement("img");
        image.src=result.urls.small;
        const imageLink = document.createElement("a");
        imageLink.href= result.links.html;
        imageLink.target="_blank";


        imageLink.appendChild(image);
        searchRes.appendChild(imageLink);


    })


    showMore.style.display = "block";



}

searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    page = 1;
    searchImage();
})


showMore.addEventListener("click", () => {
    page++;
    searchImage();
})