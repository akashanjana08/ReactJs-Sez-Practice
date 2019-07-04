import React from "react";
import ReactDOM from "react-dom";
import TreeExample from './TreeExample';
import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu";


export default function ContextMenuExample(props) {
    return (
        <div>
            <ContextMenuTrigger id={props.nodename}>
                {props.children}
            </ContextMenuTrigger>

            <ContextMenu id={props.nodename}>
                <MenuItem data={{ foo: props.nodename }} onClick={handleClick}>
                    Show Name
                </MenuItem>
            </ContextMenu>
        </div>
    );
}



function handleClick(e, data, target) {
    alert(data.foo)
}