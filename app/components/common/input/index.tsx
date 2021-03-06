import React, { PureComponent } from 'react';

interface IProps { placeholder: string; autofocus: boolean; callback (val: any): void; }
interface IState { value: string; }

class Input extends PureComponent<IProps, IState> {
    constructor (props: IProps) {
        super (props);
        this.state = {
            value: '',
        };

        this.handleInputOnChange = this.handleInputOnChange.bind(this);
    }
    
    handleInputOnChange (event: any) {
        const { value } = event.target;
        this.setState({ value });
        // need to call callback with the input value so the parent can have access to the input change
        this.props.callback(value);
    }

    render () {
        return (
            <input value={this.state.value} onChange={this.handleInputOnChange} placeholder={this.props.placeholder} autoFocus={this.props.autofocus} />
        );
    }
}

export default Input;