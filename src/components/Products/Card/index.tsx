import * as Styled from "./styled";
import Image from "next/image";

interface CardProps {
  alt: string;
  img: string;
  width?: number;
  height?: number;
  title: string;
  price: number;
}

export default function Card(props: CardProps) {
  return (
    <Styled.Card>
      <Styled.Box>
        <Image className="img-fallback" src={props.img} alt={props.alt} fill/>
      </Styled.Box>
      <Styled.Content>
        <Styled.Title>{props.title}</Styled.Title>
        <Styled.Price>{props.price}</Styled.Price>
      </Styled.Content>
    </Styled.Card>
  );
}
