export const homeSurface = {
  bg: "white",
  border: "3px solid black",
  borderRadius: 0,
  boxShadow: "8px 8px 0px 0px #000",
};

export const homeSurfaceSoft = {
  bg: "retro.bg",
  border: "2px solid black",
  borderRadius: 0,
  boxShadow: "4px 4px 0px 0px #000",
};

export const homeInput = {
  bg: "white",
  border: "2px solid black",
  borderRadius: 0,
  _focus: {
    borderColor: "black",
    boxShadow: "4px 4px 0px 0px #000",
  },
};

export const homeButton = {
  border: "3px solid black",
  borderRadius: 0,
  fontWeight: 900,
  boxShadow: "4px 4px 0px 0px #000",
  transition: "0.1s",
  _hover: {
    transform: "translate(-2px, -2px)",
    boxShadow: "6px 6px 0px 0px #000",
  },
  _active: {
    transform: "translate(2px, 2px)",
    boxShadow: "none",
  },
};

export const homeModal = {
  bg: "retro.bg",
  border: "4px solid black",
  borderRadius: 0,
  boxShadow: "12px 12px 0px 0px #000",
};

export const homeSectionTitle = {
  fontSize: "12px",
  fontWeight: 900,
  textTransform: "uppercase",
  letterSpacing: "1px",
  color: "black",
};

export const sidebarItem = {
  alignItems: "center",
  gap: 4,
  border: "2px solid black",
  bg: "white",
  px: { base: 2, md: 3 },
  py: { base: 2, md: 3 },
  boxShadow: "4px 4px 0px 0px #000",
  transition: "0.1s",
  _hover: {
    bg: "retro.main",
    transform: "translate(-2px, -2px)",
    boxShadow: "6px 6px 0px 0px #000",
  },
};
