// Функция для всех табов
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


function getToolTip() {
    let allBtns = document.querySelectorAll('[data-tooltip]')
    if(!allBtns) return
    allBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            btn.classList.toggle('open')
        })
        document.addEventListener( 'click', (e) => {
            const withinBoundaries = e.composedPath().includes(btn);

            if ( ! withinBoundaries ) {
                btn.classList.remove('open')
            }
        })

    })
}

getToolTip()