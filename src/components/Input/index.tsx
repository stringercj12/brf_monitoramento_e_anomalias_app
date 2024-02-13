import {ActivityIndicator, StyleSheet, Text, TextInput, TextInputProps, View} from "react-native";

import AlertIcon from '../../assets/icons/anomaly.svg';
import {colors, fonts} from "../../core/themes";
import {ElementType, useState} from "react";

interface Props extends TextInputProps {
    label?: string
    icon?: ElementType;
    errorMessage?: string;
    loading?: boolean;
}

export function Input({label, icon, errorMessage, loading, ...rest}: Props) {
    const [focus, setFocus] = useState(false);
    const Icon = icon;

    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <View style={[
                styles.inputContainer,
                (focus && !errorMessage) && styles.inputContainerFocus,
                (!focus && !errorMessage) && styles.inputContainerNoFocus,
                errorMessage && styles.inputErrorFocus,
            ]}>
                {icon && <View style={styles.icon}>
                    <Icon color={colors.gray['700']}/>
                </View>}
                <TextInput
                    style={styles.input}
                    placeholderTextColor={colors.gray['500']}
                    onFocus={() => setFocus(true)}
                    onBlur={() => setFocus(false)}
                    {...rest}
                />
                {loading && <ActivityIndicator color={colors.primary['500']} style={styles.loading}/>}

            </View>
            {errorMessage &&
                <View style={styles.errorContainer}>
                    <AlertIcon width={18} color={colors.danger['500']}/>
                    <Text style={styles.errorText}>{errorMessage}</Text>
                </View>}
        </View>
    );
}


const styles = StyleSheet.create({
    container: {},
    label: {
        fontSize: 14,
        color: colors.gray['700'],
        fontFamily: fonts.MEDIUM,
        marginBottom: 4
    },
    inputContainer: {
        height: 48,
        borderRadius: 4,
        alignItems: 'center',
        flexDirection: 'row',
        overflow: 'hidden',
        backgroundColor: colors.white,
    },
    inputContainerFocus: {
        borderWidth: 1,
        borderColor: colors.primary['400'],
    },
    inputContainerNoFocus: {
        borderWidth: 1,
        borderColor: colors.gray['200'],
    },
    inputErrorFocus: {
        borderWidth: 1,
        borderColor: colors.danger['500'],
    },
    icon: {
        width: 48,
        alignItems: "center"
    },
    input: {
        fontSize: 14,
        fontFamily: fonts.MEDIUM,
        width: '100%',
        height: '100%',
        paddingHorizontal: 8
    },
    errorContainer: {
        flexDirection: "row",
        alignItems: 'center',
        gap: 4,
        marginTop: 6
    },
    errorText: {
        fontSize: 14,
        fontFamily: fonts.MEDIUM,
        color: colors.danger['500']
    },
    loading: {
        position: 'absolute',
        right: 10
    }
})
