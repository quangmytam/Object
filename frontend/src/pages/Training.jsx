import React, { useState, useEffect, useRef } from 'react';

const Training = () => {
  const [isTraining, setIsTraining] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [epoch, setEpoch] = useState(0);
  const [log, setLog] = useState('[INFO] Initializing LightGNN-Peptide model...\n');
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isTraining && !isPaused) {
      intervalRef.current = setInterval(() => {
        setEpoch(prev => {
          if (prev >= 100) {
            clearInterval(intervalRef.current);
            setIsTraining(false);
            setLog(prevLog => prevLog + '[INFO] Training finished.\n');
            return 100;
          }
          const newEpoch = prev + 1;
          const loss = (0.892 * Math.exp(-newEpoch / 50)).toFixed(3);
          const valAcc = (78.3 + 14 * (1 - Math.exp(-newEpoch / 25))).toFixed(1);
          setLog(prevLog => prevLog + `[TRAIN] Epoch ${newEpoch}/100 - Loss: ${loss}, Val Acc: ${valAcc}%\n`);
          return newEpoch;
        });
      }, 1000); // Update every second
    } else {
      clearInterval(intervalRef.current);
    }
    return () => clearInterval(intervalRef.current);
  }, [isTraining, isPaused]);

  const handleStart = () => {
    setEpoch(0);
    setLog('[INFO] Initializing LightGNN-Peptide model...\n[INFO] Loading dataset: BioPDB v1.2.\n[INFO] Found 15,789 peptide structures.\n');
    setIsTraining(true);
    setIsPaused(false);
  };

  const handlePause = () => {
    setIsPaused(prev => !prev);
  };

  const handleStop = () => {
    setIsTraining(false);
    setIsPaused(false);
    setEpoch(0);
    setLog(prev => prev + '[INFO] Training stopped by user.\n');
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Left Column: Configuration */}
      <div className="lg:col-span-1 flex flex-col gap-6">
         <div className="glass-card rounded-xl shadow-card p-6">
            <h2 className="text-xl font-bold tracking-tight mb-5">Model Configuration</h2>
            <div className="flex flex-col gap-4">
              <label className="flex flex-col">
                <p className="text-base font-medium pb-2">Model Architecture</p>
                <div className="relative">
                  <select className="form-input w-full resize-none overflow-hidden rounded-lg text-text-light dark:text-text-dark focus:outline-none focus:ring-2 focus:ring-primary/50 border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark h-12 p-3 text-base font-normal bg-no-repeat bg-right-3" style={{backgroundImage: 'url(\'data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2724px%27 height=%2724px%27 fill=%27%239ca3af%27 viewBox=%270 0 256 256%27%3e%3cpath d=%27M215.39 92.94a8 8 0 00-11.31 0L128 169.37 51.92 93.3a8 8 0 00-11.32 11.31l82.05 82.06a8 8 0 0011.32 0l81.42-81.42a8 8 0 000-11.31z%27%3e%3c/path%3e%3c/svg%3e\')'}}>
                    <option>Lightweight GTr</option>
                    <option>GATv2</option>
                    <option>Transformer-M</option>
                  </select>
                </div>
              </label>
              <label className="flex flex-col">
                <p className="text-base font-medium pb-2">Dataset</p>
                <div className="relative">
                  <select className="form-input w-full resize-none overflow-hidden rounded-lg text-text-light dark:text-text-dark focus:outline-none focus:ring-2 focus:ring-primary/50 border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark h-12 p-3 text-base font-normal bg-no-repeat bg-right-3" style={{backgroundImage: 'url(\'data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2724px%27 height=%2724px%27 fill=%27%239ca3af%27 viewBox=%270 0 256 256%27%3e%3cpath d=%27M215.39 92.94a8 8 0 00-11.31 0L128 169.37 51.92 93.3a8 8 0 00-11.32 11.31l82.05 82.06a8 8 0 0011.32 0l81.42-81.42a8 8 0 000-11.31z%27%3e%3c/path%3e%3c/svg%3e\')'}}>
                    <option>BioPDB v1.2</option>
                    <option>Custom Dataset Alpha</option>
                    <option>PeptideNet Benchmark</option>
                  </select>
                </div>
              </label>
            </div>
            <div className="border-t border-border-light dark:border-border-dark my-6"></div>
            <h3 className="text-base font-semibold mb-4">Hyperparameters</h3>
            <div className="grid grid-cols-2 gap-4">
                <label className="flex flex-col col-span-1">
                    <p className="text-sm font-medium pb-2">Learning Rate</p>
                    <input className="form-input w-full rounded-lg text-text-light dark:text-text-dark focus:outline-none focus:ring-2 focus:ring-primary/50 border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark h-12 p-3 text-base" type="text" value="0.001"/>
                </label>
                <label className="flex flex-col col-span-1">
                    <p className="text-sm font-medium pb-2">Batch Size</p>
                    <input className="form-input w-full rounded-lg text-text-light dark:text-text-dark focus:outline-none focus:ring-2 focus:ring-primary/50 border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark h-12 p-3 text-base" type="number" value="64"/>
                </label>
                <label className="flex flex-col col-span-2">
                    <div className="flex justify-between items-center pb-2">
                        <p className="text-sm font-medium">Epochs</p>
                        <span className="text-sm font-semibold text-primary">100</span>
                    </div>
                    <input className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer range-sm accent-primary" max="500" min="10" type="range" value="100"/>
                </label>
            </div>
         </div>
        <div className="flex gap-3">
          <button onClick={handleStart} disabled={isTraining} className="flex-1 flex items-center justify-center gap-2 rounded-lg h-12 bg-primary text-white text-base font-bold tracking-wide hover:bg-primary/90 transition-colors disabled:opacity-50">
            <span className="material-symbols-outlined">play_arrow</span>
            Start Training
          </button>
        </div>
      </div>
      {/* Right Column: Status & Visualization */}
      <div className="lg:col-span-2 flex flex-col gap-6">
        {/* Training Status Card */}
        <div className="glass-card rounded-xl shadow-card p-6">
          <h2 className="text-xl font-bold tracking-tight mb-4">Training Progress</h2>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
            <div className="flex items-center gap-3">
              <div className="relative inline-flex items-center justify-center size-12">
                <svg className="size-full" height="36" viewBox="0 0 36 36" width="36">
                  <circle className="stroke-current text-slate-200 dark:text-slate-700" cx="18" cy="18" fill="none" r="16" strokeWidth="3"></circle>
                  <circle className="stroke-current text-primary" cx="18" cy="18" fill="none" r="16" strokeDasharray="100" strokeDashoffset={100 - epoch} strokeLinecap="round" strokeWidth="3"></circle>
                </svg>
                <span className="absolute text-sm font-semibold">{epoch}%</span>
              </div>
              <div>
                <p className="font-semibold">Epoch {epoch}/100</p>
                <p className="text-sm text-text-light/70 dark:text-text-dark/70">Status: {isTraining ? (isPaused ? 'Paused' : 'Training...') : 'Idle'}</p>
              </div>
            </div>
            <div className="flex gap-2">
              <button onClick={handlePause} disabled={!isTraining} className="flex items-center justify-center gap-2 rounded-lg h-10 px-4 bg-primary/20 dark:bg-primary/30 text-primary text-sm font-bold hover:bg-primary/30 dark:hover:bg-primary/40 transition-colors disabled:opacity-50">
                <span className="material-symbols-outlined text-base">{isPaused ? 'play_arrow' : 'pause'}</span> {isPaused ? 'Resume' : 'Pause'}
              </button>
              <button onClick={handleStop} disabled={!isTraining} className="flex items-center justify-center gap-2 rounded-lg h-10 px-4 bg-red-500/20 text-red-500 text-sm font-bold hover:bg-red-500/30 transition-colors disabled:opacity-50">
                <span className="material-symbols-outlined text-base">stop</span> Stop
              </button>
            </div>
          </div>
        </div>
        {/* Log panel */}
        <div className="lg:col-span-3">
          <div className="glass-card rounded-xl shadow-card">
            <div className="p-6 border-b border-border-light dark:border-border-dark">
              <h2 className="text-xl font-bold tracking-tight">Console Log</h2>
            </div>
            <div className="p-6 bg-surface-dark/40 dark:bg-background-dark/80 rounded-b-xl h-64 overflow-y-auto">
              <pre className="text-sm font-mono text-text-light/90 dark:text-text-dark/90 whitespace-pre-wrap">
                <code>{log}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Training;
