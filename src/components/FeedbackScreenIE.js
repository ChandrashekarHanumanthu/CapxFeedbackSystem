import React, { useState } from "react"
import "./FeedbackScreenIE.css"

const FeedbackScreenIE = () => {
  const [formData, setFormData] = useState({
    prDetails: "",
    infraSheet: null,
    dfmConfirmation: null,
    capacity: "",
    equipmentBlock: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: files[0],
    }))
  }

  const handleSubmit = () => {
    //  logic for for submitting the feedback
    console.log("Feedback submitted: ", formData)
  }

  return (
    <div className="feedback-screen-container">
      <h1>Feedback Screen for IE</h1>
      <div className="form-group">
        <label>PR Details</label>
        <input
          type="text"
          name="prDetails"
          value={formData.prDetails}
          onChange={handleChange}
          placeholder="Enter PR Details"
        />
      </div>
      <div className="form-group">
        <label>Infra Sheet Template</label>
        <button>Download Infra Sheet Template</button>
      </div>
      <div className="form-group">
        <label>Infra Sheet Upload</label>
        <input
          type="file"
          name="infraSheet"
          onChange={handleFileChange}
        />
      </div>
      <div className="form-group">
        <label>DFM Confirmation Document</label>
        <button>Download DFM Confirmation Document</button>
      </div>
      <div className="form-group">
        <label>Capacity (Number of Parts Required)</label>
        <input
          type="number"
          name="capacity"
          value={formData.capacity}
          onChange={handleChange}
          placeholder="Enter Capacity"
        />
      </div>
      <div className="form-group">
        <label>Block of Equipment</label>
        <input
          type="text"
          name="equipmentBlock"
          value={formData.equipmentBlock}
          onChange={handleChange}
          placeholder="Enter Equipment Block"
        />
      </div>
      <div className="form-actions">
        <button onClick={handleSubmit}>Submit Feedback</button>
      </div>
    </div>
  )
}

export default FeedbackScreenIE
