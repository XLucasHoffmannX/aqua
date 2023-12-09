import { useState } from 'react';

export function useManagment() {
  const [openModalMonitor, setOpenModalMonitor] = useState(false);

  return {
    openModalMonitor,
    handleOpenModalMonitor: setOpenModalMonitor
  };
}
