var div = document.getElementById('newsarticles') 
function addArticle(url, tit, desc) {
    var article = document.createElement('div')
    var title = document.createElement('a')
    var fullTitle = document.createElement('h2')
    var description = document.createElement('h5')

    article.className = 'newsarticle'
    title.href = url
    fullTitle.innerHTML = tit
    description.innerHTML = desc
    title.style.color = 'black'
    title.style.textDecoration = 'underline'
    
    div.appendChild(article)
    article.appendChild(title)
    title.appendChild(fullTitle)
    article.appendChild(description)

}
addArticle('"salemnews.com/sports/beverly-at-salem-thanksgiving-football-preview/article_5ba18a58-69d6-11ed-8305-3b8143a878b4.html"','Salem vs. Beverly', 'BEVERLY (3-6) AT SALEM (6-4)')