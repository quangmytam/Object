import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';

const Datasets = () => {
  const navLinks = [
    { to: '/dashboard', label: 'Dashboard' },
    { to: '/models', label: 'Models' },
    { to: '/results', label: 'Results' },
    { to: '/documentation', label: 'Documentation' },
  ];

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col">
      <Header title="LightGNN-Peptide" navLinks={navLinks}>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="flex cursor-pointer items-center justify-center rounded-lg h-10 w-10 bg-slate-200/50 dark:bg-slate-700/50 text-[#0d141b] dark:text-slate-200"
        >
          <span className="material-symbols-outlined text-xl">dark_mode</span>
        </motion.button>
        <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuASxvJpfTeJ6zDE7ZDed_dU88oDFtc_ksx9QdkEIMr3Ypo2CK_NzGnIoUW_n-s7WHCYPoxJb_KtEgVvFLxN7BwE2wrHw9dY5AZkGfWnHJqPROfDuN7cD5tlaXXNfg7CmV521-iK6GGVI8OUesgd9gdE75j0Owqiq-NGzKAG9XgcuwxPejD1Q864vpVOerkbTZ55KVw-UXB8iuEHzShe0nsoBkDr9S-c1VveKSm3Z149m3Odn5rtlg6teURz2vMX1AXTfWiKVEZRvl4")' }}></div>
      </Header>
      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex-1 p-6 sm:p-10"
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Left Column */}
          <div className="lg:col-span-1 flex flex-col gap-8">
            <motion.div
              whileHover={{ y: -4, boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.07), 0 4px 6px -4px rgba(0, 0, 0, 0.07)' }}
              className="glass-card rounded-xl shadow-sm"
            >
              <div className="p-6">
                <h1 className="text-[#0d141b] dark:text-white tracking-light text-xl font-bold leading-tight text-left">Dataset Management</h1>
              </div>
              <div className="flex flex-col p-6 pt-0">
                <div className="flex flex-col items-center gap-6 rounded-lg border-2 border-dashed border-[#cfdbe7] dark:border-slate-700 px-6 py-14">
                  <div className="flex max-w-[480px] flex-col items-center gap-2">
                    <p className="text-[#0d141b] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] max-w-[480px] text-center">Drag and drop PDB files</p>
                    <p className="text-slate-600 dark:text-slate-400 text-sm font-normal leading-normal max-w-[480px] text-center">Accepted file types: .pdb. Max file size: 100MB.</p>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-slate-200 dark:bg-slate-700 text-[#0d141b] dark:text-slate-200 text-sm font-bold leading-normal tracking-[0.015em] hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors"
                  >
                    <span className="truncate">Upload PDB File</span>
                  </motion.button>
                </div>
              </div>
            </motion.div>
            <motion.div
              whileHover={{ y: -4, boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.07), 0 4px 6px -4px rgba(0, 0, 0, 0.07)' }}
              className="glass-card rounded-xl shadow-sm flex-1 flex flex-col"
            >
              <div className="p-6">
                <h2 className="text-[#0d141b] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em]">Uploaded Datasets</h2>
              </div>
              <div className="flex-1 px-2 pb-4 overflow-y-auto">
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-4 bg-primary/20 dark:bg-primary/30 px-4 min-h-[72px] py-2 justify-between rounded-lg border border-primary">
                    <div className="flex items-center gap-4">
                      <div className="text-primary dark:text-white flex items-center justify-center rounded-lg bg-white/50 dark:bg-slate-700/50 shrink-0 size-12">
                        <span className="material-symbols-outlined text-2xl">biotech</span>
                      </div>
                      <div className="flex flex-col justify-center">
                        <p className="text-[#0d141b] dark:text-white text-base font-medium leading-normal line-clamp-1">peptide_model_alpha.pdb</p>
                        <p className="text-slate-600 dark:text-slate-300 text-sm font-normal leading-normal line-clamp-2">Uploaded: 2023-10-27</p>
                      </div>
                    </div>
                    <div className="shrink-0 flex items-center gap-2 text-sm font-medium text-green-700 dark:text-green-400">
                      <div className="size-2.5 rounded-full bg-green-500"></div>
                      <span>Analyzed</span>
                    </div>
                  </div>
                  <motion.div
                    whileHover={{ backgroundColor: 'rgba(203, 213, 225, 0.5)' }}
                    className="flex items-center gap-4 hover:bg-slate-200/50 dark:hover:bg-slate-800/50 px-4 min-h-[72px] py-2 justify-between rounded-lg cursor-pointer transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div className="text-slate-500 dark:text-slate-400 flex items-center justify-center rounded-lg bg-slate-200 dark:bg-slate-700 shrink-0 size-12">
                        <span className="material-symbols-outlined text-2xl">hourglass_top</span>
                      </div>
                      <div className="flex flex-col justify-center">
                        <p className="text-[#0d141b] dark:text-slate-200 text-base font-medium leading-normal line-clamp-1">complex_structure_beta.pdb</p>
                        <p className="text-slate-500 dark:text-slate-400 text-sm font-normal leading-normal line-clamp-2">Uploaded: 2023-10-26</p>
                      </div>
                    </div>
                    <div className="shrink-0 flex items-center gap-2 text-sm font-medium text-amber-600 dark:text-amber-400">
                      <div className="size-2.5 rounded-full bg-amber-500"></div>
                      <span>Processing</span>
                    </div>
                  </motion.div>
                  <motion.div
                    whileHover={{ backgroundColor: 'rgba(203, 213, 225, 0.5)' }}
                    className="flex items-center gap-4 hover:bg-slate-200/50 dark:hover:bg-slate-800/50 px-4 min-h-[72px] py-2 justify-between rounded-lg cursor-pointer transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div className="text-slate-500 dark:text-slate-400 flex items-center justify-center rounded-lg bg-slate-200 dark:bg-slate-700 shrink-0 size-12">
                        <span className="material-symbols-outlined text-2xl">science</span>
                      </div>
                      <div className="flex flex-col justify-center">
                        <p className="text-[#0d141b] dark:text-slate-200 text-base font-medium leading-normal line-clamp-1">inhibitor_target_gamma.pdb</p>
                        <p className="text-slate-500 dark:text-slate-400 text-sm font-normal leading-normal line-clamp-2">Uploaded: 2023-10-25</p>
                      </div>
                    </div>
                    <div className="shrink-0 flex items-center gap-2 text-sm font-medium text-slate-500 dark:text-slate-400">
                      <div className="size-2.5 rounded-full bg-slate-400"></div>
                      <span>Raw</span>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
          {/* Right Column */}
          <div className="lg:col-span-2 flex flex-col gap-8">
            <motion.div
              whileHover={{ y: -4, boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.07), 0 4px 6px -4px rgba(0, 0, 0, 0.07)' }}
              className="glass-card rounded-xl shadow-sm p-6 flex-col flex"
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-[#0d141b] dark:text-white text-xl font-bold leading-tight tracking-[-0.015em]">Analysis & Visualization</h2>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center gap-2 rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors"
                >
                  <span className="material-symbols-outlined text-lg">play_arrow</span>
                  <span className="truncate">Process Dataset</span>
                </motion.button>
              </div>
              <div className="glass-card rounded-xl shadow-sm p-6 flex-1 min-h-[400px]">
                <h3 className="text-[#0d141b] dark:text-white font-bold text-lg mb-2">3D Structure Viewer</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">Viewing: peptide_model_alpha.pdb</p>
                <div className="bg-slate-200/50 dark:bg-slate-800/50 rounded-lg h-full flex items-center justify-center relative overflow-hidden">
                  <img alt="3D rendering of a peptide molecular structure" className="w-full h-full object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCLTFomW4Mqc_mcSAQpXhex8AjVGd-1QGbN2EaHV-2ogtPtdRvl61kYXHHY_hSqp9QU0Nx5fceeYuRSIalgS66iU3Bds1PMqOBlPLOqzU7quZRDZB9JiAZ-LouGF00AQ0j3Oymcb6nNX361WTZQcwopugEILjJRHMH7k650wFW-iYJZmd22b1XEjvxpVkJeP1F6_pIv_NlsdxCqIbePfmXLw0cAZ6Tu0ndky5bEVI8UzSTs21JYydUte42piXZZjD4GO3cYqiThFkw" />
                  <div className="absolute bottom-4 right-4 flex gap-2">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="size-9 rounded-lg bg-white/70 dark:bg-slate-900/70 flex items-center justify-center shadow-md"
                    >
                      <span className="material-symbols-outlined text-lg">zoom_in</span>
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="size-9 rounded-lg bg-white/70 dark:bg-slate-900/70 flex items-center justify-center shadow-md"
                    >
                      <span className="material-symbols-outlined text-lg">zoom_out</span>
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="size-9 rounded-lg bg-white/70 dark:bg-slate-900/70 flex items-center justify-center shadow-md"
                    >
                      <span className="material-symbols-outlined text-lg">360</span>
                    </motion.button>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                <motion.div
                  whileHover={{ y: -4, boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.07), 0 4px 6px -4px rgba(0, 0, 0, 0.07)' }}
                  className="glass-card rounded-xl p-4 shadow-sm"
                >
                  <h4 className="text-base font-bold text-[#0d141b] dark:text-white mb-2">Structural Properties</h4>
                  <div className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
                    <div className="flex justify-between"><span>Atom Count:</span> <span className="font-medium text-[#0d141b] dark:text-white">1,204</span></div>
                    <div className="flex justify-between"><span>Bond Count:</span> <span className="font-medium text-[#0d141b] dark:text-white">1,238</span></div>
                    <div className="flex justify-between"><span>Residues:</span> <span className="font-medium text-[#0d141b] dark:text-white">78</span></div>
                  </div>
                </motion.div>
                <motion.div
                  whileHover={{ y: -4, boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.07), 0 4px 6px -4px rgba(0, 0, 0, 0.07)' }}
                  className="glass-card rounded-xl p-4 shadow-sm"
                >
                  <h4 className="text-base font-bold text-[#0d141b] dark:text-white mb-2">Graph Metrics</h4>
                  <div className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
                    <div className="flex justify-between"><span>Node Count:</span> <span className="font-medium text-[#0d141b] dark:text-white">1,204</span></div>
                    <div className="flex justify-between"><span>Edge Count:</span> <span className="font-medium text-[#0d141b] dark:text-white">2,476</span></div>
                    <div className="flex justify-between"><span>Density:</span> <span className="font-medium text-[#0d141b] dark:text-white">0.0017</span></div>
                  </div>
                </motion.div>
                <motion.div
                  whileHover={{ y: -4, boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.07), 0 4px 6px -4px rgba(0, 0, 0, 0.07)' }}
                  className="glass-card rounded-xl p-4 shadow-sm flex flex-col justify-center items-center"
                >
                  <h4 className="text-base font-bold text-[#0d141b] dark:text-white mb-2">Model Readiness</h4>
                  <div className="flex items-center gap-2 text-green-700 dark:text-green-400 font-bold">
                    <span className="material-symbols-outlined">check_circle</span>
                    <span>Ready</span>
                  </div>
                </motion.div>
              </div>
              <motion.div
                whileHover={{ y: -4, boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.07), 0 4px 6px -4px rgba(0, 0, 0, 0.07)' }}
                className="mt-6 glass-card rounded-xl p-4 shadow-sm"
              >
                <h4 className="text-base font-bold text-[#0d141b] dark:text-white mb-2">Node Degree Distribution</h4>
                <div className="w-full h-40 flex items-center justify-center">
                  <img alt="A line chart showing the node degree distribution with a peak around degree 2" className="w-full h-full object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBEaFcpknaPuzA_N2GbqyByTtm_PXCuSZIA42kl4V3x9LPbs6p4qdJ17Ly96VT03yw3RaN5Cn9DB16ZdY-ub5H9d3MiqnU4BNvkm0Z45a7Vywp6bsV9JY7n-OyRlbBqqUZIsPMX7Ki5X9sqJ6HdFyKAbcA_u7NuY2PzPs0ARy4eqodzjwB7sGQN8jbwcggj-AnZXTMfETeLFsdR7RDsa6s0oCgRRuxr46qto1-CUj3Ly7_tldH1xXfVmChZmBImCWEC25X1NjzrI5s" />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.main>
    </div>
  );
};

export default Datasets;
