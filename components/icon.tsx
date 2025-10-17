import { FontAwesome6 } from '@expo/vector-icons'
import styled from 'styled-components/native'

export type IconType = React.ComponentProps<typeof FontAwesome6>['name']

interface IProps {
	name: IconType
	size?: number
	color?: string
}

export const Icon = ({ name, size = 18, color }: IProps) => {
	return <StyledIcon name={name} size={size} color={color} />
}

const StyledIcon = styled(FontAwesome6)<{ color?: string }>`
	color: ${({ theme, color }) => color ?? theme.grayScale.gray1};
`
