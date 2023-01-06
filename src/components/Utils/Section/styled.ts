import styled from 'styled-components'
import { SectionProps } from '.'


export const Section = styled.section<SectionProps>`
padding: ${(props) => props.paddingLg ? '4rem 0 2rem 0' : ''}
`