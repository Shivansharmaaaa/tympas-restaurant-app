import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { colors, fonts, spacing } from '../constants/theme';

const testimonials = [
  {
    text: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."',
    author: '/ By Dora Johns',
  },
  {
    text: '"Exceptional dining experience with impeccable service and outstanding cuisine."',
    author: '/ By John Smith',
  },
  {
    text: '"A true culinary masterpiece. Every dish tells a story of passion and excellence."',
    author: '/ By Sarah Williams',
  },
];

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const current = testimonials[currentTestimonial];

  return (
    <View style={styles.testimonialsSection}>
      <View style={styles.testimonialsHeader}>
        <Text style={styles.sectionText}>Our guests say about us</Text>
        <Text style={styles.testimonialsLabel}>they say</Text>
      </View>

      <View style={styles.testimonialsSlider}>
        <Text style={styles.testimonialText}>{current.text}</Text>
        <Text style={styles.testimonialAuthor}>{current.author}</Text>
      </View>

      <View style={styles.sliderDots}>
        {testimonials.map((_, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.sliderDot,
              index === currentTestimonial && styles.sliderDotActive,
            ]}
            onPress={() => setCurrentTestimonial(index)}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  testimonialsSection: {
    paddingVertical: spacing.xxxl * 2,
    paddingHorizontal: spacing.xxxl,
    backgroundColor: colors.darkBg,
    alignItems: 'center',
  },
  testimonialsHeader: {
    alignItems: 'center',
    marginBottom: spacing.lg,
  },
  sectionText: {
    fontSize: 15,
    lineHeight: 24,
    color: 'rgba(255, 255, 255, 0.8)',
    fontFamily: fonts.montserrat.light,
    marginBottom: spacing.lg,
    textAlign: 'center',
  },
  testimonialsLabel: {
    fontFamily: fonts.cormorant.regular,
    fontSize: 16,
    letterSpacing: 8,
    color: colors.gold,
    marginBottom: spacing.lg,
  },
  testimonialsSlider: {
    maxWidth: 1000,
    alignItems: 'center',
    padding: spacing.xxxl,
  },
  testimonialText: {
    fontSize: 18,
    lineHeight: 32,
    fontFamily: fonts.montserrat.light,
    color: colors.white,
    marginBottom: spacing.lg,
    fontStyle: 'italic',
    textAlign: 'center',
  },
  testimonialAuthor: {
    fontFamily: fonts.cormorant.regular,
    fontSize: 16,
    color: colors.gold,
  },
  sliderDots: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: spacing.md,
    marginTop: spacing.xxl,
  },
  sliderDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: 'rgba(212, 175, 55, 0.3)',
  },
  sliderDotActive: {
    backgroundColor: colors.gold,
  },
});

export default TestimonialsSection;


