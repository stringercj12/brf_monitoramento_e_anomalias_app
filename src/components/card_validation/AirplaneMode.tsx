import React from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { colors, fonts } from "../../core/themes"

import CheckIcon from '../../assets/icons/check-circle.svg';
import AlertIcon from '../../assets/icons/anomaly.svg';
import PlaneTripIcon from '../../assets/icons/plane-trip.svg';
import SignalIcon from '../../assets/icons/signal.svg';
import LocationIcon from '../../assets/icons/movement.svg';

interface Props {
  text: string;
  icon: 'airplane_mode' | 'internet' | 'location';
  message?: string;
  status: string;
  setIsValidated: Function;
}

export function AirplaneModeValidation({ text, message, icon, status }: Props) {

  return (
    <View style={styles.card}>
      <View>
        {icon === 'airplane_mode' && <PlaneTripIcon color={colors.gray['700']} />}
        {icon === 'internet' && <SignalIcon color={colors.gray['700']} />}
        {icon === 'location' && <LocationIcon color={colors.gray['700']} />}
      </View>
      <View style={styles.cardInfos}>
        <View style={styles.cardInfo}>
          <Text style={styles.cardInfoTitle}>{text}</Text>
          <Text style={styles.cardInfoDescription}>{message}</Text>
        </View>
        <View style={styles.status}>
          {status === 'loading' && <ActivityIndicator color={colors.primary['500']} />}
          {status === 'error' && <AlertIcon color={colors.danger['500']} />}
          {status === 'success' && <CheckIcon color={colors.success['500']} />}
        </View>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    gap: 14,
    paddingHorizontal: 24,
    paddingVertical: 10,
  },
  cardInfos: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: colors.gray['400'],
    paddingBottom: 16,
    flexGrow: 1,
  },
  status: {
  },
  cardInfo: {
    gap: 8,
  },
  cardInfoTitle: {
    color: colors.black['700'],
    fontSize: 16,
    fontFamily: fonts.BOLD,
  },
  cardInfoDescription: {
    color: colors.danger['500'],
    fontSize: 14,
    fontFamily: fonts.REGULAR,
  }
})