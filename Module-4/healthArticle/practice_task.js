/*
1. In this task, you need to create **XMLHttpRequest** to fetch data for news article.
2. For this you need to create one json file for news article just like you have worked with **health.json**.
3. Create javaScript code using **XMLHttpRequest**. For this you need to create object for xhr and define variable named **url** and assign link for json file.
4. Create javascript code to fetch news article from step 3 to step 6 provided in the previous lab instructions.
5. Then check the output for the same.
6. Perform`git add`, `git commit` and `git push` to push all your latest work.
*/

// const url = new URL('https://chroniclingamerica.loc.gov/');
// const searchParams = new URLSearchParams({
//   terms: "michigan",
//   format: "json",
// });

// url.search = searchParams.toString();

const method = 'GET';
const url = './practice_task.json'
const xhr = new XMLHttpRequest();

xhr.open(method, url, true);
xhr.responseType = 'json';
xhr.send();

xhr.onload = () => {
  if (xhr.status !== 200) {
    console.error(`Error: ${xhr.status}: ${xhr.statusText}`);
  } else {
    const response = xhr.response.items;
    processLoadedData(response);
  }
}

function processLoadedData(response) {
  const articles = document.getElementById('articles');
  console.log(response);

  response.forEach(news => {
    const title = news.title;
    const place = news.place_of_publication;
    const publisher = news.publisher;
    const country = news.country;

    const newsDiv = document.createElement('div');
    const titleElement = document.createElement('h3');
    const countryElement = document.createElement('p');
    const publisherElement = document.createElement('p');
    const placeElement = document.createElement('p');

    titleElement.textContent = `${title}`;
    countryElement.textContent = `${country}`;
    publisherElement.textContent = `${publisher}`;
    placeElement.textContent = `${place}`;

    newsDiv.appendChild(titleElement);
    newsDiv.appendChild(countryElement);
    newsDiv.appendChild(publisherElement);
    newsDiv.appendChild(placeElement);
    articles.appendChild(newsDiv);
  });
}