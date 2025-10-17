import { themeModel } from '@/entities/theme'
import { ThemeProvider, THEMES } from '@/shared/components/provider'
import { useUnit } from 'effector-react'
import { Stack } from 'expo-router'

import { Footer } from '@/widgets/layout/footer/Footer'
import { Header } from '@/widgets/layout/header/Header'
import { useEffect } from 'react'
import { StatusBar } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { styled } from 'styled-components/native'

export default function RootLayout() {
	const themeMode = useUnit(themeModel.$themeMode)

	useEffect(() => {
		StatusBar.setBackgroundColor(THEMES[themeMode].foreground)

		StatusBar.setBarStyle(`${themeMode}-content`)

		StatusBar.setTranslucent(false)
	}, [themeMode])

	return (
		<ThemeProvider mode={themeMode ?? 'light'}>
			<SafeAreaProvider>
				<SafeAreaView style={{ flex: 1 }}>
					<StyledScrollView>
						<Header />
						<Stack
							screenOptions={{
								headerShown: false,
							}}
						/>
						<Footer />
					</StyledScrollView>
				</SafeAreaView>
			</SafeAreaProvider>
		</ThemeProvider>
	)
}

const StyledScrollView = styled.View`
	color: ${({ theme }) => theme.foreground};
`
