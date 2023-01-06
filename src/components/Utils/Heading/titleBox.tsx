import * as Styled from './styled'

interface TitleBoxProps{
children: React.ReactNode;
marginBottom: string;
}

export default function TitleBox(props : TitleBoxProps){
    return <Styled.TitleBox {...props}>{props.children}</Styled.TitleBox>
}