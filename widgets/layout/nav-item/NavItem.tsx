import { Icon, IconType } from '@/components'
import { Text, TouchableOpacity } from 'react-native'

import { styled } from 'styled-components/native'

export interface IProps {
	icon: IconType
	title: string
	onPress: () => void
	paddingVertical?: number
	isIcon?: boolean
}

export const NavItem = ({
	icon,
	title,
	onPress,
	paddingVertical = 17,
	isIcon = true,
}: IProps) => {
	return (
		<StyledPressable paddingVertical={paddingVertical} onPress={onPress}>
			{isIcon && <Icon name={icon} size={20} />}
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

const StyledPressable = styled(TouchableOpacity)<{ paddingVertical: number }>`
	flex-direction: row;
	gap: 12px;
	padding: ${props => props.paddingVertical}px 0;
`
