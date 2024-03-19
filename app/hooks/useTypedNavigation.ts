import { RootStackParamList } from "@/navigation/navgation.types"
import { useNavigation, NavigationProp } from "@react-navigation/native"

const useTypedNavigation = () => {
	return useNavigation<NavigationProp<RootStackParamList>>()
}

export default useTypedNavigation
