import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProcessMonitor: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [processes, setProcesses] = useState<any[]>([]);

  useEffect(() => {
    // Fetch process instances from your BPM server
    axios.get('/api/process-instances')
      .then(response => {
        setProcesses(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the process instances!', error);
      });
  }, []);

  return (
    <div>
      <h2>Process Monitor</h2>
      <ul>
        {processes.map((process, index) => (
          <li key={index}>
            {process.name} - {process.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProcessMonitor;
