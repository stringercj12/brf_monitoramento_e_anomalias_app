import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { colors, fonts } from "../../core/themes";

import TemperatureIcon from '../../assets/icons/temperature.svg';
import TrackerIcon from '../../assets/icons/tracker.svg';
import ArrowRightIcon from '../../assets/icons/arrow-right.svg';
import SearchIcon from '../../assets/icons/search.svg';
import StartIcon from '../../assets/icons/start.svg';
import EndIcon from '../../assets/icons/end.svg';
import ClockIcon from '../../assets/icons/time-clock-circle.svg';

import { Input } from "../../components/Input";
import { EmptyList } from "../../components/EmptyList";
import { useState } from "react";

export function HomeScreen() {
  const [entregas, setEntregas] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Image source={require('../../assets/logo.png')} style={styles.logo} />
        </View>

        <Text style={styles.title}>Status</Text>

        <View style={styles.cardsStatus}>
          <View style={styles.rowButtonStatus}>
            <TouchableOpacity style={styles.buttonStatus}>
              <View style={styles.texts}>
                <Text style={styles.buttonStatusText}>Entregas</Text>
                <Text style={styles.buttonStatusEntregasText}>0/6</Text>
              </View>
              <View>
                <View style={styles.cicle}>

                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonStatus}>
              <View style={styles.texts}>
                <Text style={styles.buttonStatusText}>Temperatura</Text>
                <Text style={styles.buttonStatusSubText}>-10°</Text>
              </View>
              <View>
                <TemperatureIcon color={colors.alert['500']} />
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.rowButtonStatus}>
            <TouchableOpacity style={styles.buttonStatus}>
              <View style={styles.texts}>
                <Text style={styles.buttonStatusText}>Sinal</Text>
                <Text style={styles.buttonStatusSubText}>90%</Text>
              </View>
              <View>
                <TrackerIcon color={colors.success['500']} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonStatus}>
              <View style={styles.texts}>
                <Text style={styles.buttonStatusText}>Pendências</Text>
                <Text style={styles.buttonStatusSubText}>0</Text>
              </View>
              <View>
                <ArrowRightIcon color={colors.primary['400']} />
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.rowButtonStatus}>
            <TouchableOpacity style={styles.buttonStatus}>
              <View style={styles.texts}>
                <Text style={styles.buttonStatusText}>Tempo previsto</Text>
                <Text style={styles.buttonStatusSubText}>04:50</Text>
              </View>
              <View>
                <ClockIcon color={colors.gray['500']} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonStatus}>
              <View style={styles.texts}>
                <Text style={styles.buttonStatusText}>Tempo realizado</Text>
                <Text style={styles.buttonStatusSubText}>00:41</Text>
              </View>
              <View>
                <ClockIcon color={colors.gray['500']} />
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <Text style={styles.title}>Entregas</Text>
        <Text style={styles.subTitle}>Siga o roteiro planejado para melhor desempenho</Text>

        <Input
          placeholder="Buscar cliente"
          icon={SearchIcon}
        />


        <View style={styles.navigationTabs}>
          <TouchableOpacity style={[styles.navigationTab, styles.navigationTabActive]} onPress={() => setEntregas([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])}>
            <Text style={[styles.navigationTabText, styles.navigationTabTextActive]}>
              Pendentes (6)
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navigationTab} onPress={() => setEntregas([])}>
            <Text style={styles.navigationTabText}>
              Finalizadas
            </Text>
          </TouchableOpacity>
        </View>

        {
          entregas.length === 0 ? <EmptyList /> :
            entregas.map((v) => (
              <View style={[styles.cardDeliveries, v % 2 == 0 && styles.cardDeliveriesActive]} key={v}>
                <Text style={styles.cardDeliveriesTitle}>Carrefour Osasco</Text>
                <Text style={styles.cardDeliveriesSubTitle}>Av. Autonomista, 2938 - Osasco - SP</Text>

                <View style={styles.cardDeliveriesHours}>
                  <View style={styles.cardDeliveriesHour}>
                    <StartIcon width={18} color={colors.gray['700']} />
                    <Text style={styles.cardDeliveriesHourTextBold}>Início:</Text>
                    <Text style={styles.cardDeliveriesHourText}>09:00</Text>
                  </View>
                  <View style={styles.cardDeliveriesHour}>
                    <EndIcon width={18} color={colors.gray['700']} />
                    <Text style={styles.cardDeliveriesHourTextBold}>Fim:</Text>
                    <Text style={styles.cardDeliveriesHourText}>09:45</Text>
                  </View>
                </View>
              </View>
            ))}

      </ScrollView>

    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: colors.body
  },
  emptyList: {

  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: 40,
    marginTop: 60,
    marginBottom: 16,
  },
  logo: {
  },
  title: {
    fontSize: 30,
    fontFamily: fonts.BOLD,
    color: colors.gray['700'],
    marginBottom: 12,
    marginTop: 24
  },
  subTitle: {
    fontSize: 14,
    fontFamily: fonts.MEDIUM,
    color: colors.gray['700'],
    marginBottom: 14,
  },
  cardsStatus: {
    gap: 8,
  },
  rowButtonStatus: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 8,
  },
  buttonStatus: {
    backgroundColor: colors.white,
    borderRadius: 8,
    padding: 16,
    elevation: 1,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: colors.black['800'],
    shadowOffset: {
      width: -2,
      height: 4
    },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  buttonStatusText: {
    fontSize: 14,
    fontFamily: fonts.BOLD,
    color: colors.gray['700'],
    marginBottom: 10,
  },
  buttonStatusEntregasText: {
    fontSize: 14,
    fontFamily: fonts.MEDIUM,
    color: colors.success['500'],
    marginBottom: 10,
  },
  buttonStatusSubText: {
    fontSize: 14,
    fontFamily: fonts.MEDIUM,
    color: colors.gray['700'],
    marginBottom: 10,
  },
  texts: {

  },
  cicle: {
    borderWidth: 4,
    width: 44,
    height: 44,
    borderRadius: 100,
    borderColor: colors.gray['400'],
  },
  navigationTabs: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: colors.black['800'],
    marginVertical: 24,
  },
  navigationTab: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: colors.gray['400'],
  },
  navigationTabText: {
    fontSize: 16,
    fontFamily: fonts.MEDIUM,
    color: colors.gray['600'],
  },
  navigationTabActive: {
    borderBottomWidth: 1,
    borderBottomColor: colors.primary['400'],
  },
  navigationTabTextActive: {
    color: colors.primary['400'],
  },
  cardDeliveries: {
    backgroundColor: colors.white,
    borderRadius: 10,
    padding: 16,
    marginBottom: 16,
    elevation: 1,
    flex: 1,
    shadowColor: colors.black['800'],
    shadowOffset: {
      width: -2,
      height: 4
    },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  cardDeliveriesActive: {
    borderLeftWidth: 16,
    borderWidth: 1,
    borderLeftColor: colors.primary['500'],
    borderColor: colors.primary['500'],
  },
  cardDeliveriesTitle: {
    fontSize: 18,
    fontFamily: fonts.BOLD,
    color: colors.gray['700'],
    marginBottom: 10,
  },
  cardDeliveriesSubTitle: {
    fontSize: 14,
    fontFamily: fonts.MEDIUM,
    color: colors.gray['700'],
    marginBottom: 10,
  },
  cardDeliveriesHours: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 22
  },
  cardDeliveriesHour: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8
  },
  cardDeliveriesHourText: {
    fontSize: 14,
    fontFamily: fonts.MEDIUM,
    color: colors.gray['700'],
  },
  cardDeliveriesHourTextBold: {
    fontFamily: fonts.BOLD,
    color: colors.gray['700'],
  }
})
