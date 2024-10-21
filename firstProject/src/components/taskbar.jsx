import React, { useState, useEffect } from 'react';

const SemiCircleProgressBar = () => {
    const [completedTasks, setCompletedTasks] = useState(7);
    const totalTasks = 15;

    const progressPercentage = (completedTasks / totalTasks) * 100;

    const radius = 100; // Radius of the semi-circle
    const strokeWidth = 15; // Thickness of the semi-circle
    const circumference = Math.PI * (radius * 2); // Circumference of the full circle
    const progress = (progressPercentage / 100) * (circumference / 2); // Length of the progress stroke for the semi-circle

    const centerX = radius + strokeWidth / 2; // Center X of the semi-circle
    const centerY = radius + strokeWidth / 2; // Center Y of the semi-circle

    // Needle dimensions
    const needleWidth = 7;
    const needleHeight = 80;

    // State for the animated needle angle
    const [needleAngle, setNeedleAngle] = useState(-90); // Start at -90 degrees (0% progress)

    // Animate the needle to the target position after component mounts
    useEffect(() => {
        const targetAngle = (progressPercentage / 100) * 180 - 90;
        setTimeout(() => {
            setNeedleAngle(targetAngle);
        }, 100); // Delay for better effect
    }, [progressPercentage]);

    return (
        <div className="flex flex-col items-center">
            <h3 className="text-lg text-white pt-4 font-bold mb-2">Task Progress</h3>
            <p className="text-sm text-white mb-5">
                {completedTasks} out of {totalTasks} tasks completed
            </p>
            <svg
                width={radius * 2 + strokeWidth}
                height={radius + strokeWidth}
                viewBox={`0 0 ${radius * 2 + strokeWidth} ${radius + strokeWidth}`}
            >
                {/* Background semi-circle */}
                <path
                    d={`
                        M ${centerX - radius}, ${centerY}
                        A ${radius}, ${radius} 0 0 1 ${centerX + radius}, ${centerY}
                    `}
                    fill="none"
                    stroke="#e0e0e0"
                    strokeWidth={strokeWidth}
                    strokeLinecap="round"
                />

                {/* Foreground semi-circle (progress) */}
                <path
                    d={`
                        M ${centerX - radius}, ${centerY}
                        A ${radius}, ${radius} 0 0 1 ${centerX + radius}, ${centerY}
                    `}
                    fill="none"
                    stroke="#4caf50"
                    strokeWidth={strokeWidth}
                    strokeDasharray={`${progress}, ${circumference / 2}`}
                    strokeLinecap="round"
                />

                {/* Needle */}
                <g
                    style={{
                        transition: 'transform 1s ease-out',
                        transform: `rotate(${needleAngle}deg)`,
                        transformOrigin: `${centerX}px ${centerY}px`,
                    }}
                >
                    <rect
                        x={centerX - needleWidth / 2}
                        y={centerY - needleHeight}
                        width={needleWidth}
                        height={needleHeight}
                        fill="red"
                        rx="4" // Rounded corners
                    />
                    <circle
                        cx={centerX}
                        cy={centerY}
                        r={7}
                        fill="red"
                    />
                </g>
            </svg>
            <div className="text-xl text-white font-bold mt-2">{Math.round(progressPercentage)}%</div>
        </div>
    );
};

export default SemiCircleProgressBar;

