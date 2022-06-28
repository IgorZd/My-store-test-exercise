import React from "react";
// @ts-ignore
import styled from "@xstyled/styled-components";
import { ReactComponent as Arrow } from "../../../../assets/up-arrow-svgrepo-com.svg";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;
const ArrowWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 6px;
`;
export const ArrowIcon = styled(Arrow)`
  width: 8px;
  transform: ${(props: any) =>
    props.down ? "rotate(180deg)" : "rotate(0deg)"};
  cursor: pointer;
`;
const Input = styled.input`
  width: ${(props: any) => props.width};
  height: 32px;
  padding: 0 8px;
  border-color: black;
  outline: none;
  border-radius: 8px;
  border: 1px solid;
  transition: all 0.3s linear;
`;

export const Stepper = ({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) => {
  const plusOnClick = () => {
    +value < 100000 && onChange(`${+value + 1}`);
  };
  const minusOnClick = () => {
    +value > 0 && onChange(`${+value - 1}`);
  };

  return (
    <Wrapper>
      <Input
        value={value}
        onChange={(e: any) => {
          const currentValue = e.target.value;
          +currentValue < 100000 &&
            !isNaN(currentValue) &&
            onChange(currentValue);
        }}
        onBlur={() => {
          value.length === 0 && onChange("0");
        }}
        width={`${value.length * 8}px`}
      />
      <ArrowWrapper>
        <ArrowIcon onClick={plusOnClick} />
        <ArrowIcon onClick={minusOnClick} down />
      </ArrowWrapper>
    </Wrapper>
  );
};
