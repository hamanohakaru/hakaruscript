const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 300;
canvas.height = 600;
ctx.lineWidth = 1;

const colors = ["#ff3838", "#ffb8b8", "#c56cf0", "#ff9f1a", "#fff200", "#32ff7e", "#7efff5", "#18dcff", "#7d5fff"];

function onclick(event) {
    ctx.beginPath();
    ctx.moveTo(150, 300);
    const color = colors[Math.floor(Math.random() * colors.length)];
    ctx.strokeStyle = color;
    ctx.lineTo(event.offsetX, event.offsetY);
    ctx.stroke();
}

canvas.addEventListener("mousemove", onclick);
