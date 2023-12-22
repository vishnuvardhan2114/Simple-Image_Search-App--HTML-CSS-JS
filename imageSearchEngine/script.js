const accessKey = "tHpw4jwepRGhSZta6wZH010dY_sJBB3hiTCPfIJGjrM";


const formEL = document.querySelector("form");
const SearchinputEL = document.getElementById("search-input");
const SearchResultEL = document.querySelector(".search-results");
const showMoreButtonEL = document.getElementById("showmore-button");



formEL.addEventListener("submit" , (e) => {
    e.preventDefault();
    page = 1 ;
    searchImage();
})
showMoreButtonEL.addEventListener('click', () => {
    searchImage();
});
let inputData = "";
let page = 1;
const searchImage = async() => {
    inputData = SearchinputEL.value;
    const urls = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`;
    const response = await fetch(urls);
    const data = await response.json();
   if (page === 1) {
     SearchResultEL.innerHTML= "";
   }

   const results = data.results;

   results.map((result) => {
    const imageWrapper = document.createElement("div");
    imageWrapper.classList.add("search-card");
    const image = document.createElement("img");
    image.src = result.urls.small;
    image.alt = result.alt_description;
    const imageLink = document.createElement('a');
    imageLink.href = result.links.html;
    imageLink.target = "_blank";
    imageLink.textContent = result.alt_description;

    imageWrapper.appendChild(image);
    imageWrapper.appendChild(imageLink);
    SearchResultEL.appendChild(imageWrapper);
   });

   page++;

   if (page > 1) {
        showMoreButtonEL.style.display = "block";
   }

   
}
