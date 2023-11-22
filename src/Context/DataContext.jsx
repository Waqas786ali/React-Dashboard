import { createContext, useState } from 'react'

const DataContext = createContext({});

export function DataProvider({children}) {
  const [check, setCheck] = useState(false);

  return (
    <DataContext.Provider value={{setCheck,check}}>
      {children}
    </DataContext.Provider>
  )
}

export default DataContext;