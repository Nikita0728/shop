'use client'

import axios from 'axios';
import Link from 'next/link';
import Image from 'next/image';
import { ShoppingCart, Menu, X, User } from "lucide-react";
import { useEffect, useState } from 'react';
// import useCartStore from '@/store/userCartStore';
import { FcGoogle } from 'react-icons/fc';
import { useRouter, usePathname } from 'next/navigation';

interface AuthData {
  name?: string;
  email: string;
  password: string;
  confirmPassword?: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
  general?: string;
}

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  // const { cartCount } = useCartStore();
  
  // UI State
  const [menuOpen, setMenuOpen] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showUserDropdown, setShowUserDropdown] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Auth Data - Separate states for login and signup
  const [loginData, setLoginData] = useState<AuthData>({
    email: '',
    password: ''
  });

  const [signupData, setSignupData] = useState<AuthData>({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});

  // Check auth status on mount
  useEffect(() => {
    const authStatus = localStorage.getItem('status');
    if (authStatus === 'Logged In') {
      setIsLoggedIn(true);
    }
  }, []);

  // Handle input changes for login
  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error when user types
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: '',
        general: ''
      }));
    }
  };

  // Handle input changes for signup
  const handleSignupChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSignupData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error when user types
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: '',
        general: ''
      }));
    }
  };

  // Form validation
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    let isValid = true;

    const dataToValidate = isLogin ? loginData : signupData;

    if (!dataToValidate.email) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(dataToValidate.email)) {
      newErrors.email = 'Email is invalid';
      isValid = false;
    }

    if (!dataToValidate.password) {
      newErrors.password = 'Password is required';
      isValid = false;
    } else if (dataToValidate.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
      isValid = false;
    }

    if (!isLogin) {
      const signupData = dataToValidate as AuthData;
      
      if (!signupData.name) {
        newErrors.name = 'Name is required';
        isValid = false;
      }

      if (!signupData.confirmPassword) {
        newErrors.confirmPassword = 'Please confirm your password';
        isValid = false;
      } else if (signupData.password !== signupData.confirmPassword) {
        newErrors.confirmPassword = 'Passwords do not match';
        isValid = false;
      }
    }

    setErrors(newErrors);
    return isValid;
  };

  // Handle form submission
  const handleAuthSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);
    setErrors({});

    try {
      if (isLogin) {
        await handleLogin();
      } else {
  // Fallback login with signup credentials
  await axios.post("http://127.0.0.1:8000/login/", {
    email: signupData.email,
    password: signupData.password
  }).then(loginResponse => {
    localStorage.setItem('access', loginResponse.data.access);
    localStorage.setItem('refresh', loginResponse.data.refresh);
    localStorage.setItem('status', 'Logged In');

    setIsLoggedIn(true);
    setShowAuthModal(false);
    resetAuthData();

    if (loginResponse.data.isadmin) {
      window.location.href = '/adminsite/dashboard';
    } else {
      router.push('/');
    }
  }).catch(handleAuthError);
}
    } catch (error) {
      handleAuthError(error);
    } finally {
      setIsLoading(false);
    }
  };

  // Login handler
  const handleLogin = async () => {
    const response = await axios.post(
      "http://127.0.0.1:8000/login/",
      {
        email: loginData.email,
        password: loginData.password
      },
      {
        headers: { 'Content-Type': 'application/json' }
      }
    );

    localStorage.setItem('access', response.data.access);
    localStorage.setItem('refresh', response.data.refresh);
    localStorage.setItem('status', 'Logged In');
    
    setIsLoggedIn(true);
    setShowAuthModal(false);
    resetAuthData();

    if (response.data.isadmin) {
      window.location.href = '/adminsite/dashboard';
    } else {
      router.push('/');
    }
  };

  // Registration handler
