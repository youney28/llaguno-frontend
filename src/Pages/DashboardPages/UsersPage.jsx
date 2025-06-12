// import React from 'react';
// import {
//   Container,
//   Typography,
//   Paper
// } from '@mui/material';
// import { DataGrid } from '@mui/x-data-grid';
// import '../../styles/UsersPage.css';

// // Dummy user data
// const users = [
//   { id: 1, name: 'John Doe', email: 'john.doe@example.com', role: 'Admin' },
//   { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', role: 'Editor' },
//   { id: 3, name: 'Peter Jones', email: 'peter.jones@example.com', role: 'Viewer' },
//   { id: 4, name: 'Lucy Heart', email: 'lucy.heart@example.com', role: 'Viewer' },
//   { id: 5, name: 'Chris Blue', email: 'chris.blue@example.com', role: 'Editor' }
// ];

// // DataGrid columns
// const columns = [
//   { field: 'id', headerName: 'ID', width: 90 },
//   { field: 'name', headerName: 'Name', width: 180 },
//   { field: 'email', headerName: 'Email', width: 250 },
//   { field: 'role', headerName: 'Role', width: 130 }
// ];

// function UsersPage() {
//   return (
//     <Container maxWidth="lg" className="users-container">
//       <Typography
//         variant="h4"
//         gutterBottom
//         className="users-title"
//       >
//         User Details
//       </Typography>

//       <Paper className="minion-paper">
//         <DataGrid
//           rows={users}
//           columns={columns}
//           pageSize={5}
//           className="data-grid"
//         />
//       </Paper>
//     </Container>
//   );
// }

// export default UsersPage;

import React, { useEffect, useState } from 'react';

