import Link from "next/link";
import { Search } from '@styled-icons/feather'
import * as Styled from "./styled";

export default function HeaderProfile() {
  return (
    <Styled.HeaderProfile>
     <Styled.Box>
      <Search size='30'/>
     </Styled.Box>
    </Styled.HeaderProfile>
  );
}
