import { Heading, Section, TitleBox } from "@components/imports";
import * as Styled from "./styled";

interface SliderList{
  
}

export default function SliderList() {
  return (
    <Section className="mx-auto">
      <TitleBox>
        <Heading>
          {props.title}
        </Heading>
      </TitleBox>
    </Section>
  );
}
