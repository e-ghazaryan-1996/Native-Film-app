export type RootStackParamList = {
	Auth: undefined
	Home: undefined
} & RootStackAdminList

type RootStackAdminList = {
	Admin: undefined
}

export interface IRoute {
	name: keyof RootStackParamList
	component: React.FC
	isAdmin?: boolean
}
