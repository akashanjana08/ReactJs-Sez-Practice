import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';
import { Treebeard, decorators } from 'react-treebeard';
import CntextMenu from './ContextMenuExample';

const data = {
    id: 1,
    name: 'root',
    toggled: false,
    children: [
        {
            id: 2,
            name: 'parent',
            children: [
                { id: 3, name: 'child1' },
                { id: 4, name: 'child2' }
            ]
        },
        {
            id: 5,
            name: 'loading parent',
            loading: true,
            children: []
        },
        {
            id: 6,
            name: 'parent',
            children: [
                {
                    id: 7,
                    name: 'nested parent',
                    children: [
                        { id: 8, name: 'nested child 1' },
                        { id: 9, name: 'nested child 2' }
                    ]
                }
            ]
        }
    ]
};


// Example: Customising The Header Decorator To Include Icons
decorators.Header = (props) => {
    debugger
    const style = props.style;
    const iconType = props.node.children ? 'folder' : 'file-text';
    const iconClass = `fa fa-${iconType}`;
    const iconStyle = { marginRight: '5px' };
    return (
        <div style={style.base}>
            <CntextMenu nodename={props.node.id}>
                <div style={style.title} >
                    <i className={iconClass} style={iconStyle} />
                    {props.node.name}
                </div>
            </CntextMenu>
        </div>
    );
};


export default class TreeExample extends PureComponent {
    constructor(props) {
        super(props);
        this.state = { data };
    }

    onToggle = (node, toggled, e) => {
        const { cursor, data } = this.state;
        if (cursor) {
            this.setState(() => ({ cursor, active: false }));
        }
        node.active = true;
        if (node.children) {
            node.toggled = toggled;
        }
        this.setState(() => ({ cursor: node, data: Object.assign({}, data) }));
    }

    render() {
        const { data } = this.state;
        return (
            <div style={{ height: '230px' }}>
                <Treebeard
                    data={data}
                    onToggle={this.onToggle}
                    decorators={decorators}
                />
            </div>
        );
    }
}
