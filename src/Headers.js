import React from 'react';

export function TableHeader(props){
   return (
    props.headdata.map((item) => {
        return (<th>{item}</th>)
    })
   )
}