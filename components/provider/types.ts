export type Themes = {
	[key in ThemeMode]: Theme
}

export type Theme = {
	background: string
	foreground: string
	accent: {
		primary: string
		primaryLight: string
	}
	grayScale: {
		gray1: string
		gray2: string
		gray3: string
	}
}

export type ThemeMode = 'light' | 'dark'
