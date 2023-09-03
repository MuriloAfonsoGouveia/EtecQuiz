function selecionarMateria() {
    let selecaoMateria = 
        document.getElementById('selecaoMateria');
    sessionStorage.setItem('materia-selecionada', selecaoMateria.value);
}