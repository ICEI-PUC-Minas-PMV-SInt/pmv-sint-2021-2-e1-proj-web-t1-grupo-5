import { useEffect, useState } from 'react';

import processess from '../../repositories/processList.json';

import { Header } from '../../components/Header';
import { Nav } from '../../components/Nav';
import { ProcessTable } from '../../components/ProcessTable';

import { Process } from '../../model/Process';

import styles from './styles.module.scss';

export default function Dashboard() {
  const [processes, setProcesses] = useState<Process[]>([]);

  // In memory data
  useEffect(() => {
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
