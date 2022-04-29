window.onload = () => {
    loadingPage()
    showCore()
    sideBarToggle()
    createSelect()
    initSwiper()
    var connectTabs = new pureJsTab()
}
const showCore = () => {
    var x = document.getElementById('core')
    var o = document.querySelector('.show-pass')
    if (o) {
        o.addEventListener('click', (event) => {
            if (x.type === 'password') {
                x.type = 'text'
            } else {
                x.type = 'password'
            }
        })
    }
}
const loadingPage = () => {
    var preload = document.querySelector('#loading-container')
    preload.classList.add('preload-finish')
}
const sideBarToggle = () => {
    var sideBarOpen = document.querySelector('#sidebar-nav .open-sidebar ')
    var sideBar = document.querySelector('#sidebar-nav')
    sideBarOpen.onclick = () => {
        sideBar.classList.toggle('is-open')
        document.querySelector('#overlay').classList.toggle('active')
    }
    document.querySelector('#overlay').onclick = () => {
        sideBar.classList.remove('is-open')
        document.querySelector('#overlay').classList.remove('active')
    }
}
const pureJsTab = () => {
    var bindAll = function () {
        var menuElements = document.querySelectorAll('[data-tab]')
        for (var i = 0; i < menuElements.length; i++) {
            menuElements[i].addEventListener('click', change, false)
        }
    }

    var clear = function () {
        var menuElements = document.querySelectorAll('[data-tab]')
        for (var i = 0; i < menuElements.length; i++) {
            menuElements[i].classList.remove('active')
            var id = menuElements[i].getAttribute('data-tab')
            document.getElementById(id).classList.remove('active')
        }
    }

    var change = function (e) {
        clear()
        e.target.classList.add('active')
        var id = e.currentTarget.getAttribute('data-tab')
        document.getElementById(id).classList.add('active')
    }
    bindAll()
}

const createSelect = () => {
    var x, i, j, l, ll, selElmnt, a, b, c;
    x = document.getElementsByClassName("custom-select");
    l = x.length;

    for (i = 0; i < l; i++) {
        selElmnt = x[i].getElementsByTagName("select")[0];
        ll = selElmnt.length;
        a = document.createElement("DIV");
        a.setAttribute("class", "select-selected");
        a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
        x[i].appendChild(a);
        b = document.createElement("UL");
        b.setAttribute("class", "select-items select-hide");

        for (j = 1; j < ll; j++) {
            c = document.createElement("LI");
            c.innerHTML = selElmnt.options[j].innerHTML;
            c.addEventListener("click", function (e) {
                var y, i, k, s, h, sl, yl;
                s = this.parentNode.parentNode.getElementsByTagName("select")[0];
                sl = s.length;
                h = this.parentNode.previousSibling;

                for (i = 0; i < sl; i++) {
                    if (s.options[i].innerHTML == this.innerHTML) {
                        s.selectedIndex = i;
                        h.innerHTML = this.innerHTML;
                        y = this.parentNode.getElementsByClassName("same-as-selected");
                        yl = y.length;
                        for (k = 0; k < yl; k++) {
                            y[k].removeAttribute("class");
                        }
                        this.setAttribute("class", "same-as-selected");
                        break;
                    }
                }
                h.click();
            });
            b.appendChild(c);
        }
        x[i].appendChild(b);
        a.addEventListener("click", function (e) {
            e.stopPropagation();
            closeAllSelect(this);
            this.nextSibling.classList.toggle("select-hide");
            this.classList.toggle("select-arrow-active");
        });
    }

    function closeAllSelect(elmnt) {
        var x, y, i, xl, yl, arrNo = [];
        x = document.getElementsByClassName("select-items");
        y = document.getElementsByClassName("select-selected");
        xl = x.length;
        yl = y.length;
        for (i = 0; i < yl; i++) {
            if (elmnt == y[i]) {
                arrNo.push(i)
            } else {
                y[i].classList.remove("select-arrow-active");
            }
        }
        for (i = 0; i < xl; i++) {
            if (arrNo.indexOf(i)) {
                x[i].classList.add("select-hide");
            }
        }
    }
    document.addEventListener("click", closeAllSelect);
}
const initSwiper = () => {
    var swiper = new Swiper(".layout-circle", {
        slidesPerView: 5,
        spaceBetween: 16,
        loop: true,
        loopFillGroupWithBlank: true,
        navigation: {
            nextEl: ".layout-circle .swiper-header .swiper__arrows .swiper-button-next",
            prevEl: ".layout-circle .swiper-header .swiper__arrows .swiper-button-prev",
        },
        breakpoints: {
            640: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 4,
            },
            1281: {
                slidesPerView: 5,
            },
        },

    });
}