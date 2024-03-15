function listarMusicas() {
    const url = "https://etec24-3dc8c-default-rtdb.firebaseio.com/musicas.json";
    fetch(url)
    .then(response => response.json())
    .then(data => {
    const corpoTabela = document.getElementById("corpoTabela");
    corpoTabela.innerHTML = "";
    for (let key in data) {
    const musica = data[key];
    const tr = document.createElement("tr");
    tr.innerHTML = `
    <td>${musica.nome}</td>
    <td>${musica.artista}</td>
    <td>${musica.album}</td> <!-- Nova coluna -->
    `;
    corpoTabela.appendChild(tr);
    }
    })
    .catch(error => {
    console.error("Erro ao listar músicas:", error);
    });
   }