import { useEffect, useState } from "react";
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import * as Network from 'expo-network';
import * as Location from 'expo-location';
import { useNavigation } from "@react-navigation/native";

import { colors, fonts } from "../../../core/themes"
import { Button } from "../../../components/button";

import { AirplaneModeValidation } from "../../../components/card_validation/AirplaneMode";
import { InternetValidation } from "../../../components/card_validation/Internet";
import { LocationValidation } from "../../../components/card_validation/Location";


export function ValidationScreen() {
  const [airplaneMode, setAirplaneMode] = useState<boolean>(false);
  const [isInternet, setIsInternet] = useState<boolean>(false);
  const [isLocation, setIsLocation] = useState<boolean>(false);
  const [isValid, setIsValid] = useState<boolean>(false);
  const [status, setStatus] = useState('')
  const [message, setMessage] = useState('')

  const navigation = useNavigation();

  async function getLocation() {
    setStatus('loading')
    console.log('position');

    setTimeout(async () => {
      let { isConnected } = await Network.getNetworkStateAsync();

      console.log(`AirplaneModeValidation => ${Platform.OS === 'ios' ? 'ios' : 'android'}`, isConnected);
      if (!isConnected) {
        setMessage('Desabilite o modo avião');
        setStatus('error')
        return;
      }
      await setAirplaneMode(true);
      await setStatus('success')
      getInternetConnected();
    }, 2000)

  }

  async function getInternetConnected() {
    setStatus('loading')

    setTimeout(async () => {
      let { isConnected } = await Network.getNetworkStateAsync();

      console.log('InternetValidation => ', isConnected);
      if (!isConnected) {
        setMessage('Verifique se está conectado a internet');
        setStatus('error');
        return;
      }
      setIsInternet(true);
      setStatus('success')
      validade()
    }, 2000)
  }



  function validade() {
    setStatus('loading')
    setTimeout(async () => {
      if (isInternet) {
        setIsLocation(true);
        setStatus('success')
      } else {
        setIsLocation(false);
        setStatus('error');
      }

    }, 2000)

  }


  function onValidate() {
    if (airplaneMode && isInternet && isLocation) {
      setIsValid(false)
      // navigation.navigate('VehicleAuthentication');
      return;
    } else {
      setIsValid(true)
    }
  }

  useEffect(() => {
    getLocation();
  }, []);

  return (
    <View style={styles.container}>

      <View style={styles.containerLogo}>
        <Image source={require('../../../assets/logo.png')} />

        <Text style={styles.title}>Aguarde, estamos validando...</Text>
      </View>


      <View style={styles.cards}>
        <AirplaneModeValidation
          text="Modo avião"
          icon="airplane_mode"
          setIsValidated={setAirplaneMode}
          status={status}
        />
        {
          airplaneMode && <InternetValidation
            text="Internet"
            setIsValidated={setIsInternet}
          />
        }

        {
          (airplaneMode && isInternet) &&
          <LocationValidation
            text="Localização"
            setIsValidated={(e) => {
              console.log(e);
              setIsLocation(e)
              onValidate();
            }}
          />
        }
      </View>

      {
        !isValid && <View style={styles.button}>
          <Button text="Continuar" onPress={() => navigation.navigate('VehicleAuthentication')} />
        </View>
      }


    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  containerLogo: {
    alignItems: "center",
    marginTop: 88,
  },
  title: {
    fontSize: 20,
    fontFamily: fonts.BOLD,
    marginTop: 56,
    marginBottom: 40,
  },
  cards: {
    gap: 20,
  },
  button: {
    marginTop: 56,
    paddingHorizontal: 24
  },
  buttonText: {
    color: colors.danger['500'],
    fontSize: 14,
    fontFamily: fonts.BOLD,
  }
})