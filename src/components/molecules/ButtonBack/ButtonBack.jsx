import React from 'react';
import IconNatural from "src/components/atoms/IconNatural"
import { IoIosArrowBack } from "react-icons/io"
import PropTypes from "prop-types"
import { clientWindow } from 'src/resources/tools/functions';

const ButtonBack = ({ color }) => {
  return (
    <button onClick={() => clientWindow().history.back()} className="btn-back" >
      <IconNatural icon={<IoIosArrowBack size={20} />} coloricon={color} />
    </button>
  );
}

ButtonBack.propTypes = {
  color : PropTypes.string
}

export default ButtonBack;
