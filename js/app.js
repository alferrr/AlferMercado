addEventListener("DOMContentLoaded", () => {
  const cursor = document.querySelector(".cursor");
  let mouseX = 0;
  let mouseY = 0;
  let cursorX = 0;
  let cursorY = 0;

  document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function animateCursor() {
    cursorX += (mouseX - cursorX) * 0.2;
    cursorY += (mouseY - cursorY) * 0.2;

    cursor.style.left = cursorX + "px";
    cursor.style.top = cursorY + "px";

    requestAnimationFrame(animateCursor);
  }

  animateCursor();

  // aos

  window.addEventListener("load", () => {
    AOS.init({
      duration: 1000,
      delay: 100,
      once: true,
      offset: 100,
    });

    setTimeout(() => {
      AOS.refresh();
    }, 500);
  });
});
