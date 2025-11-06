function teste() {   
    const vSenha = document.querySelector('#senha');
    const historico = document.querySelector('#historico');
    let contadorHistorico = 1;
    let senhaNormal = localStorage.getItem('senhaNormal');
    let senhaPreferencial = localStorage.getItem('senhaPreferencial');
    let ultSenha = localStorage.getItem('ultSenha');
    let tempo = 0;
    if (!senhaNormal) {
        senhaNormal = 0;
    }
    if (!senhaPreferencial) {
        senhaPreferencial = 0;
    }
    if (!ultSenha) {
        ultSenha = 'N';
    }
    mostrarSenha();
    window.addEventListener('keydown', function(e){
        if ((contadorHistorico % 5) === 0) {
            historico.innerHTML = '';
        }
        tempo +=10;
        if (e.key === 'n' || e.key === 'N') {
            senhaNormal++;
            senhaPreferencial += 3;
            ultSenha = 'N'
            for (let i = 2; i >= 0; i--){
                console.log(i);
                historico.innerHTML +='P-' + parseInt(senhaPreferencial - i).toLocaleString('pt-br', {minimumIntegerDigits: 3}) + ', ' + (tempo - 5 - i) + 'min' + "<br><br>"; 
            }
            historico.innerHTML +='N-' + parseInt(senhaNormal).toLocaleString('pt-br', {minimumIntegerDigits: 3}) + ', ' + tempo + 'min' + "<br><br>"; 
            contadorHistorico ++;

    }
    else if (e.key === 'p' || e.key === 'P') {
        senhaPreferencial++;
        ultSenha = 'P';
        historico.innerHTML +='P-' + parseInt(senhaPreferencial).toLocaleString('pt-br', {minimumIntegerDigits: 3})  + ', ' + (tempo - 5) + 'min'  + "<br><br>"; 
        contadorHistorico ++;

    }
    else if (e.key === 'r' || e.key === "R") {
        ultSenha = 'N';
        senhaNormal = 0;
        senhaPreferencial = 0;
        tempo = 0;
        historico.innerHTML = '';
        console.clear();
    }
    localStorage.getItem('senhaNormal', senhaNormal)
    localStorage.getItem('senhaPreferencial', senhaPreferencial)
    localStorage.getItem('ultSenha', ultSenha)
    mostrarSenha();
});
function mostrarSenha() {
    if (ultSenha === 'N') {
        vSenha.innerHTML = 'N-' + parseInt(senhaNormal).toLocaleString('pt-br', {minimumIntegerDigits: 3});
    }
    else{
        vSenha.innerHTML = 'P-' + parseInt(senhaPreferencial).toLocaleString('pt-br', {minimumIntegerDigits: 3});
    }
    console.log(senhaNormal);
    console.log(senhaPreferencial);
    console.log(ultSenha);
}
}