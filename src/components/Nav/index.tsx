import Link from "next/link";
import * as Styled from "./styled";
import { menuLinks } from "./data";

export default function Nav() {
  return (
    <Styled.Nav>
      <Styled.Ul>
        {menuLinks.map((item, index) => {
          return (
            <Styled.Li className="hover:text-purple-800 transition-all" key={index}>
              <Link href={item.url} key='title'>{item.title}</Link>
            </Styled.Li>
          );
        })}
      </Styled.Ul>
    </Styled.Nav>
  );
}
