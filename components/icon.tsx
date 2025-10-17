import { FontAwesome6 } from '@expo/vector-icons'

export type IconType = React.ComponentProps<typeof FontAwesome6>['name']

interface IProps {
	name: IconType
	color?: string
	size?: number
}

export const Icon = ({ name, color = '#475569', size = 18 }: IProps) => {
	return <FontAwesome6 name={name} color={color} size={size} />
}
