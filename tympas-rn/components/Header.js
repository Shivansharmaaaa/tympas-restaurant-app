import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Animated,
  Dimensions,
} from 'react-native';
import { colors, fonts, spacing } from '../constants/theme';

const { width } = Dimensions.get('window');

const Header = ({ scrollY }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [headerOpacity] = useState(new Animated.Value(0.4));

  React.useEffect(() => {
    if (scrollY) {
      const listener = scrollY.addListener(({ value }) => {
        if (value > 100) {
          Animated.timing(headerOpacity, {
            toValue: 0.75,
            duration: 300,
            useNativeDriver: false,
          }).start();
        } else {
          Animated.timing(headerOpacity, {
            toValue: 0.4,
            duration: 300,
            useNativeDriver: false,
          }).start();
        }
      });
      return () => scrollY.removeListener(listener);
    }
  }, [scrollY, headerOpacity]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const scrollToSection = (sectionId) => {
    setMenuOpen(false);
    // Navigation will be handled by parent component
  };

  return (
    <Animated.View
      style={[
        styles.header,
        {
          backgroundColor: headerOpacity.interpolate({
            inputRange: [0, 1],
            outputRange: ['rgba(10, 10, 10, 0.4)', 'rgba(10, 10, 10, 0.75)'],
          }),
        },
      ]}
    >
      <TouchableOpacity style={styles.logo} onPress={() => scrollToSection('home')}>
        <View style={styles.logoIcon}>
          <Text style={styles.logoIconText}>★</Text>
        </View>
        <Text style={styles.logoText}>TYMPAS</Text>
      </TouchableOpacity>

      {width > 968 ? (
        <View style={styles.nav}>
          <TouchableOpacity style={styles.navLink} onPress={() => scrollToSection('home')}>
            <Text style={styles.navLinkText}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navLink} onPress={() => scrollToSection('menu')}>
            <Text style={styles.navLinkText}>Menu</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navLink} onPress={() => scrollToSection('about')}>
            <Text style={styles.navLinkText}>About</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navLink} onPress={() => scrollToSection('events')}>
            <Text style={styles.navLinkText}>Events</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navLink} onPress={() => scrollToSection('gallery')}>
            <Text style={styles.navLinkText}>Gallery</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navLink} onPress={() => scrollToSection('contact')}>
            <Text style={styles.navLinkText}>Contact</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navButton} onPress={() => scrollToSection('reservation')}>
            <Text style={styles.navButtonText}>BOOK A TABLE</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <TouchableOpacity style={styles.hamburger} onPress={toggleMenu}>
          <View style={[styles.hamburgerLine, menuOpen && styles.hamburgerLineActive]} />
          <View style={[styles.hamburgerLine, menuOpen && styles.hamburgerLineActive]} />
          <View style={[styles.hamburgerLine, menuOpen && styles.hamburgerLineActive]} />
        </TouchableOpacity>
      )}

      {menuOpen && width <= 968 && (
        <View style={styles.mobileMenu}>
          <TouchableOpacity style={styles.mobileMenuItem} onPress={() => scrollToSection('home')}>
            <Text style={styles.mobileMenuText}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.mobileMenuItem} onPress={() => scrollToSection('menu')}>
            <Text style={styles.mobileMenuText}>Menu</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.mobileMenuItem} onPress={() => scrollToSection('about')}>
            <Text style={styles.mobileMenuText}>About</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.mobileMenuItem} onPress={() => scrollToSection('events')}>
            <Text style={styles.mobileMenuText}>Events</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.mobileMenuItem} onPress={() => scrollToSection('gallery')}>
            <Text style={styles.mobileMenuText}>Gallery</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.mobileMenuItem} onPress={() => scrollToSection('contact')}>
            <Text style={styles.mobileMenuText}>Contact</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.navButton, styles.mobileNavButton]} onPress={() => scrollToSection('reservation')}>
            <Text style={styles.navButtonText}>BOOK A TABLE</Text>
          </TouchableOpacity>
        </View>
      )}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 80,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.xxxl,
    zIndex: 1000,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(212, 175, 55, 0.1)',
  },
  logo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
  },
  logoIcon: {
    width: 36,
    height: 36,
    borderRadius: 18,
    borderWidth: 2,
    borderColor: colors.gold,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoIconText: {
    fontSize: 18,
    color: colors.gold,
  },
  logoText: {
    fontFamily: fonts.cormorant.light,
    fontSize: 28,
    color: colors.gold,
    letterSpacing: 4,
  },
  nav: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.xxxl,
  },
  navLink: {
    paddingVertical: spacing.xs,
  },
  navLinkText: {
    fontSize: 13,
    color: colors.white,
    letterSpacing: 1,
    textTransform: 'uppercase',
    fontFamily: fonts.montserrat.regular,
  },
  navButton: {
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.xl,
    borderWidth: 1,
    borderColor: colors.gold,
    backgroundColor: 'transparent',
  },
  navButtonText: {
    color: colors.gold,
    fontSize: 11,
    letterSpacing: 2,
    textTransform: 'uppercase',
    fontFamily: fonts.montserrat.medium,
  },
  hamburger: {
    width: 30,
    height: 24,
    justifyContent: 'space-between',
  },
  hamburgerLine: {
    width: '100%',
    height: 2,
    backgroundColor: colors.gold,
  },
  hamburgerLineActive: {
    opacity: 0,
  },
  mobileMenu: {
    position: 'absolute',
    top: 80,
    right: 0,
    width: 300,
    backgroundColor: 'rgba(10, 10, 10, 0.95)',
    padding: spacing.xxl,
    borderLeftWidth: 1,
    borderLeftColor: 'rgba(212, 175, 55, 0.15)',
  },
  mobileMenuItem: {
    paddingVertical: spacing.lg,
  },
  mobileMenuText: {
    fontSize: 14,
    color: colors.white,
    letterSpacing: 2,
    textTransform: 'uppercase',
    fontFamily: fonts.montserrat.regular,
  },
  mobileNavButton: {
    marginTop: spacing.lg,
    width: '100%',
  },
});

export default Header;


