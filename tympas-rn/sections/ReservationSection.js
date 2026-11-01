import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Image,
} from 'react-native';
import { colors, fonts, spacing } from '../constants/theme';

const { width } = Dimensions.get('window');

const ReservationSection = () => {
  const [guests, setGuests] = useState('2 People');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('7:00 pm');

  const handleSubmit = () => {
    alert('Table reservation submitted! We will contact you shortly.');
  };

  return (
    <View style={styles.reservationSection}>
      <View style={styles.reservationForm}>
        <Text style={styles.reservationLabel}>reserve</Text>
        <Text style={styles.reservationTitle}>book a table</Text>
        <Text style={styles.reservationSubtitle}>*reservations recommended</Text>

        <View style={styles.formGroup}>
          <TextInput
            style={styles.formControl}
            placeholder="Number of guests"
            placeholderTextColor="rgba(255, 255, 255, 0.5)"
            value={guests}
            onChangeText={setGuests}
          />
        </View>

        <View style={styles.formGroup}>
          <TextInput
            style={styles.formControl}
            placeholder="Date"
            placeholderTextColor="rgba(255, 255, 255, 0.5)"
            value={date}
            onChangeText={setDate}
          />
        </View>

        <View style={styles.formGroup}>
          <TextInput
            style={styles.formControl}
            placeholder="Time"
            placeholderTextColor="rgba(255, 255, 255, 0.5)"
            value={time}
            onChangeText={setTime}
          />
        </View>

        <TouchableOpacity style={styles.bookBtn} onPress={handleSubmit}>
          <Text style={styles.bookBtnText}>BOOK NOW</Text>
        </TouchableOpacity>

        <Text style={[styles.reservationSubtitle, { marginTop: spacing.lg }]}>
          *Powered by OpenTable
        </Text>
      </View>

      <View style={styles.reservationImage}>
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=800&fit=crop',
          }}
          style={styles.reservationImageStyle}
          resizeMode="cover"
        />
        <View style={styles.privateDining}>
          <Text style={styles.privateDiningText}>
            Book private dining & banquet rooms
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  reservationSection: {
    flexDirection: width > 968 ? 'row' : 'column',
    backgroundColor: colors.darkBg,
    padding: spacing.xxxl,
    gap: spacing.xxxl,
  },
  reservationForm: {
    flex: 1,
    backgroundColor: colors.tealBg,
    padding: spacing.xxxl,
  },
  reservationLabel: {
    fontFamily: fonts.cormorant.regular,
    fontSize: 16,
    letterSpacing: 8,
    color: colors.gold,
    marginBottom: spacing.lg,
  },
  reservationTitle: {
    fontFamily: fonts.cormorant.regular,
    fontSize: 48,
    color: colors.white,
    marginBottom: spacing.md,
  },
  reservationSubtitle: {
    fontSize: 13,
    color: 'rgba(255, 255, 255, 0.6)',
    marginBottom: spacing.xxxl,
    fontFamily: fonts.montserrat.regular,
  },
  formGroup: {
    marginBottom: spacing.lg,
  },
  formControl: {
    width: '100%',
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.lg,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    borderWidth: 1,
    borderColor: 'rgba(212, 175, 55, 0.3)',
    color: colors.white,
    fontSize: 14,
    fontFamily: fonts.montserrat.regular,
  },
  bookBtn: {
    width: '100%',
    paddingVertical: spacing.lg,
    backgroundColor: colors.gold,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: spacing.md,
  },
  bookBtnText: {
    color: colors.darkBg,
    fontSize: 13,
    letterSpacing: 2,
    fontFamily: fonts.montserrat.semibold,
  },
  reservationImage: {
    flex: 1,
    height: 600,
    position: 'relative',
  },
  reservationImageStyle: {
    width: '100%',
    height: '100%',
  },
  privateDining: {
    position: 'absolute',
    bottom: spacing.xxl,
    left: spacing.xxl,
    right: spacing.xxl,
    backgroundColor: 'rgba(10, 10, 10, 0.8)',
    padding: spacing.lg,
    alignItems: 'center',
  },
  privateDiningText: {
    color: colors.white,
    fontSize: 14,
    fontFamily: fonts.montserrat.regular,
  },
});

export default ReservationSection;


