import React from 'react';

const Evaluation = () => {
  return (
    <div className="layout-content-container flex flex-col flex-1 gap-8">
      <div className="flex flex-wrap justify-between gap-4 items-start">
        <div className="flex min-w-72 flex-col gap-2">
          <p className="text-slate-900 dark:text-slate-50 text-4xl font-black leading-tight tracking-[-0.033em]">LightGNN-Peptide: Model Evaluation</p>
          <p className="text-slate-500 dark:text-slate-400 text-base font-normal leading-normal">Performance metrics for the peptide generation model trained on the BioPDB dataset.</p>
        </div>
      </div>
      <div className="flex gap-3 overflow-x-auto pb-2">
        <button className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-slate-200 dark:bg-slate-800 px-4">
          <p className="text-slate-900 dark:text-slate-50 text-sm font-medium leading-normal">Model Version: v1.2</p>
          <span className="material-symbols-outlined text-slate-500 dark:text-slate-400">expand_more</span>
        </button>
        <button className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-slate-200 dark:bg-slate-800 px-4">
          <p className="text-slate-900 dark:text-slate-50 text-sm font-medium leading-normal">Dataset: BioPDB</p>
          <span className="material-symbols-outlined text-slate-500 dark:text-slate-400">expand_more</span>
        </button>
        <button className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-slate-200 dark:bg-slate-800 px-4">
          <p className="text-slate-900 dark:text-slate-50 text-sm font-medium leading-normal">Date: Latest</p>
          <span className="material-symbols-outlined text-slate-500 dark:text-slate-400">expand_more</span>
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* ... (Metric cards from HTML) ... */}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="flex flex-col gap-4 rounded-xl border border-slate-200 dark:border-slate-800 p-6 bg-white/70 dark:bg-slate-900/70 backdrop-blur-sm">
          {/* ... (Performance Metrics chart) ... */}
        </div>
        <div className="flex flex-col gap-4 rounded-xl border border-slate-200 dark:border-slate-800 p-6 bg-white/70 dark:bg-slate-900/70 backdrop-blur-sm">
          {/* ... (Training Progression chart) ... */}
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        <div className="lg:col-span-2 flex flex-col gap-4 rounded-xl border border-slate-200 dark:border-slate-800 p-6 bg-white/70 dark:bg-slate-900/70 backdrop-blur-sm">
          {/* ... (Overall Model Performance chart) ... */}
        </div>
        <div className="lg:col-span-3 flex flex-col gap-4 rounded-xl border border-slate-200 dark:border-slate-800 p-6 bg-white/70 dark:bg-slate-900/70 backdrop-blur-sm">
          <div className="flex flex-col">
            <p className="text-slate-900 dark:text-slate-50 text-lg font-bold leading-normal">Sample Generated Peptides</p>
            <p className="text-slate-500 dark:text-slate-400 text-sm font-normal leading-normal">A list of generated peptides with their scores</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-800">
                  <th className="p-3 text-sm font-semibold text-slate-600 dark:text-slate-400">Sequence</th>
                  <th className="p-3 text-sm font-semibold text-slate-600 dark:text-slate-400">Stability</th>
                  <th className="p-3 text-sm font-semibold text-slate-600 dark:text-slate-400">Validity</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                <tr>
                  <td className="p-3 text-sm font-mono text-slate-800 dark:text-slate-200">ACDEFGHIKL</td>
                  <td className="p-3 text-sm text-slate-600 dark:text-slate-300">0.95</td>
                  <td className="p-3 text-sm text-green-600 dark:text-green-500">Valid</td>
                </tr>
                {/* ... (more rows) ... */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Evaluation;
