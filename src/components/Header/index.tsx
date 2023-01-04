import Nav from "@components/Nav";
import Link from "next/link";
import * as Styled from "./styled";

export default function Header() {
  return (
    <Styled.Header>
      <Link href="/"><h1 className="text-3xl font-bold text-zinc-800">Igor Clothes</h1></Link>
      <Nav/>
    </Styled.Header>
  );
}
