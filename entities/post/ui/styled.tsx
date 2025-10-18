import { Typography } from '@/components'
import { Image } from 'expo-image'
import { Pressable, View } from 'react-native'
import { styled } from 'styled-components/native'

export const PostWrapper = styled(Pressable).attrs(({ theme }) => ({
	android_ripple: {
		color: theme.grayScale.gray1,
		foreground: true,
		borderless: false,
	},
}))`
	background-color: ${({ theme }) => theme.background};
	overflow: hidden;
`

export const PostStyled = styled(View)`
	min-height: 160px;
	display: flex;
	flex-direction: column;
	gap: 12px;
	padding: 16px;
	border-color: ${({ theme }) => theme.grayScale.gray2};
`

export const PostHeader = styled(View)`
	display: flex;
	flex-direction: row;
	gap: 12px;
`

export const PostAvatar = styled(Image)`
	width: 40px;
	height: 40px;
	border-radius: 40px;
	background-color: ${({ theme }) => theme.grayScale.gray2};
`

export const PostHeaderTexts = styled(View)`
	display: flex;
	flex-direction: column;
	gap: 0px;
`

export const PostHeaderUsername = styled(Typography).attrs({
	$variant: 'body-regular',
})``

export const PostHeaderUserRole = styled(Typography).attrs({
	$variant: 'body-thin',
})``

export const PostDescription = styled(Typography).attrs({
	$variant: 'body-regular',
})``
