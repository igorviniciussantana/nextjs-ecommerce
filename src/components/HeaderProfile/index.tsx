import Link from "next/link";
import { MagnifyingGlass, User, Handbag} from 'phosphor-react'
import * as Styled from "./styled";

export default function HeaderProfile() {
  return (
    <Styled.HeaderProfile>
     <Styled.Box>
      <MagnifyingGlass size='30' weight="light"  className="hover:text-purple-800"/>
     </Styled.Box>
     <Styled.Box>
      <User size='30' weight="light"  className="hover:text-purple-800"/>
     </Styled.Box>
     <Styled.Box>
      <Handbag size='30'  weight="light" className="hover:text-purple-800"/>
     </Styled.Box>
    </Styled.HeaderProfile>
  );
}
