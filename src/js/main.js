window.onload = (() => {
    loadingPage();
    showCore();
    sideBarToggle();
    var connectTabs = new pureJsTab();
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
const pureJsTab = () => {
    var bindAll = function () {
        var menuElements = document.querySelectorAll('[data-tab]');
        for (var i = 0; i < menuElements.length; i++) {
            menuElements[i].addEventListener('click', change, false);
        }
    }

    var clear = function () {
        var menuElements = document.querySelectorAll('[data-tab]');
        for (var i = 0; i < menuElements.length; i++) {
            menuElements[i].classList.remove('active');
            var id = menuElements[i].getAttribute('data-tab');
            document.getElementById(id).classList.remove('active');
        }
    }

    var change = function (e) {
        clear();
        e.target.classList.add('active');
        var id = e.currentTarget.getAttribute('data-tab');
        document.getElementById(id).classList.add('active');
    }
    bindAll();
}