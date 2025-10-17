import { themeModel } from '@/entities/theme'
import { ThemeProvider } from '@/shared/components/provider'
import { useUnit } from 'effector-react'
import { Stack } from 'expo-router'

import { Header } from '@/widgets/header/Header'
import { View } from 'react-native'

export default function RootLayout() {
	const themeMode = useUnit(themeModel.$themeMode)

	return (
		<ThemeProvider mode={themeMode ?? 'light'}>
			<View style={{ flex: 1 }}>
				<Header />

				<View
					style={{
						paddingHorizontal: 20,
						paddingVertical: 30,
					}}
				>
					<Stack />
				</View>
			</View>
		</ThemeProvider>
	)
}
