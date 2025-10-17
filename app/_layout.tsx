import { themeModel } from '@/entities/theme'
import { ThemeProvider } from '@/shared/components/provider'
import { useUnit } from 'effector-react'
import { Stack } from 'expo-router'

import { Footer } from '@/widgets/layout/footer/Footer'
import { Header } from '@/widgets/layout/header/Header'
import { useEffect } from 'react'
import { ScrollView, StatusBar } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'

export default function RootLayout() {
	const themeMode = useUnit(themeModel.$themeMode)

	useEffect(() => {
		if (themeMode === 'dark') {
			StatusBar.setBarStyle('light-content')

			StatusBar.setBackgroundColor('#f00')

			StatusBar.setTranslucent(false)
		} else {
			StatusBar.setBarStyle('dark-content')
			StatusBar.setBackgroundColor('#fff')
			StatusBar.setTranslucent(false)
		}
	}, [themeMode])

	console.log(themeMode)

	return (
		<ThemeProvider mode={themeMode ?? 'light'}>
			<SafeAreaProvider>
				<SafeAreaView style={{ flex: 1 }}>
					<ScrollView>
						<Header />
						<Stack
							screenOptions={{
								headerShown: false,
							}}
						/>
						<Footer />
					</ScrollView>
				</SafeAreaView>
			</SafeAreaProvider>
		</ThemeProvider>
	)
}
