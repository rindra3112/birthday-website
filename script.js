/*====================================
    PASSWORD
====================================*/

const PASSWORD = "capii imupp";

function checkPassword() {

    const input = document.getElementById("password").value.trim().toLowerCase();
    const error = document.getElementById("error");

    if (input === PASSWORD.toLowerCase()) {

        error.style.color = "#ffffff";
        error.innerHTML = "❤️ Password Benar ❤️";

        document.body.style.transition = "1s";
        document.body.style.opacity = "0";

        setTimeout(() => {

            window.location.href = "pages/home.html";

        }, 1200);

    } else {

        error.style.color = "#ffffff";

        error.innerHTML = "🥺 Yahh passwordnya masih salah, coba lagi ya sayangkuuuu ❤️";

        const card = document.querySelector(".card");

        if(card){

            card.classList.add("shake");

            setTimeout(() => {

                card.classList.remove("shake");

            }, 500);

        }

    }

}

/*====================================
    ENTER
====================================*/

const passwordInput = document.getElementById("password");

if(passwordInput){

    passwordInput.addEventListener("keypress", function(e){

        if(e.key === "Enter"){

            checkPassword();

        }

    });

}

/*====================================
    TYPING EFFECT
====================================*/

const text = `

Selamat ulang tahun yaahhh capiiii AKA Bellatrix ayu prastowo❤️
❤️

`;

const typing = document.getElementById("typing");

let i = 0;

if(typing){

    function typeWriter(){

        if(i < text.length){

            typing.innerHTML += text.charAt(i);

            i++;

            setTimeout(typeWriter,40);

        }

    }

    typeWriter();

}

/*====================================
    HOME -> GALLERY
====================================*/

function nextPage(){

    window.location.href = "gallery.html";

}

/*====================================
    GALLERY -> LETTER
====================================*/

function letterPage(){

    const music = document.getElementById("galleryMusic");

    if(music){

        music.pause();

        music.currentTime = 0;

    }

    setTimeout(()=>{

        window.location.href="letter.html";

    },300);

}