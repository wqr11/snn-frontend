import { themeModel } from '@/entities/theme'
import { useUnit } from 'effector-react'
import { useEffect, useRef } from 'react'
import { Keyboard, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import { styled } from 'styled-components/native'
import { Icon } from './icon'
import { ThemeMode, THEMES } from './provider'

interface IProps {
	placeholder?: string
}

export const SearchField = ({ placeholder }: IProps) => {
	const inputRef = useRef<any>(null)

	const themeMode = useUnit(themeModel.$themeMode)

	useEffect(() => {
		const keyboardDidHideListener = Keyboard.addListener(
			'keyboardDidHide',
			() => {
				inputRef.current?.blur()
			}
		)

		return () => {
			keyboardDidHideListener.remove()
		}
	}, [])

	return (
		<SearchContainer>
			<TextInput
				ref={inputRef}
				style={styles(themeMode).input}
				placeholder={placeholder}
				placeholderTextColor={THEMES[themeMode].grayScale.gray1}
			/>

			<TouchableOpacity>
				<Icon name={'magnifying-glass'} />
			</TouchableOpacity>
		</SearchContainer>
	)
}

const styles = (themeMode: ThemeMode) =>
	StyleSheet.create({
		input: {
			padding: 0,
			margin: 0,
			flex: 1,
			color: THEMES[themeMode].foreground,
			fontSize: 16,
		},
	})

const SearchContainer = styled.View`
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	padding: 13px 12px;
	border: 1px solid ${({ theme }) => theme.grayScale.gray2};
	border-radius: 123px;
`
