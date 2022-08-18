import React from 'react'
import { useState } from "react";
import 'react-native-gesture-handler'
import RoutNavigator from './RoutNavigator';
import { OrderContext } from './OrderContext';



export default function App() {

    const [orderC, setOrderC] = useState(false)

 return (
    <>
        <OrderContext.Provider value={[orderC,setOrderC]}>
            <RoutNavigator/>
        </OrderContext.Provider>

    </>
 
    
 );
 }

 