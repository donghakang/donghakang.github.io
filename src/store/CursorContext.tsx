import React, { createContext, Dispatch, useReducer, useContext } from "react";

type CursorState = {
  imageMode: boolean;
};

type CursorAction =
  | {
      type: "CURSOR_IMAGE";
    }
  | { type: "CURSOR_IMAGE_ON" }
  | { type: "CURSOR_IMAGE_OFF" };

const initialState = {
  imageMode: false,
};

const reducer = (state: CursorState, action: CursorAction): CursorState => {
  switch (action.type) {
    case "CURSOR_IMAGE":
      return { ...state, imageMode: !state.imageMode };
    case "CURSOR_IMAGE_ON":
      return { ...state, imageMode: true };
    case "CURSOR_IMAGE_OFF":
      return { ...state, imageMode: false };
    default:
      throw new Error("Unhandled action");
  }
};

type CursorDispatch = Dispatch<CursorAction>;
const CursorStateContext = createContext<CursorState | null>(null);
const CursorDispatchContext = createContext<CursorDispatch | null>(null);

export function CursorProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CursorStateContext.Provider value={state}>
      <CursorDispatchContext.Provider value={dispatch}>
        {children}
      </CursorDispatchContext.Provider>
    </CursorStateContext.Provider>
  );
}

export function useCursorState() {
  const state = useContext(CursorStateContext);
  if (!state) throw new Error("Cannot find SampleProvider"); // 유효하지 않을땐 에러를 발생
  return state;
}

export function useCursorDispatch() {
  const dispatch = useContext(CursorDispatchContext);
  if (!dispatch) throw new Error("Cannot find SampleProvider"); // 유효하지 않을땐 에러를 발생
  return dispatch;
}
