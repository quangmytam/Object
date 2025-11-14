import React from 'react';
import { motion } from 'framer-motion';
import ScrollAnimation from '../components/ScrollAnimation';

const Home = () => {
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
          {/* TopNavBar */}
          <header className="flex items-center justify-between whitespace-nowrap border-b border-slate-900/10 dark:border-slate-50/10 px-4 py-4 md:px-6">
            <div className="flex items-center gap-3">
              <div className="text-primary size-7">
                <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                  <path clipRule="evenodd" d="M24 18.4228L42 11.475V34.3663C42 34.7796 41.7457 35.1504 41.3601 35.2992L24 42V18.4228Z" fill="currentColor" fillRule="evenodd"></path>
                  <path clipRule="evenodd" d="M24 8.18819L33.4123 11.574L24 15.2071L14.5877 11.574L24 8.18819ZM9 15.8487L21 20.4805V37.6263L9 32.9945V15.8487ZM27 37.6263V20.4805L39 15.8487V32.9945L27 37.6263ZM25.354 2.29885C24.4788 1.98402 23.5212 1.98402 22.646 2.29885L4.98454 8.65208C3.7939 9.08038 3 10.2097 3 11.475V34.3663C3 36.0196 4.01719 37.5026 5.55962 38.098L22.9197 44.7987C23.6149 45.0671 24.3851 45.0671 25.0803 44.7987L42.4404 38.098C43.9828 37.5026 45 36.0196 45 34.3663V11.475C45 10.2097 44.2061 9.08038 43.0155 8.65208L25.354 2.29885Z" fill="currentColor" fillRule="evenodd"></path>
                </svg>
              </div>
              <h2 className="text-text-light dark:text-text-dark text-xl font-bold tracking-tight">LightGNN-Peptide</h2>
            </div>
            <nav className="hidden items-center gap-8 md:flex">
              <a className="text-sm font-medium text-primary hover:opacity-80" href="#">Home</a>
              <a className="text-sm font-medium hover:text-primary dark:hover:text-primary" href="#">Documentation</a>
              <a className="text-sm font-medium hover:text-primary dark:hover:text-primary" href="#">Publications</a>
              <a className="text-sm font-medium hover:text-primary dark:hover:text-primary" href="#">About</a>
            </nav>
          </header>
          <main className="flex-grow py-12 md:py-20">
            {/* HeroSection */}
            <section className="text-center">
              <div className="mx-auto max-w-3xl">
                <h1 className="text-4xl font-black tracking-tighter sm:text-5xl md:text-6xl text-text-light dark:text-text-dark">LightGNN-Peptide</h1>
                <p className="mt-4 text-base text-slate-600 dark:text-slate-400 sm:text-lg md:text-xl">Stable Short Peptide Generation with Lightweight Graph Transformers</p>
                <div className="mt-8 flex justify-center">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex min-w-[84px] cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg h-12 px-6 bg-primary text-white text-base font-bold shadow-soft transition-transform duration-200"
                  >
                    <span className="material-symbols-outlined">science</span>
                    <span className="truncate">Start Generation</span>
                  </motion.button>
                </div>
              </div>
            </section>
            {/* Workflow Visualization */}
            <ScrollAnimation>
              <section className="mt-16 md:mt-24">
                <h2 className="text-center text-2xl font-bold tracking-tight sm:text-3xl text-text-light dark:text-text-dark">Workflow Overview</h2>
                <div className="mt-8 w-full rounded-xl border border-slate-900/10 bg-card-light dark:border-slate-50/10 dark:bg-card-dark p-6 shadow-soft backdrop-blur-md sm:p-8">
                  <div className="flex flex-col items-center justify-between gap-6 md:flex-row md:gap-4">
                    {/* Step 1: Input */}
                    <div className="flex flex-col items-center text-center">
                      <div className="flex size-16 items-center justify-center rounded-full bg-primary/10 text-primary dark:bg-primary/20">
                        <span className="material-symbols-outlined text-3xl">database</span>
                      </div>
                      <h3 className="mt-4 text-lg font-bold">BioPDB Data Input</h3>
                      <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">Protein structures from PDB</p>
                    </div>
                    {/* Arrow */}
                    <div className="h-10 w-px rotate-90 bg-slate-300 dark:bg-slate-700 md:h-px md:w-16 md:rotate-0"></div>
                    {/* Step 2: Model */}
                    <div className="flex flex-col items-center text-center">
                      <div className="flex size-16 items-center justify-center rounded-full bg-primary/10 text-primary dark:bg-primary/20">
                        <span className="material-symbols-outlined text-3xl">hub</span>
                      </div>
                      <h3 className="mt-4 text-lg font-bold">Graph Transformer Model</h3>
                      <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">Lightweight GNN processing</p>
                    </div>
                    {/* Arrow */}
                    <div className="h-10 w-px rotate-90 bg-slate-300 dark:bg-slate-700 md:h-px md:w-16 md:rotate-0"></div>
                    {/* Step 3: Output */}
                    <div className="flex flex-col items-center text-center">
                      <div className="flex size-16 items-center justify-center rounded-full bg-primary/10 text-primary dark:bg-primary/20">
                        <span className="material-symbols-outlined text-3xl">biotech</span>
                      </div>
                      <h3 className="mt-4 text-lg font-bold">Stable Peptide Output</h3>
                      <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">Novel peptide sequences</p>
                    </div>
                  </div>
                </div>
              </section>
            </ScrollAnimation>
            {/* Project Highlights */}
            <ScrollAnimation>
              <section className="mt-16 md:mt-24">
                <h2 className="text-center text-2xl font-bold tracking-tight sm:text-3xl text-text-light dark:text-text-dark">Project Highlights</h2>
                <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {/* Card 1 */}
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="flex flex-col rounded-xl border border-slate-900/10 bg-card-light p-6 shadow-soft backdrop-blur-md transition-transform duration-200 dark:border-slate-50/10 dark:bg-card-dark"
                  >
                    <div className="flex size-12 items-center justify-center rounded-lg bg-accent/10 text-accent dark:bg-accent/20">
                      <span className="material-symbols-outlined text-3xl">model_training</span>
                    </div>
                    <h3 className="mt-4 text-lg font-bold">Graph Transformer Architecture</h3>
                    <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">Utilizes a lightweight yet powerful Graph Transformer model for efficient structural analysis and generation.</p>
                  </motion.div>
                  {/* Card 2 */}
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="flex flex-col rounded-xl border border-slate-900/10 bg-card-light p-6 shadow-soft backdrop-blur-md transition-transform duration-200 dark:border-slate-50/10 dark:bg-card-dark"
                  >
                    <div className="flex size-12 items-center justify-center rounded-lg bg-accent/10 text-accent dark:bg-accent/20">
                      <span className="material-symbols-outlined text-3xl">data_object</span>
                    </div>
                    <h3 className="mt-4 text-lg font-bold">Powered by BioPDB</h3>
                    <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">Integrates seamlessly with the Protein Data Bank, leveraging a vast repository of biological macromolecular data.</p>
                  </motion.div>
                  {/* Card 3 */}
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="flex flex-col rounded-xl border border-slate-900/10 bg-card-light p-6 shadow-soft backdrop-blur-md transition-transform duration-200 dark:border-slate-50/10 dark:bg-card-dark"
                  >
                    <div className="flex size-12 items-center justify-center rounded-lg bg-accent/10 text-accent dark:bg-accent/20">
                      <span className="material-symbols-outlined text-3xl">auto_awesome</span>
                    </div>
                    <h3 className="mt-4 text-lg font-bold">Discovering Novel Peptides</h3>
                    <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">Aims to accelerate the discovery of new, stable short peptides for therapeutic and industrial applications.</p>
                  </motion.div>
                </div>
              </section>
            </ScrollAnimation>
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

export default Home;
