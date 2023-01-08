import { Card } from "@components/imports";
import * as Styled from "./styled";
import { api } from "@api/api";
import { GetStaticProps } from "next";

export default function Highlights() {
  return (
    <Styled.Highlights className="mx-auto">
      <Card img='/camiseta1.webp' alt='Camiseta' width={720} height={1080} title='Camiseta Clean' price={99.90}/>
    </Styled.Highlights>
  );
}


export const getStaticProps : GetStaticProps = async () => {

   const highlightsResponse = await api.get(`/products?filters[highlight][$eq]=true&populate=*`)

  return {
    props: {
      highlights: highlightsResponse.data
    },
    revalidate: 20
  };
};