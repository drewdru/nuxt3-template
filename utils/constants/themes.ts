import type { GlobalThemeOverrides } from "naive-ui"

export const darkThemeOverrides: GlobalThemeOverrides = {
  common: {
    primaryColor: "#c1d37f",
    bodyColor: "#0f1718",
    primaryColorHover: "#06bcc1",
    primaryColorPressed: "#06bcc1",
    cardColor: "#1d252a",
    popoverColor: "#1d252a",
    textColor1: "#eee9dd",
    textColor2: "#eee9dd",
    textColor3: "rgba(238, 227, 221, 0.65)",
    fontSize: "1rem",
    iconColor: "#eee9dd",
    lineHeight: "1.5rem",
  },
  Button: {
    fontSizeMedium: "1rem",
    fontSizeLarge: "1rem",
    colorSecondary: "#9eb8b7",
    colorSecondaryHover: "#BFA9C2",
    colorSecondaryPressed: "#8ca1a3",
    textColorPrimary: "#0f1718",
  },
  Card: {
    borderColor: "none",
    actionColor: "#0f1718",
    colorModal: "#0f1718",
  },
  Drawer: {
    color: "#1d252a",
    footerBorderTop: "none",
    headerBorderBottom: "none",
  },
  Form: {
    labelFontSizeTopMedium: "1rem",
    feedbackHeightMedium: "2rem",
  },
  Tooltip: {
    textColor: "#0f1718",
    color: "#c1d37f",
    boxShadow: "none",
  },
  Typography: {
    headerFontWeight: "700",
  },
  Image: {
    toolbarColor: "#1d252a",
    toolbarIconColor: "#eee9dd",
  },
  Collapse: {
    arrowColor: "#c1d37f",
  },
  Dialog: {
    textColor: "#eee9dd",
    color: "#1d252a",
  },
  Layout: {
    siderColor: "#1d252a",
  },
}
