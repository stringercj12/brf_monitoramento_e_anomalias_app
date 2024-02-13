import { StyleSheet } from "react-native";
import { colors, fonts } from "../../core/themes";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.body
    },
    emptyList: {},
    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        height: 40,
        marginTop: 60,
        marginBottom: 16,
    },
    logo: {},
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
    texts: {},
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
    },
    container2: {
        flexDirection: 'row',
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        overflow: 'hidden'
    },
    marker: {
        width: 40,
        height: 40,
        borderRadius: 40,
        backgroundColor: 'red',
    },
    content: {
        flex: 1,
    },
    title2: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    description: {
        marginTop: 8,
    },
    time: {
        fontSize: 14,
        color: '#888',
    },
    search: {
        padding: 24,
        // flexDirection: 'row',
    },
    searchButtonClean: {
        position: 'absolute',
        top: 54,
        right: 36,
    },
    searchButtonCleanText: {
        color: colors.primary['400'],
        fontFamily: fonts.SEMI_BOLD,
        fontSize: 14,
    },
});
