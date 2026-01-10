import React, { useState } from 'react';
import { livingCosts, scholarships } from '../../data/mockData';
import './FinancialPlanning.scss';

const FinancialPlanning = () => {
  const [selectedCountry, setSelectedCountry] = useState('USA');
  const [tuition, setTuition] = useState(45000);
  const [duration, setDuration] = useState(1);

  const costs = livingCosts[selectedCountry] || livingCosts['USA'];
  const monthlyLiving = costs.housing + costs.food + costs.transport + costs.misc;
  const yearlyLiving = monthlyLiving * 12;
  const totalCost = (tuition + yearlyLiving) * duration;

  return (
    <div className="financial-planning-page">
      <div className="page-header">
        <h1>Financial Planning</h1>
        <p>Calculate your study abroad expenses</p>
      </div>

      <div className="calculator-section">
        <h2>Cost Calculator</h2>

        <div className="form-group">
          <label>Select Country</label>
          <select value={selectedCountry} onChange={(e) => setSelectedCountry(e.target.value)}>
            {Object.keys(livingCosts).map((country) => (
              <option key={country} value={country}>{country}</option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label>Annual Tuition (USD)</label>
          <input
            type="number"
            value={tuition}
            onChange={(e) => setTuition(Number(e.target.value))}
            min="0"
          />
        </div>

        <div className="form-group">
          <label>Program Duration (years)</label>
          <input
            type="number"
            value={duration}
            onChange={(e) => setDuration(Number(e.target.value))}
            min="1"
            max="6"
          />
        </div>

        <div className="cost-breakdown">
          <h3>Cost Breakdown</h3>

          <div className="breakdown-item">
            <span>Tuition (per year)</span>
            <span className="amount">${tuition.toLocaleString()}</span>
          </div>

          <div className="breakdown-section">
            <h4>Living Expenses (Monthly)</h4>
            <div className="breakdown-item sub">
              <span>Housing</span>
              <span>${costs.housing}</span>
            </div>
            <div className="breakdown-item sub">
              <span>Food</span>
              <span>${costs.food}</span>
            </div>
            <div className="breakdown-item sub">
              <span>Transport</span>
              <span>${costs.transport}</span>
            </div>
            <div className="breakdown-item sub">
              <span>Miscellaneous</span>
              <span>${costs.misc}</span>
            </div>
            <div className="breakdown-item subtotal">
              <span>Monthly Total</span>
              <span>${monthlyLiving.toLocaleString()}</span>
            </div>
          </div>

          <div className="breakdown-item">
            <span>Living Expenses (per year)</span>
            <span className="amount">${yearlyLiving.toLocaleString()}</span>
          </div>

          <div className="breakdown-item total">
            <span>Total Cost ({duration} year{duration > 1 ? 's' : ''})</span>
            <span className="amount">${totalCost.toLocaleString()}</span>
          </div>
        </div>
      </div>

      <div className="scholarships-section">
        <h2>Available Scholarships</h2>
        <div className="scholarships-grid">
          {scholarships.map((scholarship) => (
            <div key={scholarship.id} className="scholarship-card">
              <div className="scholarship-header">
                <i className="fas fa-trophy"></i>
                <h3>{scholarship.name}</h3>
              </div>
              <div className="scholarship-details">
                <div className="detail-row">
                  <span className="label">Amount</span>
                  <span className="value">{scholarship.amount}</span>
                </div>
                <div className="detail-row">
                  <span className="label">Type</span>
                  <span className="value">{scholarship.type}</span>
                </div>
                <div className="detail-row">
                  <span className="label">Eligibility</span>
                  <span className="value">{scholarship.eligibility}</span>
                </div>
                <div className="detail-row">
                  <span className="label">Deadline</span>
                  <span className="value">{scholarship.deadline}</span>
                </div>
              </div>
              <button className="apply-btn">Apply Now</button>
            </div>
          ))}
        </div>
      </div>

      <div className="education-loan-section">
        <h2>Education Loan Partners</h2>
        <div className="loan-partners">
          <div className="partner-card">
            <h3>🏦 Bank of America</h3>
            <p>Up to $150,000 | Low interest rates</p>
            <button className="contact-btn">Contact Partner</button>
          </div>
          <div className="partner-card">
            <h3>🏦 HDFC Credila</h3>
            <p>Up to INR 1 Crore | Fast approval</p>
            <button className="contact-btn">Contact Partner</button>
          </div>
          <div className="partner-card">
            <h3>🏦 Prodigy Finance</h3>
            <p>No collateral | Global coverage</p>
            <button className="contact-btn">Contact Partner</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinancialPlanning;
