import { type RootStackParamList } from "@/navigation/navgation.types"
import { userRoutes } from "@/navigation/user.routes"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

const Stack = createNativeStackNavigator<RootStackParamList>()

const NavigationProvider = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				{userRoutes.map(route => {
					return (
						<Stack.Screen
							name={route.name}
							component={route.component}
							key={route.name}
						/>
					)
				})}
			</Stack.Navigator>
		</NavigationContainer>
	)
}

export default NavigationProvider
