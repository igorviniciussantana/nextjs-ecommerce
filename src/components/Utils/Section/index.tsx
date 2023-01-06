import * as Styled from './styled'


export interface SectionProps{
    paddingLg?: boolean;
    minHeight?: boolean;
    children: React.ReactNode;
}

export default function Section(props: SectionProps){
    return(
        <Styled.Section>
            {props.children}
        </Styled.Section>
    )
}