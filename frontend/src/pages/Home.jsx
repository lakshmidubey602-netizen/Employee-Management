import { Link } from 'react-router-dom';
import {
  Users,
  Zap,
  Shield,
  BarChart3,
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  Layers,
} from 'lucide-react';
import Button from '../components/Button';

const Home = () => {
  const features = [
    {
      icon: Users,
      title: 'Employee Management',
      description: 'Easily add, update, and manage all your employee records in one centralized place.',
    },
    {
      icon: Zap,
      title: 'Fast & Responsive',
      description: 'Lightning-fast performance with a fully responsive design for any device.',
    },
    {
      icon: Shield,
      title: 'Secure & Reliable',
      description: 'Built with security best practices and robust error handling.',
    },
    {
      icon: BarChart3,
      title: 'Data Insights',
      description: 'Track departments, roles, and status with powerful filtering and search.',
    },
  ];

  const stats = [
    { label: 'Employees Managed', value: '10K+' },
    { label: 'Companies Trust Us', value: '500+' },
    { label: 'Uptime Guaranteed', value: '99.9%' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white py-20 lg:py-28">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary-200 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" />
          <div className="absolute top-20 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 text-primary-700 text-sm font-medium mb-8">
              <TrendingUp className="w-4 h-4" />
              Modern Employee Management Solution
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Manage Your{' '}
              <span className="bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">
                Workforce
              </span>{' '}
              With Ease
            </h1>

            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              A powerful, intuitive, and modern employee management system built with the MERN stack.
              Streamline your HR operations and focus on what matters most - your people.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/dashboard">
                <Button size="lg">
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link to="/dashboard">
                <Button variant="secondary" size="lg">
                  <Layers className="w-5 h-5 mr-2" />
                  View Dashboard
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 border-y border-gray-100 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Everything You Need
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A complete suite of tools to manage your team efficiently and effectively.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group p-6 rounded-2xl bg-gray-50 hover:bg-white border border-transparent hover:border-gray-100 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl flex items-center justify-center mb-5 shadow-lg shadow-primary-500/25 group-hover:shadow-primary-500/40 transition-shadow">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Start managing your employees today with our powerful and intuitive dashboard.
          </p>

          <div className="space-y-4 mb-10">
            {[
              'Add unlimited employees',
              'Search and filter with ease',
              'Export data anytime',
              '100% free to use',
            ].map((item) => (
              <div key={item} className="flex items-center justify-center gap-2 text-gray-300">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <Link to="/dashboard">
            <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100 shadow-xl">
              Launch Dashboard
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm text-gray-500">
            Employee Management System. Built with React, Node.js, Express & MongoDB.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
