import { Filter } from '../../components/Filter'
import { Header } from '../../components/Header'
import { Nav } from '../../components/Nav'
import { SearchBox } from '../../components/SearchBox'

import styles from './styles.module.scss';

export default function Dashboard() {
    return (
        <>
            <Header />
            <main className={styles.pageContainer}>
                <Nav />

                <div className={styles.contentContainer}>
                    <SearchBox />
                    <Filter />
                </div>
            </main> 
        </>
    )
}