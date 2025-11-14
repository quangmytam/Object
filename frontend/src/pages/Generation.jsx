import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';

const Generation = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedPeptides, setGeneratedPeptides] = useState([]);

  const handleGenerate = async () => {
    setIsGenerating(true);
    setGeneratedPeptides([]);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    const mockPeptides = [
      { sequence: 'ACDEFGHIK', stability: 0.92 },
      { sequence: 'LMNPQRSTV', stability: 0.88 },
      { sequence: 'WYACDEFGH', stability: 0.85 },
    ];

    setGeneratedPeptides(mockPeptides);
    setIsGenerating(false);
  };

  const navLinks = [
<<<<<<< HEAD
    { to: '/', label: 'Home' },
    { to: '/generation', label: 'Generation' },
    { to: '/documentation', label: 'Documentation' },
    { to: '/about', label: 'About' },
=======
    { to: '/datasets', label: 'Datasets' },
    { to: '/training', label: 'Training' },
    { to: '/evaluation', label: 'Evaluation' },
    { to: '/documentation', label: 'Documentation' },
>>>>>>> b10b01c (links pages correctly)
  ];

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col">
      <Header title="LightGNN-Peptide" navLinks={navLinks} />
      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-1 w-full max-w-screen-2xl mx-auto p-6 md:p-10"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 w-full">
          {/* Left Column: Control Panel */}
          <aside className="lg:col-span-4 xl:col-span-3 flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <h1 className="text-4xl font-black tracking-[-0.033em]">Peptide Generation</h1>
              <p className="text-base font-normal leading-normal text-subtext-light dark:text-subtext-dark">Configure parameters and generate stable short peptides.</p>
            </div>
            <div className="space-y-6">
              <h2 className="text-xl font-bold tracking-[-0.015em] border-b border-border-light dark:border-border-dark pb-3">Generation Parameters</h2>
              {/* Text Input: Target Protein ID */}
              <label className="flex flex-col w-full">
                <p className="text-sm font-medium leading-normal pb-2">Target Protein ID</p>
                <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-text-light dark:text-text-dark focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-border-light dark:border-border-dark bg-white dark:bg-background-dark/50 h-12 placeholder:text-subtext-light dark:placeholder:text-subtext-dark p-3 text-base font-normal leading-normal" placeholder="e.g., PDB:1A2B" defaultValue="" />
              </label>
              {/* Text Input: Desired Peptide Length */}
              <label className="flex flex-col w-full">
                <p className="text-sm font-medium leading-normal pb-2">Desired Peptide Length</p>
                <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-text-light dark:text-text-dark focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-border-light dark:border-border-dark bg-white dark:bg-background-dark/50 h-12 placeholder:text-subtext-light dark:placeholder:text-subtext-dark p-3 text-base font-normal leading-normal" placeholder="e.g., 10" type="number" defaultValue="" />
              </label>
              {/* Dropdown: Graph Transformer Model */}
              <label className="flex flex-col w-full">
                <p className="text-sm font-medium leading-normal pb-2">Graph Transformer Model</p>
                <select className="form-select flex w-full min-w-0 flex-1 overflow-hidden rounded-lg text-text-light dark:text-text-dark focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-border-light dark:border-border-dark bg-white dark:bg-background-dark/50 h-12 p-3 text-base font-normal leading-normal">
                  <option>LightGNN-v2 (Recommended)</option>
                  <option>LightGNN-v1</option>
                  <option>Transformer-XL</option>
                </select>
              </label>
              {/* Dropdown: BioPDB Dataset */}
              <label className="flex flex-col w-full">
                <p className="text-sm font-medium leading-normal pb-2">BioPDB Dataset Version</p>
                <select className="form-select flex w-full min-w-0 flex-1 overflow-hidden rounded-lg text-text-light dark:text-text-dark focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-border-light dark:border-border-dark bg-white dark:bg-background-dark/50 h-12 p-3 text-base font-normal leading-normal">
                  <option>BioPDB 2024-Q2</option>
                  <option>BioPDB 2024-Q1</option>
                  <option>BioPDB 2023-Q4</option>
                </select>
              </label>
              {/* Toggle Switch */}
              <div className="flex items-center justify-between pt-2">
                <div className="flex items-center gap-2">
                  <label className="text-sm font-medium" htmlFor="stability-filter">Enable Stability Filter</label>
                  <span className="material-symbols-outlined text-base text-subtext-light dark:text-subtext-dark cursor-help" title="Only return peptides with a predicted stability score above 0.85.">help</span>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input defaultChecked className="sr-only peer" id="stability-filter" type="checkbox" defaultValue="" />
                  <div className="w-11 h-6 bg-gray-200 dark:bg-gray-700 rounded-full peer peer-focus:ring-2 peer-focus:ring-primary/50 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
                </label>
              </div>
              {/* CTA Button */}
              <div className="pt-4 border-t border-border-light dark:border-border-dark">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleGenerate}
                  disabled={isGenerating}
                  className="flex w-full cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg h-12 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20 disabled:opacity-50"
                >
                  <span className="material-symbols-outlined">auto_awesome</span>
                  {isGenerating ? 'Generating...' : 'Generate Peptides'}
                </motion.button>
              </div>
              {/* Status Indicator */}
              {isGenerating && (
                <div className="flex flex-col items-center gap-3 p-4 rounded-lg bg-primary/10 dark:bg-primary/20">
                  <div className="w-8 h-8 border-4 border-primary/30 border-t-primary rounded-full animate-spin"></div>
                  <p className="text-sm font-medium text-primary">Generation in progress... (Est. 45s)</p>
                </div>
              )}
            </div>
          </aside>
          {/* Right Column: Results Area */}
          <section className="lg:col-span-8 xl:col-span-9 flex flex-col gap-6">
            <div className="flex flex-wrap justify-between items-center gap-3">
              <h2 className="text-2xl font-bold tracking-[-0.015em]">Generated Peptides</h2>
              <p className="text-sm font-medium text-subtext-light dark:text-subtext-dark">
                {generatedPeptides.length > 0 ? `Showing ${generatedPeptides.length} results` : ''}
              </p>
            </div>
            {/* Card Grid */}
            <div className="grid grid-cols-1 @container md:grid-cols-2 xl:grid-cols-3 gap-6">
              {generatedPeptides.length > 0 ? (
                generatedPeptides.map((peptide, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -4, boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.07), 0 4px 6px -4px rgba(0, 0, 0, 0.07)' }}
                    className="flex flex-col gap-5 p-5 rounded-xl bg-card-light dark:bg-card-dark backdrop-blur-xl border border-white/50 dark:border-white/10 shadow-lg shadow-gray-500/5 dark:shadow-black/20"
                  >
                    <div className="flex flex-col gap-2">
                      <p className="text-xs font-medium uppercase tracking-wider text-subtext-light dark:text-subtext-dark">Sequence</p>
                      <p className="font-mono text-lg font-medium tracking-wider">{peptide.sequence}</p>
                    </div>
                    <div className="flex flex-col gap-3">
                      <div className="flex justify-between items-baseline">
                        <p className="text-sm font-medium text-subtext-light dark:text-subtext-dark">Stability Score</p>
                        <p className="text-2xl font-bold text-accent-teal">{peptide.stability}</p>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div className="bg-accent-teal h-2 rounded-full" style={{ width: `${peptide.stability * 100}%` }}></div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 flex items-center justify-center gap-2 h-10 px-4 rounded-lg bg-primary/10 dark:bg-primary/20 text-primary text-sm font-bold hover:bg-primary/20 dark:hover:bg-primary/30 transition-colors"
                      >
                        <span className="material-symbols-outlined text-base">content_copy</span>
                        Copy
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 flex items-center justify-center gap-2 h-10 px-4 rounded-lg bg-gray-500/10 text-text-light dark:text-text-dark text-sm font-medium hover:bg-gray-500/20 transition-colors"
                      >
                        View Details
                      </motion.button>
                    </div>
                  </motion.div>
                ))
              ) : (
                <div className="lg:col-span-3 flex-1 flex flex-col items-center justify-center text-center p-10 border-2 border-dashed border-border-light dark:border-border-dark rounded-xl">
                  <span className="material-symbols-outlined text-6xl text-subtext-light dark:text-subtext-dark opacity-50">science</span>
                  <h3 className="text-xl font-bold mt-4">No Peptides Generated Yet</h3>
                  <p className="text-subtext-light dark:text-subtext-dark mt-2 max-w-sm">Use the control panel on the left to configure your parameters and start a new generation process. Your results will appear here.</p>
                </div>
              )}
            </div>
          </section>
        </div>
      </motion.main>
    </div>
  );
};

export default Generation;
