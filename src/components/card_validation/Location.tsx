import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, TouchableOpacity } from 'react-native';
import { colors, fonts } from "../../core/themes"
import { ClipPath, Defs, G, Path, Rect, Svg } from "react-native-svg";
import * as Location from 'expo-location';

import CheckIcon from '../../assets/icons/check-circle.svg';
import AlertIcon from '../../assets/icons/anomaly.svg';
import LocationIcon from '../../assets/icons/movement.svg';

interface Props {
  text: string;
  message?: string;
  icon?: string;
  status?: string;
  setIsValidated: Function;
}

export function LocationValidation({ text, message }: Props) {
  const [status, setStatus] = useState('')
  async function getLocation() {
    setStatus('loading')

    let { status, ios } = await Location.requestForegroundPermissionsAsync();

    console.log('LocationValidation => ', ios);
    if (status !== 'granted') {
      message = 'Permissions to access location was denied';
      setStatus('error');
      return;
    }

    await Location.watchHeadingAsync(
      (newLocation) => {
        setStatus('success')
        console.log('Nova localização:', newLocation);
      })

    let location = await Location.getCurrentPositionAsync();

    console.log('LocationValidation location => ', location);
    setStatus('success')

  }

  useEffect(() => {
    getLocation();
  }, [])

  return (
    <View style={styles.card}>
      <View>
        <LocationIcon color={colors.gray['700']} />
      </View>
      <View style={styles.cardInfos}>
        <View style={styles.cardInfo}>
          <Text style={styles.cardInfoTitle}>{text}</Text>
          <Text style={styles.cardInfoDescription}>{message}</Text>
        </View>
        <View style={styles.status}>
          {
            status === 'loading' && <ActivityIndicator size={24} color={colors.primary['500']} />
          }
          {
            status === 'error' && <AlertIcon color={colors.danger['500']} />
          }
          {
            status === 'success' && <CheckIcon color={colors.success['500']} />
          }
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