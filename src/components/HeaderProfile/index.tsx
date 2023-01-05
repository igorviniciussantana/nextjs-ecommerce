import Link from "next/link";
import { Search, User} from '@styled-icons/feather'
import { Handbag } from '@styled-icons/bootstrap'
import * as Styled from "./styled";

export default function HeaderProfile() {
  return (
    <Styled.HeaderProfile>
     <Styled.Box>
      <Search size='30' className="hover:text-purple-800"/>
     </Styled.Box>
     <Styled.Box>
      <User size='30' className="hover:text-purple-800"/>
     </Styled.Box>
     <Styled.Box>
      <Handbag size='30' className="hover:text-purple-800"/>
     </Styled.Box>
    </Styled.HeaderProfile>
  );
}
