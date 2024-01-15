import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { colors, fonts } from "../../core/themes";

import TemperatureIcon from '../../assets/icons/temperature.svg';
import TrackerIcon from '../../assets/icons/tracker.svg';
import ArrowRightIcon from '../../assets/icons/arrow-right.svg';
import SearchIcon from '../../assets/icons/search.svg';
import ClockIcon from '../../assets/icons/time-clock-circle.svg';

import { Input } from "../../components/Input";
import { EmptyList } from "../../components/EmptyList";
import { useState } from "react";
import { styles } from "./styles";
import { Deliverie } from "../../components/deliveries";



const deliveries: Deliverie[] = [
    {
        id: 1,
        title: 'Carrefour Osasco',
        address: 'Av. Autonomista, 2938 - Osasco - SP0',
        hourStart: '09:00',
        hourEnd: '09:45',
        active: true
    },
    {
        id: 2,
        title: 'Hipermercado Big',
        address: 'Av. Autonomista, 2938 - Osasco - SP0',
        hourStart: '10:15',
        hourEnd: '10:40',
        active: false
    }
]

export function HomeScreen() {
    const [entregas, setEntregas] = useState(deliveries)
    const [tabSelected, setTabSelected] = useState('pendente')


    function handleTabFilter(type: string) {

        if (tabSelected === type) {
            setEntregas(deliveries);
            setTabSelected(type);
            return;
        } else {
            setEntregas(deliveries);
            setTabSelected(type);
        }
    }
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
                                <View style={styles.cicle} />
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

                <View style={styles.search}>
                    <Input
                        placeholder="Buscar cliente"
                        icon={SearchIcon}
                    />

                    <TouchableOpacity style={styles.searchButtonClean}>
                        <Text style={styles.searchButtonCleanText}>Cancelar</Text>
                    </TouchableOpacity>
                </View>


                <View style={styles.navigationTabs}>
                    <TouchableOpacity
                        onPress={() => handleTabFilter('pendente')}
                        style={[
                            styles.navigationTab,
                            tabSelected === 'pendente' && styles.navigationTabActive
                        ]}
                    >
                        <Text
                            style={[
                                styles.navigationTabText,
                                tabSelected === 'pendente' && styles.navigationTabTextActive
                            ]}
                        >
                            Pendentes (6)
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => handleTabFilter('finalizadas')}
                        style={[
                            styles.navigationTab,
                            tabSelected !== 'pendente' && styles.navigationTabActive
                        ]}
                    >
                        <Text
                            style={[
                                styles.navigationTabText,
                                tabSelected !== 'pendente' && styles.navigationTabTextActive
                            ]}
                        >
                            Finalizadas
                        </Text>
                    </TouchableOpacity>
                </View>

                {/* {
                    entregas.length === 0 ? <EmptyList /> :
                        entregas.map((v) => (
                            <View style={{
                                padding: 24,
                                flexDirection: 'row',
                                gap: 24
                            }}>
                                <View style={styles.marker} />
                                <View style={[styles.cardDeliveries, v % 2 == 0 && styles.cardDeliveriesActive]}
                                    key={v}>
                                    <Text style={styles.cardDeliveriesTitle}>Carrefour Osasco</Text>
                                    <Text style={styles.cardDeliveriesSubTitle}>Av. Autonomista, 2938 - Osasco -
                                        SP</Text>

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
                            </View>
                        ))} */}


                <FlatList
                    style={styles.container}
                    data={entregas}
                    keyExtractor={(item) => String(item)}
                    renderItem={({ item }) => <Deliverie item={item} />}
                />

            </ScrollView>

        </View>
    )
}

