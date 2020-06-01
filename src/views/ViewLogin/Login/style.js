import { StyleSheet } from "aphrodite/no-important"

const style = StyleSheet.create({
    flex: {
        width: "100%",
        flexDirection: "column",
        alignItems: "stretch",
        marginBottom: 20
    },
    fContainer: {
        width: "90%",
        margin: "auto",
    },
    smallText: {
        fontSize: ".7em",
        marginBottom: "3em",
        color: "gray"
    },
    right: {
        textAlign: "right"
    },
    center: {
        textAlign: "center"
    },
    marginTop : {
        marginTop : "4em"
    },
    cancel : {
        background : "rgba(0,0,0,.02)",
        color : "gray",
        boxShadow : "unset"
    }
})

export default style;