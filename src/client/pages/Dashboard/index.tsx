import { useEffect, useState } from 'react';

import processess from '../../repositories/processList.json';

import { Header } from '../../components/Header';
import { Nav } from '../../components/Nav';
import { ProcessTable } from '../../components/ProcessTable';

import { Process } from '../../model/Process';

import styles from './styles.module.scss';
import router from 'next/router';

export default function Dashboard() {
  const [user, setUser] = useState<string>();
  const [processes, setProcesses] = useState<Process[]>([]);

  // In memory data
  useEffect(() => {
    const localUser = localStorage.getItem('user');
    // if (!localUser) router.push('/');

    setUser(localUser);
    setProcesses(processess);
  }, []);

  // Api data
  // useEffect(() => {}, [])

  return (
    <>
      <Header />
      <main className={styles.pageContainer}>
        <Nav />

        <div className={styles.contentContainer}>
          <ProcessTable processes={processes} />
          {/* <Filter /> */}
        </div>
      </main>
    </>
  );
}
