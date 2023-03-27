export const ADD_ONE = "ADD_ONE";

export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const CLEAR_DISPLAY = "CLEAR_DISPLAY";
export const MEMORY_ADD = "MEMORY_ADD";
export const MEMORY_R = "MEMORY_R";
export const MEMORY_C = "MEMORY_C";


export const addOne = () => {
  return ({ type: ADD_ONE });
}

export const applyNumber = (number) => {
  return ({ type: APPLY_NUMBER, payload: number });
}