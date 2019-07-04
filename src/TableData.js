import React from 'react';

export function TableData(props){
   return (
    props.tdata.map((item) => {
        return (<td>{item}</td>)
    })
   )
}