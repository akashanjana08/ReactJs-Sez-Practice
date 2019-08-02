import React from 'react';
import { TableHeader } from './Headers';
import TreeExample from './TreeExample';
import CntextMenu from './ContextMenuExample';  
const data1 = {
    "java": [
        {
            "id": 1,
            "name": "A"
        },
        {
            "id": 2,
            "name": "B"
        }
    ],
    "mysql": [
        {
            "id": 3,
            "name": "C"
        },
        {
            "id": 4,
            "name": "D"
        },
        {
            "id": 5,
            "name": "E"
        }
    ],
    "android": [
        {
            "id": 6,
            "name": "F"
        }]
}

let headers = null;
let maxLength = 0;
export function DynamicTable() {
    headers = Object.keys(data1);
    getMaxArray();
    return (
        <div>
            <div style={{ display: 'flex', padding: '200px' }}>
                <div style={{ flex: '50%', backgroundColor: '#aaa', height: 'auto', padding: '50px' }}>
                    <h2>Enter the Number</h2>
                    <input type="email" placeholder="Enter the Number" style={{ height: '50px', width: '400px', fontSize: '15px' }} /> <br />
                    <input type="button" onContextMenu={openPopupMenu} name="submit" value="submit" style={{ height: '50px', width: '400px', marginTop: '20px' }} />
                </div>
                <div style={{ flex: '50%', backgroundColor: 'grey', padding: '100px' }}>
                    <table class="table" border="2" style={{ backgroundColor: '#ffffff', width: '800px' }}>
                        <tr>
                            <TableHeader headdata={headers} />
                        </tr>
                        {renderRows()}
                    </table>
                </div>
            </div>
            <TreeExample />
        </div>
    )
}

function openPopupMenu() {
    alert('Right Click')
}

function renderRows() {
    const rrows = getRowData().map((item) => {
        return (<tr>{getTD(item)}</tr>)
    })
    return rrows;
}

function getTD(tddata) {
    let td = tddata.map((item) => {
        return (<td>{item}</td>)
    })
    return td;
}



function getRowData() {
    let tableRows = [];
    let tableData = []
    for (let i = 0; i < maxLength; i++) {
        for (let j = 0; j < headers.length; j++) {
            if (data1[headers[j]][i]) {
                tableData.push(data1[headers[j]][i]['name']);
            } else {
                tableData.push('-');
            }
        }
        tableRows.push(tableData);
        tableData = [];
    }
    return tableRows;
}


function getMaxArray() {
    headers.forEach(element => {
        if (maxLength < data1[element].length) {
            maxLength = data1[element].length;
        }
    });
}
