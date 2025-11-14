import React from 'react';
import { Link } from 'react-router-dom';
import HomeHeader from '../components/HomeHeader';

const Home = () => {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col">
      {/* Background Gradient */}
      <div className="absolute top-0 left-0 -z-10 h-full w-full">
        <div className="absolute top-0 left-0 h-1/2 w-1/2 rounded-full bg-primary/10 blur-[100px] dark:bg-primary/20"></div>
        <div className="absolute bottom-0 right-0 h-1/2 w-1/2 rounded-full bg-accent/10 blur-[100px] dark:bg-accent/20"></div>
      </div>
      {/* Main Content Wrapper */}
      <div className="flex flex-1 justify-center px-4 py-5 sm:px-8 md:px-16 lg:px-24">
        <div className="flex w-full max-w-6xl flex-col">
          <HomeHeader />
          <main className="flex-grow py-12 md:py-20">
            {/* HeroSection */}
            <section className="text-center">
              <div className="mx-auto max-w-3xl">
                <h1 className="text-4xl font-black tracking-tighter sm:text-5xl md:text-6xl text-text-light dark:text-text-dark">LightGNN-Peptide</h1>
                <p className="mt-4 text-base text-slate-600 dark:text-slate-400 sm:text-lg md:text-xl">Stable Short Peptide Generation with Lightweight Graph Transformers</p>
                <div className="mt-8 flex justify-center">
                  <Link to="/generation" className="flex min-w-[84px] cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg h-12 px-6 bg-primary text-white text-base font-bold shadow-soft transition-transform duration-200 hover:scale-105 active:scale-95">
                    <span className="material-symbols-outlined">science</span>
                    <span className="truncate">Start Generation</span>
                  </Link>
                </div>
              </div>
            </section>
            {/* Workflow Visualization */}
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
            {/* Project Highlights */}
            <section className="mt-16 md:mt-24">
              <h2 className="text-center text-2xl font-bold tracking-tight sm:text-3xl text-text-light dark:text-text-dark">Project Highlights</h2>
              <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {/* Card 1 */}
                <div className="flex flex-col rounded-xl border border-slate-900/10 bg-card-light p-6 shadow-soft backdrop-blur-md transition-transform duration-200 hover:-translate-y-1 dark:border-slate-50/10 dark:bg-card-dark">
                  <div className="flex size-12 items-center justify-center rounded-lg bg-accent/10 text-accent dark:bg-accent/20">
                    <span className="material-symbols-outlined text-3xl">model_training</span>
                  </div>
                  <h3 className="mt-4 text-lg font-bold">Graph Transformer Architecture</h3>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">Utilizes a lightweight yet powerful Graph Transformer model for efficient structural analysis and generation.</p>
                </div>
                {/* Card 2 */}
                <div className="flex flex-col rounded-xl border border-slate-900/10 bg-card-light p-6 shadow-soft backdrop-blur-md transition-transform duration-200 hover:-translate-y-1 dark:border-slate-50/10 dark:bg-card-dark">
                  <div className="flex size-12 items-center justify-center rounded-lg bg-accent/10 text-accent dark:bg-accent/20">
                    <span className="material-symbols-outlined text-3xl">data_object</span>
                  </div>
                  <h3 className="mt-4 text-lg font-bold">Powered by BioPDB</h3>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">Integrates seamlessly with the Protein Data Bank, leveraging a vast repository of biological macromolecular data.</p>
                </div>
                {/* Card 3 */}
                <div className="flex flex-col rounded-xl border border-slate-900/10 bg-card-light p-6 shadow-soft backdrop-blur-md transition-transform duration-200 hover:-translate-y-1 dark:border-slate-50/10 dark:bg-card-dark">
                  <div className="flex size-12 items-center justify-center rounded-lg bg-accent/10 text-accent dark:bg-accent/20">
                    <span className="material-symbols-outlined text-3xl">auto_awesome</span>
                  </div>
                  <h3 className="mt-4 text-lg font-bold">Discovering Novel Peptides</h3>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">Aims to accelerate the discovery of new, stable short peptides for therapeutic and industrial applications.</p>
                </div>
              </div>
            </section>
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
      </div>
    </div>
  );
};

export default Home;
