import { Card } from "@components/imports";
import * as Styled from "./styled";


export default function Highlights() {
  return (
    <article className="container mx-auto">
      <Card img='/camiseta1.webp' alt='Camiseta' width={720} height={1080}/>
      <Card img='/camiseta2.webp' alt='Camiseta' width={720} height={1080}/>
      <Card img='/camiseta3.webp' alt='Camiseta' width={720} height={1080}/>
    </article>
  );
}
