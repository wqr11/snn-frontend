import React from 'react'
import { styled } from 'styled-components/native'

interface IProps {
	color?: string
	margin?: {
		top?: number
		bottom?: number
	}
}

const StyledDivider = styled.View<IProps>`
	background-color: ${props => props.color};
	margin-top: ${({ margin }) => margin?.top};
	margin-bottom: ${({ margin }) => margin?.bottom};
	width: 100%;
	height: 1px;
`

export const Divider = ({
	color = '#E2E4E5',
	margin = { bottom: 49, top: 28 },
}: IProps) => {
	return <StyledDivider color={color} margin={margin} />
}
