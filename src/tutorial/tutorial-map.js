// Landing
import TutorialLanding from "./welcome.mdx";
// Bases
import NumeralBases from "./numeral-bases.mdx";
import NonPositionalBases from "./non-positional.mdx";
import Positional from "./positional.mdx";
// Sandbox
import Sandbox from "./sandbox.mdx";

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
  "ru/bases/positional": {
    title: "Positional numeral bases",
    mdx: <Positional />,
  },

  // sandbox
  "ru/sandbox": {
    title: "Sandbox Mode Tutorial",
    mdx: <Sandbox />,
  },


});
