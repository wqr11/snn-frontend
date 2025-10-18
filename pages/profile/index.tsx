import { Divider, Icon } from '@/components'
import { Accordion } from '@/components/accordion'
import { OpacityText } from '@/components/opacity-text'
import { SearchField } from '@/components/search-field'
import { StyledText } from '@/components/styled-text'
import { Post } from '@/entities/post'
import { StatItem } from '@/entities/profile'
import { PostShortcut } from '@/features/post-shortcut'
import { Image } from 'expo-image'
import { Fragment } from 'react'
import { ScrollView, View } from 'react-native'
import { styled } from 'styled-components/native'
import { ContactList, ContactType } from './styled'

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

const list = ['amazing', 'great', 'lifetime', 'uiux', 'machinelearning']

const contacts: ContactType[] = [
	{
		type: 'phone',
		value: '+7 (900)354-23-12',
	},
	{
		type: 'email',
		value: 'hello@yandex.com',
	},
	{
		type: 'web-site',
		value: 'www.yandex.com',
	},
]

export const ProfilePageUI = () => (
	<ScrollView>
		<ColorBlock />

		<View
			style={{
				paddingTop: 57,
			}}
		>
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
					<Fragment key={item.title}>
						<StatItem {...item} />
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
					</Fragment>
				))}
			</View>

			<Divider
				margin={{
					top: 37,
					bottom: 24,
				}}
			/>

			<Container style={{ gap: 24, marginBottom: 16 }}>
				<StyledText style={{ fontSize: 18, fontWeight: 700 }}>
					Обо мне
				</StyledText>

				<OpacityText style={{ fontSize: 16 }}>
					Креативный дизайнер с фокусом на пользовательский опыт и визуальную
					эстетику. Превращаю сложные задачи в интуитивные интерфейсы.
					Специализация: UI/UX, бренд-дизайн и моушн-графика.
				</OpacityText>
			</Container>

			<Container
				style={{
					flexDirection: 'row',
					flexWrap: 'wrap',
					alignItems: 'center',
					marginBottom: 37,
				}}
			>
				<StyledText style={{ marginRight: 5, fontSize: 16 }}>
					Компетенции:
				</StyledText>

				{list.map(item => (
					<PrimaryStyledText key={item}>#{item}</PrimaryStyledText>
				))}
			</Container>

			<Accordion
				items={[
					{
						id: 'Contact Info',
						content: <ContactList contacts={contacts} />,
						header: isOpen => (
							<BorderContainer
								marginBottom={isOpen ? 10 : 0}
								style={{
									flexDirection: 'row',
									alignItems: 'center',
									justifyContent: 'space-between',
									paddingHorizontal: 8,
									paddingVertical: 16,
								}}
							>
								<StyledText style={{ fontSize: 16, fontWeight: '700' }}>
									Контактная информация
								</StyledText>

								<Icon name={isOpen ? 'chevron-up' : 'chevron-down'} />
							</BorderContainer>
						),
					},
				]}
			/>

			<Container style={{ marginVertical: 32 }}>
				<SearchField placeholder='Введите название поста' />
			</Container>

			<BorderContainer marginBottom={0}>
				<PostShortcut />
			</BorderContainer>
			{new Array(5).fill(null).map((_, i) => (
				<Post key={i} $desc='asd' $username='asda' $role='se' />
			))}
		</View>
	</ScrollView>
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

const PrimaryStyledText = styled(StyledText)`
	color: ${({ theme }) => theme.accent.primary};
	margin-right: 3px;
	font-size: 16px;
`

const BorderContainer = styled.View<{ marginBottom: number }>`
	border-top-width: 1px;
	border-color: ${({ theme }) => theme.grayScale.gray2};
	border-bottom-width: 1px;
	margin-bottom: ${({ marginBottom }) => marginBottom}px;
`
