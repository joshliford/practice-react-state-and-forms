import { useState } from 'react'

const FeedbackForm = () => {

    const [ formData, setFormData ] = useState({ // creating a piece of state called 'formData'
        name: "",
        email: "",
        feedback: ""
    })

    /*
        - formData: holds the current state (data from the form)
        - setFormData: state updater function - called when you want to change what's stored in formData
    */

    // handles input changes from form fields
    const handleChange = (e) => {
        // (e): the event object passed when an input changes 

        const { name, value } = e.target;
        /*
            - name: the name attribute of the input (i.e. email, feedback)
            - value: whatever the user types into that field
            - e.target is the input element that triggered the event
            (i.e. the <input> for name, email, etc.)

        */

        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }))

        /*
            - Call the updater setFormData and pass it a callback function
            - Callback recieves the previous state (prevData)
            - Returns a new object:
                - ...prevData: copies all existing key-value pairs (name, email, feedback)
                - [name]: value: updates only the fields that changed based on the 'name' of the input
        */

    }

    const remainingChars = 200 - formData.feedback.length;

        return (
    <div className="form-container">
        <div className="form-section">
            <h1 className="form-title">Feedback Form</h1>
                <form className="form">
                    <label>
                        Name:
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </label>
                    <br />
                    <label>
                        Email:
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </label>
                    <br />
                    <label>
                        Feedback:
                        <textarea
                            name="feedback"
                            maxLength={200}
                            value={formData.feedback}
                            onChange={handleChange}
                        />
                    </label>
                    <p>{remainingChars} characters remaining</p>
                    <button className="submit-button" type="submit" disabled={!formData.name || !formData.email || !formData.feedback}>Submit</button>
                </form>
            </div>
            <div className="preview-section">
                <h2 className="preview-title">Preview</h2>
                <div className="preview-container">
                    <p>Name: {formData.name}</p>
                    <p>Email: {formData.email}</p>
                    <p>Feedback: {formData.feedback}</p>
                </div>
            </div>
    </div>
    );


}

export default FeedbackForm;