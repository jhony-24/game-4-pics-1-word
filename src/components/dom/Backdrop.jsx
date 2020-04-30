import React from 'react';
import { css, StyleSheet } from "aphrodite/no-important"
import Position from './Position';

const style = StyleSheet.create({
    backdrop: {
        zIndex: 1000,
        position: "fixed",
        background : "red"
    }
})

const Backdrop = ({ children }) => {
    return (
        <div className={css(style.backdrop)} >
            <Position position="fixed"
                left="0px"
                right="0px"
                top="0px"
                bottom="0px"
                styles={{background:"rgba(0,0,0,.7)"}}>
                {children}
            </Position>
        </div>
    )
};

export default Backdrop;