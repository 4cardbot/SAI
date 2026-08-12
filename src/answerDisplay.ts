export function optionLabelForOptionIndex(optionOrder: number[], optionIndex: number): string {
  const displayedIndex = optionOrder.indexOf(optionIndex);
  return String.fromCharCode(65 + displayedIndex);
}
