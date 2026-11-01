import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
  Animated,
} from 'react-native';
import { colors, fonts, spacing } from '../constants/theme';

const { width, height } = Dimensions.get('window');

const heroSlides = [
  {
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&h=1080&fit=crop',
    title: 'GOOD TIMES',
    subtitle: 'GREAT TASTES',
    description: 'EXPERIENCE CULINARY EXCELLENCE',
  },
  {
    image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1920&h=1080&fit=crop',
    title: 'FINE DINING',
    subtitle: 'REDEFINED',
    description: 'WHERE PASSION MEETS PERFECTION',
  },
  {
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&h=1080&fit=crop',
    title: 'EXQUISITE',
    subtitle: 'FLAVORS',
    description: 'A JOURNEY FOR YOUR SENSES',
  },
  {
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1920&h=1080&fit=crop',
    title: 'UNFORGETTABLE',
    subtitle: 'MOMENTS',
    description: 'CRAFTED WITH LOVE & PRECISION',
  },
];

const HeroSection = ({ onReservePress }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [fadeAnim] = useState(new Animated.Value(1));

  useEffect(() => {
    const interval = setInterval(() => {
      Animated.sequence([
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 700,
          useNativeDriver: true,
        }),
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }),
      ]).start();

      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
      }, 700);
    }, 5000);

    return () => clearInterval(interval);
  }, [fadeAnim]);

  const currentData = heroSlides[currentSlide];

  return (
    <View style={styles.hero}>
      <View style={styles.heroBackground}>
        <Image
          source={{ uri: currentData.image }}
          style={styles.heroImage}
          resizeMode="cover"
        />
        <View style={styles.heroOverlay} />
      </View>

      <Animated.View style={[styles.heroContent, { opacity: fadeAnim }]}>
        <Text style={styles.heroTitle}>{currentData.title}</Text>
        <Text style={styles.heroSubtitle}>{currentData.subtitle}</Text>
        <Text style={styles.heroDescription}>{currentData.description}</Text>
      </Animated.View>

      <View style={styles.heroInfo}>
        <Text style={styles.heroInfoLabel}>/ FIND US</Text>
        <Text style={styles.heroInfoText}>
          71 Madison Ave, New York,{'\n'}NY 10016, +1 234 567 8900
        </Text>
      </View>

      <TouchableOpacity style={styles.reserveCircle} onPress={onReservePress}>
        <Text style={styles.reserveText}>
          RESERVE{'\n'}YOUR{'\n'}TABLE
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  hero: {
    height: height,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.tealBg,
    padding: spacing.xxl,
    position: 'relative',
  },
  heroBackground: {
    position: 'absolute',
    top: spacing.xxl,
    left: spacing.xxl,
    right: spacing.xxl,
    bottom: spacing.xxl,
    borderWidth: 1,
    borderColor: 'rgba(212, 175, 55, 0.3)',
    overflow: 'hidden',
  },
  heroImage: {
    width: '100%',
    height: '100%',
  },
  heroOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  heroContent: {
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2,
    paddingHorizontal: spacing.xxxl,
  },
  heroTitle: {
    fontFamily: fonts.cormorant.light,
    fontSize: width > 768 ? 80 : 40,
    letterSpacing: width > 768 ? 15 : 8,
    color: colors.white,
    textAlign: 'center',
    lineHeight: width > 768 ? 96 : 48,
  },
  heroSubtitle: {
    fontFamily: fonts.cormorant.light,
    fontSize: width > 768 ? 80 : 40,
    letterSpacing: width > 768 ? 15 : 8,
    color: colors.white,
    textAlign: 'center',
    marginTop: spacing.md,
    lineHeight: width > 768 ? 96 : 48,
  },
  heroDescription: {
    fontSize: width > 768 ? 14 : 11,
    letterSpacing: width > 768 ? 4 : 2,
    color: colors.white,
    textAlign: 'center',
    textTransform: 'uppercase',
    marginTop: spacing.xxl,
    opacity: 0.85,
    fontFamily: fonts.montserrat.regular,
  },
  heroInfo: {
    position: 'absolute',
    bottom: 80,
    left: 80,
    zIndex: 3,
  },
  heroInfoLabel: {
    fontSize: 12,
    color: colors.gold,
    marginBottom: spacing.sm,
    fontFamily: fonts.montserrat.regular,
  },
  heroInfoText: {
    fontSize: 13,
    color: 'rgba(255, 255, 255, 0.9)',
    lineHeight: 24,
    fontFamily: fonts.montserrat.light,
  },
  reserveCircle: {
    position: 'absolute',
    bottom: 80,
    right: 80,
    width: 180,
    height: 180,
    borderRadius: 90,
    borderWidth: 2,
    borderColor: colors.gold,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 3,
  },
  reserveText: {
    fontFamily: fonts.montserrat.medium,
    fontSize: 12,
    letterSpacing: 3,
    color: colors.gold,
    textAlign: 'center',
    lineHeight: 20,
  },
});

export default HeroSection;


