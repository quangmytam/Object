import React, { useState } from 'react';
import { generatePeptides } from '../api/peptides';

const Generation = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [peptides, setPeptides] = useState([]);

  const handleGenerate = async () => {
    setIsLoading(true);
    const result = await generatePeptides();
    setPeptides(result);
    setIsLoading(false);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 w-full">
      {/* Left Column: Control Panel */}
      <aside className="lg:col-span-4 xl:col-span-3 flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl font-black tracking-[-0.033em]">Peptide Generation</h1>
          <p className="text-base font-normal leading-normal text-subtext-light dark:text-subtext-dark">Configure parameters and generate stable short peptides.</p>
        </div>
        <div className="space-y-6">
          <h2 className="text-xl font-bold tracking-[-0.015em] border-b border-border-light dark:border-border-dark pb-3">Generation Parameters</h2>
          <label className="flex flex-col w-full">
            <p className="text-sm font-medium leading-normal pb-2">Target Protein ID</p>
            <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-text-light dark:text-text-dark focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-border-light dark:border-border-dark bg-white dark:bg-background-dark/50 h-12 placeholder:text-subtext-light dark:placeholder:text-subtext-dark p-3 text-base font-normal leading-normal" placeholder="e.g., PDB:1A2B" value=""/>
          </label>
          <label className="flex flex-col w-full">
            <p className="text-sm font-medium leading-normal pb-2">Desired Peptide Length</p>
            <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-text-light dark:text-text-dark focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-border-light dark:border-border-dark bg-white dark:bg-background-dark/50 h-12 placeholder:text-subtext-light dark:placeholder:text-subtext-dark p-3 text-base font-normal leading-normal" placeholder="e.g., 10" type="number" value=""/>
          </label>
          <label className="flex flex-col w-full">
            <p className="text-sm font-medium leading-normal pb-2">Graph Transformer Model</p>
            <select className="form-select flex w-full min-w-0 flex-1 overflow-hidden rounded-lg text-text-light dark:text-text-dark focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-border-light dark:border-border-dark bg-white dark:bg-background-dark/50 h-12 p-3 text-base font-normal leading-normal">
              <option>LightGNN-v2 (Recommended)</option>
              <option>LightGNN-v1</option>
              <option>Transformer-XL</option>
            </select>
          </label>
          <label className="flex flex-col w-full">
            <p className="text-sm font-medium leading-normal pb-2">BioPDB Dataset Version</p>
            <select className="form-select flex w-full min-w-0 flex-1 overflow-hidden rounded-lg text-text-light dark:text-text-dark focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-border-light dark:border-border-dark bg-white dark:bg-background-dark/50 h-12 p-3 text-base font-normal leading-normal">
              <option>BioPDB 2024-Q2</option>
              <option>BioPDB 2024-Q1</option>
              <option>BioPDB 2023-Q4</option>
            </select>
          </label>
          <div className="pt-4 border-t border-border-light dark:border-border-dark">
            <button
              onClick={handleGenerate}
              disabled={isLoading}
              className="flex w-full cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg h-12 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20 disabled:opacity-50"
            >
              <span className="material-symbols-outlined">auto_awesome</span>
              {isLoading ? 'Generating...' : 'Generate Peptides'}
            </button>
          </div>
          {isLoading && (
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
          <p className="text-sm font-medium text-subtext-light dark:text-subtext-dark">Showing {peptides.length} results</p>
        </div>
        {/* Card Grid */}
        <div className="grid grid-cols-1 @container md:grid-cols-2 xl:grid-cols-3 gap-6">
          {peptides.map((peptide, index) => (
            <div key={index} className="flex flex-col gap-5 p-5 rounded-xl bg-card-light dark:bg-card-dark backdrop-blur-xl border border-white/50 dark:border-white/10 shadow-lg shadow-gray-500/5 dark:shadow-black/20">
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
            </div>
          ))}
          {peptides.length === 0 && !isLoading && (
            <div className="lg:col-span-3 flex-1 flex flex-col items-center justify-center text-center p-10 border-2 border-dashed border-border-light dark:border-border-dark rounded-xl">
              <span className="material-symbols-outlined text-6xl text-subtext-light dark:text-subtext-dark opacity-50">science</span>
              <h3 className="text-xl font-bold mt-4">No Peptides Generated Yet</h3>
              <p className="text-subtext-light dark:text-subtext-dark mt-2 max-w-sm">Use the control panel on the left to configure your parameters and start a new generation process. Your results will appear here.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Generation;
