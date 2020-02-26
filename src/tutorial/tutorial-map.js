// Landing
import TutorialLanding from "./welcome.mdx";
// Bases
import NumeralBases from "./numeral-bases.mdx";
import NonPositionalBases from "./non-positional.mdx";
import PositionalBases from "./positional.mdx";
// Sandbox
import SandboxAbout from "./sandbox/about.mdx";
import SandboxSymbols from "./sandbox/symbols.mdx";
import SandboxNumber from "./sandbox/number.mdx";

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
    mdx: <PositionalBases />,
  },

  // sandbox
  "ru/sandbox": {
    title: "Sandbox Mode Tutorial",
    mdx: <SandboxAbout />,
  },
  "ru/sandbox/symbols": {
    title: "Sandbox, what is Symbols?",
    mdx: <SandboxSymbols />,
  },
  "ru/sandbox/number": {
    title: "Sandbox, what is Number?",
    mdx: <SandboxNumber />,
  },


});
