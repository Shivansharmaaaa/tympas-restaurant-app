import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Dimensions } from 'react-native';
import { colors, fonts, spacing } from '../constants/theme';

const { width } = Dimensions.get('window');

const menuItems = {
  spreads: [
    { name: "White fish roe 'taramas'", price: '9€' },
    { name: 'Santorini Fava, split peas', price: '9€' },
    { name: 'Aubergine puree (Mount Athos recipe)', price: '8€' },
  ],
  sea: [
    { name: 'Grilled octopus', price: '18€' },
    { name: 'Octopus carpaccio with balsamic pearls and green apple', price: '18€' },
    { name: 'Steamed mussels with Asyrtiko wine sauce and fresh herbs', price: '15€' },
    { name: 'Mix of steamed sea shells with seafood bisque and red sauce', price: '18€' },
  ],
  appetisers: [
    { name: 'Chevre goat cheese with fig jam', price: '12€' },
    { name: 'Feta cheese in homemade crust with olive jam', price: '9€' },
  ],
};

const MenuSection = () => {
  const [activeTab, setActiveTab] = useState('all');

  return (
    <View style={styles.menuSection}>
      <View style={styles.menuContent}>
        <View style={styles.menuImageColumn}>
          <View style={styles.menuImageWrapper}>
            <Image
              source={{
                uri: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=600&h=900&fit=crop',
              }}
              style={styles.menuImage}
              resizeMode="cover"
            />
          </View>
        </View>

        <View style={styles.menuColumn}>
          <View style={styles.menuCategory}>
            <Text style={styles.menuCategoryTitle}>homemade spreads</Text>
            {menuItems.spreads.map((item, index) => (
              <View key={index} style={styles.menuItem}>
                <Text style={styles.menuItemName}>{item.name}</Text>
                <Text style={styles.menuItemPrice}>{item.price}</Text>
              </View>
            ))}
          </View>

          <View style={styles.menuCategory}>
            <Text style={styles.menuCategoryTitle}>from the sea</Text>
            {menuItems.sea.map((item, index) => (
              <View key={index} style={styles.menuItem}>
                <Text style={styles.menuItemName}>{item.name}</Text>
                <Text style={styles.menuItemPrice}>{item.price}</Text>
              </View>
            ))}
          </View>

          <View style={styles.menuCategory}>
            <Text style={styles.menuCategoryTitle}>appetisers</Text>
            {menuItems.appetisers.map((item, index) => (
              <View key={index} style={styles.menuItem}>
                <Text style={styles.menuItemName}>{item.name}</Text>
                <Text style={styles.menuItemPrice}>{item.price}</Text>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.menuImageColumn}>
          <View style={styles.menuImageWrapper}>
            <Image
              source={{
                uri: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=600&h=900&fit=crop',
              }}
              style={styles.menuImage}
              resizeMode="cover"
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  menuSection: {
    backgroundColor: colors.tealBg,
    paddingVertical: spacing.xxxl,
  },
  menuContent: {
    flexDirection: width > 968 ? 'row' : 'column',
    minHeight: 600,
  },
  menuImageColumn: {
    flex: 1,
    padding: spacing.xxxl,
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuImageWrapper: {
    width: '100%',
    maxWidth: 500,
    aspectRatio: 1,
    borderRadius: 250,
    overflow: 'hidden',
  },
  menuImage: {
    width: '100%',
    height: '100%',
  },
  menuColumn: {
    flex: 1.2,
    padding: spacing.xxxl,
    justifyContent: 'center',
    borderRightWidth: 1,
    borderRightColor: 'rgba(212, 175, 55, 0.15)',
  },
  menuCategory: {
    marginBottom: spacing.xxxl,
  },
  menuCategoryTitle: {
    fontFamily: fonts.cormorant.regular,
    fontSize: 20,
    letterSpacing: 2,
    color: colors.gold,
    marginBottom: spacing.lg,
    textTransform: 'uppercase',
  },
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: spacing.md,
  },
  menuItemName: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.95)',
    fontFamily: fonts.montserrat.light,
    flex: 1,
  },
  menuItemPrice: {
    color: colors.gold,
    fontSize: 14,
    fontFamily: fonts.montserrat.regular,
    marginLeft: spacing.md,
  },
});

export default MenuSection;


