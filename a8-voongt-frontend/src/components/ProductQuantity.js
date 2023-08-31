import React, { useState } from 'react';

import { HiArrowDown, HiArrowUp } from 'react-icons/hi'; // Replace abbr with the correct abbreviation.

function ProductQuantity() {
    const [item_quantity, setQuantity] = useState(0);

    const increase = () => setQuantity(item_quantity === 10 ? item_quantity : item_quantity + 1)
    const decrease = () => setQuantity(item_quantity === 0 ? 0 : item_quantity - 1)
    return (
        <div class="">
            <HiArrowDown onClick={decrease} class="bigger" />
            <span class="qv">{item_quantity}</span>
            <HiArrowUp onClick={increase} class="bigger" />
        </div>
    );
}

export default ProductQuantity