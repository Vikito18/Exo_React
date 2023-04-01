import React from "react";

const Bubble = () => {
  const generator = () => {
    const bubble = document.createElement("span");
    const container = document.getElementById("container");
    const randomSize = Math.random() * 200 + 100 + "px";
    const randomNegatif = Math.random() > 0.5 ? 1 : -1;
    const randomTop = Math.random() * 100 + 50 + "%";
    const randomLeft = Math.random() * 100 + "%";
    const randomColor =
      "rgb(" +
      Math.random() * 255 +
      "," +
      Math.random() * 255 +
      "," +
      Math.random() * 255 +
      ")";

    bubble.classList.add("bubble");
    container.appendChild(bubble);
    bubble.style.height = randomSize;
    bubble.style.width = randomSize;
    bubble.style.background = randomColor;
    bubble.style.background = randomColor;
    bubble.style.top = randomTop;
    bubble.style.left = randomLeft;
    bubble.style.setProperty(
      "--left",
      Math.random() * 100 * randomNegatif + "%"
    );

    setTimeout(() => {
      bubble.remove();
    }, 5000);
  };

  setInterval(generator, 500);
  return <div id="container"></div>;
};

export default Bubble;
