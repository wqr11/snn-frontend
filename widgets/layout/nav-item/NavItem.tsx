import { Icon, IconType } from '@/components'
import { THEMES } from '@/components/provider'
import { StyledText } from '@/components/styled-text'
import { themeModel } from '@/entities/theme'
import { useUnit } from 'effector-react'
import { TouchableOpacity } from 'react-native'

import { styled } from 'styled-components/native'

export interface IProps {
	icon: IconType
	title: string
	onPress: () => void
	paddingVertical?: number
	isText?: boolean
	isActive?: boolean
	onClose?: () => void
}

export const NavItem = ({
	icon,
	title,
	onPress,
	paddingVertical = 17,
	isText = true,
	isActive = false,
	onClose,
}: IProps) => {
	const themeMode = useUnit(themeModel.$themeMode)

	return (
		<StyledPressable
			paddingVertical={paddingVertical}
			onPress={() => {
				onPress()

				if (onClose) {
					onClose()
				}
			}}
		>
			<Icon
				name={icon}
				size={20}
				color={isActive ? THEMES[themeMode].accent.primary : undefined}
			/>
			{isText && (
				<ActiveStyledText
					style={{
						fontSize: 16,
						fontWeight: '500',
					}}
					isActive={isActive}
				>
					{title}
				</ActiveStyledText>
			)}
		</StyledPressable>
	)
}

const StyledPressable = styled(TouchableOpacity)<{ paddingVertical: number }>`
	flex-direction: row;
	gap: 12px;
	padding: ${props => props.paddingVertical}px 0;
`

const ActiveStyledText = styled(StyledText)<{ isActive?: boolean }>`
	color: ${({ theme, isActive }) => isActive && theme.accent.primary};
`
