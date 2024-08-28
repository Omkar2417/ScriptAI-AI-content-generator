"use client"
import React, { useState } from 'react';

const Billing: React.FC = () => {
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [cvv, setCvv] = useState('');
  const [expiryDate, setExpiryDate] = useState('');

  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    cardNumber: '',
    cvv: '',
    expiryDate: '',
  });

  const handlePurchaseClick = (plan: string) => {
    setSelectedPlan(plan);
    setShowPaymentModal(true);
  };

  const handleCloseModal = () => {
    setShowPaymentModal(false);
    setSelectedPlan(null);
    clearForm();
  };

  const validateForm = () => {
    let valid = true;
    let errors = {
      firstName: '',
      lastName: '',
      cardNumber: '',
      cvv: '',
      expiryDate: '',
    };

    if (!firstName.trim()) {
      errors.firstName = 'First name is required';
      valid = false;
    }
    if (!lastName.trim()) {
      errors.lastName = 'Last name is required';
      valid = false;
    }
    if (!cardNumber.trim()) {
      errors.cardNumber = 'Card number is required';
      valid = false;
    } else if (!/^\d{16}$/.test(cardNumber)) {
      errors.cardNumber = 'Card number must be 16 digits';
      valid = false;
    }
    if (!cvv.trim()) {
      errors.cvv = 'CVV is required';
      valid = false;
    } else if (!/^\d{3,4}$/.test(cvv)) {
      errors.cvv = 'CVV must be 3 or 4 digits';
      valid = false;
    }
    if (!expiryDate.trim()) {
      errors.expiryDate = 'Expiration date is required';
      valid = false;
    } else if (!/^(0[1-9]|1[0-2])\/?([0-9]{2})$/.test(expiryDate)) {
      errors.expiryDate = 'Expiration date must be in MM/YY format';
      valid = false;
    }

    setErrors(errors);
    return valid;
  };

  const handleSubmitPayment = () => {
    if (validateForm()) {
      // Submit payment logic goes here
      alert('Payment Submitted');
      handleCloseModal();
    }
  };

  const clearForm = () => {
    setFirstName('');
    setLastName('');
    setCardNumber('');
    setCvv('');
    setExpiryDate('');
    setErrors({
      firstName: '',
      lastName: '',
      cardNumber: '',
      cvv: '',
      expiryDate: '',
    });
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-8">Upgrade to Premium</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 w-full max-w-5xl">
        
        {/* Lite Premium Plan */}
        <div className="bg-white rounded-lg shadow-lg p-6 text-center">
          <div className="bg-blue-500 text-white rounded-t-lg p-2">
            <h2 className="text-lg font-bold">Lite</h2>
            <p className="text-2xl font-bold">&#8377; 300 <span className="text-sm font-normal">per month</span></p>
          </div>
          <div className="p-4">
            <ul className="text-left text-gray-700 space-y-2 mb-4">
              <li>✔️ 50,000 words per month</li>
              <li>✔️ Unlimited Copy</li>
              <li>✔️ 1 Month of History</li>
            </ul>
          </div>
          <button 
            className="bg-blue-500 text-white rounded-lg py-2 px-4 mt-4" 
            onClick={() => handlePurchaseClick('Lite Premium')}>
            PURCHASE
          </button>
        </div>

        {/* Pro Pack Plan */}
        <div className="bg-white rounded-lg shadow-lg p-6 text-center">
          <div className="bg-indigo-500 text-white rounded-t-lg p-2">
            <h2 className="text-lg font-bold">Pro</h2>
            <p className="text-2xl font-bold">&#8377; 500 <span className="text-sm font-normal">per month</span></p>
          </div>
          <div className="p-4">
            <ul className="text-left text-gray-700 space-y-2 mb-4">
              <li>✔️ 100,000 words per month</li>
              <li>✔️ Unlimited Copy</li>
              <li>✔️ 2 Month of History</li>
            </ul>
          </div>
          <button 
            className="bg-indigo-500 text-white rounded-lg py-2 px-4 mt-4" 
            onClick={() => handlePurchaseClick('Pro Pack')}>
            PURCHASE
          </button>
        </div>

        {/* Ultra Plan */}
        <div className="bg-white rounded-lg shadow-lg p-6 text-center">
          <div className="bg-teal-500 text-white rounded-t-lg p-2">
            <h2 className="text-lg font-bold">Ultra</h2>
            <p className="text-2xl font-bold">&#8377; 900 <span className="text-sm font-normal">per month</span></p>
          </div>
          <div className="p-4">
            <ul className="text-left text-gray-700 space-y-2 mb-4">
              <li>✔️ 200,000 words per month</li>
              <li>✔️ Unlimited Copy</li>
              <li>✔️ 5 Month of History</li>
            </ul>
          </div>
          <button 
            className="bg-teal-500 text-white rounded-lg py-2 px-4 mt-4" 
            onClick={() => handlePurchaseClick('Ultra')}>
            PURCHASE
          </button>
        </div>

        {/* Ultra Pro Max Plan */}
        <div className="bg-white rounded-lg shadow-lg p-6 text-center">
          <div className="bg-purple-500 text-white rounded-t-lg p-2">
            <h2 className="text-lg font-bold">Ultra Pro Max</h2>
            <p className="text-2xl font-bold">&#8377; 1500 <span className="text-sm font-normal">per month</span></p>
          </div>
          <div className="p-4">
            <ul className="text-left text-gray-700 space-y-2 mb-4">
              <li>✔️ 500,000 words per month</li>
              <li>✔️ Unlimited Copy</li>
              <li>✔️ 1 Year of History</li>
            </ul>
          </div>
          <button 
            className="bg-purple-500 text-white rounded-lg py-2 px-4 mt-4" 
            onClick={() => handlePurchaseClick('Ultra Pro Max')}>
            PURCHASE
          </button>
        </div>

      </div>

      {/* Payment Modal */}
      {showPaymentModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Payment for {selectedPlan}</h2>
              <button onClick={handleCloseModal} className="text-gray-500">&times;</button>
            </div>
            <p className="text-right text-gray-700 mb-4">Total: <span className="font-bold">&#8377; {(selectedPlan === 'Lite Premium' && 300) || (selectedPlan === 'Pro Pack' && 500) || (selectedPlan === 'Ultra' && 900) || (selectedPlan === 'Ultra Pro Max' && 1500)}</span></p>
            
            <div className="space-y-4">
              <div>
                <input 
                  className={`w-full px-4 py-2 border ${errors.firstName ? 'border-red-500' : 'border-gray-300'} rounded-lg`} 
                  type="text" 
                  placeholder="First name" 
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
              </div>
              <div>
                <input 
                  className={`w-full px-4 py-2 border ${errors.lastName ? 'border-red-500' : 'border-gray-300'} rounded-lg`} 
                  type="text" 
                  placeholder="Last name" 
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
                {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
              </div>
              <div>
                <input 
                  className={`w-full px-4 py-2 border ${errors.cardNumber ? 'border-red-500' : 'border-gray-300'} rounded-lg`} 
                  type="text" 
                  placeholder="Card number" 
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                />
                {errors.cardNumber && <p className="text-red-500 text-sm">{errors.cardNumber}</p>}
              </div>
              <div className="flex space-x-4">
                <input 
                  className={`w-1/2 px-4 py-2 border ${errors.cvv ? 'border-red-500' : 'border-gray-300'} rounded-lg`} 
                  type="text" 
                  placeholder="CVV" 
                  value={cvv}
                  onChange={(e) => setCvv(e.target.value)}
                />
                {errors.cvv && <p className="text-red-500 text-sm">{errors.cvv}</p>}
                <input 
                  className={`w-1/2 px-4 py-2 border ${errors.expiryDate ? 'border-red-500' : 'border-gray-300'} rounded-lg`} 
                  type="text" 
                  placeholder="MM/YY" 
                  value={expiryDate}
                  onChange={(e) => setExpiryDate(e.target.value)}
                />
                {errors.expiryDate && <p className="text-red-500 text-sm">{errors.expiryDate}</p>}
              </div>
              <button 
                className="w-full bg-green-500 text-white py-2 rounded-lg mt-4" 
                onClick={handleSubmitPayment}>
                SUBMIT PAYMENT
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Billing;
