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

const swiper = new Swiper('.slider-default', {
    slidesPerView: 'auto',
    loop: false,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});