import React, { useState } from 'react';

const ToDoList = () => {
    // State for projects
    const [projects, setProjects] = useState([
        { id: 1, name: 'Project A', status: 'Active', iterations: 2 },
        { id: 2, name: 'Project B', status: 'Pending', iterations: 1 },
        { id: 3, name: 'Project C', status: 'Completed', iterations: 3 },
        { id: 4, name: 'Project D', status: 'On Hold', iterations: 4 },
        { id: 5, name: 'Project E', status: 'Active', iterations: 5 },
        { id: 6, name: 'Project F', status: 'Pending', iterations: 1 },
        { id: 7, name: 'Project G', status: 'Completed', iterations: 3 },
        { id: 8, name: 'Project H', status: 'On Hold', iterations: 4 },
        { id: 9, name: 'Project I', status: 'Active', iterations: 2 },
        { id: 10, name: 'Project J', status: 'Pending', iterations: 1 },
    ]);

    // State for new project input fields
    const [newProjectName, setNewProjectName] = useState('');
    const [newProjectStatus, setNewProjectStatus] = useState('Active');

    // Function to add a new project
    const addProject = () => {
        if (newProjectName.trim() === '') {
            alert('Project name is required');
            return;
        }

        const newProject = {
            id: projects.length + 1,
            name: newProjectName,
            status: newProjectStatus,
            iterations: 0,
        };

        setProjects([...projects, newProject]);
        setNewProjectName('');
        setNewProjectStatus('Active');
    };

    return (
        <div className="container mx-auto p-3">

            {/* Form to create a new project */}
            <div className="mb-4">
                <input
                    type="text"
                    placeholder="Project Name"
                    value={newProjectName}
                    onChange={(e) => setNewProjectName(e.target.value)}
                    className="border p-2 mr-2 w-80"
                />
                <select
                    value={newProjectStatus}
                    onChange={(e) => setNewProjectStatus(e.target.value)}
                    className="border p-2 mr-2"
                >
                    <option value="Active">Active</option>
                    <option value="Pending">Pending</option>
                    <option value="Completed">Completed</option>
                    <option value="On Hold">On Hold</option>
                </select>
                <button
                    onClick={addProject}
                    className="bg-Green-700 text-white p-2 rounded"
                >
                    Add Project
                </button>
            </div>

            {/* Scrollable container for the table */}
            <div className="overflow-y-auto max-h-48 border border-gray-200 rounded">
                <table className="min-w-full bg-white">
                    <thead>
                        <tr>
                            <th className="py-2 px-4 border-b">Project Name</th>
                            <th className="py-2 px-4 border-b">Status</th>
                            <th className="py-2 px-4 border-b">Iterations</th>
                        </tr>
                    </thead>
                    <tbody>
                        {projects.map((project) => (
                            <tr key={project.id} className="text-center">
                                <td className="py-2 px-4 border-b">{project.name}</td>
                                <td className="py-2 px-4 border-b">{project.status}</td>
                                <td className="py-2 px-4 border-b">{project.iterations}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ToDoList;
