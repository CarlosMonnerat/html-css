'use strict'

const loginContainer = document.getElementById('login-container');

const moveOverlay = () => loginContainer.classList.add('move');



document.getElementById('btn-register').addEventListener('click', moveOverlay);