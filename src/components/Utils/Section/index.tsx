import * as Styled from "./styled";

export interface SectionProps {
  paddingLg?: boolean;
  minHeight?: boolean;
  children: React.ReactNode;
  className?: string;
}

export default function Section(props: SectionProps) {
  return (
    <Styled.Section {...props} className={`${props.className || "section"}`}>
      {props.children}
    </Styled.Section>
  );
}
