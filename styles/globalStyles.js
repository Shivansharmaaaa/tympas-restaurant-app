import { StyleSheet } from 'react-native';
import { colors, fonts, spacing, typography } from '../constants/theme';

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkBg,
  },
  scrollView: {
    flex: 1,
  },
  section: {
    paddingVertical: spacing.xxxl,
    paddingHorizontal: spacing.xxxl,
  },
  textCenter: {
    textAlign: 'center',
  },
  fadeIn: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
});

export const textStyles = StyleSheet.create({
  heroTitle: {
    fontFamily: fonts.cormorant.light,
    fontSize: 80,
    letterSpacing: 15,
    color: colors.white,
    textAlign: 'center',
  },
  heroSubtitle: {
    fontFamily: fonts.cormorant.light,
    fontSize: 80,
    letterSpacing: 15,
    color: colors.white,
    textAlign: 'center',
    marginTop: spacing.md,
  },
  heroDescription: {
    fontSize: 14,
    letterSpacing: 4,
    color: colors.white,
    textAlign: 'center',
    textTransform: 'uppercase',
    marginTop: spacing.xxl,
    opacity: 0.85,
  },
  sectionTitle: {
    fontFamily: fonts.cormorant.regular,
    fontSize: 42,
    letterSpacing: 2,
    color: colors.white,
    marginBottom: spacing.lg,
  },
  sectionLabel: {
    fontFamily: fonts.cormorant.regular,
    fontSize: 16,
    letterSpacing: 8,
    color: colors.lightGold,
    marginBottom: spacing.lg,
    opacity: 0.7,
    textTransform: 'lowercase',
  },
  bodyText: {
    fontSize: 15,
    lineHeight: 24,
    color: 'rgba(255, 255, 255, 0.8)',
    fontFamily: fonts.montserrat.light,
  },
  button: {
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.xl,
    borderWidth: 1,
    borderColor: colors.gold,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: colors.gold,
    fontSize: 11,
    letterSpacing: 2,
    textTransform: 'uppercase',
    fontFamily: fonts.montserrat.medium,
  },
});


