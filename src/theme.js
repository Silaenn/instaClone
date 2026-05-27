import { extendTheme } from "@chakra-ui/react";

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const colors = {
  retro: {
    bg: "#FFFBEB",
    surface: "#FFFFFF",
    text: "#2D3748",
    pink: "#F472B6",
    blue: "#38BDF8",
    yellow: "#FBBF24",
    border: "#2D3748",
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
      bg: "retro.pink",
      borderRadius: "full",
      border: "3px solid",
      borderColor: "retro.bg",
    },
  }),
};

const components = {
  Button: {
    baseStyle: {
      borderRadius: "full",
      fontWeight: "bold",
      transition: "all 0.2s",
      _active: {
        transform: "translate(2px, 2px)",
      },
    },
    variants: {
      retro: {
        bg: "retro.pink",
        color: "white",
        border: "2px solid",
        borderColor: "retro.border",
        boxShadow: "4px 4px 0px 0px #2D3748",
        _hover: {
          bg: "pink.400",
        },
      },
    },
  },
};

const theme = extendTheme({ config, colors, fonts, styles, components });
export default theme;
