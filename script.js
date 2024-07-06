const accessKey = "NKwIpbTN_a9H24o732oVv3erzSRm1-nWnOgLwu7CHg0";

const searchForm = document.getElementById("search-form"),
  searchBox = document.getElementById("search-box"),
  searchResult = document.getElementById("search-result"),
  showMoreBtn = document.getElementById("show-more-btn");

let keyword = "";
let page = 1;

async function searchImage() {
  keyword = searchBox.value;
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;

  const response = await fetch(url);
  const data = await response.json();

  if (page === 1) {
    searchResult.innerHTML = "";
  }

  const results = data.results;

  results.map((result) => {
    const image = document.createElement("img");
    image.src = result.urls.small;

    searchResult.appendChild(image);

    // Images URL error
    // const imageLink = document.createElement("link");
    // imageLink.href = result.links.html;
    // imageLink.target = "_blank";

    // imageLink.appendChild(image);
    // searchResult.appendChild(imageLink);
  });

  showMoreBtn.style.display = "block";
}

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  page = 1;
  searchImage();
});

showMoreBtn.addEventListener("click", () => {
  page++;
  searchImage();
});
