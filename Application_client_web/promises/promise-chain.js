// Explication du fonctionnement de promise en JS

let addToEndOfDiv = (htmlString, divId) => {
    //ajouter le code HTML à la fin d'un DIV
    // params : htmlString = code HTML à ajouter, divId = ID du div
    // return : vide

        document.getElementById(divId).insertAdjacentHTML('beforeend', htmlString)
}

let collectFund = () => {
    return new Promise(function(resolve, reject){
        resolve('Amount reached'); // on résoud directement, on ne teste pas le résultat     
    });
};

let buyConsole = (message) => {
    return new Promise( function(resolve,reject){
        resolve(message + ' console bought');
    })
}

let playRDR2 = (message) => {
    return new Promise( function(resolve,reject){
        resolve(message + ' play Red Dead Redemption 2');
    });
}
    // promesse : nettoyer la cuisine (événement)
    // params : vide
    // return chaine contenant le statut de l'événement

//});

// ------------------------ MAIN

document.addEventListener("DOMContentLoaded", function(){
  // On DOM ready

    // Les promesses sont dépendantes les unes des autres, elles s'exécutent dans l'ordre au fur et à mesure qu'elles se terminent 
    // Dans ce contexte, la 2e promesse a besoin des données renvoyées par la 1ere pour s'exécuter et ainsi de suite
//    collectFund().then (function(result){
//        return buyConsole(result);
//    }).then (function(result){
 //       return playRDR2(result);
 //   }).then (function(result){
//        addToEndOfDiv(' Tony Stank finished successfully : ' + result, 'consoleview');
 //   }).catch(function(){
 //       addToEndOfDiv("Something went Wong, ( you know Wong ... the sidekick of Doctor Strange ... I'm outside)", "consoleview")
 //   })

// on souhaite exécuter les 3 promesses : les 3 doivent être satisfaites mais ne sont pas dépendantes les unes des autres
Promise.all([collectFund(), buyConsole('yop'), playRDR2('yop')]).then(function(){
    addToEndOfDiv('<p>All tasks (promises) finished successfully</p>', 'consoleview');
}).catch(function(){
    addToEndOfDiv('<p>Oupsi on a une erreur </p>', 'consoleview');
})

// on souhaite qu'au moins 1 promesse soit satisfaite
Promise.race([collectFund(), buyConsole('yop'), playRDR2('yop')]).then(function(){
    addToEndOfDiv('<p>One task or more (promises) finished successfully</p>', 'consoleview');
}).catch(function(){
    addToEndOfDiv('<p>Oupsi on a une erreur </p>', 'consoleview');
})

});

