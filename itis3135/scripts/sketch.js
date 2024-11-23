function setup() {
    createCanvas(600, 400);
    background(220);
}

function draw() {
    if (mouseIsPressed) {
        fill(random(255), random(255), random(255));
        ellipse(mouseX, mouseY, 50, 50);
    }
}