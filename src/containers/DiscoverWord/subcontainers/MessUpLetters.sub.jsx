import React, { Component } from "react"
import Letter from "src/components/molecules/Letter"
import Grid from "src/components/dom/Grid"
import { PRIMARY_COLOR, TEXT_PRIMARY } from "src/tools/constants";
import PropTypes from "prop-types";
import { motion as MotionLetter } from "framer-motion"
import { discoverActions } from "src/ducks/discover";
import { connect } from "react-redux";



class MessUpLetters extends Component {

    
    effectStart = () => ({
        y: 0,
        opacity: 1
    })


    effectInitial = () => {
        let max = 1000;
        let min = -max;
        return {
            y: Math.random() * (max - min) + min,
            opacity: 0
        }
    }

    
    transition = () => ({
        duration: Math.random() * 2
    })


    handlerPressLetter = (paramsLetter) => {
        this.props.dispatch(discoverActions.assignLetterToOrder(paramsLetter));
    }


    letterEmpty = (letter) => letter !== 0;


    render() {
        const { letters } = this.props;
        return (
            <Grid verticalMargin={20} >
                {
                    letters.map((letter, index) => (
                        <MotionLetter.div
                            key={index}
                            initial={this.effectInitial()}
                            animate={this.effectStart()}
                            transition={this.transition()}>
                            <Letter
                                background={this.letterEmpty(letter) && PRIMARY_COLOR}
                                color={TEXT_PRIMARY}
                                text={letter}
                                visibilityText={this.letterEmpty(letter)}
                                onPressLetter={() => this.letterEmpty(letter) && this.handlerPressLetter({ letter, index })} />
                        </MotionLetter.div>
                    ))
                }
            </Grid>
        )
    }
}



MessUpLetters.defaultProps = {
    letters: []
}



MessUpLetters.propTypes = {
    letters: PropTypes.array
}



export default connect()(MessUpLetters);