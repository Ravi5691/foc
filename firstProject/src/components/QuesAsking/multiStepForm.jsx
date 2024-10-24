import React, { useState } from 'react';

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 6;

  // State for project length and answers for each step
  const [selectedProjectLength, setSelectedProjectLength] = useState(null);
  const [stepAnswers, setStepAnswers] = useState(Array(totalSteps).fill(null));

  const handleNext = () => {
    if (currentStep < totalSteps && stepAnswers[currentStep - 1]) {
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

  return (
    <div className="max-w-screen text-white flex flex-col items-center justify-center">
      <div className="max-w-2xl flex flex-row m-20">
        {/* Step Indicator */}
        <div className="flex flex-row justify-around border-r-2 pr-20 pt-9 m-5 -ml-36 mt-0">
          <div className="flex flex-col items-center gap-2">
            {steps.map((step, index) => (
              <div key={index} className="flex gap-2 items-center mb-4 ">
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
        <div className='flex flex-col justify-center m-10 -mt-16 mb-0 mr-0'>
          <div className="px-3">
            <h2 className="text-base mt-3 ">Step {currentStep}/6</h2>
            <div className='w-[700px]'>   
              <div className='m-10 h-[200px] w-[700px] mt-5 mb-0 ml-0'> 
                {currentStep === 1 && (
                  <div>
                    <h3 className="text-2xl font-sans font-semibold mb-2">What Are You</h3>
                    <div className="flex space-x-4 mb-4 mt-5 text-xs ">
                      <button className={`py-1 px-3 rounded-3xl border-2 ${selectedProjectLength === 'Single' ? 'bg-Green-700' : 'bg-gray-700'}`} onClick={() => {
                        setSelectedProjectLength('Single');
                        setStepAnswers((prev) => {
                          const newAnswers = [...prev];
                          newAnswers[0] = 'Single'; // Set the answer for step 1
                          return newAnswers;
                        });
                      }}>Content Creator</button>
                      <button className={`py-1 px-3 rounded-3xl border-2 ${selectedProjectLength === 'Recurring' ? 'bg-Green-700' : 'bg-gray-700'}`} onClick={() => {
                        setSelectedProjectLength('Recurring');
                        setStepAnswers((prev) => {
                          const newAnswers = [...prev];
                          newAnswers[0] = 'Recurring'; // Set the answer for step 1
                          return newAnswers;
                        });
                      }}>Business</button>
                      <button className={`py-1 px-3 rounded-3xl border-2 ${selectedProjectLength === 'Permanent' ? 'bg- Green-700' : 'bg-gray-700'}`} onClick={() => {
                        setSelectedProjectLength('Permanent');
                        setStepAnswers((prev) => {
                          const newAnswers = [...prev];
                          newAnswers[0] = 'Permanent'; // Set the answer for step 1
                          return newAnswers;
                        });
                      }}>Agency</button>
                    </div>
                    <div>
                      <input
                        type="text"
                        placeholder="Other..."
                        className="w-96 border-b-2 bg-transparent p-2 focus:outline-none"
                        onChange={(e) => {
                          setSelectedProjectLength(e.target.value);
                          setStepAnswers((prev) => {
                            const newAnswers = [...prev];
                            newAnswers[0] = e.target.value; // Set the answer for step 1
                            return newAnswers;
                          });
                        }}
                      />
                    </div>
                  </div>
                )}
                {currentStep === 2 && (
                  <div>
                    <h3 className="text-2xl font-sans font-semibold mb-2">Length of the Project</h3>
                    <div className="flex space-x-4 mb-4 mt-5 text-xs">
                      <button className={`py-1 px-3 rounded-3xl border-2 ${stepAnswers[1] === 'Single' ? 'bg-Green-700' : 'bg-gray-700'}`} onClick={() => {
                        setStepAnswers((prev) => {
                          const newAnswers = [...prev];
                          newAnswers[1] = 'Single'; // Set the answer for step 2
                          return newAnswers;
                        });
                      }}>Single Video</button>
                      <button className={`py-1 px-3 rounded-3xl border-2 ${stepAnswers[1] === 'Recurring' ? 'bg-Green-700' : 'bg-gray-700'}`} onClick={() => {
                        setStepAnswers((prev) => {
                          const newAnswers = [...prev];
                          newAnswers[1] = 'Recurring'; // Set the answer for step 2
                          return newAnswers;
                        });
                      }}>Recurring Videos</button>
                      <button className={`py-1 px-3 rounded-3xl border-2 ${stepAnswers[1] === 'Permanent' ? 'bg-Green-700' : 'bg-gray-700'}`} onClick={() => {
                        setStepAnswers((prev) => {
                          const newAnswers = [...prev];
                          newAnswers[1] = 'Permanent'; // Set the answer for step 2
                          return newAnswers;
                        });
                      }}>Permanent Editor</button>
                    </div>
                    <div>
                      <input
                        type="text"
                        placeholder="Other..."
                        className="w-96 border-b-2 bg-transparent p-2 focus:outline-none"
                        onChange={(e) => {
                          setStepAnswers((prev) => {
                            const newAnswers = [...prev];
                            newAnswers[1] = e.target.value; // Set the answer for step 2
                            return newAnswers;
                          });
                        }}
                      />
                    </div>
                  </div>
                )}
                {currentStep === 3 && (
                  <div>
                    <h3 className="text-2xl font-sans font-semibold mb-2">What service would you like us to do for you?</h3>
                    <div className="flex space-x-4 mb-4 mt-5 text-xs">
                      <button className={`py-1 px-3 rounded-3xl border-2 ${stepAnswers[2] === 'Video Editing' ? 'bg-Green-700' : 'bg-gray-700'}`} onClick={() => {
                        setStepAnswers((prev) => {
                          const newAnswers = [...prev];
                          newAnswers[2] = 'Video Editing'; // Set the answer for step 3
                          return newAnswers;
                        });
                      }}>Video Editing</button>
                      <button className={`py-1 px-3 rounded-3xl border-2 ${stepAnswers[2] === 'Thumbnail Editing' ? 'bg-Green-700' : 'bg-gray-700'}`} onClick={() => {
                        setStepAnswers((prev) => {
                          const newAnswers = [...prev];
                          newAnswers[2] = 'Thumbnail Editing'; // Set the answer for step 3
                          return newAnswers;
                        });
                      }}>Thumbnail Editing</button>
                      <button className={`py-1 px-3 rounded-3xl border-2 ${stepAnswers[2] === 'Video Editing and Thumbnail Design' ? 'bg-Green-700' : 'bg-gray-700'}`} onClick={() => {
                        setStepAnswers((prev) => {
                          const newAnswers = [...prev];
                          newAnswers[2] = 'Video Editing and Thumbnail Design'; // Set the answer for step 3
                          return newAnswers;
                        });
                      }}>Video Editing and Thumbnail Design</button>
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
    <h3 className="text-2xl font-sans font-semibold mb-2">What kind of content are we working on?</h3>
    <div className="flex space-x-4 mb-4 mt-5 text-xs">
      <button
        className={`py-1 px-3 rounded-3xl border-2 ${stepAnswers[3] === 'Market Content' ? 'bg-Green-700' : 'bg-gray-700'}`}
        onClick={() => setStepAnswers((prev) => {
          const newAnswers = [...prev];
          newAnswers[3] = 'Market Content'; // Set the answer for step 4
          return newAnswers;
        })}
      >
        Market Content
      </button>
      <button
        className={`py-1 px-3 rounded-3xl border-2 ${stepAnswers[3] === 'Infotainment Content' ? 'bg-Green-700' : 'bg-gray-700'}`}
        onClick={() => setStepAnswers((prev) => {
          const newAnswers = [...prev];
          newAnswers[3] = 'Infotainment Content'; // Set the answer for step 4
          return newAnswers;
        })}
      >
        Infotainment Content
      </button>
    </div>
    <div>
      <input
        type="text"
        placeholder="Other..."
        className="w-96 border-b-2 bg-transparent p-2 focus:outline-none"
        onChange={(e) => {
          setStepAnswers((prev) => {
            const newAnswers = [...prev];
            newAnswers[3] = e.target.value; // Set the answer for step 4
            return newAnswers;
          });
        }}
      />
    </div>
  </div>
)}

{currentStep === 5 && (
  <div>
    <h3 className="text-2xl font-sans font-semibold mb-2">Choose Template</h3>
    <div className="flex space-x-4 mb-10 mt-5 text-xs rounded-lg">
      {/* Template 1 */}
      <div
        className={`bg-gradient-to-r from-[#3C5557] to-[#1D2B2C] rounded-xl p-[3px] shadow-md cursor-pointer transform ${stepAnswers[4] === 'Template 1' ? 'scale-110' : ''}`}
        onClick={() => {
          setStepAnswers((prev) => {
            const newAnswers = [...prev];
            newAnswers[4] = 'Template 1'; // Update for the first template
            return newAnswers;
          });
        }}
      >
        <div className="h-36 w-36 bg-white rounded-xl"></div> {/* Increased size here */}
      </div>

      {/* Template 2 */}
      <div
        className={`bg-gradient-to-r from-[#3C5557] to-[#1D2B2C] rounded-xl p-[3px] shadow-md cursor-pointer transform ${stepAnswers[4] === 'Template 2' ? 'scale-110' : ''}`}
        onClick={() => {
          setStepAnswers((prev) => {
            const newAnswers = [...prev];
            newAnswers[4] = 'Template 2'; // Update for the second template
            return newAnswers;
          });
        }}
      >
        <div className="h-36 w-36 bg-white rounded-xl"></div> {/* Increased size here */}
      </div>

      {/* Template 3 */}
      <div
        className={`bg-gradient-to-r from-[#3C5557] to-[#1D2B2C] rounded-xl p-[3px] shadow-md cursor-pointer transform ${stepAnswers[4] === 'Template 3' ? 'scale-110' : ''}`}
        onClick={() => {
          setStepAnswers((prev) => {
            const newAnswers = [...prev];
            newAnswers[4] = 'Template 3'; // Update for the third template
            return newAnswers;
          });
        }}
      >
        <div className="h-36 w-36 bg-white rounded-xl"></div> {/* Increased size here */}
      </div>
    </div>
  </div>
)}



{currentStep === 6 && (
  <div>
    <h3 className="text-2xl font-sans font-semibold mb-2">Length of the Project?</h3>
    <div className="grid grid-cols-3 gap-4 w-[500px] mb-4 mt-5 text-xs">
      <button
        className={`py-1 px-3 w-32 rounded-3xl border-2 ${stepAnswers[5] === 'Less than 30 sec' ? 'bg-Green-700' : 'bg-gray-700'}`}
        onClick={() => setStepAnswers((prev) => {
          const newAnswers = [...prev];
          newAnswers[5] = 'Less than 30 sec'; // Update answer for Step 6
          return newAnswers;
        })}
      >
        Less than 30 sec
      </button>
      <button
        className={`py-1 px-3 w-32 rounded-3xl border-2 ${stepAnswers[5] === '30 sec to 1 min' ? 'bg-Green-700' : 'bg-gray-700'}`}
        onClick={() => setStepAnswers((prev) => {
          const newAnswers = [...prev];
          newAnswers[5] = '30 sec to 1 min'; // Update answer for Step 6
          return newAnswers;
        })}
      >
        30 sec to 1 min
      </button>
      <button
        className={`py-1 px-3 w-32 rounded-3xl border-2 ${stepAnswers[5] === '1 min to 5 min' ? 'bg-Green-700' : 'bg-gray-700'}`}
        onClick={() => setStepAnswers((prev) => {
          const newAnswers = [...prev];
          newAnswers[5] = '1 min to 5 min'; // Update answer for Step 6
          return newAnswers;
        })}
      >
        1 min to 5 min
      </button>
      {/* Add more buttons for the other options as needed */}
    </div>
  </div>
)}

              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between w-[400px] mt-8">
              <div className='bg-gradient-to-r from-[#3C5557] to-[#1D2B2C] rounded-lg p-[2px]'>
                <button
                  onClick={handleBack}
                  className="bg-[#0e1919] text-xs px-9 h-8 rounded-lg"
                  disabled={currentStep === 1}
                >
                  Back
                </button>
              </div>
              <div className='bg-gradient-to-r from-[#3C5557] to-[#1D2B2C] rounded-lg p-[2px]'>
                {currentStep === totalSteps ? (
                  <button
                    onClick={() => alert('Signing in...')} // Replace this with your sign-in logic
                    className="bg-[#0e1919] text-xs px-9 h-8 rounded-lg" // Match the styling with Next and Back
                  >
                    Sign In
                  </button>
                ) : (
                  <button
                    onClick={handleNext}
                    className={`bg-[#0e1919] text-xs px-9 h-8 rounded-lg ${stepAnswers[currentStep - 1] ? 'bg-green-500' : 'bg-[#0e1919]'}`}
                    disabled={!stepAnswers[currentStep - 1]} // Disable if no answer for the current step
                  >
                    Next
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );   
};

export default MultiStepForm;
