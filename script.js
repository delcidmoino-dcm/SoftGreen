const thoughts = [
  "buying things i absolutely don't need",
  "redesigning everything at 2am",
  "starting 15 projects simultaneously",
  "making another playlist instead of sleeping",
  "listening to sublime on repeat",
  "collecting playlists like memories",
  "thinking about the meaning of life and the universe",
  "trying to make life feel like a 2000s movie",
];

const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  const randomThought =
    thoughts[Math.floor(Math.random() * thoughts.length)];

  alert(randomThought);
});