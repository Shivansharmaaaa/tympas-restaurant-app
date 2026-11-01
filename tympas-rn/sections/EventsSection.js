import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Dimensions } from 'react-native';
import { colors, fonts, spacing } from '../constants/theme';

const { width } = Dimensions.get('window');

const events = [
  {
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=600&h=400&fit=crop',
    title: 'Cocktails Night',
    date: 'Friday, 21 Nov',
    time: 'Reservations 12Pm To 1.30Pm',
  },
  {
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=600&h=400&fit=crop',
    title: 'Wine Wednesday',
    date: 'Wednesday, 10 Sep',
    time: 'Reservations 1Pm To 3.30Pm',
  },
  {
    image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=600&h=400&fit=crop',
    title: 'Sea Food & Wine',
    date: 'Friday, 18 Jul',
    time: 'Reservations 12.30Pm To 5Pm',
  },
];

const EventsSection = () => {
  return (
    <View style={styles.eventsSection}>
      <View style={styles.eventsHeader}>
        <Text style={styles.sectionTitle}>upcoming events</Text>
        <Text style={styles.sectionText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut enim ad
          minim veniam, quis nostrud
        </Text>
      </View>

      <View style={styles.eventsGrid}>
        {events.map((event, index) => (
          <View key={index} style={styles.eventCard}>
            <Image source={{ uri: event.image }} style={styles.eventImage} resizeMode="cover" />
            <View style={styles.eventContent}>
              <Text style={styles.eventTitle}>{event.title}</Text>
              <Text style={styles.eventDate}>{event.date}</Text>
              <Text style={styles.eventTime}>{event.time}</Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  eventsSection: {
    paddingVertical: spacing.xxxl * 2,
    paddingHorizontal: spacing.xxxl,
    backgroundColor: colors.tealBg,
  },
  eventsHeader: {
    alignItems: 'center',
    marginBottom: spacing.xxxl * 2,
  },
  sectionTitle: {
    fontFamily: fonts.cormorant.regular,
    fontSize: 42,
    letterSpacing: 2,
    color: colors.white,
    marginBottom: spacing.lg,
    textAlign: 'center',
  },
  sectionText: {
    fontSize: 15,
    lineHeight: 24,
    color: 'rgba(255, 255, 255, 0.8)',
    fontFamily: fonts.montserrat.light,
    textAlign: 'center',
    maxWidth: 800,
  },
  eventsGrid: {
    flexDirection: width > 968 ? 'row' : 'column',
    gap: spacing.xxl,
    maxWidth: 1400,
    alignSelf: 'center',
  },
  eventCard: {
    flex: 1,
    backgroundColor: colors.darkBg,
    overflow: 'hidden',
  },
  eventImage: {
    width: '100%',
    height: 300,
  },
  eventContent: {
    padding: spacing.xxl,
  },
  eventTitle: {
    fontFamily: fonts.cormorant.regular,
    fontSize: 28,
    color: colors.white,
    marginBottom: spacing.md,
  },
  eventDate: {
    color: colors.gold,
    fontSize: 13,
    letterSpacing: 1,
    marginBottom: spacing.xs,
    fontFamily: fonts.montserrat.regular,
  },
  eventTime: {
    fontSize: 13,
    color: 'rgba(255, 255, 255, 0.7)',
    fontFamily: fonts.montserrat.regular,
  },
});

export default EventsSection;


