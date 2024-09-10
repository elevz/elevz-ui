import { useEffect } from "react";

export function handleClose(visible: boolean = false, listRef: React.RefObject<HTMLDivElement>, fieldRef: React.RefObject<HTMLDivElement>, setVisible: (v: boolean) => void) {
  useEffect(() => {
    if (visible) {
      document.addEventListener("mousedown", handleClose);
      document.addEventListener("keydown", handleClose);
    } else {
      document.removeEventListener("mousedown", handleClose);
      document.removeEventListener("keydown", handleClose);
    }

    return () => {
      document.removeEventListener("mousedown", handleClose);
      document.removeEventListener("keydown", handleClose);
    };
  }, [visible]);

  function handleClose(event: any) {
    if (
      listRef.current && !listRef.current.contains(event.target) &&
      fieldRef.current && !fieldRef.current.contains(event.target)
    ) {
      return setVisible(false);
    }

    if (event.key === "Escape") {
      return setVisible(false);
    }
  };
}

export function getPosition(fieldRef: React.RefObject<HTMLDivElement>, listRef: React.RefObject<HTMLDivElement>) {
  const fieldElement = fieldRef.current;
  const listElement = listRef.current;

  if (fieldElement && listElement) {
    const boundingField = fieldElement.getBoundingClientRect();
    const boundingList = listElement.getBoundingClientRect();

    if ((window.innerHeight - boundingField.y) < boundingList.height) {
      return {
        bottom: (window.innerHeight - boundingField.y) + 4,
        left: boundingField.left,
        width: boundingField.width
      }
    }

    return {
      top: boundingField.bottom + 4,
      left: boundingField.left,
      width: boundingField.width
    }
  }
}

export function searchTerm<T extends any[]>(list: T, term?: string, labelKey?: any) {
  const result = list?.filter((item) => {
    if (!term || term === '') {
      return list;
    }

    if (typeof item === 'string') {
      return item.toLowerCase().includes(term.toLowerCase());
    }

    if (typeof item === 'number') {
      return item === Number(item);
    }

    const itemLabel = item[(labelKey || 'label') as keyof typeof item];

    return String(itemLabel).toLowerCase().includes(term.toLowerCase())
  });

  return result;
}