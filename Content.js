let bobRossImages = [
  "https://bit.ly/3Ck6DTU",
  "https://bit.ly/3ozQCVk",
  "https://bit.ly/3omYDN6",
  "https://bit.ly/3osrfoi",
  "https://bit.ly/3qCPjax",
  "https://bit.ly/3CkRXE6",
  "https://www.google.com/imgres?q=divshtech&imgurl=https%3A%2F%2Fi.ytimg.com%2Fvi%2FdNQBY45tRy0%2Fhqdefault.jpg&imgrefurl=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DdNQBY45tRy0&docid=YORe4sb9GJ7hZM&tbnid=Hps-gDjT68PyCM&vet=12ahUKEwjY97PV8oWKAxVDwzgGHVIGG34QM3oECGsQAA..i&w=480&h=360&hcb=2&itg=1&ved=2ahUKEwjY97PV8oWKAxVDwzgGHVIGG34QM3oECGsQAA",
];

const imgs = document.getElementsByTagName("img");

for (image of imgs) {
  const index = Math.floor(Math.random() * bobRossImages.length);
  image.src = bobRossImages[index];
}