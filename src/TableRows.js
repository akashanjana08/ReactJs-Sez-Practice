import React from 'react';
import {TableData} from './TableData'

export function TableRows(props){
   return (
    props.rowdata.map((item) => {
        return (<tr><TableData tdata={item}/></tr>)
    })
   )
}