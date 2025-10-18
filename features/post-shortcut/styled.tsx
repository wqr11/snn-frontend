import { Icon, Typography } from '@/components'
import { Button } from '@/components/button'
import { FontAwesome6 } from '@expo/vector-icons'
import { ButtonProps, TextInput, View } from 'react-native'
import { styled } from 'styled-components/native'

export const PostShortcutStyled = styled(View)`
	display: flex;
	flex-direction: column;
	background-color: ${({ theme }) => theme.background};
	padding: 10px;
	border-color: ${({ theme }) => theme.grayScale.gray2};
`

export const PostShortcutMain = styled(View)`
	display: flex;
	gap: 12px;
	flex-direction: row;
`

export const PostShortcutField = styled(TextInput).attrs({
	multiline: true,
})`
	flex: 1;
	font-size: 20px;
	color: ${({ theme }) => theme.foreground};
`

export const PostShortcutBottom = styled(View)`
	display: flex;
	gap: 8px;
	align-items: center;
	flex-direction: row;
	margin-left: auto;
`

export const PostShortcutAttachmentButton = styled(Button).attrs({
	children: <FontAwesome6 name='paperclip' size={20} />,
})`
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 20px;
	background-color: ${({ theme }) => theme.grayScale.gray2};
`

export interface PostShortcutSendButton extends Omit<ButtonProps, 'children'> {
	children: React.ReactNode
}

export const PostShortcutSendButton = styled(Button).attrs(({ children }) => ({
	children: (
		<>
			<Typography $variant='body-semibold'>{children}</Typography>
			<Icon name={'paper-plane'} />
		</>
	),
}))`
	display: flex;
	flex-direction: row;
	gap: 8px;
	align-items: center;
	padding: 10px 16px;
	border-radius: 1234px;
	background-color: ${({ theme }) => theme.grayScale.gray2};
`
