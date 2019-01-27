import React, { Component, Fragment } from 'react';
import Input from 'Common/input';
import Button from 'Common/button';
import { requestFibonacci } from 'Actions/index';
import { connect } from 'react-redux';

interface IProps { dispatch: any; }
interface IState { inputVal: string; mode: string; }

class FibonacciInput extends Component<IProps, IState> {
    constructor (props: any) {
        super(props);

        this.state = {
            inputVal: '',
            mode: 'linear',
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleButtonClick = this.handleButtonClick.bind(this);
        this.handleModeChange = this.handleModeChange.bind(this);
    }

    handleInputChange (val: string) {
        this.setState({ inputVal: val });
    }

    handleButtonClick (event: any) {
        event.preventDefault();
        // dispatch redux to calculate fibonacci numbers in the results component
        const { inputVal, mode } = this.state;
        const valueNum = Number(inputVal);
        if (Number.isInteger(valueNum) && valueNum >= 0 && valueNum <= 100) {
            this.props.dispatch(requestFibonacci(valueNum, mode));
        }
    }

    handleModeChange (mode: string) {
        this.setState({ mode });
    }

    render () {
        return (
            <Fragment>
                <div className='mode-container'>
                    <span className={this.state.mode === 'linear' ? 'active' : ''} onClick={() => this.handleModeChange('linear')}>Linear</span>
                    <span className={this.state.mode === 'recursion' ? 'active' : ''} onClick={() => this.handleModeChange('recursion')}>Recursion</span>
                </div>
                <form className='input-container' onSubmit={this.handleButtonClick} >
                    <Input callback={this.handleInputChange} placeholder={'Enter any whole number (1, 2 ... up to 100)'} autofocus={true} />
                    <Button callback={this.handleButtonClick} buttonText={'='} />
                </form>
            </Fragment>
        )
    }
}

export default connect()(FibonacciInput);