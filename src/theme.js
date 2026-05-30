import { extendTheme } from "@chakra-ui/react";

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const colors = {
  retro: {
    bg: "#FFFBEB",
    surface: "#FFFFFF",
    text: "#000000",
    main: "#BEF264", // Lime Green from sample
    pink: "#F472B6", // Pink from sample
    cyan: "#22D3EE",
    border: "#000000",
  },
};

const fonts = {
  heading: `'Space Grotesk', sans-serif`,
  body: `'Space Grotesk', sans-serif`,
  mono: `'Space Mono', monospace`,
};

const styles = {
  global: () => ({
    body: {
      bg: "retro.bg",
      color: "retro.text",
    },
    "::-webkit-scrollbar": {
      width: "12px",
    },
    "::-webkit-scrollbar-track": {
      bg: "retro.bg",
    },
    "::-webkit-scrollbar-thumb": {
      bg: "retro.main",
      borderRadius: "0px",
      border: "2px solid",
      borderColor: "retro.border",
    },
  }),
};

const components = {
  Button: {
    baseStyle: {
      borderRadius: "0px",
      fontWeight: "800",
      textTransform: "uppercase",
      border: "2px solid",
      borderColor: "black",
      transition: "all 0.1s",
      _active: {
        transform: "translate(2px, 2px)",
        boxShadow: "0px 0px 0px 0px #000",
      },
    },
    variants: {
      solid: {
        bg: "retro.main",
        boxShadow: "4px 4px 0px 0px #000",
        _hover: {
          bg: "retro.main",
          transform: "translate(-2px, -2px)",
          boxShadow: "6px 6px 0px 0px #000",
        },
      },
      outline: {
        bg: "white",
        boxShadow: "4px 4px 0px 0px #000",
        _hover: {
          bg: "white",
          transform: "translate(-2px, -2px)",
          boxShadow: "6px 6px 0px 0px #000",
        },
      },
      ghost: {
        border: "none",
        _hover: {
          bg: "retro.pink",
          color: "white",
        },
      },
    },
  },
  Input: {
    variants: {
      outline: {
        field: {
          borderRadius: "0px",
          border: "2px solid",
          borderColor: "black",
          bg: "white",
          color: "black",
          fontWeight: "bold",
          _placeholder: {
            color: "black",
            opacity: 0.6,
          },
          _focus: {
            borderColor: "black",
            boxShadow: "4px 4px 0px 0px #000",
          },
        },
      },
    },
    defaultProps: {
      variant: "outline",
    },
  },
  Modal: {
    baseStyle: {
      dialog: {
        borderRadius: "0px",
        border: "3px solid",
        borderColor: "black",
        boxShadow: "8px 8px 0px 0px #000",
        bg: "retro.bg",
      },
    },
  },
};

const theme = extendTheme({ config, colors, fonts, styles, components });
export default theme;
