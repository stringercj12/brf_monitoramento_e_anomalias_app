import { StyleSheet } from "react-native";
import { colors, fonts } from "../../core/themes";

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 24
  },
  deliverie: {
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
  deliverieActive: {
    borderLeftWidth: 16,
    borderWidth: 1,
    borderLeftColor: colors.primary['500'],
    borderColor: colors.primary['500'],
  },
  deliverieTitle: {
    fontSize: 18,
    fontFamily: fonts.BOLD,
    color: colors.gray['700'],
    marginBottom: 10,
  },
  deliverieSubTitle: {
    fontSize: 14,
    fontFamily: fonts.MEDIUM,
    color: colors.gray['700'],
    marginBottom: 10,
  },
  deliverieHours: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 22
  },
  deliverieHour: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8
  },
  deliverieHourText: {
    fontSize: 14,
    fontFamily: fonts.MEDIUM,
    color: colors.gray['700'],
  },
  deliverieHourTextBold: {
    fontFamily: fonts.BOLD,
    color: colors.gray['700'],
  },
  marker: {
    overflow: 'hidden',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 2
  },
  markerCircle:{
    width: 30,
    height: 30,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary['500'],
  },
  markerLine: {
    flex: 1,
    borderLeftWidth: 3,
    borderLeftStyle: 'dotted',
    borderLeftColor: colors.gray['500'],
  },
  markerText: {
    color: colors.white,
    fontFamily: fonts.SEMI_BOLD,
    fontSize: 14,
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
  },
  searchButtonClean: {

  },
  searchButtonCleanText: {

  },
});
