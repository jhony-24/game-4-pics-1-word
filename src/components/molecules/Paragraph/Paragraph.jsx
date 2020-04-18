import React , { memo } from 'react';
import { css } from 'aphrodite/no-important';
import style from './style';
import { styleDynamic } from "src/tools/functions"
import Flex from "src/components/dom/Flex"




const Paragraph = ({styles,title,detail,colortitle,colordetail}) => {

    const flex = {...style.flex._definition,...styles};
    const strong = css(style.title,styleDynamic({color:colortitle}));
    const think = css(style.detail,styleDynamic({color:colordetail}));

    return(
        <Flex styles={flex}>
            <div className={strong}>{title}</div>
            <div className={think}>{detail}</div>
        </Flex>
    )
}



export default memo(Paragraph);
     