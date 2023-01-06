import * as Styled from './styled'

interface TitleBoxProps{
children: React.ReactNode;
}

export default function TitleBox(props : TitleBoxProps){
    return <Styled.TitleBox {...props}>{props.children}</Styled.TitleBox>
}