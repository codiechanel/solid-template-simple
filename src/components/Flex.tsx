import { styled } from "solid-styled-components";
import { createMemo, splitProps } from "solid-js";

const ChakraTextArea = styled("div")``;

function Column(props) {
  const [local, others] = splitProps(props, ["className"]);
  let className = createMemo(() => "flex flex-col " + local.className);
  return (
    <div class={className()} {...others}>
      {props.children}
    </div>
  );
}

function Row(props) {
  const [local, others] = splitProps(props, ["className"]);
  let className = createMemo(() => "flex flex-row " + local.className);
  return (
    <div class={className()} {...others}>
      {props.children}
    </div>
  );
}

function ColumnFull(props) {
  const [local, others] = splitProps(props, ["className"]);
  let className = createMemo(() => "flex flex-col flex-1 " + local.className);
  return (
    <div class={className()} {...others}>
      {props.children}
    </div>
  );
}

function RowFull(props) {
  const [local, others] = splitProps(props, ["className"]);
  let className = createMemo(() => "flex flex-row flex-1 " + local.className);
  return (
    <div class={className()} {...others}>
      {props.children}
    </div>
  );
}

export default { Column, ColumnFull, Row, RowFull };
