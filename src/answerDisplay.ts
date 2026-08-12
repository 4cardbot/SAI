export function optionLabelForSourceIndex(optionOrder: number[], sourceIndex: number): string {
  const displayedIndex = optionOrder.indexOf(sourceIndex);
  return String.fromCharCode(65 + displayedIndex);
}
