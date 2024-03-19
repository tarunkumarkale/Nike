import React from 'react'

const Detilspro = ({ showPopup, closePopup }) => {
  return showPopup ? (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75">
      <div className="bg-white p-8 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Popup Content</h2>
        <p>This is the content of the popup.</p>
        <button onClick={closePopup} className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Close
        </button>
      </div>
    </div>
  ) : null;
}

export default Detilspro;

   
