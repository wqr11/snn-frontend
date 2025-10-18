import { Button } from '@/components/button'
import { themeModel } from '@/entities/theme'
import { FontAwesome6 } from '@expo/vector-icons'
import { useUnit } from 'effector-react'
import { useRouter } from 'expo-router'
import { useState } from 'react'
import { StyleSheet } from 'react-native'
import { styled } from 'styled-components/native'
import { Logo } from './logo/Logo'

const PersonImage = require('@/assets/images/person.png')

export const Header = () => {
	const [isOpen, setIsOpen] = useState(false)

	const { navigate } = useRouter()

	const themeMode = useUnit(themeModel.$themeMode)
	const setThemeMode = useUnit(themeModel.setThemeMode)

	const styles = StyleSheet.create({
		menu: {
			padding: 20,
			borderRadius: 12,
		},
	})

	return (
		<StyledHeader>
			<HeaderContainer>
				<Logo />

				<Button onPress={() => setIsOpen(true)} style={styles.menu}>
					<FontAwesome6 name='bars' size={20} />
				</Button>
			</HeaderContainer>
		</StyledHeader>
	)
}

const StyledHeader = styled.View`
	padding-top: 42px;
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
