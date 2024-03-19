import { SafeAreaProvider } from "react-native-safe-area-context"
import { Text, StyleSheet, Image } from "react-native"
import NavigationProvider from "@/components/providers/Navigation"

export default function App() {
	return (
	 <SafeAreaProvider>
		<NavigationProvider />
	 </SafeAreaProvider>
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
