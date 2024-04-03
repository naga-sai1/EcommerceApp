import { StyleSheet } from "react-native"
import { COLORS, SIZES, SHADOWS } from "../../constants"

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: SIZES.medium,
        flexDirection: "row",
        padding: SIZES.medium,
        borderRadius: SIZES.small,
        backgroundColor: "#FFFFFF",
        ...SHADOWS.medium,
        shadowColor: COLORS.lightWhite,
    },
    image: {
        width: 70,
        backgroundColor: COLORS.secondary,
        borderRadius: SIZES.medium,
        justifyContent: "center",
        alignContent: "center",
    }
    ,
    productImg: {
        width: "100%",
        height: 65,
        borderRadius: SIZES.small,
        resizeMode: "cover",
    },
    textContainer: {
        flex: 1,
        marginHorizontal: SIZES.medium,
    },
    productTitle: {
        fontSize: SIZES.medium,
        fontFamily: "bold",
        color: COLORS.primary,
    },
    supplier: {
        fontSize: SIZES.small + 2,
        fontFamily: "regular",
        color: COLORS.gray,
        marginTop: 3,
    },
    price: {

    }
})

export default styles