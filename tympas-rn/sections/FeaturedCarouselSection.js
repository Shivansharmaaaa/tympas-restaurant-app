import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
  Animated,
} from 'react-native';
import { colors, fonts, spacing } from '../constants/theme';

const { width, height } = Dimensions.get('window');

const carouselSlides = [
  {
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=1920&h=1080&fit=crop',
    title: 'COCKTAILS',
    subtitle: 'Favorites',
    leftText: 'LIST',
    rightText: 'MENU',
  },
  {
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=1920&h=1080&fit=crop',
    title: 'WINE LIST',
    subtitle: 'Best Offer',
    leftText: 'MENU',
    rightText: 'COCKTAILS',
  },
  {
    image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1920&h=1080&fit=crop',
    title: 'MENU',
    subtitle: 'Main Courses',
    leftText: 'COCKTAILS',
    rightText: 'WINE',
  },
];

const FeaturedCarouselSection = ({ onViewMenu }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slideAnim] = useState(new Animated.Value(0));

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: currentSlide,
      duration: 1200,
      useNativeDriver: false,
    }).start();
  }, [currentSlide, slideAnim]);

  const currentData = carouselSlides[currentSlide];

  return (
    <View style={styles.carouselSection}>
      <TouchableOpacity style={styles.topButton} onPress={onViewMenu}>
        <Text style={styles.topButtonText}>BOOK A TABLE</Text>
      </TouchableOpacity>

      <View style={styles.carouselContainer}>
        <Image
          source={{ uri: currentData.image }}
          style={styles.carouselBg}
          resizeMode="cover"
        />
        <View style={styles.carouselOverlay} />

        <View style={styles.carouselTextWrapper}>
          {width > 768 && (
            <Text style={styles.carouselSideText}>{currentData.leftText}</Text>
          )}
          <View style={styles.carouselCenter}>
            <View style={styles.carouselLine} />
            <View style={styles.carouselMainContent}>
              <Text style={styles.carouselMainTitle}>{currentData.title}</Text>
              <Text style={styles.carouselSubtitle}>{currentData.subtitle}</Text>
              <TouchableOpacity style={styles.carouselBtn} onPress={onViewMenu}>
                <Text style={styles.carouselBtnText}>VIEW</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.carouselLine} />
          </View>
          {width > 768 && (
            <Text style={styles.carouselSideText}>{currentData.rightText}</Text>
          )}
        </View>
      </View>

      <View style={styles.carouselIndicators}>
        {carouselSlides.map((_, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.carouselIndicator,
              index === currentSlide && styles.carouselIndicatorActive,
            ]}
            onPress={() => setCurrentSlide(index)}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  carouselSection: {
    height: height * 0.7,
    backgroundColor: colors.darkBg,
    position: 'relative',
  },
  topButton: {
    position: 'absolute',
    top: spacing.xxl,
    right: spacing.xxl,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.xxl,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.3)',
    zIndex: 3,
  },
  topButtonText: {
    color: colors.white,
    fontSize: 11,
    letterSpacing: 2,
    textTransform: 'uppercase',
    fontFamily: fonts.montserrat.medium,
  },
  carouselContainer: {
    flex: 1,
    position: 'relative',
  },
  carouselBg: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  carouselOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.65)',
  },
  carouselTextWrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: spacing.xxxl,
    zIndex: 2,
  },
  carouselSideText: {
    fontFamily: fonts.cormorant.light,
    fontSize: 60,
    letterSpacing: 12,
    color: 'rgba(255, 255, 255, 0.12)',
    textTransform: 'uppercase',
    width: 300,
    textAlign: 'center',
  },
  carouselCenter: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  carouselLine: {
    height: 1,
    width: 150,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
  },
  carouselMainContent: {
    alignItems: 'center',
    paddingHorizontal: spacing.xxxl,
  },
  carouselMainTitle: {
    fontFamily: fonts.cormorant.light,
    fontSize: 65,
    letterSpacing: 15,
    color: colors.white,
    textTransform: 'uppercase',
    marginBottom: spacing.md,
  },
  carouselSubtitle: {
    fontFamily: fonts.montserrat.regular,
    fontSize: 12,
    letterSpacing: 2,
    color: 'rgba(255, 255, 255, 0.7)',
    textTransform: 'capitalize',
    marginBottom: spacing.lg,
  },
  carouselBtn: {
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.xl,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.3)',
    marginTop: spacing.lg,
  },
  carouselBtnText: {
    color: colors.white,
    fontSize: 10,
    letterSpacing: 2,
    textTransform: 'uppercase',
    fontFamily: fonts.montserrat.medium,
  },
  carouselIndicators: {
    position: 'absolute',
    bottom: spacing.xxxl,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    gap: spacing.md,
    zIndex: 3,
  },
  carouselIndicator: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
  },
  carouselIndicatorActive: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: colors.white,
    transform: [{ scale: 1.2 }],
  },
});

export default FeaturedCarouselSection;


