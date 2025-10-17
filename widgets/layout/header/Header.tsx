import { Divider, Icon, RightSlidePanel } from '@/components'
import { OpacityText } from '@/components/opacity-text'
import { StyledText } from '@/components/styled-text'
import { themeModel } from '@/entities/theme'
import { useUnit } from 'effector-react'
import { Image } from 'expo-image'
import { RelativePathString, usePathname, useRouter } from 'expo-router'
import { useState } from 'react'
import { FlatList, Pressable, View } from 'react-native'
import { styled } from 'styled-components/native'
import { NavItem } from '../nav-item/NavItem'
import { navList } from '../nav-list.data'
import { Logo } from './logo/Logo'

const PersonImage = require('@/assets/images/person.png')

export const Header = () => {
	const [isOpen, setIsOpen] = useState(false)

	const { navigate } = useRouter()

	const themeMode = useUnit(themeModel.$themeMode)

	const setThemeMode = useUnit(themeModel.setThemeMode)

	const pathname = usePathname()

	return (
		<StyledHeader>
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
					<PersonContainer>
						<Image
							source={PersonImage}
							alt='Person'
							style={{ width: 68, height: 68 }}
						/>

						<TextContainer>
							<StyledText
								style={{
									fontWeight: '700',
									fontSize: 16,
									lineHeight: 16,
								}}
							>
								Sophia Rose
							</StyledText>

							<OpacityText>UX/UI Designer</OpacityText>
						</TextContainer>
					</PersonContainer>

					<View>
						<StyledTouchableOpacity
							onPress={() =>
								setThemeMode(themeMode === 'dark' ? 'light' : 'dark')
							}
						>
							<Icon name={themeMode === 'light' ? 'sun' : 'moon'} size={20} />
						</StyledTouchableOpacity>
					</View>
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
								onClose={() => setIsOpen(false)}
								isActive={item.link === pathname}
							/>
						)}
					/>

					<NavItem icon='arrow-left' onPress={() => {}} title='Выход' />
				</NavListContainer>
			</RightSlidePanel>
		</StyledHeader>
	)
}

const StyledHeader = styled.View`
	background: ${({ theme }) => theme.background};
`

const HeaderContainer = styled.View`
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	position: relative;
	z-index: 1;
	padding: 12px 16px;
	border-bottom-width: 1px;
	border-bottom-color: ${({ theme }) => theme.grayScale.gray2};
`

const StyledTouchableOpacity = styled.TouchableOpacity`
	padding: 5px;
	border-width: 1px;
	border-color: ${({ theme }) => theme.grayScale.gray1};
	border-radius: 50%;
	width: 40px;
	height: 40px;
	justify-content: center;
	align-items: center;
`

const UserContainer = styled.View`
	flex-direction: row;
	justify-content: space-between;
	padding: 0 51px;
`

const PersonContainer = styled.View`
	gap: 20px;
`

const TextContainer = styled.View`
	gap: 12px;
`

const NavListContainer = styled.View`
	padding: 0 51px;
	gap: 30px;
`
