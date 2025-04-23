const method = 'GET';
const url = './health_article.json';

// create XMLHttpRequest object
const xhr = new XMLHttpRequest();

// initialize open call
xhr.open('GET', url, true);

// set responseType to json (parsed automatically)
xhr.responseType = 'json';

// send
xhr.send();

xhr.onload = () => {
  if (xhr.status !== 200) {
    console.error(`Error: ${xhr.status}: ${xhr.statusText}`);
  } else {
    console.log(xhr.status);
    const articles = xhr.response.articles;
    processLoadedData(articles);
  }
};

function processLoadedData(articles) {
  const articlesDiv = document.getElementById('articles');

  articles.forEach(article => {
    var articleDiv = document.createElement('div');
    articleDiv.classList.add('article');

    var title = document.createElement('h2');
    title.textContent = article.title;

    var description = document.createElement('p');
    description.textContent = article.description;

    var waysHeader = document.createElement('h3');
    waysHeader.textContent = 'Ways to Achieve:';

    var waysList = document.createElement('ul');
    article.ways_to_achieve.forEach(way => {
      var listItem = document.createElement('li');
      listItem.textContent = way;
      waysList.appendChild(listItem);
    });

    var benefitsHeader = document.createElement('h3');
    benefitsHeader.textContent = 'Benefits:';

    var benefitsList = document.createElement('ul');
    article.benefits.forEach(function (benefit) {
      var listItem = document.createElement('li');
      listItem.textContent = benefit;
      benefitsList.appendChild(listItem);
    });

    articleDiv.appendChild(title);
    articleDiv.appendChild(description);
    articleDiv.appendChild(waysHeader);
    articleDiv.appendChild(waysList);
    articleDiv.appendChild(benefitsHeader);
    articleDiv.appendChild(benefitsList);

    articlesDiv.appendChild(articleDiv);
  });
}