// Registration handler
const handleRegistration = async () => {
  try {
    const response = await axios.post(
      "http://127.0.0.1:8000/accounts/register/",
      {
        username: signupData.name,
        email: signupData.email,
        password: signupData.password
      },
      {
        headers: { 'Content-Type': 'application/json' }
      }
    );

    // Check if the response contains tokens (from our updated backend)
    if (response.data.access && response.data.refresh) {
      localStorage.setItem('access', response.data.access);
      localStorage.setItem('refresh', response.data.refresh);
      localStorage.setItem('status', 'Logged In');
      
      setIsLoggedIn(true);
      setShowAuthModal(false);
      resetAuthData();

      if (response.data.isadmin) {
        window.location.href = '/adminsite/dashboard';
      } else {
        router.push('/');
      }
    } else {
      // If no tokens, try to login (fallback)
      await handleLogin();
    }
  } catch (error) {
    handleAuthError(error);
  }
};

  // Error handling
  const handleAuthError = (error: unknown) => {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        const backendErrors = error.response.data;
        const formattedErrors: FormErrors = {};

        if (backendErrors.email) {
          formattedErrors.email = Array.isArray(backendErrors.email) 
            ? backendErrors.email.join(' ') 
            : backendErrors.email;
        }

        if (backendErrors.username) {
          formattedErrors.name = Array.isArray(backendErrors.username) 
            ? backendErrors.username.join(' ') 
            : backendErrors.username;
        }

        if (backendErrors.password) {
          formattedErrors.password = Array.isArray(backendErrors.password) 
            ? backendErrors.password.join(' ') 
            : backendErrors.password;
        }

        if (backendErrors.detail) {
          formattedErrors.general = backendErrors.detail;
        }

        setErrors(formattedErrors);
      } else {
        setErrors({
          general: 'Network error. Please try again.'
        });
      }
    } else {
      setErrors({
        general: 'An unexpected error occurred.'
      });
    }
  };

  // Logout handler
  const handleLogout = () => {
    localStorage.removeItem('access');
    localStorage.removeItem('refresh');
    localStorage.removeItem('status');
    setIsLoggedIn(false);
    setShowUserDropdown(false);
    router.push('/');
  };

  // Reset form data
  const resetAuthData = () => {
    setLoginData({
      email: '',
      password: ''
    });
    setSignupData({
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
    });
    setErrors({});
  };

  // Toggle auth modal
  const toggleAuthModal = () => {
    setShowAuthModal(!showAuthModal);
    if (!showAuthModal) {
      resetAuthData();
    }
  };

  // Toggle between login/signup
  const toggleAuthMode = () => {
    setIsLogin(!isLogin);
    resetAuthData();
  };

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
        <div className="max-w-[1200px] w-full px-4 md:px-32 flex items-center justify-between py-3 mx-auto">
          SHOPME
          {/* Logo */}
          {/* <Link href="/">
            <Image
              src="/images/logo/pharmalogo.png"
              alt="Pharma Logo"
              width={170}
              height={10}
              priority
            />
          </Link> */}

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-black font-semibold hover:text-gray-400">Home</Link>
            <Link href="/about" className="text-black font-semibold hover:text-gray-400">About</Link>
            <Link href="/shop" className="text-black font-semibold hover:text-gray-400">Shop</Link>
            <Link href="/contact" className="text-black font-semibold hover:text-gray-400">Contact</Link>
          </div>

          {/* Right Section */}
          <div className="hidden md:flex items-center space-x-4">
            <input
              type="text"
              placeholder="Search..."
              className="px-4 py-2 rounded-md bg-gray-200 text-black focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            
            {/* <Link href="/cart" className="relative">
              <ShoppingCart size={34} className="text-green-600" />
              {cartCount > 0 && (
                <span className="bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center absolute -top-2 -right-2">
                  {cartCount}
                </span>
              )}
            </Link> */}

            {!isLoggedIn ? (
              <button
                onClick={toggleAuthModal}
                className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors font-semibold"
              >
                Login
              </button>
            ) : (
              <div className="relative">
                <button 
                  onClick={() => setShowUserDropdown(!showUserDropdown)}
                  className="flex items-center gap-2"
                >
                  <User className="h-8 w-8 text-green-600" />
                </button>
                
                {showUserDropdown && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden" 
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden absolute top-[64px] left-0 w-full bg-white shadow-md flex flex-col items-center py-4 space-y-4">
            <Link href="/" className="text-black font-semibold hover:text-gray-400" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link href="/about" className="text-black font-semibold hover:text-gray-400" onClick={() => setMenuOpen(false)}>About</Link>
            <Link href="/shop" className="text-black font-semibold hover:text-gray-400" onClick={() => setMenuOpen(false)}>Shop</Link>
            <Link href="/contact" className="text-black font-semibold hover:text-gray-400" onClick={() => setMenuOpen(false)}>Contact</Link>
            
            <input
              type="text"
              placeholder="Search..."
              className="px-4 py-2 rounded-md bg-gray-200 text-black w-3/4 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            
            <button
              onClick={() => {
                toggleAuthModal();
                setMenuOpen(false);
              }}
              className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 w-3/4"
            >
              {isLoggedIn ? 'Account' : 'Login/Signup'}
            </button>
          </div>
        )}
      </nav>

      {/* Authentication Modal */}
      {showAuthModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md mx-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">{isLogin ? 'Login' : 'Sign Up'}</h2>
              <button
                onClick={toggleAuthModal}
                className="text-gray-500 hover:text-gray-700"
                aria-label="Close modal"
              >
                <X size={24} />
              </button>
            </div>

            <div className="flex border-b mb-4">
              <button
                onClick={() => setIsLogin(true)}
                className={`flex-1 py-2 ${isLogin ? 'border-b-2 border-green-600 font-medium' : 'text-gray-500'}`}
              >
                Login
              </button>
              <button
                onClick={() => setIsLogin(false)}
                className={`flex-1 py-2 ${!isLogin ? 'border-b-2 border-green-600 font-medium' : 'text-gray-500'}`}
              >
                Sign Up
              </button>
            </div>

            {errors.general && (
              <div className="mb-4 p-2 bg-red-100 text-red-700 rounded-md text-sm">
                {errors.general}
              </div>
            )}

            <form onSubmit={handleAuthSubmit} className="space-y-4">
              {!isLogin && (
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">Username</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={signupData.name}
                    onChange={handleSignupChange}
                    className={`w-full px-3 py-2 border rounded-md ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
                    required={!isLogin}
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                </div>
              )}

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={isLogin ? loginData.email : signupData.email}
                  onChange={isLogin ? handleLoginChange : handleSignupChange}
                  className={`w-full px-3 py-2 border rounded-md ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                  required
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium mb-1">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={isLogin ? loginData.password : signupData.password}
                  onChange={isLogin ? handleLoginChange : handleSignupChange}
                  className={`w-full px-3 py-2 border rounded-md ${errors.password ? 'border-red-500' : 'border-gray-300'}`}
                  required
                />
                {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
              </div>

              {!isLogin && (
                <div>
                  <label htmlFor="confirmPassword" className="block text-sm font-medium mb-1">Confirm Password</label>
                  <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={signupData.confirmPassword}
                    onChange={handleSignupChange}
                    className={`w-full px-3 py-2 border rounded-md ${errors.confirmPassword ? 'border-red-500' : 'border-gray-300'}`}
                    required={!isLogin}
                  />
                  {errors.confirmPassword && <p className="text-red-500 text-xs mt-1">{errors.confirmPassword}</p>}
                </div>
              )}

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 disabled:bg-green-400 flex justify-center items-center"
              >
                {isLoading ? (
                  <span className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full mr-2"></span>
                ) : null}
                {isLogin ? 'Login' : 'Sign Up'}
              </button>
            </form>

            {isLogin && (
              <>
                <div className="relative flex items-center py-4">
                  <div className="flex-grow border-t border-gray-300"></div>
                  <span className="flex-shrink mx-4 text-gray-500">or</span>
                  <div className="flex-grow border-t border-gray-300"></div>
                </div>

                <button
                  onClick={() => console.log('Google sign-in')}
                  className="w-full flex items-center justify-center gap-2 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
                >
                  <FcGoogle size={20} />
                  <span>Continue with Google</span>
                </button>

                <div className="mt-4 text-center text-sm">
                  <button
                    onClick={toggleAuthMode}
                    className="text-green-600 hover:text-green-700"
                  >
                    Don't have an account? Sign up
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {/* Prevent Content Overlap */}
      <div className="mt-[64px]"></div>
    </>
  );
}