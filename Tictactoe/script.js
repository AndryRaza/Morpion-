tour_joueur_1=0;
tour_joueur_2=1;
liste_case=[];
coup_joueur_1=[];
coup_joueur_2=[];
etat_jeu=0;

function case_etoile(that){
    document.getElementById(that.id).style.backgroundImage="url('img/etoile.png')";
}

function case_rond(that){
    document.getElementById(that.id).style.backgroundImage="url('img/rond.png')";
}

function jeu(that){
    if (tour_joueur_1 == 0 && etat_jeu==0)
    {
       if (liste_case.indexOf(that.id) == -1)
       {
        case_etoile(that);
        tour_joueur_1=1;
        tour_joueur_2=0;
        liste_case.push(that.id);
        coup_joueur_1.push(document.getElementById(that.id).innerText);
        win(coup_joueur_1)
       }
        
        
    }

    else if (tour_joueur_2==0 && etat_jeu==0){
        if (liste_case.indexOf(that.id) == -1)
       {
        case_rond(that);
        tour_joueur_1=0;
        tour_joueur_2=1;
        liste_case.push(that.id);
        coup_joueur_2.push(document.getElementById(that.id).innerText);
        win(coup_joueur_2);
       }
        
    }
}

function win(tableau){
    /* ligne */
    if (tableau.indexOf("1") != -1 && tableau.indexOf("2") != -1 && tableau.indexOf("3") !=-1){
        etat_jeu=1;
        aveugler();
    }
    if (tableau.indexOf("4") != -1 && tableau.indexOf("5") != -1 && tableau.indexOf("6") != -1){
        etat_jeu=1;
        aveugler();
    }
    if (tableau.indexOf("7") != -1 && tableau.indexOf("8") != -1 && tableau.indexOf("9") != -1){
        etat_jeu=1;
        aveugler();
    }

    /* colonne */
    if (tableau.indexOf("1") != -1 && tableau.indexOf("4") != -1 && tableau.indexOf("7") != -1){
        etat_jeu=1;
        aveugler();
    }
    if (tableau.indexOf("2") != -1 && tableau.indexOf("5") != -1 && tableau.indexOf("8") != -1){
        etat_jeu=1;
        aveugler();
    }
    if (tableau.indexOf("3") != -1 && tableau.indexOf("6") != -1 && tableau.indexOf("9") != -1){
        etat_jeu=1;
        aveugler();
    }

    /* diagonale */
    if (tableau.indexOf("1") != -1 && tableau.indexOf("5") != -1 && tableau.indexOf("9") != -1){
        etat_jeu=1;
        aveugler();
    }
    if (tableau.indexOf("3") != -1 && tableau.indexOf("5") != -1 && tableau.indexOf("7") != -1){
        etat_jeu=1;
        aveugler();
    }
    
}

function aveugler(){
    document.getElementById("aveuglement").innerText=
    "@keyframes win{"+ 
    "0% {background-color: white;}" +
    "25% {background-color: red;}" +
    "50% {background-color: yellow;}" +
    "75% {background-color: blue;}"+
    "100% {background-color: white;}}";
}

function reset(){
    document.body.style.backgroundColor="white";

    document.getElementById("aveuglement").innerText="";
    document.getElementById("une").style.backgroundImage="";
    document.getElementById("deux").style.backgroundImage="";
    document.getElementById("trois").style.backgroundImage="";
    document.getElementById("quatre").style.backgroundImage="";
    document.getElementById("cinq").style.backgroundImage="";
    document.getElementById("six").style.backgroundImage="";
    document.getElementById("sept").style.backgroundImage="";
    document.getElementById("huit").style.backgroundImage="";
    document.getElementById("neuf").style.backgroundImage="";

    tour_joueur_1=0;
    tour_joueur_2=1;
    liste_case=[];
    coup_joueur_1=[];
    coup_joueur_2=[];
    etat_jeu=0;

}