const UsersPage = () => {
  const [users, setUsers] = useState([
    {
      _id: '1',
      firstName: 'Ma. Darlene',
      lastName: 'Arellano',
      age: 21,
      gender: 'Female',
      contactNumber: '09090909090',
      email: 'yen@outlook.com',
      type: 'admin',
      username: 'yenarellano',
      address: 'Sampaloc, Manila',
      isActive: true,
    },
    {
      _id: '2',
      firstName: 'John',
      lastName: 'Smith',
      age: 28,
      gender: 'Male',
      contactNumber: '09123456789',
      email: 'john@example.com',
      type: 'editor',
      username: 'johnsmith',
      address: 'Quezon City, Manila',
      isActive: true,
    },
    {
      _id: '3',
      firstName: 'Jane',
      lastName: 'Doe',
      age: 25,
      gender: 'Female',
      contactNumber: '09987654321',
      email: 'jane@example.com',
      type: 'viewer',
      username: 'janedoe',
      address: 'Makati City, Manila',
      isActive: false,
    },
  ]);
  
  const [searchTerm, setSearchTerm] = useState('');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    age: '',
    gender: 'Female',
    contactNumber: '',
    email: '',
    type: 'editor',
    username: '',
    password: '',
    address: '',
    isActive: true,
  });
  const [editingId, setEditingId] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // Mock service functions
  const createUser = async (userData) => {
    const newUser = { ...userData, _id: Date.now().toString() };
    setUsers(prev => [...prev, newUser]);
  };

  const updateUser = async (id, userData) => {
    setUsers(prev => prev.map(user => user._id === id ? { ...user, ...userData } : user));
  };

  const deleteUser = async (id) => {
    setUsers(prev => prev.filter(user => user._id !== id));
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingId) {
        await updateUser(editingId, formData);
      } else {
        await createUser(formData);
      }
      setShowModal(false);
      setEditingId(null);
      resetForm();
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      await deleteUser(id);
    }
  };

  const openEditModal = (user) => {
    setFormData(user);
    setEditingId(user._id);
    setShowModal(true);
  };

  const openCreateModal = () => {
    resetForm();
    setEditingId(null);
    setShowModal(true);
  };

  const resetForm = () => {
    setFormData({
      firstName: '',
      lastName: '',
      age: '',
      gender: 'Female',
      contactNumber: '',
      email: '',
      type: 'editor',
      username: '',
      password: '',
      address: '',
      isActive: true,
    });
  };

  const closeModal = () => {
    setShowModal(false);
    setEditingId(null);
    resetForm();
  };

  const filteredUsers = users.filter((u) => {
    const term = searchTerm.toLowerCase();
    return (
      u.firstName.toLowerCase().includes(term) ||
      u.lastName.toLowerCase().includes(term) ||
      u.email.toLowerCase().includes(term) ||
      u.type.toLowerCase().includes(term)
    );
  });

  // Handle Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && showModal) {
        closeModal();
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [showModal]);

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <style>{`
        .users-container {
          padding: 2rem;
          max-width: 1200px;
          margin: 0 auto;
        }

        .users-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.5rem;
        }

        .users-header h2 {
          font-size: 1.8rem;
          font-weight: 600;
          color:rgb(0, 0, 0);
          margin: 0;
        }

        .user-searchbar {
          margin-bottom: 1.5rem;
        }

        .user-searchbar input {
          width: 100%;
          max-width: 400px;
          padding: 12px 16px;
          font-size: 1rem;
          border-radius: 8px;
          border: 1px solid #e2e8f0;
          background: white;
          color: #1a202c;
          transition: border-color 0.2s, box-shadow 0.2s;
        }

        .user-searchbar input:focus {
          outline: none;
          border-color: #3182ce;
          box-shadow: 0 0 0 3px rgba(49, 130, 206, 0.1);
        }

        .users-table {
          width: 100%;
          border-collapse: collapse;
          background: white;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        }

        .users-table th,
        .users-table td {
          padding: 1rem;
          text-align: left;
          color: #1a202c;
        }

        .users-table th {
          background-color: #f7fafc;
          font-weight: 600;
          border-bottom: 1px solid #e2e8f0;
        }

        .users-table td {
          border-bottom: 1px solid #f1f5f9;
        }

        .users-table tr:hover {
          background-color: #f8fafc;
        }

        .users-actions {
          display: flex;
          gap: 0.5rem;
        }

        .users-actions button {
          padding: 6px 12px;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          font-size: 0.875rem;
          font-weight: 500;
          transition: all 0.2s;
        }

        .edit-btn {
          background-color: #3182ce;
          color: white;
        }

        .edit-btn:hover {
          background-color: #2c5aa0;
        }

        .delete-btn {
          background-color: #e53e3e;
          color: white;
        }

        .delete-btn:hover {
          background-color: #c53030;
        }

        .add-user-btn {
          padding: 12px 20px;
          background-color: #38a169;
          color: white;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          font-weight: 600;
          transition: background-color 0.2s;
        }

        .add-user-btn:hover {
          background-color: #2f855a;
        }

        .modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
          padding: 1rem;
        }

        .modal-box {
          background: white;
          border-radius: 16px;
          width: 100%;
          max-width: 700px;
          max-height: 90vh;
          overflow-y: auto;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
          animation: modalSlideIn 0.3s ease-out;
        }

        @keyframes modalSlideIn {
          from {
            opacity: 0;
            transform: translateY(-20px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .modal-header {
          padding: 2rem 2rem 1rem 2rem;
          border-bottom: 1px solid #e2e8f0;
        }

        .modal-header h3 {
          font-size: 1.5rem;
          font-weight: 600;
          color: #1a202c;
          margin: 0;
        }

        .modal-body {
          padding: 2rem;
        }

        .form-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.5rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
        }

        .form-group label {
          font-weight: 600;
          margin-bottom: 0.5rem;
          color: #374151;
          font-size: 0.875rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .form-group input,
        .form-group select {
          padding: 12px 16px;
          border: 2px solid #e2e8f0;
          border-radius: 8px;
          font-size: 1rem;
          color: #1a202c;
          background: white;
          transition: border-color 0.2s, box-shadow 0.2s;
        }

        .form-group input:focus,
        .form-group select:focus {
          outline: none;
          border-color: #3182ce;
          box-shadow: 0 0 0 3px rgba(49, 130, 206, 0.1);
        }

        .form-group input::placeholder {
          color: #a0aec0;
        }

        .checkbox-group {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .checkbox-group input[type="checkbox"] {
          width: 20px;
          height: 20px;
          accent-color: #3182ce;
        }

        .modal-footer {
          padding: 1.5rem 2rem 2rem 2rem;
          display: flex;
          justify-content: flex-end;
          gap: 1rem;
          border-top: 1px solid #e2e8f0;
        }

        .modal-footer button {
          padding: 12px 24px;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
          border: none;
        }

        .btn-cancel {
          background-color: #f7fafc;
          color: #4a5568;
          border: 1px solid #e2e8f0;
        }

        .btn-cancel:hover {
          background-color: #edf2f7;
        }

        .btn-update {
          background-color: #3182ce;
          color: white;
        }

        .btn-update:hover {
          background-color: #2c5aa0;
        }

        .role-badge {
          padding: 4px 12px;
          border-radius: 20px;
          font-size: 0.875rem;
          font-weight: 500;
          display: inline-block;
        }

        .role-badge.admin {
          background-color: #38a169;
          color: white;
        }

        .role-badge.editor {
          background-color: #3182ce;
          color: white;
        }

        .role-badge.viewer {
          background-color: #ed8936;
          color: white;
        }

        .status-indicator {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
        }

        .status-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
        }

        .status-dot.active {
          background-color: #38a169;
        }

        .status-dot.inactive {
          background-color: #e53e3e;
        }

        .full-width {
          grid-column: 1 / -1;
        }

        @media (max-width: 640px) {
          .users-container {
            padding: 1rem;
          }
          
          .form-grid {
            grid-template-columns: 1fr;
          }
          
          .modal-box {
            margin: 1rem;
            max-width: calc(100vw - 2rem);
          }
          
          .modal-header,
          .modal-body,
          .modal-footer {
            padding-left: 1.5rem;
            padding-right: 1.5rem;
          }
        }
      `}</style>

      <div className="users-container">
        <div className="users-header">
          <h2>User Management</h2>
          <button onClick={openCreateModal} className="add-user-btn">+ Add User</button>
        </div>

        <div className="user-searchbar">
          <input
            type="text"
            placeholder="Search by name, email, or type..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <table className="users-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user) => (
              <tr key={user._id}>
                <td>{user.firstName} {user.lastName}</td>
                <td>{user.email}</td>
                <td>
                  <span className={`role-badge ${user.type}`}>
                    {user.type.charAt(0).toUpperCase() + user.type.slice(1)}
                  </span>
                </td>
                <td>
                  <div className="status-indicator">
                    <div className={`status-dot ${user.isActive ? 'active' : 'inactive'}`}></div>
                    {user.isActive ? 'Active' : 'Inactive'}
                  </div>
                </td>
                <td>
                  <div className="users-actions">
                    <button onClick={() => openEditModal(user)} className="edit-btn">
                      Edit
                    </button>
                    <button onClick={() => handleDelete(user._id)} className="delete-btn">
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showModal && (
        <div className="modal-overlay" onClick={(e) => e.target === e.currentTarget && closeModal()}>
          <div className="modal-box">
            <div className="modal-header">
              <h3>{editingId ? 'Edit User' : 'Add New User'}</h3>
            </div>
            
            <div className="modal-body">
              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="firstName">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="Enter first name"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Enter last name"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="age">Age</label>
                  <input
                    type="number"
                    id="age"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                    placeholder="Enter age"
                    min="1"
                    max="120"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="gender">Gender</label>
                  <select
                    id="gender"
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                  >
                    <option value="Female">Female</option>
                    <option value="Male">Male</option>
                    <option value="Other">Other</option>
                    <option value="Prefer not to say">Prefer not to say</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label htmlFor="contactNumber">Contact Number</label>
                  <input
                    type="tel"
                    id="contactNumber"
                    name="contactNumber"
                    value={formData.contactNumber}
                    onChange={handleChange}
                    placeholder="Enter contact number"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter email address"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="type">User Type</label>
                  <select
                    id="type"
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                  >
                    <option value="admin">Admin</option>
                    <option value="editor">Editor</option>
                    <option value="viewer">Viewer</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label htmlFor="username">Username</label>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    placeholder="Enter username"
                  />
                </div>

                {!editingId && (
                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="Enter password"
                    />
                  </div>
                )}
                
                <div className="form-group full-width">
                  <label htmlFor="address">Address</label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="Enter full address"
                  />
                </div>
                
                <div className="form-group">
                  <label>Status</label>
                  <div className="checkbox-group">
                    <input
                      type="checkbox"
                      id="isActive"
                      name="isActive"
                      checked={formData.isActive}
                      onChange={handleChange}
                    />
                    <label htmlFor="isActive" style={{margin: 0, fontWeight: 'normal', textTransform: 'none', letterSpacing: 'normal'}}>
                      Is Active
                    </label>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="modal-footer">
              <button type="button" className="btn-cancel" onClick={closeModal}>
                Cancel
              </button>
              <button type="submit" className="btn-update" onClick={handleSubmit}>
                {editingId ? 'Update User' : 'Create User'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UsersPage;