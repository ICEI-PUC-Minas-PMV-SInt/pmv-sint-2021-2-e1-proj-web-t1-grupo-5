import router from 'next/router';

import styles from './styles.module.scss';

export default function LogIn() {
  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <div className={styles.darkGray}></div>
        <div className={styles.lightGray}>
          <h1>Login</h1>
          <div>
            <div className={styles.inputs}>
              <input type='text' name='login' id='login' placeholder='CPF' />
              <input
                type='password'
                name='password'
                id='password'
                placeholder='Senha'
              />
            </div>

            <div className={styles.links}>
              <div className={styles.remember}>
                <input type='checkbox' name='lembrarUser' id='lembrarUser' />
                <label htmlFor='lembrarUser'>Lembrar usuário e senha</label>
              </div>
              <div className={styles.logIn}>
                <button type='submit' onClick={() => router.push('/Dashboard')}>
                  Entrar
                </button>
                <a onClick={() => router.push('/SignIn')}>
                  Não tem login? Cadastre-se
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
