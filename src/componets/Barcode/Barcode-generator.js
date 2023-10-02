import React, { useState } from "react";
import Barcode from "react-barcode";

function barcode() {
    const [barcodeData, setBarcodeData] = useState("");

    const handleInputChange = (event) => {
        setBarcodeData(event.target.value);
    };

    return (
        <div className="App">
            <h1>Barcode Generator</h1>
            <input
                type="text"
                value={barcodeData}
                onChange={handleInputChange}
                placeholder="Enter barcode data"
            />
            <Barcode value={barcodeData} />
        </div>
    );
}

export default barcode;
