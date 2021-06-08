import React, { useState, useEffect } from 'react';
import ProductPopUp from './ProductPopUp';
import * as FaIcons from 'react-icons/fa';
import { IconContext } from 'react-icons';

function ProductModal() {

    const [buttonPopup, setButtonPopup] = useState(false);

    const showPopup = () => setButtonPopup(!buttonPopup)

    return (
        <IconContext.Provider className="icon-finder" value={{ color: '#29465b', size: 48, top: 25, left: 60}}>
            <div clasName="product-modal">
            <main>
                <button className="open-button" onClick={showPopup}>Add New Product</button>
                <FaIcons.FaCartPlus />
            </main>
            <ProductPopUp trigger={buttonPopup}
            setTrigger={setButtonPopup}>
                <form>
                <div className="form-con1">
                <h2>Product Details</h2>
                    <div>
                        <p>Date</p>
                        <input class="input-con" type='date' />
                    </div>
                    <div>
                        <p>Product Line</p>
                        <input class="input-con" type='text' />
                    </div>
                    <div>
                        <p>Code</p>
                        <input class="input-con" type='text' />
                    </div>
                    <div>
                        <p>Description</p>
                        <input class="input-con" type='text' />
                    </div>
                    <div>
                        <p>Quantity</p>
                        <input class="input-con" type='text' />
                    </div>
                </div>
            </form>
            <form>
                <div className="form-con2">
                <h2>Supplier Details</h2>
                    <div>
                        <p>Supplier Company Name</p>
                        <input class="input-con" type='text' />
                    </div>
                    <div>
                        <p>Category</p>
                        <input class="input-con" type='text' />
                    </div>
                    <div>
                        <p>Contact Person</p>
                        <input class="input-con" type='text' />
                    </div>
                    <div>
                        <p>Email</p>
                        <input class="input-con" type='text' />
                    </div>
                    <div>
                        <p>Phone Number</p>
                        <input class="input-con" type='number' />
                    </div>
                    <div>
                        <p>Address</p>
                        <input class="input-con" type='text' />
                    </div>
                </div>
            </form>
            <form>
                <div className="form-con3">
                <h2>Product Pricing</h2>
                    <div>
                        <p>Unit Price</p>
                        <input class="input-con" type='number' />
                    </div>
                    <div>
                        <p>Minimum Order Quanity</p>
                        <input class="input-con" type='number' />
                    </div>
                    <div>
                        <p>Discount percentages</p>
                        <input class="input-con" type='number' />
                    </div>
                    <div>
                        <p>Selling Price</p>
                        <input class="input-con" type='number' />
                    </div>
                </div>
            </form>
           </ProductPopUp>
        </div>
        </IconContext.Provider>
    )
}

export default ProductModal;
