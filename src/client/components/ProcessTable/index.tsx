import { Process } from '../../model/Process';

import styles from './styles.module.scss';

interface IProcess {
  processes: Process[];
}

type AssignessTypes = {
  [key: string]: string;
};

export function ProcessTable({ processes }: IProcess) {
  const assigneeTypes: AssignessTypes[] = [
    {
      name: 'Inquérito / Delegado',
      value: 'inquerito-delegado',
    },
    {
      name: 'Delegado / Promotor',
      value: 'delegado-promotor',
    },
    {
      name: 'Defesa / Advogado',
      value: 'defesa-advogado',
    },
    {
      name: 'Audiência / Juiz',
      value: 'audiencia-juiz',
    },
    {
      name: 'Sentença / Juiz',
      value: 'sentença-juiz',
    },
  ];

  function processStatus({ assigneeType, status }: Process) {
    switch (assigneeType) {
      case assigneeTypes[0].value:
      case assigneeTypes[3].value:
        return status < 45 ? 'ok' : status > 45 ? 'critical' : 'warning';
      case assigneeTypes[1].value:
      case assigneeTypes[2].value:
      case assigneeTypes[4].value:
        return status < 15 ? 'ok' : status > 15 ? 'critical' : 'warning';
    }
  }

  function processBox({ id, assigneeType, processNumber, status }: Process) {
    return (
      <div key={id} className={styles.processContainer}>
        <span>Número: {processNumber}</span>
        <span
          className={
            styles[processStatus({ id, assigneeType, processNumber, status })]
          }
        >
          Status: {status} dia
          {status > 1 ? 's' : ''}
        </span>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div>
        <button onClick={() => {}}>Incluir processo</button>
      </div>

      <div className={styles.title}>
        <h2>UTiP</h2>
        <span>Lei de Tóxicos 11.343/06</span>
      </div>

      <div className={styles.processPerTypeContainer}>
        {assigneeTypes.map(({ name, value }) => {
          return (
            <div key={value} className={styles.processPerType}>
              <h3>{name}</h3>

              {processes.map((process) => {
                return process.assigneeType == value && processBox(process);
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}
