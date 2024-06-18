const CONFIG_COLORS = {
  default: {
    text: "#2b2b2b", // dark
  },
  active: {
    color: "#3a3ae7", // blue
  },
  accent: {
    color: "#edeeef", // gray
    bg: "#8167f7", // violet
    hover: "#2b2b2b", // dark
  },
}

const StylesButton = {
  color: CONFIG_COLORS.default.text,
  textTransform: "none",
  fontFamily: "var(--font-roboto-regular)",
  borderRadius: "20px",
  backgroundColor: "transparent",
  width: "auto",
  padding: "4px 10px",
  transition: ".4s",
}

const StylesButtonActive = {
  color: CONFIG_COLORS.active.color,
}

const StylesButtonAccent = {
  backgroundColor: CONFIG_COLORS.accent.bg,
  color: CONFIG_COLORS.accent.color,
  ":hover": {
    backgroundColor: CONFIG_COLORS.accent.hover,
  },
}

export const theme = {
  StylesButton,
  StylesButtonActive,
  StylesButtonAccent,
}
