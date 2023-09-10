function toggleMode() {
    const html = document.documentElement

    // alterar o valor da classe do html para light
    html.classList.toggle("light");

    // pegar a tag img do profile
    const img = document.querySelector("#profile img")

    // substituir a imagem
    if (html.classList.contains("light")) {
        // se tiver light mode, adicionar a imagem light
        img.setAttribute("src", "./assets/avatar-light.png")
    } else {
        // set tiver sem light mode, manter a imagem normal
        img.setAttribute("src", "./assets/avatar.png")
    }
}