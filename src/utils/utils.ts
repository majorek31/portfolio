export function getAllParents(element: HTMLElement): HTMLElement[] {
  const parents: HTMLElement[] = [];
  let currentElement = element;

  while (currentElement.parentElement) {
    parents.push(currentElement.parentElement);
    currentElement = currentElement.parentElement;
  }

  return parents;
}
