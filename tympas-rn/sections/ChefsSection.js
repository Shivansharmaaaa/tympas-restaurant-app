import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import { colors, fonts, spacing } from '../constants/theme';

const { width } = Dimensions.get('window');

const ChefsSection = ({ reverse = false }) => {
  return (
    <View style={[styles.chefsSection, reverse && styles.reverse]}>
      <View style={[styles.chefsContainer, reverse && styles.containerReverse]}>
        <View style={styles.chefsTextCol}>
          {!reverse && (
            <Text style={styles.chefsBgText}>CHEF'S</Text>
          )}
          {reverse && (
            <Text style={styles.sectionLabel}>cuisine</Text>
          )}
          <Text style={styles.chefsTitle}>
            {reverse ? 'OUR GOALS & HISTORY' : 'ONLY THE FINEST FOOD & GREAT SERVICE'}
          </Text>
          <Text style={styles.chefsDescription}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </Text>
          <View style={styles.readMoreButton}>
            <Text style={styles.readMoreText}>READ MORE</Text>
          </View>
        </View>
        <View style={styles.chefsImageCol}>
          <View style={styles.chefsImageWrapper}>
            <Image
              source={{
                uri: reverse
                  ? 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=800&fit=crop'
                  : 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&h=800&fit=crop',
              }}
              style={styles.chefsMainImage}
              resizeMode="cover"
            />
            <Image
              source={{
                uri: reverse
                  ? 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=300&h=400&fit=crop'
                  : 'https://images.unsplash.com/photo-1577219491135-ce391730fb4c?w=300&h=400&fit=crop',
              }}
              style={styles.chefsFloatImage}
              resizeMode="cover"
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  chefsSection: {
    backgroundColor: colors.tealBg,
    overflow: 'hidden',
  },
  reverse: {
    flexDirection: 'row-reverse',
  },
  chefsContainer: {
    flexDirection: 'row',
    minHeight: 600,
  },
  containerReverse: {
    flexDirection: 'row-reverse',
  },
  chefsTextCol: {
    flex: 1,
    padding: spacing.xxxl,
    justifyContent: 'center',
    position: 'relative',
  },
  chefsBgText: {
    position: 'absolute',
    left: -50,
    fontSize: 180,
    color: 'rgba(255, 255, 255, 0.05)',
    fontFamily: fonts.cormorant.light,
    letterSpacing: 20,
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
  chefsTitle: {
    fontFamily: fonts.montserrat.medium,
    fontSize: 38,
    color: colors.white,
    marginBottom: spacing.xl,
    letterSpacing: 1,
    textTransform: 'uppercase',
    zIndex: 1,
  },
  chefsDescription: {
    fontSize: 15,
    lineHeight: 28,
    color: 'rgba(255, 255, 255, 0.85)',
    fontFamily: fonts.montserrat.light,
    marginBottom: spacing.xxl,
    maxWidth: 550,
    zIndex: 1,
  },
  readMoreButton: {
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.xxl,
    borderWidth: 1,
    borderColor: colors.gold,
    alignSelf: 'flex-start',
  },
  readMoreText: {
    color: colors.gold,
    fontSize: 12,
    letterSpacing: 2,
    fontFamily: fonts.montserrat.medium,
  },
  chefsImageCol: {
    flex: 1,
    position: 'relative',
    overflow: 'visible',
  },
  chefsImageWrapper: {
    flex: 1,
    padding: spacing.xxxl,
    alignItems: 'center',
    justifyContent: 'center',
  },
  chefsMainImage: {
    width: '100%',
    maxWidth: 650,
    aspectRatio: 1,
    borderRadius: 325,
  },
  chefsFloatImage: {
    position: 'absolute',
    left: 30,
    bottom: 80,
    width: 240,
    height: 320,
    borderRadius: 8,
  },
});

export default ChefsSection;


