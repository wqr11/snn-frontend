import { OpacityText } from '@/components/opacity-text'
import { StyledText } from '@/components/styled-text'
import { Image } from 'expo-image'
import { TouchableOpacity, View } from 'react-native'

type GroupType = 'company' | 'competence'

interface IProps {
	image: string
	title: string
	description: string
	type: GroupType
}

const GROUP_TYPE: Record<GroupType, string> = {
	company: 'Компания',
	competence: 'Компетенция',
}

export const GroupItem = ({ description, image, title, type }: IProps) => {
	return (
		<TouchableOpacity
			style={{
				flexDirection: 'row',
				justifyContent: 'space-between',
				paddingVertical: 16,
				alignItems: 'center',
			}}
		>
			<View
				style={{
					flexDirection: 'row',
					gap: 12,
				}}
			>
				<Image
					source={image}
					alt={title}
					style={{
						width: 40,
						height: 40,
					}}
				/>

				<View>
					<StyledText
						style={{
							fontSize: 14,
							fontWeight: '600',
						}}
					>
						{title}
					</StyledText>

					<OpacityText
						style={{
							fontSize: 12,
						}}
					>
						{description}
					</OpacityText>
				</View>
			</View>

			<OpacityText style={{ fontSize: 12 }}>{GROUP_TYPE[type]}</OpacityText>
		</TouchableOpacity>
	)
}
