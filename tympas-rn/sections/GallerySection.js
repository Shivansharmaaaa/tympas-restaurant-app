import React, { useRef, useEffect } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Animated, Dimensions } from 'react-native';
import { colors, fonts, spacing } from '../constants/theme';

const { width } = Dimensions.get('window');

const galleryImages = [
  'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&h=400&fit=crop',
  'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400&h=400&fit=crop',
  'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=400&fit=crop',
  'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=400&fit=crop',
  'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=400&h=400&fit=crop',
  'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=400&fit=crop',
  'https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=400&h=400&fit=crop',
  'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=400&h=400&fit=crop',
];

const GallerySection = () => {
  const scrollX = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const animate = () => {
      Animated.loop(
        Animated.sequence([
          Animated.timing(scrollX, {
            toValue: -width * galleryImages.length,
            duration: 40000,
            useNativeDriver: true,
          }),
          Animated.timing(scrollX, {
            toValue: 0,
            duration: 0,
            useNativeDriver: true,
          }),
        ])
      ).start();
    };

    animate();
  }, [scrollX]);

  return (
    <View style={styles.gallerySection}>
      <View style={styles.galleryHeader}>
        <Text style={styles.sectionTitle}>connect with us</Text>
      </View>

      <View style={styles.galleryScrollContainer}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.galleryScrollWrapper}
          scrollEventThrottle={16}
        >
          {[...galleryImages, ...galleryImages].map((image, index) => (
            <View key={index} style={styles.galleryItem}>
              <Image source={{ uri: image }} style={styles.galleryImage} resizeMode="cover" />
            </View>
          ))}
        </ScrollView>
      </View>

      <Text style={styles.galleryHashtag}>Inspired by you, always_#restaurante</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  gallerySection: {
    paddingVertical: spacing.xxxl * 2,
    backgroundColor: colors.tealBg,
  },
  galleryHeader: {
    alignItems: 'center',
    marginBottom: spacing.xxxl,
    paddingHorizontal: spacing.xxxl,
  },
  sectionTitle: {
    fontFamily: fonts.cormorant.regular,
    fontSize: 42,
    letterSpacing: 2,
    color: colors.white,
    textAlign: 'center',
  },
  galleryScrollContainer: {
    marginBottom: spacing.xxl,
  },
  galleryScrollWrapper: {
    flexDirection: 'row',
    gap: spacing.lg,
    paddingHorizontal: spacing.xxxl,
  },
  galleryItem: {
    width: 350,
    height: 350,
    borderRadius: 175,
    overflow: 'hidden',
  },
  galleryImage: {
    width: '100%',
    height: '100%',
  },
  galleryHashtag: {
    textAlign: 'center',
    marginTop: spacing.xxl,
    fontFamily: fonts.cormorant.regular,
    fontSize: 18,
    color: 'rgba(255, 255, 255, 0.6)',
    paddingHorizontal: spacing.xxxl,
  },
});

export default GallerySection;


