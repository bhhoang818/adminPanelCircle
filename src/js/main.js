window.onload = (() => {
    loadingPage();
    showCore();
    sideBarToggle();
});
const showCore = () => {
    var x = document.getElementById("core");
    var o = document.querySelector('.show-pass');
    if (o) {
        o.addEventListener('click', event => {
            if (x.type === "password") {
                x.type = "text";
            } else {
                x.type = "password";
            }
        });
    }
}
const loadingPage = () => {
    var preload = document.querySelector('#loading-container');
    preload.classList.add('preload-finish');
}
const sideBarToggle = () => {
    var sideBarOpen = document.querySelector('#sidebar-nav .open-sidebar ');
    var sideBar = document.querySelector('#sidebar-nav');
    sideBarOpen.onclick = () => {
        sideBar.classList.toggle('is-open');
        document.querySelector('#overlay').classList.toggle('active');
    }
    document.querySelector('#overlay').onclick = () => {
        sideBar.classList.remove('is-open');
        document.querySelector('#overlay').classList.remove('active');
    };
}