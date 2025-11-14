import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';

const Evaluation = () => {
  const navLinks = [
    { to: '/dashboard', label: 'Dashboard' },
    { to: '/evaluation', label: 'Evaluation' },
    { to: '/datasets', label: 'Datasets' },
    { to: '/models', label: 'Models' },
  ];

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <Header title="LightGNN-Peptide" navLinks={navLinks}>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[-0.015em]"
          >
            <span className="truncate">Export Report</span>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="hidden md:flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 gap-2 text-sm font-bold leading-normal tracking-[-0.015em] min-w-0 px-2.5"
          >
            <span className="material-symbols-outlined">settings</span>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="hidden md:flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 gap-2 text-sm font-bold leading-normal tracking-[-0.015em] min-w-0 px-2.5"
          >
            <span className="material-symbols-outlined">notifications</span>
          </motion.button>
          <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBM-VtDN70FkFKkGwIm7vOAVg9XXfH9pwJDfw4-5XHuOGr_tFmy_fmx6LjTqXYqhy4YcKTIZYeycu3HDZZ-328G57c8VkHTRIw5c5sQ2svw6kAp3DkZEBVVmX6cW8Dg7dOMyI-1LMVd8NkcS4o4eHWfxqPD3_5C5Hbu_ALk6Ny6b3WIGe7hzioQUQbKsk8GcpM7mNY_FBmp5SaopDHXnqTVtrt2NdxbCVmLijjzo-3vPdavnV3NHrViHO0-If40K77t1TtEVKaY0Ac")' }}></div>
        </Header>
        <motion.main
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex-1 px-4 sm:px-6 lg:px-8 py-8 w-full max-w-7xl mx-auto"
        >
          <div className="layout-content-container flex flex-col flex-1 gap-8">
            <div className="flex flex-wrap justify-between gap-4 items-start">
              <div className="flex min-w-72 flex-col gap-2">
                <p className="text-slate-900 dark:text-slate-50 text-4xl font-black leading-tight tracking-[-0.033em]">LightGNN-Peptide: Model Evaluation</p>
                <p className="text-slate-500 dark:text-slate-400 text-base font-normal leading-normal">Performance metrics for the peptide generation model trained on the BioPDB dataset.</p>
              </div>
            </div>
            <div className="flex gap-3 overflow-x-auto pb-2">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-slate-200 dark:bg-slate-800 px-4"
              >
                <p className="text-slate-900 dark:text-slate-50 text-sm font-medium leading-normal">Model Version: v1.2</p>
                <span className="material-symbols-outlined text-slate-500 dark:text-slate-400">expand_more</span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-slate-200 dark:bg-slate-800 px-4"
              >
                <p className="text-slate-900 dark:text-slate-50 text-sm font-medium leading-normal">Dataset: BioPDB</p>
                <span className="material-symbols-outlined text-slate-500 dark:text-slate-400">expand_more</span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-slate-200 dark:bg-slate-800 px-4"
              >
                <p className="text-slate-900 dark:text-slate-50 text-sm font-medium leading-normal">Date: Latest</p>
                <span className="material-symbols-outlined text-slate-500 dark:text-slate-400">expand_more</span>
              </motion.button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <motion.div
                whileHover={{ y: -4, boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.07), 0 4px 6px -4px rgba(0, 0, 0, 0.07)' }}
                className="flex flex-col gap-2 rounded-xl p-6 border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 backdrop-blur-sm"
              >
                <p className="text-slate-700 dark:text-slate-300 text-base font-medium leading-normal">Overall Validity</p>
                <p className="text-slate-900 dark:text-slate-50 tracking-tight text-3xl font-bold leading-tight">98.2%</p>
                <p className="text-green-600 dark:text-green-500 text-sm font-medium leading-normal">+1.5%</p>
              </motion.div>
              <motion.div
                whileHover={{ y: -4, boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.07), 0 4px 6px -4px rgba(0, 0, 0, 0.07)' }}
                className="flex flex-col gap-2 rounded-xl p-6 border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 backdrop-blur-sm"
              >
                <p className="text-slate-700 dark:text-slate-300 text-base font-medium leading-normal">Average Stability</p>
                <p className="text-slate-900 dark:text-slate-50 tracking-tight text-3xl font-bold leading-tight">0.91</p>
                <p className="text-green-600 dark:text-green-500 text-sm font-medium leading-normal">+0.02</p>
              </motion.div>
              <motion.div
                whileHover={{ y: -4, boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.07), 0 4px 6px -4px rgba(0, 0, 0, 0.07)' }}
                className="flex flex-col gap-2 rounded-xl p-6 border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 backdrop-blur-sm"
              >
                <p className="text-slate-700 dark:text-slate-300 text-base font-medium leading-normal">Uniqueness</p>
                <p className="text-slate-900 dark:text-slate-50 tracking-tight text-3xl font-bold leading-tight">99.7%</p>
                <p className="text-red-600 dark:text-red-500 text-sm font-medium leading-normal">-0.1%</p>
              </motion.div>
              <motion.div
                whileHover={{ y: -4, boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.07), 0 4px 6px -4px rgba(0, 0, 0, 0.07)' }}
                className="flex flex-col gap-2 rounded-xl p-6 border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 backdrop-blur-sm"
              >
                <p className="text-slate-700 dark:text-slate-300 text-base font-medium leading-normal">Diversity Score</p>
                <p className="text-slate-900 dark:text-slate-50 tracking-tight text-3xl font-bold leading-tight">0.85</p>
                <p className="text-green-600 dark:text-green-500 text-sm font-medium leading-normal">+0.04</p>
              </motion.div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <motion.div
                whileHover={{ y: -4, boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.07), 0 4px 6px -4px rgba(0, 0, 0, 0.07)' }}
                className="flex flex-col gap-4 rounded-xl border border-slate-200 dark:border-slate-800 p-6 bg-white/70 dark:bg-slate-900/70 backdrop-blur-sm"
              >
                <div className="flex flex-col">
                  <p className="text-slate-900 dark:text-slate-50 text-lg font-bold leading-normal">Performance Metrics</p>
                  <p className="text-slate-500 dark:text-slate-400 text-sm font-normal leading-normal">Comparison of key generation scores</p>
                </div>
                <div className="grid min-h-[240px] grid-flow-col gap-6 grid-rows-[1fr_auto] items-end justify-items-center px-3 pt-4">
                  <div className="w-full flex flex-col items-center gap-2"><div className="bg-primary/20 dark:bg-primary/30 w-full rounded-t-md" style={{ height: '98%' }}></div><p className="text-slate-600 dark:text-slate-400 text-xs font-bold leading-normal tracking-wide uppercase">Validity</p></div>
                  <div className="w-full flex flex-col items-center gap-2"><div className="bg-primary/20 dark:bg-primary/30 w-full rounded-t-md" style={{ height: '99%' }}></div><p className="text-slate-600 dark:text-slate-400 text-xs font-bold leading-normal tracking-wide uppercase">Uniqueness</p></div>
                  <div className="w-full flex flex-col items-center gap-2"><div className="bg-primary/20 dark:bg-primary/30 w-full rounded-t-md" style={{ height: '75%' }}></div><p className="text-slate-600 dark:text-slate-400 text-xs font-bold leading-normal tracking-wide uppercase">Novelty</p></div>
                  <div className="w-full flex flex-col items-center gap-2"><div className="bg-primary dark:bg-primary w-full rounded-t-md" style={{ height: '85%' }}></div><p className="text-slate-600 dark:text-slate-400 text-xs font-bold leading-normal tracking-wide uppercase">Diversity</p></div>
                </div>
              </motion.div>
              <motion.div
                whileHover={{ y: -4, boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.07), 0 4px 6px -4px rgba(0, 0, 0, 0.07)' }}
                className="flex flex-col gap-4 rounded-xl border border-slate-200 dark:border-slate-800 p-6 bg-white/70 dark:bg-slate-900/70 backdrop-blur-sm"
              >
                <div className="flex flex-col">
                  <p className="text-slate-900 dark:text-slate-50 text-lg font-bold leading-normal">Training Progression</p>
                  <p className="text-slate-500 dark:text-slate-400 text-sm font-normal leading-normal">Stability score over the last 100 epochs</p>
                </div>
                <div className="flex min-h-[240px] flex-1 flex-col gap-4 py-4">
                  <svg fill="none" height="100%" preserveAspectRatio="none" viewBox="-3 0 478 150" width="100%" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 109C18.1538 109 18.1538 21 36.3077 21C54.4615 21 54.4615 41 72.6154 41C90.7692 41 90.7692 93 108.923 93C127.077 93 127.077 33 145.231 33C163.385 33 163.385 101 181.538 101C199.692 101 199.692 61 217.846 61C236 61 236 45 254.154 45C272.308 45 272.308 121 290.462 121C308.615 121 308.615 149 326.769 149C344.923 149 344.923 1 363.077 1C381.231 1 381.231 81 399.385 81C417.538 81 417.538 129 435.692 129C453.846 129 453.846 25 472 25V149H0V109Z" fill="url(#chart-gradient)"></path>
                    <path d="M0 109C18.1538 109 18.1538 21 36.3077 21C54.4615 21 54.4615 41 72.6154 41C90.7692 41 90.7692 93 108.923 93C127.077 93 127.077 33 145.231 33C163.385 33 163.385 101 181.538 101C199.692 101 199.692 61 217.846 61C236 61 236 45 254.154 45C272.308 45 272.308 121 290.462 121C308.615 121 308.615 149 326.769 149C344.923 149 344.923 1 363.077 1C381.231 1 381.231 81 399.385 81C417.538 81 417.538 129 435.692 129C453.846 129 453.846 25 472 25" stroke="#137fec" strokeLinecap="round" strokeWidth="3"></path>
                    <defs>
                      <linearGradient gradientUnits="userSpaceOnUse" id="chart-gradient" x1="236" x2="236" y1="1" y2="149">
                        <stop stopColor="#137fec" stopOpacity="0.2"></stop>
                        <stop offset="1" stopColor="#137fec" stopOpacity="0"></stop>
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="flex justify-between -mt-4">
                    <p className="text-slate-500 dark:text-slate-400 text-xs font-bold tracking-wide">0</p>
                    <p className="text-slate-500 dark:text-slate-400 text-xs font-bold tracking-wide">20</p>
                    <p className="text-slate-500 dark:text-slate-400 text-xs font-bold tracking-wide">40</p>
                    <p className="text-slate-500 dark:text-slate-400 text-xs font-bold tracking-wide">60</p>
                    <p className="text-slate-500 dark:text-slate-400 text-xs font-bold tracking-wide">80</p>
                    <p className="text-slate-500 dark:text-slate-400 text-xs font-bold tracking-wide">100</p>
                  </div>
                </div>
              </motion.div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
              <motion.div
                whileHover={{ y: -4, boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.07), 0 4px 6px -4px rgba(0, 0, 0, 0.07)' }}
                className="lg:col-span-2 flex flex-col gap-4 rounded-xl border border-slate-200 dark:border-slate-800 p-6 bg-white/70 dark:bg-slate-900/70 backdrop-blur-sm"
              >
                <div className="flex flex-col">
                  <p className="text-slate-900 dark:text-slate-50 text-lg font-bold leading-normal">Overall Model Performance</p>
                  <p className="text-slate-500 dark:text-slate-400 text-sm font-normal leading-normal">Holistic view of key metrics</p>
                </div>
                <div className="flex items-center justify-center flex-1 h-full min-h-[250px]">
                  <img alt="A radar chart showing model performance metrics: Validity, Stability, Diversity, Uniqueness, and Novelty." className="w-full h-full object-contain dark:invert" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDMaDNeplp7QUI0xAzaTsnI_YZbMTApv4jjIuQSYjr0EqPWNQQEkLdzHU5SBEbYZV9WY7wpM2F2EeRyAd2uOcE6U3UR38kQqSNWX-tnxmggGf6U-uwp_U-jYPXCeQmrl_5ilZaNJvuGXcFEZ9v23fN2kMeiTuwaqurB22X8dC-ZPpJ14bI4A8WWGhe_Vi03k1Jvyx06ZdI07FNsh44OMormp6-c2hLENa3RCpvBkVgwRL7isUnraodrLaO8zYMwAICXEmAsgS9Kc2E" />
                </div>
              </motion.div>
              <motion.div
                whileHover={{ y: -4, boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.07), 0 4px 6px -4px rgba(0, 0, 0, 0.07)' }}
                className="lg:col-span-3 flex flex-col gap-4 rounded-xl border border-slate-200 dark:border-slate-800 p-6 bg-white/70 dark:bg-slate-900/70 backdrop-blur-sm"
              >
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
                      <tr>
                        <td className="p-3 text-sm font-mono text-slate-800 dark:text-slate-200">MNPQRSTVWY</td>
                        <td className="p-3 text-sm text-slate-600 dark:text-slate-300">0.92</td>
                        <td className="p-3 text-sm text-green-600 dark:text-green-500">Valid</td>
                      </tr>
                      <tr>
                        <td className="p-3 text-sm font-mono text-slate-800 dark:text-slate-200">YVWTSRQPNM</td>
                        <td className="p-3 text-sm text-slate-600 dark:text-slate-300">0.88</td>
                        <td className="p-3 text-sm text-green-600 dark:text-green-500">Valid</td>
                      </tr>
                      <tr>
                        <td className="p-3 text-sm font-mono text-slate-800 dark:text-slate-200">LKIGHFEDCA</td>
                        <td className="p-3 text-sm text-slate-600 dark:text-slate-300">0.98</td>
                        <td className="p-3 text-sm text-green-600 dark:text-green-500">Valid</td>
                      </tr>
                      <tr>
                        <td className="p-3 text-sm font-mono text-slate-800 dark:text-slate-200">GHIJKLMNPQ</td>
                        <td className="p-3 text-sm text-slate-600 dark:text-slate-300">0.85</td>
                        <td className="p-3 text-sm text-green-600 dark:text-green-500">Valid</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.main>
      </div>
    </div>
  );
};

export default Evaluation;
