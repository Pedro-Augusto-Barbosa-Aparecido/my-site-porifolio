import Head from "next/head";
import React, { createContext, useState } from "react";

interface IGlobalContext {
  pageTitle: string;
  changePageTitle: (title: string) => void;
}

export const GlobalContext = createContext({} as IGlobalContext);

type GlobalContextType = {
  children: React.ReactNode
}

export const GlobalContextProvider = ({ children }: GlobalContextType) => {
  const [pageTitle, setPageTitle] = useState<string>("Pedro - Home");

  function changePageTitle (title: string) {
    setPageTitle(title);
  }

  return (
    <GlobalContext.Provider value={{ pageTitle, changePageTitle }}>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      {children}
    </GlobalContext.Provider>
  )
}
