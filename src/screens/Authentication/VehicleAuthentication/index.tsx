import {
    Image,
    Text,
    View,
    StyleSheet,
    KeyboardAvoidingView,
    Keyboard,
    TouchableHighlight,
    TouchableWithoutFeedback
} from "react-native";
import {colors, fonts} from "../../../core/themes";

import {Input} from "../../../components/Input";
import {Button} from "../../../components/button";
import {useNavigation} from "@react-navigation/native";
import {useState} from "react";

import CarIcon from '../../../assets/icons/vehicle.svg';

export function VehicleAuthentication() {
    const [plate, setPlate] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    const [loading, setLoading] = useState(false);
    const [plateValid, setPlateValid] = useState(false);

    const navigation = useNavigation();


    function handleValidatePlate() {
        setLoading(true);
        if (plate.length < 3) {
            return;
        }


        let plateFormatted = plate;
        if (plate.includes('-')) {
            plateFormatted = `${plate.split('-')[0]}${plate.split('-')[1]}`;
        }

        console.log(plateFormatted.toLowerCase())
        if (plateFormatted.toLowerCase() === 'lto1g01') {
            setTimeout(() => {
                setErrorMessage('')
                setPlateValid(true)
                setLoading(false);
                // navigation.navigate('DriverAuthentication')
            }, 2000)
            // navigation.navigate("Home")
        } else {
            setLoading(false);
            setPlateValid(false)
            setErrorMessage('Placa inválida ou não cadastrada')
        }
    }


    function changeValidator() {
        setLoading(true);


        setTimeout(() => {
            setLoading(false);
            navigation.navigate('DriverAuthentication')
        }, 5000)
        // navigation.navigate('');
    }

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>

            <View style={styles.container}>
                <View style={styles.containerLogo}>
                    <Image source={require('../../../assets/logo.png')}/>

                </View>
                <Text style={styles.title}>
                    Olá, tudo bem? {'\n'}
                    Vamos começar sua jornada!
                </Text>

                <View style={styles.form}>
                    <Input
                        label="Placa"
                        icon={CarIcon}
                        placeholder="Ex: ABC - 1234"
                        errorMessage={errorMessage}
                        loading={loading}
                        onChangeText={setPlate}
                        value={plate}
                        onKeyPress={handleValidatePlate}
                    />

                    {plateValid && <Button text="Validar" onPress={changeValidator} loading={loading}/>}
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
    keyboardAvoidingView: {
        backgroundColor: colors.danger['200'],
        flex: 1
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
});
