import { SafeAreaProvider } from "react-native-safe-area-context"
import { Text, StyleSheet, Image } from "react-native"

export default function App() {
	return (
		<>
		
			<Text style={textSTyles.txt}>
        A
      </Text>
			<Image
				style={textSTyles.image}
				source={require("@/assets/pictures/love.gif")}
			/>
		</>
	)
}

const textSTyles = StyleSheet.create({
	txt: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		fontSize: 40,
		color: "red",
		marginTop: 150,
		marginLeft: 40
	},
	image: {
		width: 312,
		height: 312,
		position: "absolute",
    top : "35%"
	}
})
