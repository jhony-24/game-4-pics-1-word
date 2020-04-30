import React, { Component, createRef, Fragment } from 'react';
import Button from "src/components/atoms/Button"
import style from '../style';
import LoginInput from '../subcomponents/LoginInput';
import Flex from "src/components/dom/Flex"

class SignUp extends Component {
    constructor() {
        super();
        this.username = createRef();
        this.pass = createRef();
    }

    signUp = () => {
        let username = this.username.current.value;
        let pass = this.pass.current.value;
        this.props.onClick({username,pass});
    }

    render() {
        return (
            <Fragment>
                <LoginInput.Username to={this.username} />
                <LoginInput.Pass to={this.pass} />
                <Flex>
                    <Button onClick={this.props.onChangeView} styles={style.cancel._definition}>CANCELAR</Button>
                    <Button onClick={this.signUp}>REGISTRARME</Button>
                </Flex>
            </Fragment>
        )
    }
}

export default SignUp;