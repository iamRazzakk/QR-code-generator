import { useState } from "react";
import QRCode from "react-qr-code";

function App() {
  const [inputText, setInputText] = useState('');
  const [qrCodeText, setQRCodeText] = useState('');

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const generateQRCode = () => {
    setQRCodeText(inputText);
    setInputText('');
  };
  return (
    <div >
      <div className="flex mt-6 items-center justify-center">
        <input type="text" className="text-xl block px-4 py-2 rounded text-black border border-black" value={inputText} onChange={handleInputChange} placeholder="Enter text" />
        <button className="bg-black ml-4 text-white px-3 py-2 rounded" onClick={generateQRCode}>Generate</button>
      </div>
      <div className="flex items-center justify-center mt-20">
        {qrCodeText && <QRCode value={qrCodeText} />}
      </div>
    </div>
  )
}

export default App
