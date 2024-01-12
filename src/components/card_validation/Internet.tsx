import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { colors, fonts } from "../../core/themes"
import { ClipPath, Defs, G, Path, Rect, Svg } from "react-native-svg";

import CheckIcon from '../../assets/icons/check-circle.svg';
import AlertIcon from '../../assets/icons/anomaly.svg';
import SignalIcon from '../../assets/icons/signal.svg';
import * as Network from 'expo-network';

interface Props {
  text: string;
  message?: string;
  icon?: string;
  status?: string;
  setIsValidated: Function;
}

export function InternetValidation({ text }: Props) {
  const [status, setStatus] = useState('')
  const [message, setMessage] = useState('')

  async function getInternetConnected() {
    setStatus('loading')

    let { isConnected } = await Network.getNetworkStateAsync();

    console.log('InternetValidation => ', isConnected);
    if (!isConnected) {
      setMessage('Verifique se está conectado a internet');
      setStatus('error');
      return;
    }
    setStatus('success')

  }

  useEffect(() => {
    getInternetConnected();
  }, [])

  return (
    <View style={styles.card}>
      <View>
        <SignalIcon color={colors.gray['700']} />
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