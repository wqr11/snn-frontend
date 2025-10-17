import React from 'react'
import { StyleProp, ViewStyle } from 'react-native'
import { styled } from 'styled-components/native'

interface IProps {
	margin?: {
		top?: number
		bottom?: number
		left?: number
		right?: number
	}
	isVertical?: boolean
	style?: StyleProp<ViewStyle>
}

const StyledDivider = styled.View<IProps>`
	background-color: ${({ theme }) => theme.grayScale.gray2};

	/* Общие стили для обеих ориентаций */
	${({ isVertical, margin }) => `
		${isVertical ? `width: 1px; height: 100%;` : `width: 100%; height: 1px;`}
		margin-top: ${margin?.top || 0}px;
		margin-bottom: ${margin?.bottom || 0}px;
		margin-left: ${margin?.left || 0}px;
		margin-right: ${margin?.right || 0}px;
	`}
`

export const Divider = ({
	margin = { bottom: 49, top: 28, left: 0, right: 0 },
	isVertical = false,
	style,
}: IProps) => {
	return <StyledDivider margin={margin} isVertical={isVertical} style={style} />
}
