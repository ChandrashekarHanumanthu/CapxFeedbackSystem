import React, { useState } from "react"
import "./InitiateFeedbackProcess.css"

const InitiateFeedback = () => {
  const [prNumber, setPrNumber] = useState("")
  const [sapData, setSapData] = useState([])
  const [selectedItem, setSelectedItem] = useState(null)

  // This function allows when enterning a pr number and click fetchbutton it  fetching SAP data
  const fetchSapData = async () => {
    if (!prNumber.trim()) {
      alert("Please enter a valid PR Number.");
      return
    }

    // . PR can have multiple items associated to that, 
    // user should select one item to create ticket. (you can replace this with actual API calls)
    console.log("Fetching data for PR Number:", prNumber)

    // I used some duplicate data insted of SAP Data
    setSapData([
      {
        itemId: 1,
        item: "Item 1",
        material: "Material A",
        po: "PO1234",
        quantity: 10,
        totalValue: "$1000",
        supplier: "Supplier X",
      },
      {
        itemId: 2,
        item: "Item 2",
        material: "Material B",
        po: "PO5678",
        quantity: 5,
        totalValue: "$2000",
        supplier: "Supplier Y",
      },
    ])
  }

  const handleSelectItem = (item) => {
    setSelectedItem(item)
  }

  const handleCreateTicket = () => {
    if (selectedItem) {
      alert(`Ticket created for item: ${selectedItem.item}`)
      setSelectedItem(null)
    } else {
      alert("Please select an item to create a ticket.");
    }
  }

  return (
    <div className="feedback-container">
      <h1>Initiate Feedback Process</h1>
      <div className="form-group">
        <label>Enter PR Number:</label>
        <input
          type="text"
          value={prNumber}
          onChange={(e) => setPrNumber(e.target.value)}
          placeholder="Enter PR Number"
        />
        <button onClick={fetchSapData} className="fetch-button">
          Fetch SAP Data
        </button>
      </div>

      {/* Only show SAP data table after fetching data */}
      {sapData.length > 0 && (
        <div className="sap-data">
          <h2>Select an Item to Create a Ticket</h2>
          <table>
            <thead>
              <tr>
                <th>Item</th>
                <th>Material</th>
                <th>PO</th>
                <th>Quantity</th>
                <th>Value</th>
                <th>Supplier</th>
              </tr>
            </thead>
            <tbody>
              {sapData.map((item) => (
                <tr
                  key={item.itemId}
                  onClick={() => handleSelectItem(item)}
                  className={selectedItem?.itemId === item.itemId ? "selected" : ""}
                >
                  <td>{item.item}</td>
                  <td>{item.material}</td>
                  <td>{item.po}</td>
                  <td>{item.quantity}</td>
                  <td>{item.totalValue}</td>
                  <td>{item.supplier}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Show ticket creation option only if an item is selected */}
      {selectedItem && (
        <div className="ticket-actions">
          <h3>Selected Item: {selectedItem.item}</h3>
          <button onClick={handleCreateTicket} className="create-ticket-button">
            Create Ticket
          </button>
        </div>
      )}
    </div>
  );
};

export default InitiateFeedback;
