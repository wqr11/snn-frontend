import { Icon, IconType } from '@/components'
import { Text } from 'react-native'
import { styled } from 'styled-components/native'

export interface IProps {
	icon: IconType
	title: string
	onPress: () => void
}

export const NavItem = ({ icon, title, onPress }: IProps) => {
	return (
		<StyledPressable onPress={onPress}>
			<Icon name={icon} size={20} />
			<Text
				style={{
					fontSize: 16,
					fontWeight: '500',
				}}
			>
				{title}
			</Text>
		</StyledPressable>
	)
}

const StyledPressable = styled.Pressable`
	flex-direction: row;
	gap: 12px;
	padding: 17px 0;
`
