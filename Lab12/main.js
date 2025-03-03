let newsSection = document.querySelector('.news');
let input = document.getElementById('search-input');
let options = document.getElementById('categories');




async function getNews() {
    let categoryValue = options.value;
    let searchValue = input.value.toLowerCase();
    let apiKey = 'fd913d6b55b34d5e8b2f5ea455097b30';
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${categoryValue}&apiKey=${apiKey}&q=${searchValue}`;
    
    try {
        let response = await fetch(url);
        let data = await response.json(); 
        showNews(data.articles); 
    } catch (error) {
        console.error('Xəbərlər yüklənərkən xəta baş verdi:', error);
    }
}

function showNews(data) {
    newsSection.innerHTML='';

    if(data.length === 0){
        newsSection.innerHTML='<p class="alert">Xəbər tapılmadı</p> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path fill="#e31616" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM159.3 388.7c-2.6 8.4-11.6 13.2-20 10.5s-13.2-11.6-10.5-20C145.2 326.1 196.3 288 256 288s110.8 38.1 127.3 91.3c2.6 8.4-2.1 17.4-10.5 20s-17.4-2.1-20-10.5C340.5 349.4 302.1 320 256 320s-84.5 29.4-96.7 68.7zM144.4 208a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg>';
    }

    data.forEach(news => {
        newsSection.innerHTML += 
      `<div class="news-card">
        <img src="${news.urlToImage || 'https://fakeimg.pl/400x300/ffffff/909090?text=No Image&font=noto-serif&font_size=16'}" alt="${news.title}" class="news-img">
        <div class="info">
          <div>
          <h3 class="news-name"><a href="${news.url}">${news.title}</a></h3>
          <p class="news-desc">${news.description || 'Təsvir mövcud deyil'}</p>
          </div>
          <p class="news-date">${new Date(news.publishedAt).toLocaleDateString()}</p>
        </div>  
      </div>`;
    });
}

getNews();

options.addEventListener('change', getNews);
input.addEventListener('input', getNews);