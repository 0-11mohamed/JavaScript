const buttons = document.querySelectorAll('.btn_jeu');
const result = { win: 0, draw: 0, lose: 0 };
const choix = ['pierre', 'feuille', 'ciseaux'];

buttons.forEach(button => {
    button.addEventListener("click", function() {
        let choix_j = button.id;
        let choix_r = choix[Math.floor(Math.random()*3)];
        let img = document.getElementById("img_result");
        
        if(choix_j == choix_r){
            result.draw++;
            img.src = "assets/draw.png";
        } else if((choix_j == 'pierre' && choix_r == 'ciseaux') || (choix_j == 'feuille' && choix_r == 'pierre') || (choix_j == 'ciseaux' && choix_r == 'feuille')) {
            result.win++;
            img.src = "assets/win.png";
        } else if((choix_j == 'pierre' && choix_r == 'feuille') || (choix_j == 'feuille' && choix_r == 'ciseaux') || (choix_j == 'ciseaux' && choix_r == 'pierre')) {
            result.lose++;
            img.src = "assets/lose.png";
        }

        document.getElementById("score").textContent= "Victoire : " + result.win + ". Défaite : " + result.lose + ". égalité : " + result.draw;
    });
});

