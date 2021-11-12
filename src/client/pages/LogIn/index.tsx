import Link from "next/link";

import styles from './styles.module.scss';

export default function LogIn() {
    return (
        <div className={styles.background}>
            <div className={styles.container}>
                <div className={styles.darkGray}></div>
                <div className={styles.lightGray}>
                    <h1>Login</h1>
                    <div>
                        <input type="text" name="login" id="login" placeholder="CPF" />
                        <input type="password" name="password" id="password" placeholder="Senha" />

                        <div className={styles.links}>
                            <div></div>
                            <div>
                                <Link href="/SignIn">Não tem login? Cadastre-se</Link>
                                <button type="submit"><Link href="/Dashboard">Entrar</Link></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}