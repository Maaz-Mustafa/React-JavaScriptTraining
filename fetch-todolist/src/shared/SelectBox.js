import { memo } from "react";

const SelectBoxComponent = ({ options, targetFunc }) => {
  return (
    <select onChange={targetFunc}>
      {options.map((item) => {
        return <option value={item.value}>{item.key}</option>;
      })}
    </select>
  );
};
export const SelectBox = memo(SelectBoxComponent);
