import React from 'react'
import { useState } from "react";
import 'react-native-gesture-handler'
import RoutNavigator from './RoutNavigator';
import { OrderContext } from './Contexts';
import { CvOrderContext } from './Contexts';


export default function App() {

    const [orderC, setOrderC] = useState(false)
    const [cvOrderC, setCvOrderC] = useState(false)

 return (
    <>
        <OrderContext.Provider value={[orderC,setOrderC]}>
            <CvOrderContext.Provider value={[cvOrderC,setCvOrderC]}>
                 <RoutNavigator/>
            </CvOrderContext.Provider>
        </OrderContext.Provider>

    </>
 
    
 );
 }

 