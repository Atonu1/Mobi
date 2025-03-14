// Some random colors for balls
const colors = ["#3CC157", "#2AA7FF", "#1B1B1B", "#FCBC0F", "#F85F36"];

const numBalls = 50;
const balls = [];

// Creating balls and appending them to the container
for (let i = 0; i < numBalls; i++) {
    let ball = document.createElement("div");
    ball.classList.add("ball");
    ball.style.background = colors[Math.floor(Math.random() * colors.length)];
    ball.style.left = `${Math.random() * 100}%`; // Percentage to ensure balls are within container
    ball.style.top = `${Math.random() * 100}%`;   // Percentage to ensure balls are within container
    ball.style.transform = `scale(${Math.random()})`;
    ball.style.width = `${Math.random() * 3 + 1}em`;  // Ball size between 1em and 4em
    ball.style.height = ball.style.width;

    balls.push(ball);
    document.querySelector('.container').append(ball); // Append balls to the container, not the body
}

// Keyframes for ball animation
balls.forEach((el, i, ra) => {
    let to = {
        x: Math.random() * (i % 2 === 0 ? -5 : 5),
        y: Math.random() * 5
    };

    let anim = el.animate(
        [
            { transform: "translate(0, 0)" },
            { transform: `translate(${to.x}rem, ${to.y}rem)` }
        ],
        {
            duration: (Math.random() + 1) * 2000, // random duration
            direction: "alternate",
            fill: "both",
            iterations: Infinity,
            easing: "ease-in-out"
        }
    );
});
