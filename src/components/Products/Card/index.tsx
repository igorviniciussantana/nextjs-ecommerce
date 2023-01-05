import * as Styled from "./styled";
import Image from "next/image";

interface CardProps {
  alt: string;
  img: string;
  width?: number;
  height?: number;
}

export default function Card(props: CardProps) {
  return (
    <Styled.Card>
      <Styled.Box>
        <Image
          className="img-fallback"
          src={props.img}
          alt={props.alt}
          width={props.width}
          height={props.height}
        />
      </Styled.Box>
    </Styled.Card>
  );
}
