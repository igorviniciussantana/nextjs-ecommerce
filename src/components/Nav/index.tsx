import Link from "next/link";
import * as Styled from "./styled";

export default function Nav() {
  return (
    <Styled.Nav>
        <Styled.Ul>
            <Styled.Li>
                <Link href=''>Item</Link>
            </Styled.Li>
        </Styled.Ul>
    </Styled.Nav>
  );
}
