import { useState, useEffect, useCallback } from 'react';
import { employeeAPI } from '../services/api';

/**
 * Custom hook for managing employee CRUD operations
 */
export const useEmployees = () => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');

  // Fetch all employees
  const fetchEmployees = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await employeeAPI.getAll();
      setEmployees(response.data.data);
    } catch (err) {
      setError(err.message || 'Failed to fetch employees');
    } finally {
      setLoading(false);
    }
  }, []);

  // Load employees on mount
  useEffect(() => {
    fetchEmployees();
  }, [fetchEmployees]);

  // Create employee
  const createEmployee = async (employeeData) => {
    setLoading(true);
    setError(null);
    try {
      const response = await employeeAPI.create(employeeData);
      setEmployees((prev) => [response.data.data, ...prev]);
      setSuccessMessage('Employee added successfully!');
      setTimeout(() => setSuccessMessage(''), 3000);
      return response.data.data;
    } catch (err) {
      setError(err.message || 'Failed to create employee');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Update employee
  const updateEmployee = async (id, employeeData) => {
    setLoading(true);
    setError(null);
    try {
      const response = await employeeAPI.update(id, employeeData);
      setEmployees((prev) =>
        prev.map((emp) => (emp._id === id ? response.data.data : emp))
      );
      setSuccessMessage('Employee updated successfully!');
      setTimeout(() => setSuccessMessage(''), 3000);
      return response.data.data;
    } catch (err) {
      setError(err.message || 'Failed to update employee');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Delete employee
  const deleteEmployee = async (id) => {
    setLoading(true);
    setError(null);
    try {
      await employeeAPI.delete(id);
      setEmployees((prev) => prev.filter((emp) => emp._id !== id));
      setSuccessMessage('Employee deleted successfully!');
      setTimeout(() => setSuccessMessage(''), 3000);
    } catch (err) {
      setError(err.message || 'Failed to delete employee');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Clear messages
  const clearMessages = () => {
    setError(null);
    setSuccessMessage('');
  };

  return {
    employees,
    loading,
    error,
    successMessage,
    fetchEmployees,
    createEmployee,
    updateEmployee,
    deleteEmployee,
    clearMessages,
  };
};
