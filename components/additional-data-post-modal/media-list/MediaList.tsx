import { Icon, IconType } from '@/components/icon'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { styled } from 'styled-components/native'

interface IMediaItem {
	icon: IconType
	title: string
}

const mediaList: IMediaItem[] = [
	{
		icon: 'photo-film',
		title: 'Фото/Видео',
	},
	{
		icon: 'chart-column',
		title: 'Опрос',
	},
	{
		icon: 'file',
		title: 'Файл',
	},
]

export const MediaList = () => {
	return (
		<Container>
			<ScrollView horizontal>
				{mediaList.map(({ icon, title }) => (
					<MediaTag key={title}>
						<Icon name={icon} color='#fff' />
						<Text style={{ color: '#fff' }}>{title}</Text>
					</MediaTag>
				))}
			</ScrollView>
		</Container>
	)
}

const Container = styled(View)`
	border-width: 1px;
	border-color: ${({ theme }) => theme.grayScale.gray2};
	border-radius: 8px;
	padding: 10px;
	flex-direction: row;
`

const MediaTag = styled(TouchableOpacity)`
	background-color: ${({ theme }) => theme.accent.primary};
	flex-direction: row;
	gap: 6px;
	padding: 12px 10px;
	border-radius: 8px;
	margin-right: 8px;
`
