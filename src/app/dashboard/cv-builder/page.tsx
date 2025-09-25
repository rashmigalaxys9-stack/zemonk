'use client';

import { useState, useRef } from 'react';

interface Skill {
  id: string;
  name: string;
}

interface Tool {
  id: string;
  name: string;
}

interface WorkExperience {
  id: string;
  title: string;
  company: string;
  startDate: string;
  endDate: string;
  current: boolean;
  description: string;
}

interface Education {
  id: string;
  degree: string;
  institution: string;
  startDate: string;
  endDate: string;
  current: boolean;
  description: string;
}

interface Project {
  id: string;
  name: string;
  startDate: string;
  endDate: string;
  current: boolean;
  description: string;
  link: string;
}

interface Certification {
  id: string;
  name: string;
  organization: string;
  issueDate: string;
  expirationDate: string;
  doesNotExpire: boolean;
  credentialId: string;
  credentialUrl: string;
}

interface Achievement {
  id: string;
  description: string;
  date: string;
}

interface SalaryBreakdown {
  fixed: string;
  variable: string;
  stock: string;
}

interface JobPreference {
  openFor: 'Contractual' | 'Fulltime' | 'Both';
  availability: 'Available' | 'Not Looking';
  expectedSalary: string;
  noticePeriod: '15 Days' | '30 Days' | '45 Days' | '60 Days' | '90 Days' | 'Immediate';
}

