import React from 'react';

interface Step {
  title: string;
  description: string;
  subSteps?: string[];
}

interface StepListProps {
  steps: Step[];
}

export const StepList: React.FC<StepListProps> = ({ steps }) => {
  return (
    <ol className="flex flex-col items-start px-3 mt-5 max-md:max-w-full list-decimal">
      {steps.map((step, index) => (
        <li key={index} className="mt-5 ml-5 max-md:ml-2.5">
          <h2 className="text-sm leading-none">{step.title}</h2>
          <p className="mt-6 ml-6 max-md:ml-2.5">{step.description}</p>
          {step.subSteps && (
            <ol className="mt-5 ml-7 list-decimal">
              {step.subSteps.map((subStep, subIndex) => (
                <li key={subIndex} className="mt-2.5 text-sm">{subStep}</li>
              ))}
            </ol>
          )}
        </li>
      ))}
      {/* <li className="mt-2.5 text-sm">
        <button className="text-xs">Ask a follow up ...</button>
      </li>
      <li className="mt-6 max-md:ml-2">0</li> */}
    </ol>
  );
};