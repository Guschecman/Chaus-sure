const params = new URLSearchParams(window.location.search);
const id = params.get('id');
if (!id) {
    window.location.href = "index.html";
}
const collections = {
    surete: {
        titre: "Collection Sûreté",
        description: "Robustesse et style pensés pour les environnements exigeants.",
        image: "col1.webp"
    },
    ete: {
        titre: "Collection Été",
        description: "Légèreté, respirabilité et élégance pour affronter la chaleur avec style.",
        image: "col2.webp"
    }
};

const collection = collections[id];
if (!collection) {
    window.location.href = "index.html";
}

// AVEC CA, ON REMPLIT LA PAGE EN FONCTION DE LA COLLECTION
document.getElementById('titre').textContent = collection.titre;
document.getElementById('description').textContent = collection.description;
document.getElementById('image').src = collection.image;
document.getElementById('image').alt = collection.titre;
const retour = document.getElementById('retour');
retour.addEventListener('click', function(){
    window.location.href = "index.html"
});