import { Divider, Icon, IconType } from '@/components'
import { RightSlidePanel } from '@/components/right-slide-menu'
import { Image } from 'expo-image'
import { RelativePathString, useRouter } from 'expo-router'
import { useState } from 'react'
import { FlatList, Pressable, Text, View } from 'react-native'
import { styled } from 'styled-components/native'
import { Logo } from './logo/Logo'
import { NavItem } from './nav-item/NavItem'

const PersonImage = require('@/assets/images/person.png')

type NavItemType = {
	icon: IconType
	title: string
	link: string
}

const navList: NavItemType[] = [
	{
		icon: 'book',
		title: 'Лента',
		link: '/',
	},
	{
		icon: 'house',
		title: 'Профиль',
		link: '/profile',
	},
	{
		icon: 'users',
		title: 'Группы',
		link: '/groups',
	},
	{
		icon: 'user',
		title: 'Профиль',
		link: '/profile',
	},
	{
		icon: 'gear',
		title: 'Настройки',
		link: '/settings',
	},
]

export const Header = () => {
	const [isOpen, setIsOpen] = useState(false)

	const { navigate } = useRouter()

	return (
		<View>
			<HeaderContainer>
				<Logo />

				<Pressable onPress={() => setIsOpen(true)}>
					<Icon name='bars' />
				</Pressable>
			</HeaderContainer>

			<RightSlidePanel isOpen={isOpen}>
				<View
					style={{
						flexDirection: 'row',
						alignItems: 'center',
						justifyContent: 'flex-end',
						padding: 20,
					}}
				>
					<Pressable onPress={() => setIsOpen(false)}>
						<Icon name='xmark' size={20} />
					</Pressable>
				</View>

				<UserContainer>
					<Image
						source={PersonImage}
						alt='Person'
						style={{ width: 68, height: 68 }}
					/>

					<TextContainer>
						<Text
							style={{
								fontWeight: '700',
								fontSize: 16,
								lineHeight: 16,
							}}
						>
							Sophia Rose
						</Text>

						<Text>UX/UI Designer</Text>
					</TextContainer>
				</UserContainer>

				<Divider />

				<NavListContainer>
					<FlatList
						data={navList}
						renderItem={({ item }) => (
							<NavItem
								{...item}
								key={item.link}
								onPress={() => navigate(item.link as RelativePathString)}
							/>
						)}
					/>

					<NavItem icon='arrow-left' onPress={() => {}} title='Выход' />
				</NavListContainer>
			</RightSlidePanel>
		</View>
	)
}

const HeaderContainer = styled.View`
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	position: relative;
	z-index: 1;
	padding: 12px 16px;
`

const UserContainer = styled.View`
	padding-left: 51px;
	gap: 20px;
	padding-right: 41px;
`

const TextContainer = styled.View`
	gap: 12px;
`

const NavListContainer = styled.View`
	padding-left: 51px;
	padding-right: 41px;
	gap: 30px;
`
