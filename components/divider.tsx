import React from 'react'
import { styled } from 'styled-components/native'

interface IProps {
	margin?: {
		top?: number
		bottom?: number
	}
}

const StyledDivider = styled.View<IProps>`
	background-color: ${({ theme }) => theme.grayScale.gray1};
	margin-top: ${({ margin }) => margin?.top};
	margin-bottom: ${({ margin }) => margin?.bottom};
	width: 100%;
	height: 1px;
`

export const Divider = ({ margin = { bottom: 49, top: 28 } }: IProps) => {
	return <StyledDivider margin={margin} />
}
