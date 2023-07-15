import { ChangeEvent, useContext, useState } from "react";
import { ContextState } from "../../../app/context/DataProvider";
import { changeInputRecursive } from "../../../app/shared/hooks/changeInputRecursive";

export function useRegister() {
  const state: any = useContext(ContextState);

  const [status, setStatus] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const [registerForm, setRegisterForm] = useState<Record<string, string>>({
    nome: "",
    email: "",
    password: "",
  });

  const changeInput = (e: ChangeEvent<HTMLInputElement>) =>
    changeInputRecursive(e, registerForm, setRegisterForm);

  return;
}
