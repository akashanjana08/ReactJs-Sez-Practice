import React, { Component } from 'react';
import {
    FloatingMenu,
    MainButton,
    ChildButton,
} from 'react-floating-button-menu';
import MdAdd from '@material-ui/icons/Add';
import MdClose from '@material-ui/icons/Close';

export default class FloatMenu extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
        }
    }


    render() {
        return (
            <div style={{display:'flex', justifyContent:'center',alignItems:'center'}}>
                <FloatingMenu
                    slideSpeed={500}
                    direction="up"
                    spacing={18}
                    isOpen={this.state.isOpen}
                >
                    <MainButton
                        iconResting={<MdAdd style={{ fontSize: 20 }} nativeColor="white" />}
                        iconActive={<MdClose style={{ fontSize: 20 }} nativeColor="white" />}
                        backgroundColor="black"
                        onClick={() => this.setState({ isOpen: !this.state.isOpen })}
                        size={56}
                    />
                    <ChildButton
                        icon={<MdAdd style={{ fontSize: 20 }} nativeColor="black" />}
                        data="Follow me on Github"
                        backgroundColor="white"
                        size={40}
                        onClick={() => console.log('First button clicked')}
                    />
                    <ChildButton
                        icon={<MdAdd style={{ fontSize: 20 }} nativeColor="black" />}
                        label="Follow me on Github"
                        backgroundColor="white"
                        size={40}
                        onClick={() => console.log('Second button clicked')}
                    />
                    <ChildButton
                        icon={<MdAdd style={{ fontSize: 20 }} nativeColor="black" />}
                        text="Follow me on Github"
                        backgroundColor="white" 
                        size={40}
                        onClick={() => console.log('Third button clicked')}
                    />
                </FloatingMenu>

            </div>
        )
    }
}