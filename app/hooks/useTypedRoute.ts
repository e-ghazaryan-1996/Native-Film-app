import { type RootStackParamList } from "@/navigation/navgation.types"
import { RouteProp, useRoute } from "@react-navigation/native"

const useTypedRoute = () => useRoute<RouteProp<RootStackParamList>>()

export default useTypedRoute
