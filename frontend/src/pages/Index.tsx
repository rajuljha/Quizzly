import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import LoginForm from "@/components/auth/LoginForm";
import Dashboard from "@/components/layout/Dashboard";
import { Toaster } from "@/components/ui/sonner";
import { BookOpen, PenSquare, ListChecks, Trophy, BarChart4, GraduationCap, BookCheck } from "lucide-react";
import Footer from "@/components/layout/Footer";
import image from "../../public/quiz(1).png"



const Index = () => {
  const [user, setUser] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [showLoginForm, setShowLoginForm] = useState(false);

  useEffect(() => {
    // Check if the user is already logged in
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setIsLoading(false);
  }, []);

  const handleLogin = (userData: any) => {
    setUser(userData);
    setShowLoginForm(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="h-8 w-8 border-t-4 border-b-4 border-brand-purple rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <>
      <Toaster position="top-right" />
      
      {user ? (
        <Dashboard user={user} onLogout={handleLogout} />
      ) : (
        <div className="min-h-screen flex flex-col" data-aos="fade-up">
          {/* Navbar */}
          <header className="border-b bg-white">
            <div className="container flex h-16 items-center justify-between px-4 md:px-6">
              <div className="flex items-center gap-2">
                <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-brand-purple to-purple-600">
                  Quizly.io
                </span>
              </div>
              <div>
                <Button 
                  className="bg-brand-purple hover:bg-purple-600 text-white px-6 py-2 rounded-full"
                  onClick={() => setShowLoginForm(true)}
                >
                  Log In
                </Button>
              </div>
            </div>
          </header>

          {/* Hero Section */}
          <section className="mx-10 py-2 bg-gray-50 h-[410px]" data-aos="fade-up">
            <div className="container px-3 md:px-6 mx-auto">
              <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                {/* Left side content */}
                <div className="max-w-2xl space-y-6">
                  <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900">
                  Learning Made Simple
                  </h1>
                  <p className="text-xl text-gray-600">
                  Empower your child's learning with personalized quizzes, easily crafted using intuitive AI tools that adapt to their needs.
                  </p>
                  <Button 
                    className="bg-brand-purple hover:bg-purple-600 text-white px-8 py-6 text-lg rounded-full shadow-lg"
                    onClick={() => setShowLoginForm(true)}
                  >
                    Get Started
                  </Button>
                </div>

                {/* Right side image */}
                <div className="w-full md:w-[400px] mt-2 md:mt-0">
                  <img 
                    src={image} 
                    alt="Quiz dashboard" 
                    className="w-[350px] h-[350px] object-contain md:object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Features Section with purple background */}
          <section className="py-10 bg-brand-purple" data-aos="fade-up">
            <div className="container px-4 md:px-6 mx-auto text-center">
              <h2 className="text-4xl md:text-3xl font-bold text-white mb-5">
                A learning experience tailored for your child
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mx-auto">
                {/* Feature 1 */}
                <div className="bg-white rounded-xl p-8 flex items-start gap-6 text-left shadow-lg">
                  <div className="bg-brand-lightPurple p-3 rounded-lg">
                    <PenSquare size={32} className="text-brand-purple" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Create Quizzes</h3>
                    <p className="text-gray-600">Create customized AI tailored quizzes for your child's curriculum.</p>
                  </div>
                </div>

                {/* Feature 2 */}
                <div className="bg-white rounded-xl p-8 flex items-start gap-6 text-left shadow-lg">
                  <div className="bg-brand-lightPurple p-3 rounded-lg">
                    <BarChart4 size={32} className="text-brand-purple" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Track Progress</h3>
                    <p className="text-gray-600">Visualize your child's learning progress with intuitive analytics.</p>
                  </div>
                </div>


                <div className="bg-white rounded-xl p-8 flex items-start gap-6 text-left shadow-lg">
                  <div className="bg-brand-lightPurple p-3 rounded-lg">
                  <BookCheck size={32} className="text-brand-purple" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Targeted Improvement</h3>
                    <p className="text-gray-600">Receive personalized resources for articles and videos</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Login Form Modal */}
          {showLoginForm && (
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
              <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-semibold">Login to Quizly</h2>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    onClick={() => setShowLoginForm(false)} 
                    className="rounded-full h-6 w-6"
                  >
                    ✕
                  </Button>
                </div>
                <LoginForm onLogin={handleLogin} />
              </div>
            </div>
          )}

          <Footer />
        </div>
      )}
    </>
  );
};

export default Index;

