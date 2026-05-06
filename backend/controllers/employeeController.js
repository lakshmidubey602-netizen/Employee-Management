const Employee = require('../models/Employee');
const { asyncHandler, ErrorResponse } = require('../middleware/errorMiddleware');

/**
 * @desc    Get all employees
 * @route   GET /api/employees
 * @access  Public
 */
const getEmployees = asyncHandler(async (req, res) => {
  const employees = await Employee.find({}).sort({ createdAt: -1 });

  res.status(200).json({
    success: true,
    count: employees.length,
    data: employees,
  });
});

/**
 * @desc    Get single employee
 * @route   GET /api/employees/:id
 * @access  Public
 */
const getEmployee = asyncHandler(async (req, res) => {
  const employee = await Employee.findById(req.params.id);

  if (!employee) {
    throw new ErrorResponse('Employee not found', 404);
  }

  res.status(200).json({
    success: true,
    data: employee,
  });
});

/**
 * @desc    Create new employee
 * @route   POST /api/employees
 * @access  Public
 */
const createEmployee = asyncHandler(async (req, res) => {
  const { firstName, lastName, email, role, department, salary, joinDate, status, phone } = req.body;

  // Basic validation
  if (!firstName || !lastName || !email || !role || !department || salary === undefined || !joinDate) {
    throw new ErrorResponse('Please provide all required fields', 400);
  }

  const employee = await Employee.create({
    firstName,
    lastName,
    email,
    role,
    department,
    salary,
    joinDate,
    status: status || 'active',
    phone,
  });

  res.status(201).json({
    success: true,
    data: employee,
  });
});

/**
 * @desc    Update employee
 * @route   PUT /api/employees/:id
 * @access  Public
 */
const updateEmployee = asyncHandler(async (req, res) => {
  let employee = await Employee.findById(req.params.id);

  if (!employee) {
    throw new ErrorResponse('Employee not found', 404);
  }

  employee = await Employee.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({
    success: true,
    data: employee,
  });
});

/**
 * @desc    Delete employee
 * @route   DELETE /api/employees/:id
 * @access  Public
 */
const deleteEmployee = asyncHandler(async (req, res) => {
  const employee = await Employee.findById(req.params.id);

  if (!employee) {
    throw new ErrorResponse('Employee not found', 404);
  }

  await Employee.deleteOne({ _id: req.params.id });

  res.status(200).json({
    success: true,
    message: 'Employee deleted successfully',
    data: {},
  });
});

module.exports = {
  getEmployees,
  getEmployee,
  createEmployee,
  updateEmployee,
  deleteEmployee,
};