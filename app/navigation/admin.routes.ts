import Admin from "@/components/screens/admin/home/Admin"
import { IRoute } from "./navgation.types"

export const adminRoutes: IRoute[] = [
	{
		name: "Admin",
		component: Admin,
		isAdmin: true
	}
]
