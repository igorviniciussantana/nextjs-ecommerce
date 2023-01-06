import { Heading, Section, TitleBox } from "@components/imports";
import * as Styled from "./styled";

interface SliderList{
  title: string;
}

export default function SliderList(props : SliderList) {
  return (
    <Section className="mx-auto">
      <TitleBox>
        <Heading type='h1' className="font-medium">
          {props.title}
        </Heading>
      </TitleBox>
    </Section>
  );
}
