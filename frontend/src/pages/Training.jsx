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
        {/* ... (Configuration panel from HTML) ... */}
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
