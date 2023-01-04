import { spacingScale } from './spacing'

const typography = {
  fontFamily: 'DM Sans',
  titleSize: '32px',
  subtitle: '20px',
  subTitleText: '16px',
  heading: '18px',
  normal: '16px',
  fontSize: '14px',
  errorText: '13px',
  popUpHeadingText: '22px',
  normalText: '14px',
  xxsmall: 9,
  xsmall: 10,
  small: 11,
  default: 13,
  medium: 15,
  large: 16,
  loginLogoText: '64px',
  loginDescription: '24px',
  fontWeight: {
    default: 400,
    medium: 500,
    bold: 600,
    extrabold: 700
  },
  pageHeadDescription: {
    fontSize: '16px',
    fontWeight: '400'
  },
  pageHead: {
    fontSize: '34px',
    fontWeight: '700'
  }
}

export const controlPackSmall = {
  fontsize: typography.small,
  height: spacingScale(3),
  paddingHorizontal: spacingScale(1),
  paddingVertical: spacingScale(0.5)
}
export const controlPackMedium = {
  fontsize: typography.default,
  height: spacingScale(5),
  paddingHorizontal: spacingScale(2),
  paddingVertical: spacingScale(1.5)
}
export const controlPackLarge = {
  fontsize: typography.medium,
  height: spacingScale(6),
  paddingHorizontal: spacingScale(3),
  paddingVertical: spacingScale(1.5)
}

export default typography
