import React, { useState } from 'react';

function ProjectForm() {
  const [projectType, setProjectType] = useState('');
  const [otherProjectType, setOtherProjectType] = useState('');
  const [services, setServices] = useState([]);
  const [contentType, setContentType] = useState('');
  const [template, setTemplate] = useState('');
  const [length, setLength] = useState('');

  const handleProjectTypeChange = (event) => {
    setProjectType(event.target.value);
    if (event.target.value === 'Other') {
      setOtherProjectType('');
    }
  };

  const handleOtherProjectTypeChange = (event) => {
    setOtherProjectType(event.target.value);
  };

  const handleServicesChange = (event) => {
    const selectedServices = event.target.value;
    setServices(Array.isArray(selectedServices) ? selectedServices : [selectedServices]);
  };

  const handleContentTypeChange = (event) => {
    setContentType(event.target.value);
  };

  const handleTemplateChange = (event) => {
    setTemplate(event.target.value);
  };

  const handleLengthChange = (event) => {
    setLength(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
    console.log('Project data:', {
      projectType,
      otherProjectType,
      services,
      contentType,
      template,
      length,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col space-y-4">
        <label htmlFor="projectType">Project Type</label>
        <select id="projectType" value={projectType} onChange={handleProjectTypeChange}>
          <option value="">Select</option>
          <option value="Single Video">Single Video</option>
          <option value="Recurring Videos">Recurring Videos</option>
          <option value="Permanent Editor">Permanent Editor</option>
          <option value="Other">Other</option>
        </select>
        {projectType === 'Other' && (
          <div className="mt-2">
            <label htmlFor="otherProjectType">Other Project Type</label>
            <input
              id="otherProjectType"
              type="text"
              value={otherProjectType}
              onChange={handleOtherProjectTypeChange}
            />
          </div>
        )}
        <label htmlFor="services">Services</label>
        <select id="services" multiple value={services} onChange={handleServicesChange}>
          {/* Add your service options here */}
          <option value="Service 1">Service 1</option>
          <option value="Service 2">Service 2</option>
          <option value="Service 3">Service 3</option>
        </select>
        <label htmlFor="contentType">Content Type</label>
        <select id="contentType" value={contentType} onChange={handleContentTypeChange}>
          {/* Add your content type options here */}
          <option value="">Select</option>
          <option value="Video">Video</option>
          <option value="Image">Image</option>
          <option value="Text">Text</option>
        </select>
        <label htmlFor="template">Template</label>
        <select id="template" value={template} onChange={handleTemplateChange}>
          {/* Add your template options here */}
          <option value="">Select</option>
          <option value="Template 1">Template 1</option>
          <option value="Template 2">Template 2</option>
          <option value="Template 3">Template 3</option>
        </select>
        <label htmlFor="length">Length</label>
        <input id="length" type="number" value={length} onChange={handleLengthChange} />
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}

export default ProjectForm;