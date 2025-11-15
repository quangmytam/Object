import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import PageLayout from '../components/PageLayout';

const Training = () => {
  const [epochs, setEpochs] = useState(100);
  const [currentEpoch, setCurrentEpoch] = useState(0);
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState('Idle');
  const [logs, setLogs] = useState([]);
  const trainingInterval = useRef(null);

  const startTraining = () => {
    setStatus('Training...');
    setLogs(['[INFO] Initializing LightGNN-Peptide model...', '[INFO] Loading dataset: BioPDB v1.2.', '[INFO] Found 15,789 peptide structures.']);
    trainingInterval.current = setInterval(() => {
      setCurrentEpoch((prev) => {
        if (prev < epochs) {
          const newEpoch = prev + 1;
          setProgress((newEpoch / epochs) * 100);
          setLogs((prevLogs) => [...prevLogs, `[TRAIN] Epoch ${newEpoch}/${epochs} - Loss: ${Math.random().toFixed(3)}, Val Acc: ${(Math.random() * 10 + 80).toFixed(2)}%`]);
          return newEpoch;
        }
        stopTraining('Completed');
        return prev;
      });
    }, 1000);
  };

  const pauseTraining = () => {
    if (status === 'Training...') {
      setStatus('Paused');
      clearInterval(trainingInterval.current);
    } else if (status === 'Paused') {
      startTraining();
    }
  };

  const stopTraining = (finalStatus = 'Stopped') => {
    setStatus(finalStatus);
    clearInterval(trainingInterval.current);
    setCurrentEpoch(0);
    setProgress(0);
  };

  useEffect(() => {
    return () => clearInterval(trainingInterval.current);
  }, []);

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
      <div className="max-w-7xl mx-auto">
        {/* Page Heading */}
        <div className="mb-8">
          <p className="text-4xl font-black leading-tight tracking-tighter">Model Training Dashboard</p>
        </div>
        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column: Configuration */}
          <div className="lg:col-span-1 flex flex-col gap-6">
            <motion.div
              whileHover={{ y: -4, boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.07), 0 4px 6px -4px rgba(0, 0, 0, 0.07)' }}
              className="glass-card rounded-xl shadow-card p-6"
            >
              <h2 className="text-xl font-bold tracking-tight mb-5">Model Configuration</h2>
              {/* Dataset Selection */}
              <div className="flex flex-col gap-4">
                <label className="flex flex-col">
                  <p className="text-base font-medium pb-2">Model Architecture</p>
                  <div className="relative">
                    <select className="form-input w-full resize-none overflow-hidden rounded-lg text-text-light dark:text-text-dark focus:outline-none focus:ring-2 focus:ring-primary/50 border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark h-12 p-3 text-base font-normal bg-no-repeat bg-right-3" style={{ backgroundImage: "url('data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2724px%27 height=%2724px%27 fill=%27%239ca3af%27 viewBox=%270 0 256 256%27%3e%3cpath d=%27M215.39 92.94a8 8 0 00-11.31 0L128 169.37 51.92 93.3a8 8 0 00-11.32 11.31l82.05 82.06a8 8 0 0011.32 0l81.42-81.42a8 8 0 000-11.31z%27%3e%3c/path%3e%3c/svg%3e')" }}>
                      <option>Lightweight GTr</option>
                      <option>GATv2</option>
                      <option>Transformer-M</option>
                    </select>
                  </div>
                </label>
                <label className="flex flex-col">
                  <p className="text-base font-medium pb-2">Dataset</p>
                  <div className="relative">
                    <select className="form-input w-full resize-none overflow-hidden rounded-lg text-text-light dark:text-text-dark focus:outline-none focus:ring-2 focus:ring-primary/50 border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark h-12 p-3 text-base font-normal bg-no-repeat bg-right-3" style={{ backgroundImage: "url('data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2724px%27 height=%2724px%27 fill=%27%239ca3af%27 viewBox=%270 0 256 256%27%3e%3cpath d=%27M215.39 92.94a8 8 0 00-11.31 0L128 169.37 51.92 93.3a8 8 0 00-11.32 11.31l82.05 82.06a8 8 0 0011.32 0l81.42-81.42a8 8 0 000-11.31z%27%3e%3c/path%3e%3c/svg%3e')" }}>
                      <option>BioPDB v1.2</option>
                      <option>Custom Dataset Alpha</option>
                      <option>PeptideNet Benchmark</option>
                    </select>
                  </div>
                </label>
              </div>
              {/* Hyperparameters */}
              <div className="border-t border-border-light dark:border-border-dark my-6"></div>
              <h3 className="text-base font-semibold mb-4">Hyperparameters</h3>
              <div className="grid grid-cols-2 gap-4">
                <label className="flex flex-col col-span-1">
                  <p className="text-sm font-medium pb-2">Learning Rate</p>
                  <input className="form-input w-full rounded-lg text-text-light dark:text-text-dark focus:outline-none focus:ring-2 focus:ring-primary/50 border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark h-12 p-3 text-base" type="text" defaultValue="0.001" />
                </label>
                <label className="flex flex-col col-span-1">
                  <p className="text-sm font-medium pb-2">Batch Size</p>
                  <input className="form-input w-full rounded-lg text-text-light dark:text-text-dark focus:outline-none focus:ring-2 focus:ring-primary/50 border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark h-12 p-3 text-base" type="number" defaultValue="64" />
                </label>
                <label className="flex flex-col col-span-2">
                  <div className="flex justify-between items-center pb-2">
                    <p className="text-sm font-medium">Epochs</p>
                    <span className="text-sm font-semibold text-primary">{epochs}</span>
                  </div>
                  <input
                    className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer range-sm accent-primary"
                    max="500"
                    min="10"
                    type="range"
                    value={epochs}
                    onChange={(e) => setEpochs(parseInt(e.target.value))}
                  />
                </label>
              </div>
              {/* Advanced Options */}
              <div className="border-t border-border-light dark:border-border-dark my-6"></div>
              <div className="flex items-center justify-between">
                <label className="text-base font-medium cursor-pointer" htmlFor="early-stopping">Enable Early Stopping</label>
                <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
                  <input defaultChecked className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white dark:bg-gray-800 border-4 border-slate-300 dark:border-gray-600 appearance-none cursor-pointer checked:right-0 checked:border-primary" id="early-stopping" name="toggle" type="checkbox" />
                  <label className="toggle-label block overflow-hidden h-6 rounded-full bg-slate-300 dark:bg-gray-600 cursor-pointer" htmlFor="early-stopping"></label>
                </div>
              </div>
              {/* Action Buttons */}
              <div className="border-t border-border-light dark:border-border-dark my-6"></div>
              <div className="flex gap-3">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={startTraining}
                  disabled={status === 'Training...'}
                  className="flex-1 flex items-center justify-center gap-2 rounded-lg h-12 bg-primary text-white text-base font-bold tracking-wide hover:bg-primary/90 transition-colors"
                >
                  <span className="material-symbols-outlined">play_arrow</span>
                  Start Training
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => {
                    stopTraining();
                    setLogs([]);
                  }}
                  className="flex items-center justify-center rounded-lg h-12 w-12 bg-slate-200 dark:bg-slate-700 text-text-light dark:text-text-dark hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors"
                >
                  <span className="material-symbols-outlined">refresh</span>
                </motion.button>
              </div>
            </motion.div>
          </div>
          {/* Right Column: Status & Visualization */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            {/* Training Status Card */}
            <motion.div
              whileHover={{ y: -4, boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.07), 0 4px 6px -4px rgba(0, 0, 0, 0.07)' }}
              className="glass-card rounded-xl shadow-card p-6"
            >
              <h2 className="text-xl font-bold tracking-tight mb-4">Training Progress</h2>
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <div className="relative inline-flex items-center justify-center size-12">
                    <svg className="size-full" height="36" viewBox="0 0 36 36" width="36" xmlns="http://www.w3.org/2000/svg">
                      <circle className="stroke-current text-slate-200 dark:text-slate-700" cx="18" cy="18" fill="none" r="16" strokeWidth="3"></circle>
                      <circle
                        className="stroke-current text-primary"
                        cx="18"
                        cy="18"
                        fill="none"
                        r="16"
                        strokeDasharray="100"
                        strokeDashoffset={100 - progress}
                        strokeLinecap="round"
                        strokeWidth="3"
                      ></circle>
                    </svg>
                    <span className="absolute text-sm font-semibold">{`${Math.round(progress)}%`}</span>
                  </div>
                  <div>
                    <p className="font-semibold">{`Epoch ${currentEpoch}/${epochs}`}</p>
                    <p className="text-sm text-text-light/70 dark:text-text-dark/70">{`Status: ${status}`}</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={pauseTraining}
                    disabled={status !== 'Training...' && status !== 'Paused'}
                    className="flex items-center justify-center gap-2 rounded-lg h-10 px-4 bg-primary/20 dark:bg-primary/30 text-primary text-sm font-bold hover:bg-primary/30 dark:hover:bg-primary/40 transition-colors"
                  >
                    <span className="material-symbols-outlined text-base">{status === 'Training...' ? 'pause' : 'play_arrow'}</span>
                    {status === 'Training...' ? 'Pause' : 'Resume'}
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => stopTraining()}
                    disabled={status === 'Idle' || status === 'Completed'}
                    className="flex items-center justify-center gap-2 rounded-lg h-10 px-4 bg-red-500/20 text-red-500 text-sm font-bold hover:bg-red-500/30 transition-colors"
                  >
                    <span className="material-symbols-outlined text-base">stop</span> Stop
                  </motion.button>
                </div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center md:text-left">
                <div className="bg-background-light dark:bg-background-dark p-4 rounded-lg">
                  <p className="text-xs uppercase text-text-light/60 dark:text-text-dark/60 font-semibold tracking-wider">Current Loss</p>
                  <p className="text-2xl font-semibold mt-1">0.183</p>
                </div>
                <div className="bg-background-light dark:bg-background-dark p-4 rounded-lg">
                  <p className="text-xs uppercase text-text-light/60 dark:text-text-dark/60 font-semibold tracking-wider">Validation Acc.</p>
                  <p className="text-2xl font-semibold mt-1">92.4%</p>
                </div>
                <div className="bg-background-light dark:bg-background-dark p-4 rounded-lg">
                  <p className="text-xs uppercase text-text-light/60 dark:text-text-dark/60 font-semibold tracking-wider">Elapsed Time</p>
                  <p className="text-2xl font-semibold mt-1">1h 12m</p>
                </div>
                <div className="bg-background-light dark:bg-background-dark p-4 rounded-lg">
                  <p className="text-xs uppercase text-text-light/60 dark:text-text-dark/60 font-semibold tracking-wider">ETA</p>
                  <p className="text-2xl font-semibold mt-1">~2h 5m</p>
                </div>
              </div>
            </motion.div>
            {/* Dynamic Loss Chart Card */}
            <motion.div
              whileHover={{ y: -4, boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.07), 0 4px 6px -4px rgba(0, 0, 0, 0.07)' }}
              className="glass-card rounded-xl shadow-card p-6 flex-1"
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold tracking-tight">Training & Validation Loss</h2>
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-2"><span className="size-3 rounded-sm bg-primary"></span>Training</div>
                  <div className="flex items-center gap-2"><span className="size-3 rounded-sm bg-cyan-400"></span>Validation</div>
                </div>
              </div>
              <div>
                <img className="w-full h-auto object-cover rounded-lg aspect-[16/7]" alt="A line chart showing training and validation loss over epochs, with the training loss in blue decreasing steadily and the validation loss in teal decreasing and then slightly plateauing." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCOmZUFOVuwnLlsG_w-4qBhrKOPcfj9MaAIZh9kBZF33PCyaXlNxp_xEy2YxpenTNG2k76dzl-i48Ct1rghMo85emoKngPvKWIxwtv-Gn9F4tKVWgI4K6kCi1fHBYJl4eTBrYBvoiBmdOtfYKUoRMOIwZgM_-gVGjb8HbuxOCEte06CytWsw0C2Q976Bq_QH7oRSrUAzVCPcIdxn0aL50CCbKyh5UphBDSH-KLeBRADLfnX93Mb-Ubb2HfU4sTugkvoMhUJXWAztU" />
              </div>
            </motion.div>
          </div>
          {/* Log panel */}
          <div className="lg:col-span-3">
            <motion.div
              whileHover={{ y: -4, boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.07), 0 4px 6px -4px rgba(0, 0, 0, 0.07)' }}
              className="glass-card rounded-xl shadow-card"
            >
              <div className="p-6 border-b border-border-light dark:border-border-dark">
                <h2 className="text-xl font-bold tracking-tight">Console Log</h2>
              </div>
              <div className="p-6 bg-surface-dark/40 dark:bg-background-dark/80 rounded-b-xl h-64 overflow-y-auto">
                <pre className="text-sm font-mono text-text-light/90 dark:text-text-dark/90 whitespace-pre-wrap">
                  <code className="language-bash">{logs.join('\n')}</code>
                </pre>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Training;
