// Landing
import TutorialLanding from "./welcome.mdx";
// Bases
import NumeralBases from "./numeral-bases.mdx";
import NonPositionalBases from "./non-positional.mdx";

export default () => ({
  // tutorial's landing page
  "ru": {
    title: "Welcome to the Numeral Base Bulbs!",
    mdx: <TutorialLanding />,
  },
  // bases section
  "ru/bases": {
    title: "Let's talk about bases and their types",
    mdx: <NumeralBases />,
  },
  "ru/bases/non-positional": {
    title: "Non-positional numeral bases",
    mdx: <NonPositionalBases />,
  },
  /* "/bases/positional": {
    title: "Positional numeral bases",
    mdx: "./bases/positional.mdx",
  },
  "/bases/positional/homogeneous": {
    title: "Homogeneous positional numeral systems",
    mdx: "./bases/positional/"
  },
  "/bases/positional/mixed": "Mixed positional numeral systems",
  "/bases/positional/special": "Special positional numeral systems",
  // transformations section
  "/transformation": "How to transform numbers",
  "/transformtation": "10 -> 2",
  // How to use this App
  "/app/sandbox": "Sandbox Tutorial",
  "/app/game": "Game Mode Tutorial",
  "/app/settings": "User Preferences Tutorial", */
});
