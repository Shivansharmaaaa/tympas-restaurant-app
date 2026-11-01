import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { colors, fonts, spacing } from '../constants/theme';

const { width } = Dimensions.get('window');

const Footer = () => {
  return (
    <View style={styles.footer}>
      <View style={styles.footerContent}>
        <View style={styles.footerSection}>
          <Text style={styles.footerSectionTitle}>contact us</Text>
          <Text style={styles.footerSectionText}>
            T. +12 344 0567899{'\n'}M. info@tympas.com
          </Text>
        </View>

        <View style={styles.footerSection}>
          <Text style={styles.footerSectionTitle}>address</Text>
          <Text style={styles.footerSectionText}>
            Piazza Della Signoria, 12{'\n'}21562 . Firenze . Italy
          </Text>
        </View>

        <View style={styles.footerSection}>
          <Text style={styles.footerSectionTitle}>Opening hours</Text>
          <Text style={styles.footerSectionText}>
            Everyday : From 12.30 To 23.00{'\n'}Kitchen Closes At 22.00
          </Text>
        </View>
      </View>

      <View style={styles.footerBottom}>
        <Text style={styles.footerLogo}>TYMPAS</Text>
        <View style={styles.socialLinks}>
          <TouchableOpacity>
            <Text style={styles.socialLink}>PINTEREST</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.socialLink}>FACEBOOK</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.socialLink}>INSTAGRAM</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.copyright}>© 2025 TYMPAS RESTAURANT, ALL RIGHTS RESERVED</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    paddingVertical: spacing.xxxl * 1.5,
    paddingHorizontal: spacing.xxxl,
    backgroundColor: colors.darkBg,
  },
  footerContent: {
    flexDirection: width > 968 ? 'row' : 'column',
    gap: spacing.xxxl,
    marginBottom: spacing.xxxl,
    maxWidth: 1400,
    alignSelf: 'center',
  },
  footerSection: {
    flex: 1,
  },
  footerSectionTitle: {
    fontSize: 14,
    letterSpacing: 2,
    color: colors.gold,
    marginBottom: spacing.lg,
    textTransform: 'lowercase',
    fontFamily: fonts.montserrat.regular,
  },
  footerSectionText: {
    fontSize: 14,
    lineHeight: 24,
    color: 'rgba(255, 255, 255, 0.7)',
    fontFamily: fonts.montserrat.light,
  },
  footerBottom: {
    alignItems: 'center',
    paddingTop: spacing.xxl,
    borderTopWidth: 1,
    borderTopColor: 'rgba(212, 175, 55, 0.2)',
  },
  footerLogo: {
    fontFamily: fonts.cormorant.regular,
    fontSize: 32,
    color: colors.gold,
    letterSpacing: 4,
    marginBottom: spacing.lg,
  },
  socialLinks: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: spacing.lg,
    marginBottom: spacing.lg,
  },
  socialLink: {
    color: colors.gold,
    fontSize: 14,
    letterSpacing: 1,
    fontFamily: fonts.montserrat.regular,
  },
  copyright: {
    fontSize: 12,
    color: 'rgba(255, 255, 255, 0.5)',
    letterSpacing: 1,
    fontFamily: fonts.montserrat.regular,
  },
});

export default Footer;


