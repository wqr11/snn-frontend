import { OpacityText } from '@/components/opacity-text'
import { StyledText } from '@/components/styled-text'
import { formatNumber } from '@/shared/utils/format-number.util'
import { View } from 'react-native'

export interface IStatItem {
	title: string
	count: number
	isFormat?: boolean
}

export const StatItem = ({ count, title, isFormat }: IStatItem) => {
	return (
		<View style={{ alignItems: 'center' }}>
			<StyledText style={{ fontSize: 22, fontWeight: '700' }}>
				{isFormat ? formatNumber(count) : count}
			</StyledText>

			<OpacityText style={{ fontSize: 12 }}>{title}</OpacityText>
		</View>
	)
}
