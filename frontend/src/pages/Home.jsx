import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import ScrollAnimation from '../components/ScrollAnimation';
import PageLayout from '../components/PageLayout';

const Home = () => {
  const navigate = useNavigate();
  const navLinks = [
    { to: '/datasets', label: 'Datasets' },
    { to: '/training', label: 'Training' },
    { to: '/generation', label: 'Generation' },
    { to: '/evaluation', label: 'Evaluation' },
    { to: '/documentation', label: 'Documentation' },
    { to: '/about', label: 'About' },
  ];

  return (
    <PageLayout>
      {/* HeroSection */}
      <section className="text-center">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-4xl font-black tracking-tighter sm:text-5xl md:text-6xl text-text-light dark:text-text-dark">LightGNN-Peptide</h1>
          <p className="mt-4 text-base text-slate-600 dark:text-slate-400 sm:text-lg md:text-xl">Stable Short Peptide Generation with Lightweight Graph Transformers</p>
          <div className="mt-8 flex justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/generation')}
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
    </PageLayout>
  );
};

export default Home;
