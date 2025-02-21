'use strict'

const loginContainer = document.getElementById('login-container');

const moveOverlay = () => loginContainer.classList.toggle('move');

document.getElementById('btn-register').addEventListener('click', moveOverlay);
document.getElementById('btn-login').addEventListener('click', moveOverlay);

document.getElementById('register-mobile').addEventListener('click', moveOverlay);
document.getElementById('login-mobile').addEventListener('click', moveOverlay);