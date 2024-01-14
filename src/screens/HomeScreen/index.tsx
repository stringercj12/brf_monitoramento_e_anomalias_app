import {FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {colors, fonts} from "../../core/themes";

import TemperatureIcon from '../../assets/icons/temperature.svg';
import TrackerIcon from '../../assets/icons/tracker.svg';
import ArrowRightIcon from '../../assets/icons/arrow-right.svg';
import SearchIcon from '../../assets/icons/search.svg';
import StartIcon from '../../assets/icons/start.svg';
import EndIcon from '../../assets/icons/end.svg';
import ClockIcon from '../../assets/icons/time-clock-circle.svg';

import {Input} from "../../components/Input";
import {EmptyList} from "../../components/EmptyList";
import {useState} from "react";
import {styles} from "./styles";


export function HomeScreen() {

    const TimelineItem = ({title, description, time, isMarked}) => {
        return (
            <View style={styles.container}>
                {isMarked && <View style={styles.marker}/>}
                <View style={styles.content}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.description}>{description}</Text>
                </View>
                <Text style={styles.time}>{time}</Text>
            </View>
        );
    };

    const [entregas, setEntregas] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.header}>
                    <Image source={require('../../assets/logo.png')} style={styles.logo}/>
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
                                <TemperatureIcon color={colors.alert['500']}/>
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
                                <TrackerIcon color={colors.success['500']}/>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonStatus}>
                            <View style={styles.texts}>
                                <Text style={styles.buttonStatusText}>Pendências</Text>
                                <Text style={styles.buttonStatusSubText}>0</Text>
                            </View>
                            <View>
                                <ArrowRightIcon color={colors.primary['400']}/>
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
                                <ClockIcon color={colors.gray['500']}/>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonStatus}>
                            <View style={styles.texts}>
                                <Text style={styles.buttonStatusText}>Tempo realizado</Text>
                                <Text style={styles.buttonStatusSubText}>00:41</Text>
                            </View>
                            <View>
                                <ClockIcon color={colors.gray['500']}/>
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
                    <TouchableOpacity style={[styles.navigationTab, styles.navigationTabActive]}
                                      onPress={() => setEntregas([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])}>
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
                    entregas.length === 0 ? <EmptyList/> :
                        entregas.map((v) => (
                            <View style={{
                                padding: 24,
                                flexDirection: 'row',
                                gap: 24
                            }}>
                                <View style={styles.marker}/>
                                <View style={[styles.cardDeliveries, v % 2 == 0 && styles.cardDeliveriesActive]}
                                      key={v}>
                                    <Text style={styles.cardDeliveriesTitle}>Carrefour Osasco</Text>
                                    <Text style={styles.cardDeliveriesSubTitle}>Av. Autonomista, 2938 - Osasco -
                                        SP</Text>

                                    <View style={styles.cardDeliveriesHours}>
                                        <View style={styles.cardDeliveriesHour}>
                                            <StartIcon width={18} color={colors.gray['700']}/>
                                            <Text style={styles.cardDeliveriesHourTextBold}>Início:</Text>
                                            <Text style={styles.cardDeliveriesHourText}>09:00</Text>
                                        </View>
                                        <View style={styles.cardDeliveriesHour}>
                                            <EndIcon width={18} color={colors.gray['700']}/>
                                            <Text style={styles.cardDeliveriesHourTextBold}>Fim:</Text>
                                            <Text style={styles.cardDeliveriesHourText}>09:45</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        ))}


                <FlatList
                    style={styles.container}
                    data={entregas}
                    keyExtractor={(item) => String(item)}
                    renderItem={({item}) => (
                        <TimelineItem
                            title={item}
                            description={item}
                            time={item}
                            isMarked={true}
                        />
                    )}
                />

            </ScrollView>

        </View>
    )
}

