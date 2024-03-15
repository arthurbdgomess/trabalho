let dados = document.querySelector("#dados");
let perfil = document.querySelector("#perfil");
let foto = document.querySelector("#foto");
auth.onAuthStateChanged(firebaseUser => {
 if (firebaseUser) {
 console.log(auth.currentUser.email + " logado" );
 dados.style.display = "block";
 perfil.innerHTML = auth.currentUser.email + " " + auth.currentUser.displayName;

 if (auth.currentUser.photoURL) {
 foto.innerHTML = "<img src='"+ auth.currentUser.photoURL + "'>";
 }
 window.location.pathname = "home.html";
 } else {
 dados.style.display = "none";
 window.location.pathname = "/";
 }
});
let btnSair = document.querySelector("#btnSair");
btnSair.addEventListener("click", () => {
 auth.signOut();
});
let emailCad = document.querySelector("#emailCad");
let senhaCad = document.querySelector("#senhaCad");
let senhaCad2 = document.querySelector("#senhaCad2");
let btnCad = document.querySelector("#btnCad");
btnCad.addEventListener("click", cadastrar);
function cadastrar() {
 if (senhaCad.value === senhaCad2.value) {
 auth.createUserWithEmailAndPassword(emailCad.value, senhaCad.value)
 .then(function(user){ console.log(auth.currentUser.email); })
 .catch(function(error){ console.log(error.message); });
 }
}
let emailEntrar = document.querySelector("#emailEntrar");
let senhaEntrar = document.querySelector("#senhaEntrar");
let btnEntrar = document.querySelector("#btnEntrar");
let btnGoogle = document.querySelector("#btnGoogle");
btnEntrar.addEventListener("click", entrar);
btnGoogle.addEventListener("click", () => {
 let provider = new firebase.auth.GoogleAuthProvider();
 signIn(provider);
});
function entrar() {
 auth.signInWithEmailAndPassword(emailEntrar.value, senhaEntrar.value);
}
function signIn(provider) {
 firebase.auth().signInWithPopup(provider)
 .then(function(resultado){
 console.log(resultado);
 })
 .catch(function(error){
 console.log(error);
 alert("Falha na autenticação");
 });
}