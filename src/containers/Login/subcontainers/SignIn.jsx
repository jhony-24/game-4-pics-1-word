import React, { Component, createRef, Fragment } from 'react';
import { css } from 'aphrodite/no-important';
import Button from "src/components/atoms/Button"
import Text from "src/components/atoms/Text"
import style from '../style';
import LoginInput from '../subcomponents/LoginInput';


class SignIn extends Component {

    constructor() {
        super();
        this.username = createRef();
        this.pass = createRef();
    }

    signIn = () => {
        let username = this.username.current.value;
        let pass = this.pass.current.value;
        this.props.onClick({username,pass});
    }

    render() {
        return (
            <Fragment>
                <LoginInput.Username to={this.username} />
                <LoginInput.Pass to={this.pass} />
                <Text styles={{...style.smallText._definition,...style.right._definition}}>e olvidado mi contraseña ?</Text>
                <Button onClick={this.signIn}>INICIAR SESIÓN</Button>
                <Text styles={{...style.smallText,...style.center._definition, ...style.marginTop._definition}} color="gray">
                    no tengo una cuenta <strong style={{ color: "rgb(30,130,230)" }} onClick={this.props.onChangeView}>registrarme</strong>
                </Text>
            </Fragment>
        )
    }
}

export default SignIn;