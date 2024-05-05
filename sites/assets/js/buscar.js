
function search() {
    // Limpiar los resultados anteriores
    document.getElementById("results").innerHTML = "";

    const searchTerm = document.getElementById("searchInput").value.toLowerCase();

    // Buscar en alimentos
    const alimentosPage = "alimentos.html";
    searchInPage(alimentosPage, searchTerm, "Alimentos");

    // Buscar en juguetes
    const juguetesPage = "juguetes.html";
    searchInPage(juguetesPage, searchTerm, "Juguetes");

    // Buscar en disfraces
    const disfracesPage = "disfraces.html";
    searchInPage(disfracesPage, searchTerm, "Disfraces");
}

function searchInPage(page, term, category) {
    fetch(page)
        .then(response => response.text())
        .then(html => {
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, "text/html");
            const cards = doc.getElementsByClassName("card");

            for (let i = 0; i < cards.length; i++) {
                const card = cards[i];
                const title = card.getElementsByClassName("card-title")[0].innerText.toLowerCase();
                if (title.includes(term)) {
                    const result = "<p>" + category + ": " + card.outerHTML + "</p>";
                    document.getElementById("results").innerHTML += result;
                }
            }
        })
        .catch(error => console.error('Error:', error));
}