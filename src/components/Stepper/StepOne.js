import React, { useState } from "react";
import "./StepOne.css";
export default function StepOne({ nextStep, formData, updateFormData }) {
  const [error, setError] = useState("");

  const handleContinue = () => {
    if (!formData.firstName || !formData.email || !formData.contact || !formData.city || !formData.gender || !formData.type) {
      setError("Please fill in all required fields.");
    } else {
      setError("");
      nextStep();
    }
  };

  const handleLangChange = (lang) => {
    updateFormData({
      languages: formData.languages.includes(lang)
        ? formData.languages.filter((l) => l !== lang)
        : [...formData.languages, lang],
    });
  };

  return (
    <div className="form-step">
      <h2>Confirm your details</h2>
      <input placeholder="First Name" value={formData.firstName} onChange={(e) => updateFormData({ firstName: e.target.value })} />
      <input placeholder="Last Name (optional)" value={formData.lastName} onChange={(e) => updateFormData({ lastName: e.target.value })} />
      <input placeholder="Email" value={formData.email} onChange={(e) => updateFormData({ email: e.target.value })} />
      <input placeholder="Contact Number" value={formData.contact} onChange={(e) => updateFormData({ contact: e.target.value })} />
      <input placeholder="Current City" value={formData.city} onChange={(e) => updateFormData({ city: e.target.value })} />

      <div className="gender-group">
        <label><input type="radio" name="gender" value="Female" checked={formData.gender === "Female"} onChange={(e) => updateFormData({ gender: e.target.value })} /> Female</label>
        <label><input type="radio" name="gender" value="Male" checked={formData.gender === "Male"} onChange={(e) => updateFormData({ gender: e.target.value })} /> Male</label>
        <label><input type="radio" name="gender" value="Others" checked={formData.gender === "Others"} onChange={(e) => updateFormData({ gender: e.target.value })} /> Others</label>
      </div>

      <div className="languages">
        {["English", "Hindi", "Tamil", "Telugu", "Marathi", "French", "Japanese"].map((lang) => (
          <button key={lang} type="button" className={formData.languages.includes(lang) ? "selected" : ""} onClick={() => handleLangChange(lang)}>
            {lang}
          </button>
        ))}
      </div>

      <div className="types">
        {["College student", "Fresher", "Working professional", "School student", "Woman returning to work"].map((type) => (
          <button key={type} type="button" className={formData.type === type ? "selected" : ""} onClick={() => updateFormData({ type })}>
            {type}
          </button>
        ))}
      </div>

      {error && <p className="error">{error}</p>}
      <button className="next-btn" onClick={handleContinue}>Confirm and Continue</button>
    </div>
  );
}