export default function DigitalCVBuilder() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  // Auto-filled data from signup
  const [profileData, setProfileData] = useState({
    name: "Meghna Srivastava",
    profileImage: "/default-avatar.png",
    currentRole: "Senior Frontend Developer",
    location: "Bangalore, India",
    totalExperience: "10 Years 3 Months",
    currentSalary: "15,00,000",
    salaryBreakdown: {
      fixed: "12,00,000",
      variable: "3,00,000",
      stock: "0"
    },
    isVerified: true
  });

  const [showSalaryBreakdown, setShowSalaryBreakdown] = useState(false);

  // State for all sections
  const [professionalSummary, setProfessionalSummary] = useState('');
  const [skills, setSkills] = useState<Skill[]>([]);
  const [newSkill, setNewSkill] = useState('');
  const [tools, setTools] = useState<Tool[]>([]);
  const [newTool, setNewTool] = useState('');
  const [workExperiences, setWorkExperiences] = useState<WorkExperience[]>([]);
  const [educations, setEducations] = useState<Education[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);
  const [certifications, setCertifications] = useState<Certification[]>([]);
  const [achievements, setAchievements] = useState<Achievement[]>([]);
  const [jobPreference, setJobPreference] = useState<JobPreference>({
    openFor: 'Both',
    availability: 'Available',
    expectedSalary: '',
    noticePeriod: '30 Days'
  });

  // Handle profile image upload
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfileData(prev => ({
          ...prev,
          profileImage: e.target?.result as string
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  // Add/Remove Skills
  const addSkill = () => {
    if (newSkill.trim()) {
      setSkills([...skills, { id: Date.now().toString(), name: newSkill.trim() }]);
      setNewSkill('');
    }
  };

  const removeSkill = (id: string) => {
    setSkills(skills.filter(skill => skill.id !== id));
  };

  // Add/Remove Tools
  const addTool = () => {
    if (newTool.trim()) {
      setTools([...tools, { id: Date.now().toString(), name: newTool.trim() }]);
      setNewTool('');
    }
  };

  const removeTool = (id: string) => {
    setTools(tools.filter(tool => tool.id !== id));
  };

  // Add Work Experience
  const addWorkExperience = () => {
    setWorkExperiences([...workExperiences, {
      id: Date.now().toString(),
      title: '',
      company: '',
      startDate: '',
      endDate: '',
      current: false,
      description: ''
    }]);
  };

  const updateWorkExperience = (id: string, field: string, value: any) => {
    setWorkExperiences(workExperiences.map(exp => 
      exp.id === id ? { ...exp, [field]: value } : exp
    ));
  };

  const removeWorkExperience = (id: string) => {
    setWorkExperiences(workExperiences.filter(exp => exp.id !== id));
  };

  // Add Education
  const addEducation = () => {
    setEducations([...educations, {
      id: Date.now().toString(),
      degree: '',
      institution: '',
      startDate: '',
      endDate: '',
      current: false,
      description: ''
    }]);
  };

  const updateEducation = (id: string, field: string, value: any) => {
    setEducations(educations.map(edu => 
      edu.id === id ? { ...edu, [field]: value } : edu
    ));
  };

  const removeEducation = (id: string) => {
    setEducations(educations.filter(edu => edu.id !== id));
  };

  // Add Project
  const addProject = () => {
    setProjects([...projects, {
      id: Date.now().toString(),
      name: '',
      startDate: '',
      endDate: '',
      current: false,
      description: '',
      link: ''
    }]);
  };

  const updateProject = (id: string, field: string, value: any) => {
    setProjects(projects.map(project => 
      project.id === id ? { ...project, [field]: value } : project
    ));
  };

  const removeProject = (id: string) => {
    setProjects(projects.filter(project => project.id !== id));
  };

  // Add Certification
  const addCertification = () => {
    setCertifications([...certifications, {
      id: Date.now().toString(),
      name: '',
      organization: '',
      issueDate: '',
      expirationDate: '',
      doesNotExpire: false,
      credentialId: '',
      credentialUrl: ''
    }]);
  };

  const updateCertification = (id: string, field: string, value: any) => {
    setCertifications(certifications.map(cert => 
      cert.id === id ? { ...cert, [field]: value } : cert
    ));
  };

  const removeCertification = (id: string) => {
    setCertifications(certifications.filter(cert => cert.id !== id));
  };

  // Add Achievement
  const addAchievement = () => {
    setAchievements([...achievements, {
      id: Date.now().toString(),
      description: '',
      date: ''
    }]);
  };

  const updateAchievement = (id: string, field: string, value: any) => {
    setAchievements(achievements.map(achievement => 
      achievement.id === id ? { ...achievement, [field]: value } : achievement
    ));
  };

  const removeAchievement = (id: string) => {
    setAchievements(achievements.filter(achievement => achievement.id !== id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8 px-4">
      <div className="glass-card max-w-4xl mx-auto rounded-3xl overflow-hidden">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-black to-gray-800 text-white p-8 text-center">
          <h1 className="text-3xl font-bold mb-2">Digital CV Builder</h1>
          <p className="text-gray-300">Complete your professional profile</p>
        </div>

        <div className="p-8">
          <form onSubmit={(e) => e.preventDefault()}>
            
            {/* Profile Summary Section */}
            <div className="form-section mb-6">
              <div className="section-header">
                <div className="flex items-center">
                  <span className="text-black mr-3">👤</span>
                  <span>Profile Summary</span>
                </div>
              </div>
              
              <div className="section-content">
                {/* Profile Image with Verification Badge */}
                <div className="flex items-center mb-6">
                  <div className="relative">
                    <img 
                      src={profileData.profileImage} 
                      alt="Profile" 
                      className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-lg cursor-pointer"
                      onClick={triggerFileInput}
                    />
                    <input
                      type="file"
                      ref={fileInputRef}
                      onChange={handleImageUpload}
                      accept="image/*"
                      className="hidden"
                    />
                    {/* Verification Badge - Top Right of Image */}
                    {profileData.isVerified && (
                      <div className="absolute -top-2 -right-2 bg-blue-500 rounded-full p-1">
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15l-5-5 1.41-1.41L11 14.17l7.59-7.59L20 8l-9 9z"/>
                        </svg>
                      </div>
                    )}
                    <button
                      onClick={triggerFileInput}
                      className="absolute -bottom-1 -right-1 bg-black text-white p-2 rounded-full hover:bg-gray-700"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </button>
                  </div>
                  <div className="ml-6 flex-1">
                    <div className="mb-4">
                      <label className="block text-gray-700 text-sm font-semibold mb-2">Name</label>
                      <div className="form-input bg-gray-100 opacity-80 cursor-not-allowed">
                        {profileData.name}
                      </div>
                      <p className="text-xs text-gray-500 mt-1">Name cannot be modified</p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-gray-700 text-sm font-semibold mb-2">Current Role *</label>
                    <input
                      type="text"
                      value={profileData.currentRole}
                      onChange={(e) => setProfileData(prev => ({ ...prev, currentRole: e.target.value }))}
                      className="form-input"
                      placeholder="e.g., Senior Frontend Developer"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 text-sm font-semibold mb-2">Location *</label>
                    <input
                      type="text"
                      value={profileData.location}
                      onChange={(e) => setProfileData(prev => ({ ...prev, location: e.target.value }))}
                      className="form-input"
                      placeholder="e.g., Bangalore, India"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 text-sm font-semibold mb-2">Total Experience</label>
                    <input
                      type="text"
                      value={profileData.totalExperience}
                      onChange={(e) => setProfileData(prev => ({ ...prev, totalExperience: e.target.value }))}
                      className="form-input"
                      placeholder="e.g., 10 Years 3 Months"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 text-sm font-semibold mb-2">Current Annual Salary (₹)</label>
                    <input
                      type="text"
                      value={profileData.currentSalary}
                      onChange={(e) => setProfileData(prev => ({ ...prev, currentSalary: e.target.value }))}
                      className="form-input"
                      placeholder="e.g., 15,00,000"
                    />
                  </div>
                </div>

                {/* Salary Breakdown */}
                <div className="mb-6">
                  <button
                    type="button"
                    onClick={() => setShowSalaryBreakdown(!showSalaryBreakdown)}
                    className="text-blue-600 hover:text-blue-800 text-sm font-medium mb-3"
                  >
                    {showSalaryBreakdown ? '- Hide Breakdown' : '+ Show Breakdown'}
                  </button>
                  
                  {showSalaryBreakdown && (
                    <div className="mt-4 p-4 bg-gray-50 rounded-xl">
                      <h4 className="font-semibold text-gray-900 mb-3">Salary Breakdown (₹)</h4>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <label className="block text-gray-700 text-sm font-medium mb-1">Fixed Salary</label>
                          <input 
                            type="text" 
                            value={profileData.salaryBreakdown.fixed}
                            onChange={(e) => setProfileData(prev => ({
                              ...prev,
                              salaryBreakdown: { ...prev.salaryBreakdown, fixed: e.target.value }
                            }))}
                            className="form-input"
                            placeholder="Base salary"
                          />
                        </div>
                        <div>
                          <label className="block text-gray-700 text-sm font-medium mb-1">Variable Pay</label>
                          <input 
                            type="text" 
                            value={profileData.salaryBreakdown.variable}
                            onChange={(e) => setProfileData(prev => ({
                              ...prev,
                              salaryBreakdown: { ...prev.salaryBreakdown, variable: e.target.value }
                            }))}
                            className="form-input"
                            placeholder="Bonus, incentives"
                          />
                        </div>
                        <div>
                          <label className="block text-gray-700 text-sm font-medium mb-1">Stock Options</label>
                          <input 
                            type="text" 
                            value={profileData.salaryBreakdown.stock}
                            onChange={(e) => setProfileData(prev => ({
                              ...prev,
                              salaryBreakdown: { ...prev.salaryBreakdown, stock: e.target.value }
                            }))}
                            className="form-input"
                            placeholder="ESOP, RSU value"
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Job Preferences Section */}
            <div className="form-section mb-6">
              <div className="section-header">
                <div className="flex items-center">
                  <span className="text-black mr-3">💼</span>
                  <span>Job Preferences</span>
                </div>
              </div>
              
              <div className="section-content">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 text-sm font-semibold mb-2">Open For *</label>
                    <select className="form-input">
                      <option>Contractual</option>
                      <option>Fulltime Employment</option>
                      <option>Both FTE & Contractual</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-gray-700 text-sm font-semibold mb-2">Availability *</label>
                    <select className="form-input">
                      <option>Available</option>
                      <option>Currently not looking</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-gray-700 text-sm font-semibold mb-2">Expected Salary (₹)</label>
                    <input type="text" className="form-input" placeholder="e.g., 18,00,000" />
                  </div>

                  <div>
                    <label className="block text-gray-700 text-sm font-semibold mb-2">Notice Period *</label>
                    <select className="form-input">
                      <option>15 Days</option>
                      <option>30 Days</option>
                      <option>45 Days</option>
                      <option>60 Days</option>
                      <option>90 Days</option>
                      <option>Immediate</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {/* Professional Summary */}
            <div className="form-section mb-6">
              <div className="section-header">
                <div className="flex items-center">
                  <span className="text-black mr-3">📝</span>
                  <span>Professional Summary</span>
                </div>
              </div>
              <div className="section-content">
                <textarea
                  rows={4}
                  className="form-input w-full"
                  placeholder="Describe your professional background, skills, and career goals..."
                  value={professionalSummary}
                  onChange={(e) => setProfessionalSummary(e.target.value)}
                />
              </div>
            </div>

            {/* Skills Section */}
            <div className="form-section mb-6">
              <div className="section-header">
                <div className="flex items-center">
                  <span className="text-black mr-3">⚡</span>
                  <span>Skills</span>
                </div>
              </div>
              <div className="section-content">
                <div className="flex mb-4">
                  <input
                    type="text"
                    value={newSkill}
                    onChange={(e) => setNewSkill(e.target.value)}
                    className="form-input flex-1 rounded-r-none"
                    placeholder="Add a skill"
                  />
                  <button 
                    type="button"
                    onClick={addSkill}
                    className="bg-black text-white px-4 rounded-r-xl hover:bg-gray-800"
                  >
                    Add
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <div key={skill.id} className="bg-black text-white px-3 py-1 rounded-full text-sm flex items-center">
                      {skill.name}
                      <button 
                        type="button"
                        onClick={() => removeSkill(skill.id)}
                        className="ml-2 hover:text-gray-300"
                      >
                        ×
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Applications & Tools Section */}
            <div className="form-section mb-6">
              <div className="section-header">
                <div className="flex items-center">
                  <span className="text-black mr-3">🛠️</span>
                  <span>Applications & Tools</span>
                </div>
              </div>
              <div className="section-content">
                <div className="flex mb-4">
                  <input
                    type="text"
                    value={newTool}
                    onChange={(e) => setNewTool(e.target.value)}
                    className="form-input flex-1 rounded-r-none"
                    placeholder="Add a tool or application"
                  />
                  <button 
                    type="button"
                    onClick={addTool}
                    className="bg-black text-white px-4 rounded-r-xl hover:bg-gray-800"
                  >
                    Add
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {tools.map((tool) => (
                    <div key={tool.id} className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm flex items-center">
                      {tool.name}
                      <button 
                        type="button"
                        onClick={() => removeTool(tool.id)}
                        className="ml-2 hover:text-gray-600"
                      >
                        ×
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Work Experience Section */}
            <div className="form-section mb-6">
              <div className="section-header">
                <div className="flex items-center">
                  <span className="text-black mr-3">💼</span>
                  <span>Work Experience</span>
                </div>
              </div>
              <div className="section-content">
                <button 
                  type="button"
                  onClick={addWorkExperience}
                  className="bg-black text-white px-4 py-2 rounded-xl mb-4 hover:bg-gray-800"
                >
                  + Add Work Experience
                </button>
                
                {workExperiences.map((exp) => (
                  <div key={exp.id} className="border border-gray-200 rounded-xl p-4 mb-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label className="block text-gray-700 text-sm font-semibold mb-2">Job Title</label>
                        <input
                          type="text"
                          value={exp.title}
                          onChange={(e) => updateWorkExperience(exp.id, 'title', e.target.value)}
                          className="form-input"
                          placeholder="e.g., Senior Developer"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 text-sm font-semibold mb-2">Company</label>
                        <input
                          type="text"
                          value={exp.company}
                          onChange={(e) => updateWorkExperience(exp.id, 'company', e.target.value)}
                          className="form-input"
                          placeholder="Company name"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label className="block text-gray-700 text-sm font-semibold mb-2">Start Date</label>
                        <input
                          type="month"
                          value={exp.startDate}
                          onChange={(e) => updateWorkExperience(exp.id, 'startDate', e.target.value)}
                          className="form-input"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 text-sm font-semibold mb-2">End Date</label>
                        <input
                          type="month"
                          value={exp.endDate}
                          onChange={(e) => updateWorkExperience(exp.id, 'endDate', e.target.value)}
                          className="form-input"
                          disabled={exp.current}
                        />
                        <label className="inline-flex items-center mt-2">
                          <input
                            type="checkbox"
                            checked={exp.current}
                            onChange={(e) => updateWorkExperience(exp.id, 'current', e.target.checked)}
                            className="form-checkbox"
                          />
                          <span className="ml-2 text-sm text-gray-600">Current Job</span>
                        </label>
                      </div>
                    </div>
                    <div>
                      <label className="block text-gray-700 text-sm font-semibold mb-2">Description</label>
                      <textarea
                        value={exp.description}
                        onChange={(e) => updateWorkExperience(exp.id, 'description', e.target.value)}
                        rows={3}
                        className="form-input w-full"
                        placeholder="Describe your responsibilities and achievements..."
                      />
                    </div>
                    <button
                      type="button"
                      onClick={() => removeWorkExperience(exp.id)}
                      className="text-red-600 text-sm mt-2 hover:text-red-800"
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Major Projects Section */}
            <div className="form-section mb-6">
              <div className="section-header">
                <div className="flex items-center">
                  <span className="text-black mr-3">🚀</span>
                  <span>Major Projects</span>
                </div>
              </div>
              <div className="section-content">
                <button 
                  type="button"
                  onClick={addProject}
                  className="bg-black text-white px-4 py-2 rounded-xl mb-4 hover:bg-gray-800"
                >
                  + Add Project
                </button>
                
                {projects.map((project) => (
                  <div key={project.id} className="border border-gray-200 rounded-xl p-4 mb-4">
                    <div className="mb-4">
                      <label className="block text-gray-700 text-sm font-semibold mb-2">Project Name</label>
                      <input
                        type="text"
                        value={project.name}
                        onChange={(e) => updateProject(project.id, 'name', e.target.value)}
                        className="form-input"
                        placeholder="Project name"
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label className="block text-gray-700 text-sm font-semibold mb-2">Start Date</label>
                        <input
                          type="month"
                          value={project.startDate}
                          onChange={(e) => updateProject(project.id, 'startDate', e.target.value)}
                          className="form-input"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 text-sm font-semibold mb-2">End Date</label>
                        <input
                          type="month"
                          value={project.endDate}
                          onChange={(e) => updateProject(project.id, 'endDate', e.target.value)}
                          className="form-input"
                          disabled={project.current}
                        />
                        <label className="inline-flex items-center mt-2">
                          <input
                            type="checkbox"
                            checked={project.current}
                            onChange={(e) => updateProject(project.id, 'current', e.target.checked)}
                            className="form-checkbox"
                          />
                          <span className="ml-2 text-sm text-gray-600">Ongoing Project</span>
                        </label>
                      </div>
                    </div>
                    <div className="mb-4">
                      <label className="block text-gray-700 text-sm font-semibold mb-2">Project Description</label>
                      <textarea
                        value={project.description}
                        onChange={(e) => updateProject(project.id, 'description', e.target.value)}
                        rows={3}
                        className="form-input w-full"
                        placeholder="Describe the project, technologies used, and your role..."
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block text-gray-700 text-sm font-semibold mb-2">Project Link (optional)</label>
                      <input
                        type="url"
                        value={project.link}
                        onChange={(e) => updateProject(project.id, 'link', e.target.value)}
                        className="form-input"
                        placeholder="https://..."
                      />
                    </div>
                    <button
                      type="button"
                      onClick={() => removeProject(project.id)}
                      className="text-red-600 text-sm mt-2 hover:text-red-800"
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Education Section */}
            <div className="form-section mb-6">
              <div className="section-header">
                <div className="flex items-center">
                  <span className="text-black mr-3">🎓</span>
                  <span>Education</span>
                </div>
              </div>
              <div className="section-content">
                <button 
                  type="button"
                  onClick={addEducation}
                  className="bg-black text-white px-4 py-2 rounded-xl mb-4 hover:bg-gray-800"
                >
                  + Add Education
                </button>
                
                {educations.map((edu) => (
                  <div key={edu.id} className="border border-gray-200 rounded-xl p-4 mb-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label className="block text-gray-700 text-sm font-semibold mb-2">Degree</label>
                        <input
                          type="text"
                          value={edu.degree}
                          onChange={(e) => updateEducation(edu.id, 'degree', e.target.value)}
                          className="form-input"
                          placeholder="e.g., Bachelor of Technology"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 text-sm font-semibold mb-2">Institution</label>
                        <input
                          type="text"
                          value={edu.institution}
                          onChange={(e) => updateEducation(edu.id, 'institution', e.target.value)}
                          className="form-input"
                          placeholder="University name"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label className="block text-gray-700 text-sm font-semibold mb-2">Start Date</label>
                        <input
                          type="month"
                          value={edu.startDate}
                          onChange={(e) => updateEducation(edu.id, 'startDate', e.target.value)}
                          className="form-input"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 text-sm font-semibold mb-2">End Date</label>
                        <input
                          type="month"
                          value={edu.endDate}
                          onChange={(e) => updateEducation(edu.id, 'endDate', e.target.value)}
                          className="form-input"
                          disabled={edu.current}
                        />
                        <label className="inline-flex items-center mt-2">
                          <input
                            type="checkbox"
                            checked={edu.current}
                            onChange={(e) => updateEducation(edu.id, 'current', e.target.checked)}
                            className="form-checkbox"
                          />
                          <span className="ml-2 text-sm text-gray-600">Currently Studying</span>
                        </label>
                      </div>
                    </div>
                    <div>
                      <label className="block text-gray-700 text-sm font-semibold mb-2">Description</label>
                      <textarea
                        value={edu.description}
                        onChange={(e) => updateEducation(edu.id, 'description', e.target.value)}
                        rows={2}
                        className="form-input w-full"
                        placeholder="Additional details about your education..."
                      />
                    </div>
                    <button
                      type="button"
                      onClick={() => removeEducation(edu.id)}
                      className="text-red-600 text-sm mt-2 hover:text-red-800"
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements Section */}
            <div className="form-section mb-6">
              <div className="section-header">
                <div className="flex items-center">
                  <span className="text-black mr-3">🏆</span>
                  <span>Achievements</span>
                </div>
              </div>
              <div className="section-content">
                <button 
                  type="button"
                  onClick={addAchievement}
                  className="bg-black text-white px-4 py-2 rounded-xl mb-4 hover:bg-gray-800"
                >
                  + Add Achievement
                </button>
                
                {achievements.map((achievement) => (
                  <div key={achievement.id} className="border border-gray-200 rounded-xl p-4 mb-4">
                    <div className="mb-4">
                      <label className="block text-gray-700 text-sm font-semibold mb-2">Achievement</label>
                      <textarea
                        value={achievement.description}
                        onChange={(e) => updateAchievement(achievement.id, 'description', e.target.value)}
                        rows={2}
                        className="form-input w-full"
                        placeholder="Describe your achievement..."
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block text-gray-700 text-sm font-semibold mb-2">Date (optional)</label>
                      <input
                        type="month"
                        value={achievement.date}
                        onChange={(e) => updateAchievement(achievement.id, 'date', e.target.value)}
                        className="form-input"
                      />
                    </div>
                    <button
                      type="button"
                      onClick={() => removeAchievement(achievement.id)}
                      className="text-red-600 text-sm mt-2 hover:text-red-800"
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications Section */}
            <div className="form-section mb-6">
              <div className="section-header">
                <div className="flex items-center">
                  <span className="text-black mr-3">📜</span>
                  <span>Certifications</span>
                </div>
              </div>
              <div className="section-content">
                <button 
                  type="button"
                  onClick={addCertification}
                  className="bg-black text-white px-4 py-2 rounded-xl mb-4 hover:bg-gray-800"
                >
                  + Add Certification
                </button>
                
                {certifications.map((cert) => (
                  <div key={cert.id} className="border border-gray-200 rounded-xl p-4 mb-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label className="block text-gray-700 text-sm font-semibold mb-2">Certification Name</label>
                        <input
                          type="text"
                          value={cert.name}
                          onChange={(e) => updateCertification(cert.id, 'name', e.target.value)}
                          className="form-input"
                          placeholder="Certification name"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 text-sm font-semibold mb-2">Issuing Organization</label>
                        <input
                          type="text"
                          value={cert.organization}
                          onChange={(e) => updateCertification(cert.id, 'organization', e.target.value)}
                          className="form-input"
                          placeholder="Organization name"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label className="block text-gray-700 text-sm font-semibold mb-2">Issue Date</label>
                        <input
                          type="month"
                          value={cert.issueDate}
                          onChange={(e) => updateCertification(cert.id, 'issueDate', e.target.value)}
                          className="form-input"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 text-sm font-semibold mb-2">Expiration Date</label>
                        <input
                          type="month"
                          value={cert.expirationDate}
                          onChange={(e) => updateCertification(cert.id, 'expirationDate', e.target.value)}
                          className="form-input"
                          disabled={cert.doesNotExpire}
                        />
                        <label className="inline-flex items-center mt-2">
                          <input
                            type="checkbox"
                            checked={cert.doesNotExpire}
                            onChange={(e) => updateCertification(cert.id, 'doesNotExpire', e.target.checked)}
                            className="form-checkbox"
                          />
                          <span className="ml-2 text-sm text-gray-600">Does not expire</span>
                        </label>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label className="block text-gray-700 text-sm font-semibold mb-2">Credential ID (optional)</label>
                        <input
                          type="text"
                          value={cert.credentialId}
                          onChange={(e) => updateCertification(cert.id, 'credentialId', e.target.value)}
                          className="form-input"
                          placeholder="Credential ID"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 text-sm font-semibold mb-2">Credential URL (optional)</label>
                        <input
                          type="url"
                          value={cert.credentialUrl}
                          onChange={(e) => updateCertification(cert.id, 'credentialUrl', e.target.value)}
                          className="form-input"
                          placeholder="https://..."
                        />
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeCertification(cert.id)}
                      className="text-red-600 text-sm mt-2 hover:text-red-800"
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-end gap-4 mt-8">
              <button className="px-8 py-3 border border-gray-300 rounded-xl hover:bg-gray-50">
                Save Draft
              </button>
              <button className="px-8 py-3 bg-black text-white rounded-xl hover:bg-gray-800">
                Generate CV
              </button>
            </div>
          </form>
        </div>
      </div>

      <style jsx>{`
        .glass-card {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        }
        .form-input {
          background: rgba(248, 250, 252, 0.8);
          border: 1px solid #e2e8f0;
          border-radius: 0.75rem;
          padding: 0.75rem 1rem;
          transition: all 0.3s ease;
        }
        .form-input:focus {
          border-color: #000000;
          box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.1);
          background: white;
        }
        .section-header {
          background: rgba(243, 244, 246, 0.8);
          padding: 1.5rem;
          font-weight: 600;
          font-size: 1.125rem;
          border-bottom: 1px solid rgba(229, 231, 235, 0.5);
        }
        .section-content {
          padding: 2rem;
          background: rgba(255, 255, 255, 0.5);
        }
        .form-section {
          margin-bottom: 1.5rem;
          border-radius: 1rem;
          overflow: hidden;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
        }
      `}</style>
    </div>
  );
}