function road() {
    let circles = document.querySelectorAll(".road__circle");
    let lines = document.querySelectorAll(".road__line");
    let tabs = document.querySelectorAll(".tabs__item");
    let prev = document.querySelector(".controls-plan__button_prev");
    let next = document.querySelector(".controls-plan__button_next");

    let arrCircles = Array.from(circles);
    let arrLines = Array.from(lines);
    let arrTabs = Array.from(tabs);
    let currentIndex = 0;

    next.addEventListener("click", function() {

        if (currentIndex < arrCircles.length - 1) currentIndex++;

        if (currentIndex < arrCircles.length) {
            arrCircles[currentIndex].classList.add("road__circle_act");
            arrCircles[currentIndex].classList.add("road__circle_delay-plus");

            arrTabs.forEach(tab => {
                tab.classList.remove("tabs__item_act");
            })
            arrTabs[currentIndex].classList.add("tabs__item_act");

            arrLines[currentIndex - 1].classList.add("road__line_act");
            arrLines[currentIndex - 1].classList.remove("road__line_delay-plus");
        }
    })

    prev.addEventListener("click", function() {

        if (currentIndex < arrCircles.length && currentIndex > 0) {
            arrCircles[currentIndex].classList.remove("road__circle_act");
            arrCircles[currentIndex].classList.remove("road__circle_delay-plus");
            arrCircles[currentIndex].classList.add("road__circle_delay-minus");

            arrTabs.forEach(tab => {
                tab.classList.remove("tabs__item_act");
            })
            arrTabs[currentIndex - 1].classList.add("tabs__item_act");
            
            arrLines[currentIndex - 1].classList.remove("road__line_act");
            arrLines[currentIndex - 1].classList.add("road__line_delay-plus");
        }
        if (currentIndex > 0) currentIndex--;
    })
}

export default road;