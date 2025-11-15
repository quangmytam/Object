import React from 'react';
import { motion } from 'framer-motion';
import Header from './Header';

const PageLayout = ({ children }) => {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col">
      {/* Background Gradient */}
      <div className="absolute top-0 left-0 -z-10 h-full w-full">
        <div className="absolute top-0 left-0 h-1/2 w-1/2 rounded-full bg-primary/10 blur-[100px] dark:bg-primary/20"></div>
        <div className="absolute bottom-0 right-0 h-1/2 w-1/2 rounded-full bg-accent/10 blur-[100px] dark:bg-accent/20"></div>
      </div>
      {/* Main Content Wrapper */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-1 justify-center px-4 py-5 sm:px-8 md:px-16 lg:px-24"
      >
        <div className="flex w-full max-w-6xl flex-col">
          <Header />
          <main className="flex-grow py-12 md:py-20">
            {children}
          </main>
          {/* Footer */}
          <footer className="mt-auto border-t border-slate-900/10 pt-8 pb-4 dark:border-slate-50/10">
            <div className="flex flex-col items-center justify-between gap-4 text-sm text-slate-500 dark:text-slate-400 sm:flex-row">
              <p>© 2024 AI Lab, University of Science. All rights reserved.</p>
              <div className="flex items-center gap-4">
                <a className="hover:text-primary" href="#">Contact</a>
                <a className="hover:text-primary" href="#">Privacy Policy</a>
              </div>
            </div>
          </footer>
        </div>
      </motion.div>
    </div>
  );
};

export default PageLayout;
