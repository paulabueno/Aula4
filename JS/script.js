const posts = [

    {
        title: "Google Chrome",
        content: "O Google Chrome é um navegador de internet desenvolvido pela Google. Foi lançado pela primeira vez em setembro de 2008, para o Microsoft Windows, e mais tarde foi portado para Linux, Mac, iOS e Android.",
        img: "img/chrome.png"
    },

    {
        title: "Mozilla Firefox",
        content: "Mozilla Firefox é um navegador livre e multiplataforma desenvolvido pela Mozilla Foundation com ajuda de centenas de colaboradores.",
        img: "img/chrome.png"},

    {
        title: "Microsft Edge",
        content: "O Microsoft Edge é um navegador da internet desenvolvido pela Microsoft. Foi lançado pela primeira vez para Windows 10 e Xbox One em 2015, depois para Android e iOS em 2017, para macOS, e distribuições Linux, como Ubuntu, Fedora e OpenSUSE e em suas derivações em 2020.",
        img: "img/chrome.png"},

];

const wrapper = document.getElementById("posts");
for (var i=0; i<posts.length; i++) {
    const postData = posts[i];
    console.log(postData);

    const article = document.createElement('article');
    article.classList.add('article');

    const title = document.createElement('h2');
    title.classList.add('article-title');
    const titleText = document.createTextNode(postData.title);
    title.appendChild(titleText);
    article.appendChild(title);

    const content = document.createElement('p');
    const contentText = document.createTextNode(postData.content);
    content.appendChild(contentText);
    article.appendChild(content);

   
    
    wrapper.appendChild(article);
}