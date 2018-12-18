// Exercice pour implémenter une requête XMR 

function showGithubUsers(data){
    // Affiche la reponse de github users
    // params : réponse de Github à la requête xhr 
        let githubUsers = JSON.parse(data); // transforme la réponse en objet JSON
        console.log(githubUsers);
}




function sendXhr(url, success){
    // envoie une requête à Github ou autre
    // params : url = URL ou route de l'API, success = fonction à appeler en cas de succès
    // return : vide

    let xhr = new XMLHttpRequest();
    xhr.open('GET',url);
    xhr.send();
    // en cas de réponse ok
    xhr.addEventListener('load', function(e){
        success(e.target.responseText)} );
    // en cas d'erreur
    xhr.addEventListener('error', function(e){ 
        console.log('erreur retournée :',e)    });

}

sendXhr('https://api.github.com/users', showGithubUsers);
console.log( 'requête Github envoyée');