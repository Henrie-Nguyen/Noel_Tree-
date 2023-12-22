document.addEventListener("DOMContentLoaded", function () {
    createSnowflakes();
});

function createSnowflakes() {
    const snowflakeContainer = document.querySelector(".snowflakes");

    for (let i = 0; i < 50; i++) {
        const snowflake = document.createElement("div");
        snowflake.className = "snowflake";
        snowflake.style.left = Math.random() * window.innerWidth + "px";
        snowflake.style.top = Math.random() * window.innerHeight + "px";
        snowflake.style.animationDuration = Math.random() * 3 + 2 + "s";
        snowflake.style.opacity = Math.random();
        snowflakeContainer.appendChild(snowflake);
    }
}
