import router from 'next/router';

import styles from './styles.module.scss';

export const Header = () => {
  return (
    <div className={styles.container}>
      <span>
        <a onClick={() => router.push('/Dashboard')}>UTI PROCESSUAL</a>
      </span>
      <div>
        <div>
          <span>Fulano da Silva</span>
          <a onClick={() => router.push('/LogIn')}>sair</a>
        </div>

        <div className={styles.icon}></div>
      </div>
    </div>
  );
};
