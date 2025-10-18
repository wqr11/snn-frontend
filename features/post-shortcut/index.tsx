import { THEMES } from '@/components/provider'
import { themeModel } from '@/entities/theme'
import { useUnit } from 'effector-react'
import { StyleSheet } from 'react-native'
import * as S from './styled'

const styles = StyleSheet.create({
	post: {
		borderBottomWidth: 1,
	},
})

export const PostShortcut = () => {
	const themeMode = useUnit(themeModel.$themeMode)

	return (
		<S.PostShortcutStyled style={styles.post}>
			<S.PostShortcutMain>
				<S.PostShortcutAttachmentButton />
				<S.PostShortcutField
					placeholder='asdlkjsad'
					placeholderTextColor={THEMES[themeMode].grayScale.gray1}
				/>
			</S.PostShortcutMain>
			<S.PostShortcutBottom>
				<S.PostShortcutSendButton>asda</S.PostShortcutSendButton>
			</S.PostShortcutBottom>
		</S.PostShortcutStyled>
	)
}
