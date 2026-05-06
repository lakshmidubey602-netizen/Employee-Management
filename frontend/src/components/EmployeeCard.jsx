import { Phone, Calendar, DollarSign, Pencil, Trash2, Briefcase, Building2 } from 'lucide-react';
import Button from './Button';

/**
 * Employee Card Component
 * Displays employee information in a clean card layout
 */
const EmployeeCard = ({ employee, onEdit, onDelete }) => {
  const statusColors = {
    active: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    inactive: 'bg-gray-50 text-gray-600 border-gray-200',
    'on-leave': 'bg-amber-50 text-amber-700 border-amber-200',
  };

  const statusLabel = {
    active: 'Active',
    inactive: 'Inactive',
    'on-leave': 'On Leave',
  };

  const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  const formatSalary = (salary) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
    }).format(salary);
  };

  // Get initials for avatar
  const getInitials = () => {
    const first = employee.firstName?.[0] || '';
    const last = employee.lastName?.[0] || '';
    return `${first}${last}`.toUpperCase();
  };

  // Avatar background color based on name
  const getAvatarColor = () => {
    const colors = [
      'bg-blue-500',
      'bg-emerald-500',
      'bg-violet-500',
      'bg-amber-500',
      'bg-rose-500',
      'bg-cyan-500',
    ];
    const index = (employee.firstName?.length || 0) % colors.length;
    return colors[index];
  };

  return (
    <div className="card p-5 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          {/* Avatar */}
          <div className={`w-12 h-12 ${getAvatarColor()} rounded-xl flex items-center justify-center text-white font-bold text-sm shadow-md`}>
            {getInitials()}
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">
              {employee.firstName} {employee.lastName}
            </h3>
            <p className="text-sm text-gray-500">{employee.email}</p>
          </div>
        </div>
        <span className={`px-2.5 py-1 text-xs font-medium rounded-full border ${statusColors[employee.status] || statusColors.inactive}`}>
          {statusLabel[employee.status] || employee.status}
        </span>
      </div>

      {/* Details Grid */}
      <div className="grid grid-cols-2 gap-3 mb-5">
        <div className="flex items-center gap-2 text-sm">
          <Briefcase className="w-4 h-4 text-gray-400 flex-shrink-0" />
          <span className="text-gray-600 truncate">{employee.role}</span>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <Building2 className="w-4 h-4 text-gray-400 flex-shrink-0" />
          <span className="text-gray-600 truncate">{employee.department}</span>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <DollarSign className="w-4 h-4 text-gray-400 flex-shrink-0" />
          <span className="text-gray-600">{formatSalary(employee.salary)}</span>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <Calendar className="w-4 h-4 text-gray-400 flex-shrink-0" />
          <span className="text-gray-600">{formatDate(employee.joinDate)}</span>
        </div>
      </div>

      {/* Contact Info */}
      {employee.phone && (
        <div className="flex items-center gap-2 text-sm mb-4 pb-4 border-b border-gray-50">
          <Phone className="w-4 h-4 text-gray-400 flex-shrink-0" />
          <span className="text-gray-600">{employee.phone}</span>
        </div>
      )}

      {/* Actions */}
      <div className="flex gap-2">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => onEdit(employee)}
          className="flex-1"
        >
          <Pencil className="w-4 h-4 mr-1.5" />
          Edit
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => onDelete(employee._id)}
          className="flex-1 text-red-600 hover:text-red-700 hover:bg-red-50"
        >
          <Trash2 className="w-4 h-4 mr-1.5" />
          Delete
        </Button>
      </div>
    </div>
  );
};

export default EmployeeCard;
