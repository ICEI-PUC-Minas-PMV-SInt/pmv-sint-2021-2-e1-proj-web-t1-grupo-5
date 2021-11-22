import styles from './styles.module.scss';

export const Nav = () => {
  return (
    <div className={styles.container} id='nav'>
      <div>
        <span>PROCESSOS</span>
        <hr />
        <button>INCLUIR</button>
        <button>PESQUISAR</button>
      </div>

      <div>
        <span>USUÁRIOS</span>
        <hr />
        <button>INCLUIR</button>
        <button>PESQUISAR</button>
      </div>
    </div>
  );
};
