import React, { useState } from 'react';

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const totalSteps = 6;
  const [selectedProjectLength, setSelectedProjectLength] = useState(null);

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);

    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const steps = [
    'About You',
    'Project Type',
    'Services',
    'Content Type',
    'Template',
    'Length',
  ];

  const stepImages = [
  ];

  const projectLengths = ['Single', 'Recurring', 'Permanent'];

  return (
    <div className="max-w-screen bg-transparent text-white flex flexx-col items-center justify-center ">
      <div className=" max-w-2xl  flex flex-row m-20" >
        {/* Step Indicator */}
        <div className="flex flex-row  justify-around  border-r-2  pr-20 pt-9  m-5 -ml-36  mt-0">
        <div className="flex flex-col items-center gap-2 ">
          {steps.map((step, index) => (
            <div key={index} className="flex  gap-2 items-center mb-4 ">
                <div
                className={`mr-4 text-sm font-medium w-36 text-right p-4
                ${currentStep > index + 1 ? 'text-white' : currentStep === index + 1 ? 'text-white' : 'text-gray-500'}`}
              >
                {step}
              </div>
              <div
                className={`h-12 w-12 mx-1 rounded-full flex items-center justify-center
                ${currentStep >= index + 1 ? 'bg-[#00C774]' : 'bg-gray-600'}
                ${currentStep === index + 1 ? 'border-4 border-[#00C774]' : ''}`}
              > 
              </div>
            </div>
          ))}
        </div>
        </div>

        {/* Form Content */}

        <div className='  flex flex-col justify-center m-10 -mt-16 mb-0 mr-0 '>
        <div className=" px-3">
          <div >
            <h2 className="text-base  mt-3 ">Step {currentStep}/6</h2>
            </div>
          
         <div className=' w-[700px]'>   
          <div className='m-10 h-[200px] w-[700px] mt-5 mb-0 ml-0'> 
            {currentStep === 1 && (
              <div>
                <h3 className="text-2xl font-sans  font-semibold mb-2">What Are You</h3>
                
                <div className="flex space-x-4 mb-4 mt-5 text-xs ">
                  <button className=" py-1 px-3  rounded-3xl border-2 ${selectedProjectLength === 'Single' ? 'bg-green-500' : 'bg-gray-700'}"  onClick={() => setSelectedProjectLength('Single')} >Content Creator</button>
                  <button className="py-1 px-3 rounded-3xl border-2  ${selectedProjectLength === 'Recurring' ? 'bg-green-500' : 'bg-gray-700'}"  onClick={() => setSelectedProjectLength('Recurring')}>Business</button>
                  <button className="py-1 px-3 rounded-3xl border-2 ${selectedProjectLength === 'Permanent' ? 'bg-green-500' : 'bg-gray-700'}"  onClick={() => setSelectedProjectLength('Permanent')}>Agency</button>
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Other..."
                    className=" w-96 border-b-2 bg-transparent p-2 focus:outline-none"
                    onChange={(e) => setSelectedProjectLength(e.target.value)}
                  />
                </div>
              </div>
            )}
            {currentStep === 2 && (
              <div>
                <h3 className="text-2xl font-sans  font-semibold mb-2">Length of the Project</h3>
                <div className="flex space-x-4 mb-4 mt-5 text-xs">
                  <button className="b py-1 px-3  rounded-3xl border-2  ${selectedProjectLength === 'Single' ? 'bg-green-500' : 'bg-gray-700'}"  onClick={() => setSelectedProjectLength('Single')}>Single Video</button>
                  <button className="b py-1 px-3  rounded-3xl border-2  ${selectedProjectLength === 'Recurring' ? 'bg-green-500' : 'bg-gray-700'}"  onClick={() => setSelectedProjectLength('Recurring')}>Recurring Videos</button>
                  <button className=" py-1 px-3  rounded-3xl border-2  ${selectedProjectLength === 'Permanent' ? 'bg-green-500' : 'bg-gray-700'}"  onClick={() => setSelectedProjectLength('Permanent')}>Permanent Editor</button>
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Other..."
                    className="w-96 border-b-2 bg-transparent p-2 focus:outline-none"
                    onChange={(e) => setSelectedProjectLength(e.target.value)}
                  />
                </div>
              </div>
            )}
            {currentStep === 3 && (
              <div>
                <h3 className="text-2xl font-sans  font-semibold mb-2">What service would you like us to do for you ?</h3>
                <div className="flex space-x-4 mb-4 mt-5 text-xs">
                  <button className="b py-1 px-3  rounded-3xl border-2  ${selectedProjectLength === 'Single' ? 'bg-green-500' : 'bg-gray-700'}"  onClick={() => setSelectedProjectLength('Single')}>Video Editing</button>
                  <button className="b py-1 px-3  rounded-3xl border-2  ${selectedProjectLength === 'Single' ? 'bg-green-500' : 'bg-gray-700'}"  onClick={() => setSelectedProjectLength('Single')}>Thumbnail Editing</button>
                  <button className="b py-1 px-3  rounded-3xl border-2  ${selectedProjectLength === 'Single' ? 'bg-green-500' : 'bg-gray-700'}"  onClick={() => setSelectedProjectLength('Single')}>Video Editing and Thumbnail Design</button>
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Other..."
                    className="w-full border-b-2 bg-transparent p-2 focus:outline-none"
                  />
                </div>
              </div>
            )}
            {currentStep === 4 && (
              <div>
                <h3 className="text-2xl font-sans  font-semibold mb-2">What kind of content are we working on ?</h3>
                <div className="flex space-x-4 mb-4 mt-5 text-xs">
                  <button className=" py-1 px-3  rounded-3xl border-2 "  onClick={() => setSelectedProjectLength('Single')}>Market Content</button>
                  <button className=" py-1 px-3  rounded-3xl border-2 ">Infotainment Content</button>
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Other..."
                    className="w-96 border-b-2 bg-transparent p-2 focus:outline-none"
                  />
                </div>
              </div>
            )}
            {currentStep === 5 && (
              <div>
                <h3 className="text-2xl font-sans  font-semibold mb-2">Choose Template</h3>
                <div className="flex space-x-4 mb-10 mt-5 text-xs rounded-lg">
                  <div className="bg-gradient-to-r from-[#3C5557] to-[#1D2B2C] rounded-xl p-[3px] shadow-md">
                  <div className='h-32 w-32 bg-white rounded-xl'></div>
                  </div>
                  <div className="bg-gradient-to-r from-[#3C5557] to-[#1D2B2C] rounded-xl p-[3px] shadow-md">
                  <div className='h-32 w-32 bg-white rounded-xl'></div>
                  </div>
                  <div className="bg-gradient-to-r from-[#3C5557] to-[#1D2B2C] rounded-xl p-[3px] shadow-md">
                  <div className='h-32 w-32 bg-white rounded-xl'></div>
                  </div>
                </div>
              </div>
            )}
            {currentStep === 6 && (
              <div>
                <h3 className="text-2xl font-sans  font-semibold mb-2">Length of the Project ?</h3>
                <div className="grid grid-cols-3 gap-4 w-[500px] mb-4 mt-5 text-xs">
                  <button className=" py-1 px-3 w-32  rounded-3xl border-2 ">Less than 30 sec</button>
                  <button className=" py-1 px-3  w-32  rounded-3xl border-2 ">30 sec to 1 min</button>
                  <button className=" py-1 px-3  w-32  rounded-3xl border-2 ">1 min to 5 min</button>
                  <button className=" py-1 px-3  w-32  rounded-3xl border-2 ">Less than 10 min</button>
                  <button className=" py-1 px-3 w-36  rounded-3xl border-2 ">Greater than 10 mins</button>
                </div>
              </div>
            )}
            {/* Additional steps can be added similarly */}
          </div>
        </div>
        

        {/* Navigation Buttons */}
        <div className="flex justify-between w-[400px]  ">
          <div className='bg-gradient-to-r from-[#3C5557] to-[#1D2B2C] rounded-lg p-[2px]'>
          <button
            onClick={handleBack}
            className="bg-[#0e1919] text-xs px-9 h-8 rounded-lg "
            disabled={currentStep === 1}
          >
            Back
          </button>
          </div>
          <div className='bg-gradient-to-r from-[#3C5557] to-[#1D2B2C] rounded-lg p-[2px]'>
          <button
             onClick={handleNext}
             className={`bg-[#0e1919] text-xs px-9 h-8 rounded-lg ${selectedProjectLength ? 'bg-green-500' : 'bg-gray-500'}`}
             disabled={!selectedProjectLength}
          >
            Next
          </button>
          </div>
        </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default MultiStepForm;
