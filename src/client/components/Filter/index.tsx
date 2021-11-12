import styles from './styles.module.scss';

export function Filter () {
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <h1>UTiP</h1>
                <span>Lei de Tóxicos 11.343/06</span>
            </div>

            <div className={styles.optionsTable}>
                <div className={styles.optionsGroup}>
                    <div className={styles.options} id={styles.darkGray}>
                        <span>Art 51 §° único</span>
                        <span>Inquérito Policial/Delegado</span>
                    </div>
                    <div className={styles.options} id={styles.darkGray}>
                        <div>
                            <span>Art 54 §° único</span>
                            <span>Inquérito Policial/Delegado</span>
                        </div>
                    </div>
                    <div className={styles.options} id={styles.darkGray}>
                        <div>
                            <span>Art 55 §° único</span>
                            <span>Inquérito Policial/Delegado</span>
                        </div>
                    </div>
                    <div className={styles.options} id={styles.darkGray}>
                        <div>
                            <span>Art 55 §° único</span>
                            <span>Inquérito Policial/Delegado</span>
                        </div>
                    </div>
                    <div className={styles.options} id={styles.darkGray}>
                        <div>
                            <span>Sentença/Juiz</span>
                        </div>
                    </div>
                </div>

                <div className={styles.optionsGroup}>
                    <div className={styles.options} id={styles.green}>
                        <span>30/+30 dias</span>
                    </div>
                    <div className={styles.options} id={styles.green}>10 dias</div>
                    <div className={styles.options} id={styles.green}>10 dias</div>
                    <div className={styles.options} id={styles.green}>30 dias</div>
                    <div className={styles.options} id={styles.green}>10 dias</div>
                </div>

                <div className={styles.optionsGroup}>
                    <div className={styles.options} id={styles.yellow}>75 dias</div>
                    <div className={styles.options} id={styles.yellow}>15 dias</div>
                    <div className={styles.options} id={styles.yellow}>15 dias</div>
                    <div className={styles.options} id={styles.yellow}>45 dias</div>
                    <div className={styles.options} id={styles.yellow}>15 dias</div>
                </div>

                <div className={styles.optionsGroup}>
                    <div className={styles.options} id={styles.red}>+75 dias</div>
                    <div className={styles.options} id={styles.red}>+15 dias</div>
                    <div className={styles.options} id={styles.red}>+15 dias</div>
                    <div className={styles.options} id={styles.red}>+45 dias</div>
                    <div className={styles.options} id={styles.red}>+15 dias</div>
                </div>
            </div>
        </div>
    )
}