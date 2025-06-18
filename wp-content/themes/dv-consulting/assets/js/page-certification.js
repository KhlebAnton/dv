window.onload = function() {
    let current_url = window.location.href;
    if (current_url.includes("../index.html#")) {
        let new_url = current_url.replace("../index.html#", "#");
        window.history.replaceState({}, document.title, new_url);
    }
};
setTimeout(()=>{
    if(window.location.hash === '#to-nav') {
        document.querySelector('#nav-cert').scrollIntoView({ block: "center", behavior: "smooth" });
    }
}, 500);
