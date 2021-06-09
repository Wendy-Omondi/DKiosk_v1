import React from 'react';
import './styles/ProductPopUp.css';

function ProductPopUp(props) {

    const closeModal = () => props.setTrigger(false);


    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
                <button className="close-button" onClick={closeModal}>close</button>
                {/* <button className="close-button" onClick={()=> props.setTrigger(false)}>close</button> */}
                { props.children }
            </div>
            
        </div>
    ) : "";
}

export default ProductPopUp;
