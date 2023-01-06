import { StyleSheet } from "react-native";
import { COLORS } from "../../themes/constants";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.BLACK,
    },
    profileContainer: {
    },
    profileNameBox: {
       alignItems:'center',
       justifyContent:'center',
    },
    profileBtnBox: {},
    profileImageBox: {},
    profileName: {
        fontSize: 20,
        fontWeight:'700',
        color:COLORS.WHITE,
        testID:'center',
    },
    profileId: {
        fontSize: 16,
        fontWeight:'300',
        color:COLORS.WHITE,
        marginTop: 5,
        textAlign:'center',
    },
    profileBtn: {
        width: 90,
        height: 30,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:COLORS.YELLOW,
        borderRadius: 5,
    },
    profileBtnText: {
        fontSize: 12,
        fontWeight:'600',
        color:COLORS.WHITE,
    },
    profileBorder: {
        width: 80,
        height:80,
        alignItems:'center',
        justifyContent:'center',
    },
    profileImage: {
        width:60,
        height: 60,
    },
    titleBtn:{
        fontSize: 17,
        fontWeight:'600',
        color:COLORS.RED,
    },
})