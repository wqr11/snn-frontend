import { Divider } from '@/components'
import { OpacityText } from '@/components/opacity-text'
import { StyledText } from '@/components/styled-text'
import { StatItem } from '@/entities/profile'
import { Image } from 'expo-image'
import { View } from 'react-native'
import { styled } from 'styled-components/native'

const PersonImage = require('@/assets/images/person.png')

const data = [
	{
		title: 'Просмотров',
		count: 1208,
		isFormat: false,
	},
	{
		title: 'Комп./Клубах',
		count: 4,
		isFormat: false,
	},
	{
		title: 'Постов',
		count: 1200000,
		isFormat: true,
	},
]

export const ProfilePageUI = () => (
	<View style={{ paddingTop: 57 }}>
		<ColorBlock />

		<View style={{ alignItems: 'center', gap: 15, marginBottom: 36 }}>
			<Image
				source={PersonImage}
				alt='Person'
				style={{ width: 120, height: 120 }}
			/>

			<View style={{ alignItems: 'center' }}>
				<StyledText style={{ fontSize: 22 }}>Анна Маяковская</StyledText>

				<OpacityText>UI/UX Designer</OpacityText>
			</View>
		</View>

		<View
			style={{
				flexDirection: 'row',
				justifyContent: 'center',
				alignItems: 'center',
				gap: 25,
			}}
		>
			{data.map((item, i) => (
				<>
					<StatItem {...item} key={item.title} />
					{i !== data.length - 1 && (
						<Divider
							isVertical
							style={{ height: 40 }}
							margin={{
								bottom: 0,
								left: 0,
								right: 0,
								top: 0,
							}}
						/>
					)}
				</>
			))}
		</View>

		<Divider
			margin={{
				top: 37,
				bottom: 24,
			}}
		/>

		<Container style={{ gap: 24 }}>
			<StyledText style={{ fontSize: 18, fontWeight: 700 }}>Обо мне</StyledText>

			<OpacityText style={{ fontSize: 14 }}>
				Креативный дизайнер с фокусом на пользовательский опыт и визуальную
				эстетику. Превращаю сложные задачи в интуитивные интерфейсы.
				Специализация: UI/UX, бренд-дизайн и моушн-графика.
			</OpacityText>
		</Container>

		<View></View>
	</View>
)

const ColorBlock = styled.View`
	background-color: ${({ theme }) => theme.accent.primary};
	width: 100%;
	height: 150px;
	border-radius: 0 0 30px 30px;
	position: absolute;
`

const Container = styled.View`
	padding: 0 16px;
`
