import { Image, StyleSheet, Text, View } from "react-native";
import { colors, fonts } from "../../core/themes";

export function EmptyList() {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/undraw_empty_xct9.png')} style={styles.image} />
      <Text style={styles.title}>Nenhuma entrega finalizada</Text>
    </View>
  )
}



const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    gap: 16
  },
  image: {

  },
  title: {
    fontSize: 16,
    fontFamily: fonts.BOLD,
    color: colors.gray['600'],
    marginBottom: 12,
  }
})