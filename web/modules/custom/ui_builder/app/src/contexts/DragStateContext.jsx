import { createContext, useContext } from 'react';

export const DragStateContext = createContext({ isDraggingGlobal: false });

export function useDragState() {
  return useContext(DragStateContext);
}
