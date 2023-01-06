import * as Styled from "./styled";
import Image from "next/image";
import { Eye, Link } from "phosphor-react";

export interface CardProps {
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
      <Styled.Box className="card-box">
        <Image className="img-fallback" src={props.img} alt={props.alt} fill />
        <Styled.Actions className="card-actions">
          <Styled.Icon>
            <Eye weight="light" />
          </Styled.Icon>
          <Styled.Icon>
            <Link weight="light" />
          </Styled.Icon>
        </Styled.Actions>
      </Styled.Box>
      <Styled.Content>
        <Styled.Title>{props.title}</Styled.Title>
        <Styled.Price>R$ {props.price}</Styled.Price>
      </Styled.Content>
    </Styled.Card>
  );
}
