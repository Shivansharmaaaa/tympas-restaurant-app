import React, { useRef } from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Animated,
  Dimensions,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { colors } from './constants/theme';

import Header from './components/Header';
import HeroSection from './sections/HeroSection';
import IntroSection from './sections/IntroSection';
import ChefsSection from './sections/ChefsSection';
import FeaturedCarouselSection from './sections/FeaturedCarouselSection';
import MenuSection from './sections/MenuSection';
import ReservationSection from './sections/ReservationSection';
import EventsSection from './sections/EventsSection';
import TestimonialsSection from './sections/TestimonialsSection';
import GallerySection from './sections/GallerySection';
import Footer from './sections/Footer';

const { height } = Dimensions.get('window');

export default function App() {
  const scrollY = useRef(new Animated.Value(0)).current;
  const scrollViewRef = useRef(null);

  const scrollToSection = (sectionId) => {
    // This would need to be implemented with section refs
    // For now, we'll just scroll to reservation section
    if (sectionId === 'reservation') {
      scrollViewRef.current?.scrollTo({
        y: height * 6,
        animated: true,
      });
    }
  };

  const handleReservePress = () => {
    scrollToSection('reservation');
  };

  const handleViewMenu = () => {
    scrollToSection('menu');
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Header scrollY={scrollY} />
      <Animated.ScrollView
        ref={scrollViewRef}
        style={styles.scrollView}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: false }
        )}
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.section} id="home">
          <HeroSection onReservePress={handleReservePress} />
        </View>

        <View style={styles.section} id="intro">
          <IntroSection />
        </View>

        <View style={styles.section} id="about">
          <ChefsSection />
        </View>

        <View style={styles.section}>
          <ChefsSection reverse />
        </View>

        <View style={styles.section}>
          <FeaturedCarouselSection onViewMenu={handleViewMenu} />
        </View>

        <View style={styles.section} id="menu">
          <MenuSection />
        </View>

        <View style={styles.section} id="reservation">
          <ReservationSection />
        </View>

        <View style={styles.section} id="events">
          <EventsSection />
        </View>

        <View style={styles.section}>
          <TestimonialsSection />
        </View>

        <View style={styles.section} id="gallery">
          <GallerySection />
        </View>

        <View style={styles.section} id="contact">
          <Footer />
        </View>
      </Animated.ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkBg,
  },
  scrollView: {
    flex: 1,
  },
  section: {
    minHeight: height,
  },
});


