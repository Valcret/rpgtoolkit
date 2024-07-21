/*asidefichcraft - Menu fichecraft/facelaim*/
document.addEventListener('DOMContentLoaded', function() {
    const closeBtn = document.querySelector('.close-btn');
    const openBtn = document.querySelector('.open-btn');
    const asideMenu = document.querySelector('.menufichecraft');

    function toggleMenu() {
        asideMenu.classList.toggle('open');
        asideMenu.classList.toggle('closed');
    }

    closeBtn.addEventListener('click', toggleMenu);
    openBtn.addEventListener('click', toggleMenu);
});



/*menu du trieur*/
document.addEventListener('DOMContentLoaded', function() {
    // Activer les tooltips Bootstrap
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    tooltipTriggerList.forEach(tooltipTriggerEl => {
        new bootstrap.Tooltip(tooltipTriggerEl);
    });



    // Gestion du clic sur les éléments de navigation
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', function() {
            const sectionId = this.getAttribute('data-section');
            // Masquer toutes les sections
            document.querySelectorAll('.content-section').forEach(section => {
                section.style.display = 'none';
            });
            // Afficher la section correspondante
            document.getElementById(sectionId).style.display = 'block';

            // Activer le style actif pour la navigation
            document.querySelectorAll('.nav-item').forEach(navItem => {
                navItem.classList.remove('active');
            });
            this.classList.add('active');
        });
    });

    // Gestion du clic sur le bouton de basculement de la barre latérale
    const sidebarToggle = document.getElementById('sidebarToggle');
    if (sidebarToggle) {
        sidebarToggle.addEventListener('click', function() {
            document.body.classList.toggle('sb-sidenav-toggled');
            localStorage.setItem(
                'sb|sidebar-toggle',
                document.body.classList.contains('sb-sidenav-toggled')
            );
            // Content will slide on left
            const content = document.getElementById('page-content-wrapper');
            content.classList.toggle('left');
        });
    }




});
/*onglets d'ajouts*/
const onglets = Array.from(document.querySelectorAll(".onglets"));
const contenu = Array.from(document.querySelectorAll(".contenu"));


onglets.forEach(onglet => {
    onglet.addEventListener("click", tabsAnimation)
})

let index = 0;

function tabsAnimation(e) {

    const el = e.target;

    onglets[index].classList.remove("active");
    contenu[index].classList.remove("active-contenu");

    index = onglets.indexOf(el);

    onglets[index].classList.add("active")
    contenu[index].classList.add("active-contenu");

}

/*accordeon section aides*/
document.addEventListener("DOMContentLoaded", function() {
    const headers = document.querySelectorAll(".accordion-header");
    headers.forEach(header => {
        header.addEventListener("click", function() {
            const section = header.parentElement;
            section.classList.toggle("active");
        });
    });
});