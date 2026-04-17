const contact = document.getElementById('Contact');
const ferme = document.getElementById('ferme');
const popup = document.getElementById('popup');
const popupinfo = document.getElementById('popinfo');
const fermeinfo = document.getElementById('fermeinfo');
const info = document.getElementById('info');
info.addEventListener('click', afficheinfo);
fermeinfo.addEventListener('click', fermepopupinfo);
function afficheinfo(){
    popupinfo.removeAttribute('hidden');
}
function fermepopupinfo(){
    popupinfo.setAttribute('hidden', '');
}
contact.addEventListener('click', afficherpopup);
ferme.addEventListener('click', fermepopup);

function afficherpopup(){
    popup.removeAttribute('hidden');
}

function fermepopup(){
    popup.setAttribute('hidden', '');
}

emailjs.init('ofK6k19-75GVWjO3p');
const lancer = document.getElementById('envoyer');



function envoyer(){
    const mail = document.getElementById('mail').value;
    const message = document.getElementById('message').value;

    if (!mail || !message){
        alert("Merci de remplir tous les champs.")
        return;
    }
    const params = {
        from_email: mail,
        message: message,
    };

    emailjs.send("service_u3oeo7o", "template_8gxt2jh", params).then(() =>{
        alert("Message envoyé !")
        document.getElementById('mail').value = "";
        document.getElementById('message').value = "";
        document.getElementById('popup').hidden = true;
    } 
)
.catch((err)=>{
    alert("Erreur lors de l'envoi : " + err.text);
});
    
}
lancer.addEventListener('click', envoyer);

const explorer = document.getElementById('EnSavoir');

function redirection(){
    window.location.href="http://127.0.0.1:5500/collection.html?id=surete";
}

const explorer2 = document.getElementById('EnSavoir2');

function redirection2(){
    window.location.href="http://127.0.0.1:5500/collection.html?id=ete";
}
explorer2.addEventListener('click', redirection2);
explorer.addEventListener('click', redirection);