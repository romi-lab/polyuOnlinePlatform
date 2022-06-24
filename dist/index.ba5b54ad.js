function onClick(element) {
    document.getElementById("img01").src = element.src;
    document.getElementById("modal01").style.display = "block";
    var captionText = document.getElementById("caption");
    captionText.innerHTML = element.alt;
}
// Toggle between showing and hiding the sidebar when clicking the menu icon
var mySidebar = document.getElementById("mySidebar");
function w3_open() {
    if (mySidebar.style.display === "block") mySidebar.style.display = "none";
    else mySidebar.style.display = "block";
}
// Robot
function robotLink() {
    window.open("https://jinlibot7.github.io/RobotSimulatorWithLoader/");
}
function buttonHoverRobot() {
    document.getElementById("robotArmImg").src = "https://raw.githubusercontent.com/JinliBot7/PolyUVirtualLabPortfolio/main/src/images/robot.gif";
}
function buttonHoverRobotOff() {
    document.getElementById("robotArmImg").src = "https://raw.githubusercontent.com/JinliBot7/PolyUVirtualLabPortfolio/main/src/images/robotCover.png";
}
// Projectile
function projectileLink() {
    window.open("https://jinlibot7.github.io/ProjectileMotion/");
}
function buttonHoverProjectile() {
    document.getElementById("projectileImg").src = "https://raw.githubusercontent.com/JinliBot7/PolyUVirtualLabPortfolio/main/src/images/projectile.gif";
}
function buttonHoverProjectileOff() {
    document.getElementById("projectileImg").src = "https://raw.githubusercontent.com/JinliBot7/PolyUVirtualLabPortfolio/main/src/images/projectileCover.png";
}
// Spring
function springLink() {
    window.open("https://jinlibot7.github.io/massSpringDamper/");
}
function buttonHoverSpring() {
    document.getElementById("springImg").src = "https://raw.githubusercontent.com/JinliBot7/PolyUVirtualLabPortfolio/main/src/images/spring.gif";
}
function buttonHoverSpringOff() {
    document.getElementById("springImg").src = "https://raw.githubusercontent.com/JinliBot7/PolyUVirtualLabPortfolio/main/src/images/springCover.png ";
}
// Cartpole
function cartpoleLink() {
    window.open("https://jinlibot7.github.io/CartPole/");
}
function buttonHoverCartpole() {
    document.getElementById("cartpoleImg").src = "https://raw.githubusercontent.com/JinliBot7/PolyUVirtualLabPortfolio/main/src/images/cartpole.gif";
}
function buttonHoverCartpoleOff() {
    document.getElementById("cartpoleImg").src = "https://raw.githubusercontent.com/JinliBot7/PolyUVirtualLabPortfolio/main/src/images/cartpoleCover.png";
}

//# sourceMappingURL=index.ba5b54ad.js.map
