import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors, fonts, spacing } from '../constants/theme';

const IntroSection = () => {
  return (
    <View style={styles.introSection}>
      <View style={styles.introIcon}>
        <Text style={styles.iconText}>★</Text>
      </View>
      <Text style={styles.introTitle}>
        Tympas is for everyone who collects beautiful moments
      </Text>
      <Text style={styles.introTagline}>For the best memories</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  introSection: {
    paddingVertical: 150,
    paddingHorizontal: spacing.xxxl,
    backgroundColor: colors.tealBg,
    alignItems: 'center',
  },
  introIcon: {
    width: 80,
    height: 80,
    marginBottom: spacing.xxl,
    opacity: 0.4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconText: {
    fontSize: 40,
    color: colors.gold,
  },
  introTitle: {
    fontFamily: fonts.cormorant.regular,
    fontSize: 48,
    color: colors.white,
    textAlign: 'center',
    lineHeight: 67,
    marginBottom: spacing.lg,
    maxWidth: 900,
  },
  introTagline: {
    fontFamily: fonts.allura,
    fontSize: 36,
    color: colors.gold,
  },
});

export default IntroSection;


