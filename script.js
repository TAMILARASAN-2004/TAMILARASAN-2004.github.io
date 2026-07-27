/* =========================
   MOBILE MENU
========================= */

const menuBtn = document.getElementById("menuBtn");

const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", function () {

    navLinks.classList.toggle("active");

});


/* Close mobile menu after clicking a link */

const navigationLinks =
    document.querySelectorAll(".nav-links a");

navigationLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");

    });

});


/* =========================
   CURRENT YEAR
========================= */

const yearElement =
    document.getElementById("year");

const currentYear =
    new Date().getFullYear();

yearElement.textContent =
    currentYear;


/* =========================
   CERTIFICATE MODAL
========================= */

const certificateModal =
    document.getElementById("certificateModal");

const viewCertificate =
    document.getElementById("viewCertificate");

const closeModal =
    document.getElementById("closeModal");


/* Open certificate */

viewCertificate.addEventListener(
    "click",
    function () {

        certificateModal.classList.add("active");

    }
);


/* Close certificate */

closeModal.addEventListener(
    "click",
    function () {

        certificateModal.classList.remove("active");

    }
);


/* Close when clicking outside image */

certificateModal.addEventListener(
    "click",
    function (event) {

        if (event.target === certificateModal) {

            certificateModal.classList.remove("active");

        }

    }
);

"C:\Users\Tamilarasan\Desktop\project\images\WhatsApp Image 2026-07-06 at 8.10.54 PM.jpeg"
/* Close modal with Escape key */

document.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key === "Escape" &&
            certificateModal.classList.contains("active")
        ) {

            certificateModal.classList.remove("active");

        }

    }
);