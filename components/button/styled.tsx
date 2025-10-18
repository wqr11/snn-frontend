import { Pressable } from 'react-native'
import { styled } from 'styled-components/native'

export const Button = styled(Pressable).attrs(({ theme }) => ({
	android_ripple: {
		color: theme.grayScale.gray1,
		foreground: true,
	},
}))`
	border-radius: 40px;
	overflow: hidden;
	padding: 10px 14px;
`
