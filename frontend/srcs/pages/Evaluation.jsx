import React, { useState } from 'react';

const Evaluation = () => {
  const [modelVersion, setModelVersion] = useState('v1.2');
  const [dataset, setDataset] = useState('BioPDB');

  return (
    <div className="layout-content-container flex flex-col flex-1 gap-8">
      <div className="flex flex-wrap justify-between gap-4 items-start">
        <div className="flex min-w-72 flex-col gap-2">
          <p className="text-slate-900 dark:text-slate-50 text-4xl font-black leading-tight tracking-[-0.033em]">LightGNN-Peptide: Model Evaluation</p>
          <p className="text-slate-500 dark:text-slate-400 text-base font-normal leading-normal">Performance metrics for the peptide generation model trained on the BioPDB dataset.</p>
        </div>
      </div>
      <div className="flex gap-3 overflow-x-auto pb-2">
        <div className="dropdown">
          <button className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-slate-200 dark:bg-slate-800 px-4">
            <p className="text-slate-900 dark:text-slate-50 text-sm font-medium leading-normal">Model Version: {modelVersion}</p>
            <span className="material-symbols-outlined text-slate-500 dark:text-slate-400">expand_more</span>
          </button>
          <div className="dropdown-content">
            <a href="#" onClick={() => setModelVersion('v1.2')}>v1.2</a>
            <a href="#" onClick={() => setModelVersion('v1.1')}>v1.1</a>
            <a href="#" onClick={() => setModelVersion('v1.0')}>v1.0</a>
          </div>
        </div>
        <div className="dropdown">
          <button className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-slate-200 dark:bg-slate-800 px-4">
            <p className="text-slate-900 dark:text-slate-50 text-sm font-medium leading-normal">Dataset: {dataset}</p>
            <span className="material-symbols-outlined text-slate-500 dark:text-slate-400">expand_more</span>
          </button>
          <div className="dropdown-content">
            <a href="#" onClick={() => setDataset('BioPDB')}>BioPDB</a>
            <a href="#" onClick={() => setDataset('Custom Dataset Alpha')}>Custom Dataset Alpha</a>
            <a href="#" onClick={() => setDataset('PeptideNet Benchmark')}>PeptideNet Benchmark</a>
          </div>
        </div>
      </div>
      {/* ... (rest of the page content) ... */}
    </div>
  );
};

export default Evaluation;
