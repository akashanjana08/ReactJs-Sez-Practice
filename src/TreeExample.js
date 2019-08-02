import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';
import { Treebeard, decorators } from 'react-treebeard';
import CntextMenu from './ContextMenuExample';
//[{"id":"2472","name":"Cross18.dbo","assetType":"database","assetSubType":"MSSQL","dependencyStatus":false},{"id":"2466","name":"CrosscodeDB1.dbo","assetType":"database","assetSubType":"MSSQL","dependencyStatus":false},{"id":"2465","name":"CrosscodeDB_VB.dbo","assetType":"database","assetSubType":"MSSQL","dependencyStatus":false},{"id":"2461","name":"CrosscodeDB_VB_80.dbo","assetType":"database","assetSubType":"MSSQL","dependencyStatus":false},{"id":"2467","name":"CrosscodeDB_VB_90.dbo","assetType":"database","assetSubType":"MSSQL","dependencyStatus":false},{"id":"2444","name":"FInalConsumerApp","assetType":"application","assetSubType":"CSHARP","dependencyStatus":false},{"id":"2443","name":"FinalMVC2.0","assetType":"application","assetSubType":"CSHARP","dependencyStatus":false},{"id":"2445","name":"FluentAPI","assetType":"application","assetSubType":"CSHARP","dependencyStatus":false},{"id":"2475","name":"FluentAPISampleDB.Admin","assetType":"database","assetSubType":"MSSQL","dependencyStatus":false},{"id":"2460","name":"FluentAPISampleDB.dbo","assetType":"database","assetSubType":"MSSQL","dependencyStatus":false},{"id":"2476","name":"FluentAPISampleDB.todo","assetType":"database","assetSubType":"MSSQL","dependencyStatus":false},{"id":"2464","name":"HibernateMSSQL.dbo","assetType":"database","assetSubType":"MSSQL","dependencyStatus":false},{"id":"2463","name":"Hibernate_JNDI.dbo","assetType":"database","assetSubType":"MSSQL","dependencyStatus":false},{"id":"2442","name":"MVC_Delta","assetType":"application","assetSubType":"CSHARP","dependencyStatus":false},{"id":"2446","name":"producer","assetType":"application","assetSubType":"java","dependencyStatus":false},{"id":"2471","name":"ReportServer.dbo","assetType":"database","assetSubType":"MSSQL","dependencyStatus":false},{"id":"2473","name":"ReportServerTempDB.dbo","assetType":"database","assetSubType":"MSSQL","dependencyStatus":false},{"id":"2470","name":"Rsystem_DB.dbo","assetType":"database","assetSubType":"MSSQL","dependencyStatus":false},{"id":"2462","name":"Sample.dbo","assetType":"database","assetSubType":"MSSQL","dependencyStatus":false},{"id":"2469","name":"Sample1.dbo","assetType":"database","assetSubType":"MSSQL","dependencyStatus":false},{"id":"2474","name":"Sample2.dbo","assetType":"database","assetSubType":"MSSQL","dependencyStatus":false},{"id":"2468","name":"SchoolDB1.dbo","assetType":"database","assetSubType":"MSSQL","dependencyStatus":false}];
const data = {
    id: 1,
    name: 'root',
    toggled: true,
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
                    svgToggle={true}
                />
            </div>
        );
    }
}
