import Typography from "typography"

const typography = new Typography({
  fontDisplay: "swap",
  googleFonts: [
    {
      name: "Roboto",
      styles: ["400", "500&display=swap"],
    },
    {
      name: "Karla",
      styles: ["400", "700&display=swap"],
    },
    {
      name: "Rubik",
      styles: ["400", "500&display=swap"],
    },
  ],
})

// Insert styles directly into the <head>
typography.injectStyles()

export default typography
