import { ChangeEvent, useContext, useState } from 'react';
import { ContextState } from '../../../app/context/DataProvider';
import { useChangeInputRecursive } from 'app/shared/hooks/useChangeInputRecursive/useChangeInputRecursive';

export function useRegister() {
  const state: any = useContext(ContextState);

  const [status, setStatus] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const [registerForm, setRegisterForm] = useState<Record<string, string>>({
    nome: '',
    email: '',
    password: ''
  });

  const changeInput = (e: ChangeEvent<HTMLInputElement>) =>
    useChangeInputRecursive(e, registerForm, setRegisterForm);

  return;
}
