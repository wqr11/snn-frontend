import { FontAwesome6 } from '@expo/vector-icons'
import styled from 'styled-components/native'

export type IconType = React.ComponentProps<typeof FontAwesome6>['name']

interface IProps {
	name: IconType
	size?: number
}

export const Icon = ({ name, size = 18 }: IProps) => {
	return <StyledIcon name={name} size={size} />
}

const StyledIcon = styled(FontAwesome6)`
	color: ${({ theme }) => theme.grayScale.gray1};
`
