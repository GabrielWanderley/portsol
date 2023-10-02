import  { createContext, useContext } from 'react';

const Modalcontext = createContext();

export const ModalcontextProvider = ({children}) =>{


    const openmodal1 =() => {

}
return (
    <Modalcontext.Provider value={{ openmodal1 }}>
      {children}
    </Modalcontext.Provider>
  );
};

export const useMyContext = () =>{
    return useContext(Modalcontext)
}