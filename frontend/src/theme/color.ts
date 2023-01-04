import palette from './palette'

const color = {
  palette,

  background: palette.primary,
  backgroundLight: palette.secondary,
  backgroundDark: palette.primaryContrast,

  border: palette.borderBlue,
  borderLight: palette.supplementaryColor1,
  borderDark: palette.secondaryContrast,
  borderBlue: palette.tertiaryContrast,

  dark: palette.dark,
  light: palette.light,

  fontPrimary: palette.primaryContrast,
  fontSecondary: palette.secondary,
  fontTextColor: palette.dodgerBlue,
  fontcolor: palette.blueGray,
  fontHover: palette.accent,
  placeholder: palette.accentContrast,

  error: palette.dangerDark,
  intentions: {
    neutral: palette.secondary,
    primary: palette.infoLight,
    success: palette.success,
    warning: palette.warning,
    danger: palette.danger,
    info: palette.info
  },

  activeBackground: palette.activeBg,
  borderBlueLight: palette.borderBlue01,
  inputBg: palette.Blue130,
  buttonPrimaryText: palette.White,
  buttonDefault: palette.mirage,
  buttonPrimary: palette.dodgerBlue,
  buttonDisable: palette.mirage,
  buttonHover: palette.ebonyClay,
  buttonNatural: palette.graylight,

  progressBarBackgroundColor: palette.Blue130
}

export default color
