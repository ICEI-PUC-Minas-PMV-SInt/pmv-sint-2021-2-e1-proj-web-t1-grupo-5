import styles from './styles.module.scss';

export function SearchBox() {
    return (
        <div className={styles.container}>
            <h1>PESQUISA</h1>

            <input type="text" name="searchbox" id="searchbox" />
            <button type="submit">PESQUISAR</button>
        </div>
    )
}