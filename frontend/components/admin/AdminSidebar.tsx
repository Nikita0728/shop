// components/admin/AdminSidebar.tsx
import Link from 'next/link';
import { FiHome, FiBox, FiMessageSquare, FiSettings, FiUsers, FiShoppingCart } from 'react-icons/fi';

export default function AdminSidebar() {
  const navigation = [
    { name: 'Dashboard', href: '/admin', icon: FiHome, current: true },
    { name: 'Products', href: '/adminsite/products', icon: FiBox, current: false },
    { name: 'Orders', href: '/admin/orders', icon: FiShoppingCart, current: false },
    { name: 'Customers', href: '/admin/customers', icon: FiUsers, current: false },
    { name: 'Feedbacks', href: '/admin/feedbacks', icon: FiMessageSquare, current: false },
    { name: 'Settings', href: '/admin/settings', icon: FiSettings, current: false },
  ];

  return (
    <div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col lg:border-r lg:border-gray-200 lg:bg-white lg:pb-4 lg:pt-5">
      <div className="flex flex-shrink-0 items-center px-6">
        <h1 className="text-xl font-bold text-indigo-600">Admin Panel</h1>
      </div>
      <div className="mt-5 flex h-0 flex-1 flex-col overflow-y-auto">
        <nav className="flex-1 space-y-1 px-2">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`group flex items-center rounded-md px-2 py-2 text-sm font-medium ${
                item.current
                  ? 'bg-indigo-50 text-indigo-600'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              }`}
            >
              <item.icon
                className={`mr-3 h-5 w-5 flex-shrink-0 ${
                  item.current ? 'text-indigo-500' : 'text-gray-400 group-hover:text-gray-500'
                }`}
              />
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
      <div className="flex flex-shrink-0 border-t border-gray-200 p-4">
        <div className="flex items-center">
          <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
            <span className="text-gray-500">AD</span>
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-700">Admin User</p>
            <Link href="/admin/settings" className="text-xs font-medium text-indigo-600 hover:text-indigo-500">
              View profile
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}