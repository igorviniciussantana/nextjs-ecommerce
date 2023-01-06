import { Card } from "@components/imports";
import * as Styled from "./styled";


export default function SliderList() {
  return (
    <Styled.Highlights className="mx-auto">
      <Card img='/camiseta1.webp' alt='Camiseta' width={720} height={1080} title='Camiseta Clean' price={99.90}/>
      <Card img='/camiseta2.webp' alt='Camiseta' width={720} height={1080} title='Camiseta Retro' price={99.90}/>
      <Card img='/camiseta3.webp' alt='Camiseta' width={720} height={1080} title='Camiseta Vintage' price={99.90}/>
    </Styled.Highlights>
  );
}
