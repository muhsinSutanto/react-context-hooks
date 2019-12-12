import React, { createContext, useState } from 'react';

export const ServiceContext = createContext()

const ServiceContextProvider = (props) => {
  const [serviceList, setServiceList] = useState([
    {id: 1, title: 'pay'},
    {id: 2, title: 'promo'},
    {id: 3, title: 'top up'},
    {id: 4, title: 'more'}
  ])
  return ( 
    <ServiceContext.Provider value={{serviceList}}>
      {props.children}
    </ServiceContext.Provider>
   );
}
 
export default ServiceContextProvider;
