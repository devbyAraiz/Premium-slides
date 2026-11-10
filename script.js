const range = document.getElementById("range");
const bubble = document.getElementById("rangeValue");

function updateSlider(){
    const value = +range.value;
    const min = +range.min;
    const max = +range.max;

    const percent = (value - min) / (max - min);

    // Update bubble text
    bubble.innerText = value;

    // Bubble position perfect center correction
    const rangeWidth = range.offsetWidth;
    const bubbleWidth = bubble.offsetWidth;
    const offset = percent * (rangeWidth - bubbleWidth);

    bubble.style.left = `${offset + bubbleWidth/2}px`;

    // Blue fill move with thumb
    range.style.background = `
        linear-gradient(
            to right,
            #3b82f6 0%,
            #3b82f6 ${percent*100}%,
            #374151 ${percent*100}%,
            #374151 100%
        )
    `;
}

range.addEventListener("input", updateSlider);
updateSlider();
