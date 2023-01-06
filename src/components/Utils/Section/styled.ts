import styled from 'styled-components'
import { SectionProps } from '.'


export const Section = styled.section<SectionProps>`
padding: ${(props) => props.paddingLg ? '4rem 0 2rem 0' : '2rem 0 1rem 0'};
min-height: ${(props) => props.minHeight ? '43rem' : ''};
display: 'flex';
align-items: center;

&.not-pd{
padding: 0;
}

&.xs{
    padding: 1.5rem 0 1rem 0;
}
`