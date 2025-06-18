const lightbox = GLightbox({
    selector: ".lightbox",
});

function getTabs() {
    const tabsWrapper = document.querySelectorAll(".tabs-wrapper");

    tabsWrapper.forEach((wrapper) => {
        let tabsBtns = wrapper.querySelectorAll("[data-tab]"),
            tabsContent = wrapper.querySelector(".tabs-content"),
            tabsAll = wrapper.querySelectorAll(".tabs-content .tab-item"),
            tabActiveHeight = wrapper.querySelector(".tabs-content .active");

        tabsBtns.forEach((tab) => {
            let tabName = tab.dataset.tab;

            tab.addEventListener("click", () => {
                let tabCurrent = document.querySelector("#" + tabName);

                tabsBtns.forEach((tab) => {
                    tab.classList.remove("active");
                });
                tab.classList.add("active");
                tabsAll.forEach((tab) => {
                    tab.classList.remove("active");
                });

                tabCurrent.classList.add("active");
            });
        });
    });
}

getTabs();

function allCases() {
    let allSliders = document.querySelectorAll('.section-cases-ac .cases-slider')

    allSliders.forEach(slider => {
        let prev = slider.querySelector('.btn-prev'),
            next = slider.querySelector('.btn-next')
        new Swiper(slider, {
            slidesPerView: "auto",
            loop: false,
            navigation: {
                nextEl: next,
                prevEl: prev
            },
        });
    })

}

allCases()

function getScrollTabs() {
    let allLinks = document.querySelectorAll('[data-scroll-tab]')

    if(!allLinks) return

    allLinks.forEach(link => {
        let tabName = link.getAttribute('data-scroll-tab')

        link.addEventListener('click', () => {
            let tabCurrent = document.querySelector("#" + tabName),
                wrapper = document.querySelector('.tabs-wrapper'),
                tabsBtns = wrapper.querySelectorAll("[data-tab]")
            tabsContent = wrapper.querySelector(".tabs-content"),
                tabsAll = wrapper.querySelectorAll(".tabs-content .tab-item"),

                tabsBtns.forEach((tab) => {
                    tab.classList.remove("active");

                    if(tabName == tab.getAttribute('data-tab')) {
                        tab.classList.add("active");
                    }
                });

            tabsAll.forEach((tab) => {
                tab.classList.remove("active");
            });

            tabCurrent.classList.add("active");
        })
    })
}

getScrollTabs()


const swiperTimeLine = new Swiper(".timeline-slider", {
    slidesPerView: "auto",
    loop: false,
    navigation: {
        nextEl: ".timeline-slider-wrapper .btn-next",
        prevEl: ".timeline-slider-wrapper .btn-prev",
    },
});