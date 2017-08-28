export default function isOperation(item) {
  return !!item.match(/^(?:\+|\/|\*|-|\+\/-|÷|%|x)$/);
}
