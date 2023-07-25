import { ChangeEvent, Dispatch, SetStateAction } from 'react';

export function useChangeInputRecursive(
  e: ChangeEvent<HTMLInputElement>,
  state: Record<string, string>,
  changeState: Dispatch<SetStateAction<Record<string, string>>>
) {
  const { name, value } = e.target;
  console.log({ ...state, [name]: value });
  
  changeState({ ...state, [name]: value });
}