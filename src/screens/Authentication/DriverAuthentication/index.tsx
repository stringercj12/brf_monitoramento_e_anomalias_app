import { Image, Text, View, StyleSheet, Keyboard, TouchableWithoutFeedback, TouchableOpacity } from "react-native";
import { colors, fonts } from "../../../core/themes";

import { Input } from "../../../components/Input";
import { Button } from "../../../components/button";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

import ProfileIcon from '../../../assets/icons/single-neutral-profile-picture.svg';
import ArrowLeftIcon from '../../../assets/icons/arrow-left.svg';


export function DriverAuthentication() {
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

  function changeValidator() {
    setLoading(true);


    setTimeout(() => {
      setLoading(false);
      navigation.navigate("Home")
    }, 5000)
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>

      <View style={styles.container}>

        <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('VehicleAuthentication')}>
          <ArrowLeftIcon color={colors.gray['700']} />
        </TouchableOpacity>

        <View style={styles.containerLogo}>
          <Image source={require('../../../assets/logo.png')} />
        </View>
        
        <Text style={styles.title}>
          Agora coloque os 4 primeiros {'\n'}
          dígitos do seu CPF.
        </Text>

        <View style={styles.form}>
          <Input
            label="CPF"
            icon={ProfileIcon}
            placeholder="xxx.x"
            errorMessage="CPF incorreto ou não atrelado a placa"
          />

          <View style={styles.alert}>
            <Text style={styles.message}>
              Em caso de permanência de erro,
              entrar em contato com a nossa central:
            </Text>
            <Text style={styles.phone}>
              11 3533 2127
            </Text>
          </View>


          <Button text="Validar" onPress={changeValidator} loading={loading} />
        </View>
      </View>

    </TouchableWithoutFeedback>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    padding: 24
  },
  backButton: {
    position: 'absolute',
    left: 24,
    top: 60
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
  form: {
    gap: 32
  },
  alert: {
    paddingVertical: 8,
    paddingHorizontal: 52,
    backgroundColor: colors.alert['200'],
    borderRadius: 8,
    alignItems: 'center'
  },
  message: {
    fontSize: 16,
    fontFamily: fonts.SEMI_BOLD,
    color: colors.gray['700'],
  },
  phone: {
    fontSize: 16,
    fontFamily: fonts.SEMI_BOLD,
    color: colors.primary['400'],
    marginTop: 10
  },
});