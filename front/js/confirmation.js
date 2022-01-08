
            // Récupération et affichage orderID

let confirmationParaf = document.querySelector("div.confirmation > p");
confirmationParaf.textContent += new URLSearchParams(window.location.search).get("confirm");