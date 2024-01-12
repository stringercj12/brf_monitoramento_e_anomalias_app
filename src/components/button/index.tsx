import { Text, TouchableOpacity, TouchableOpacityProps, StyleSheet, ActivityIndicator } from "react-native";
import { colors, fonts } from "../../core/themes";

interface Props extends TouchableOpacityProps {
  text: string;
  loading?: boolean;
}

export function Button({ text, disabled, loading, ...rest }: Props) {
  return (
    <TouchableOpacity
      {...rest}
      style={[
        styles.button,
        disabled ? styles.buttonDisabled : styles.buttonEnabled
      ]}
    >
      {
        loading ? <ActivityIndicator
          size="small"
          color={colors.white}
        />
          :
          <Text style={styles.buttonText}>
            {text}
          </Text>
      }
    </TouchableOpacity>
  )
}


const styles = StyleSheet.create({
  button: {
    borderRadius: 24,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonEnabled: {
    backgroundColor: colors.primary['500']
  },
  buttonDisabled: {
    backgroundColor: colors.gray['500']
  },
  buttonText: {
    fontSize: 16,
    fontFamily: fonts.BOLD,
    color: colors.white
  }
});