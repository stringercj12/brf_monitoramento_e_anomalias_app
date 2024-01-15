import { Text, View } from "react-native";

import StartIcon from '../../assets/icons/start.svg';
import EndIcon from '../../assets/icons/end.svg';
import { styles } from "./styles";
import { colors } from "../../core/themes";

interface Props {
  item: Deliverie
}

export interface Deliverie {
  id: number;
  title: string;
  address: string;
  hourStart: string;
  hourEnd: string;
  active?: boolean;
}


export function Deliverie({ item }: Props) {
  return (
    <View style={styles.container} >
      <View style={styles.marker}>
        <View style={styles.markerLine} />
        <View style={styles.markerCircle}>
          <Text style={styles.markerText}>{item.id}</Text>
        </View>
        <View style={styles.markerLine} />
      </View>
      <View style={[styles.deliverie, item.active && styles.deliverieActive]}
      >
        <Text style={styles.deliverieTitle}>{item.title}</Text>
        <Text style={styles.deliverieSubTitle}>
          {item.address}
        </Text>

        <View style={styles.deliverieHours}>
          <View style={styles.deliverieHour}>
            <StartIcon width={18} color={colors.gray['700']} />
            <Text style={styles.deliverieHourTextBold}>Início:</Text>
            <Text style={styles.deliverieHourText}>{item.hourStart}</Text>
          </View>
          <View style={styles.deliverieHour}>
            <EndIcon width={18} color={colors.gray['700']} />
            <Text style={styles.deliverieHourTextBold}>Fim:</Text>
            <Text style={styles.deliverieHourText}>{item.hourEnd}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}