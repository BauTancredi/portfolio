const FontFaceObserver = require("fontfaceobserver");

const Fonts = () => {
  const link = document.createElement("link");
  link.href =
    "https://fonts.googleapis.com/css2?family=Chivo:wght@300;400&family=Montserrat:wght@400;700&display=swap";
  link.rel = "stylesheet";

  document.head.appendChild(link);

  const montserrat = new FontFaceObserver("Montserrat");

  montserrat.load().then(() => {
    document.documentElement.classList.add("montserrat");
  });

  const chivo = new FontFaceObserver("Chivo");

  chivo.load().then(() => {
    document.documentElement.classList.add("chivo");
  });
};

export default Fonts;
