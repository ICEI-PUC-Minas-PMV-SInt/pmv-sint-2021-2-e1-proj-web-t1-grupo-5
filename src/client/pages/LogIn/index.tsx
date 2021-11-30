import router from 'next/router';
import { useState, FormEvent, ChangeEvent } from 'react';

import styles from './styles.module.scss';

export default function LogIn() {
  const [cpf, setCpf] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [remindUser, setRemindUser] = useState<boolean>(false);

  console.log(cpf, password, remindUser);

  function handleSubmit(e: any) {
    e.preventDefault();

    // if (cpf.length == 11 && password.length >= 6) {
    if (remindUser) localStorage.setItem('user', cpf);

    router.push('/Dashboard');
    // }

    router.push('/');
  }

  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <div className={styles.darkGray}></div>
        <div className={styles.lightGray}>
          <h1>Login</h1>
          <div>
            <div className={styles.inputs}>
              <input
                type='text'
                name='login'
                id='login'
                placeholder='CPF'
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setCpf(e.target.value)
                }
              />
              <input
                type='password'
                name='password'
                id='password'
                placeholder='Senha'
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setPassword(e.target.value)
                }
              />
            </div>

            <form className={styles.links} onSubmit={(e) => handleSubmit(e)}>
              <div className={styles.remember}>
                <input
                  type='checkbox'
                  name='lembrarUser'
                  id='lembrarUser'
                  onChange={() => setRemindUser(!remindUser)}
                />
                <label htmlFor='lembrarUser'>Lembrar usuário e senha</label>
              </div>
              <div className={styles.logIn}>
                <button type='submit'>Entrar</button>
                <a onClick={() => router.push('/SignIn')}>
                  Não tem login? Cadastre-se
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
