import React, { ReactNode } from 'react'
import { StyleProp, TextStyle } from 'react-native'
import { styled } from 'styled-components/native'

interface IProps {
	children: ReactNode
	style?: StyleProp<TextStyle>
}

export const StyledText = ({ children, style }: IProps) => {
	return <StyleText style={style}>{children}</StyleText>
}

const StyleText = styled.Text`
	color: ${({ theme }) => theme.foreground};
`
