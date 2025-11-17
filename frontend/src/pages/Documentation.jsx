import React from 'react';

const Documentation = () => {
  return (
    <div className="flex min-h-screen">
      <aside className="fixed top-0 left-0 z-40 w-72 h-screen transition-transform -translate-x-full sm:translate-x-0 bg-white/70 dark:bg-background-dark/70 backdrop-blur-lg border-r border-gray-200/50 dark:border-gray-700/50">
        <div className="h-full px-4 py-6 overflow-y-auto flex flex-col">
          <div className="flex items-center gap-3 mb-6">
            <div
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
              data-alt="Abstract logo for a bioinformatics system"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA_h4wkSmhCDzCrbVfpD68IWPtYfYhrJEEFDGftBxq6BvSEkSFBhNhYq0dffBy32j-UnXLziHrGD87DMC3-htQ2YuwlGv26Np9oN9lkUtzHEURG1q6n59eBOUAPNrKMLfSSjrbfl2EfBpxf8qCMbBGt4c0IHHTh3le_TyijWdZ3AIZLKaCf6P2EJHGbj0lMMq9icOKK7cIbNoVtxIiRuQB5mlCcJTb3Ok7jSABd1ilrxF8rkWtV9K51NV-Oa6HsXIdQMjTf9Wf_IjM")',
              }}
            ></div>
            <div className="flex flex-col">
              <h1 className="text-gray-900 dark:text-white text-base font-bold leading-normal">LightGNN-Peptide</h1>
              <p className="text-gray-500 dark:text-gray-400 text-sm font-normal leading-normal">
                AI Bioinformatics System
              </p>
            </div>
          </div>
          <div className="px-0 py-3 mb-4">
            <label className="flex flex-col min-w-40 h-11 w-full">
              <div className="flex w-full flex-1 items-stretch rounded-lg h-full">
                <div className="text-gray-500 dark:text-gray-400 flex border-none bg-gray-100 dark:bg-gray-800 items-center justify-center pl-4 rounded-l-lg border-r-0">
                  <span className="material-symbols-outlined text-2xl">search</span>
                </div>
                <input
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-gray-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border-none bg-gray-100 dark:bg-gray-800 focus:border-none h-full placeholder:text-gray-500 dark:placeholder:text-gray-400 px-4 rounded-l-none border-l-0 pl-2 text-sm font-normal leading-normal"
                  placeholder="Deep search..."
                  defaultValue=""
                />
              </div>
            </label>
          </div>
          <nav className="flex-grow">
            <div className="flex flex-col">
              <a
                className="flex cursor-pointer items-center justify-between gap-6 py-2.5 rounded-lg px-3 hover:bg-primary/5 dark:hover:bg-primary/10"
                href="#"
              >
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-gray-600 dark:text-gray-300">info</span>
                  <p className="text-gray-800 dark:text-gray-200 text-sm font-medium leading-normal">Introduction</p>
                </div>
              </a>
              <details className="flex flex-col group">
                <summary className="flex cursor-pointer items-center justify-between gap-6 py-2.5 rounded-lg px-3 hover:bg-primary/5 dark:hover:bg-primary/10">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-gray-600 dark:text-gray-300">school</span>
                    <p className="text-gray-800 dark:text-gray-200 text-sm font-medium leading-normal">Tutorials</p>
                  </div>
                  <span className="material-symbols-outlined text-gray-600 dark:text-gray-300 group-open:rotate-180 transition-transform duration-200">
                    expand_more
                  </span>
                </summary>
                <div className="pl-7 mt-1 space-y-1 border-l-2 border-primary/20 ml-5">
                  <a
                    className="block text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary text-sm py-1"
                    href="#"
                  >
                    Installation
                  </a>
                  <a
                    className="block text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary text-sm py-1"
                    href="#"
                  >
                    Data Preparation
                  </a>
                  <a
                    className="block text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary text-sm py-1"
                    href="#"
                  >
                    Running a Prediction
                  </a>
                </div>
              </details>
              <details className="flex flex-col group" open>
                <summary className="flex cursor-pointer items-center justify-between gap-6 py-2.5 rounded-lg bg-primary/10 dark:bg-primary/20 px-3">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined fill text-primary">science</span>
                    <p className="text-primary text-sm font-bold leading-normal">Core Research</p>
                  </div>
                  <span className="material-symbols-outlined text-gray-600 dark:text-gray-300 group-open:rotate-180 transition-transform duration-200">
                    expand_more
                  </span>
                </summary>
                <div className="pl-7 mt-1 space-y-1 border-l-2 border-primary/20 ml-5">
                  <a
                    className="block text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary text-sm py-1"
                    href="#"
                  >
                    Project Overview
                  </a>
                  <a className="block text-primary dark:text-primary font-semibold text-sm py-1" href="#">
                    Model Architecture
                  </a>
                  <a
                    className="block text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary text-sm py-1"
                    href="#"
                  >
                    Results & Validation
                  </a>
                  <a
                    className="block text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary text-sm py-1"
                    href="#"
                  >
                    Citation & Papers
                  </a>
                </div>
              </details>
              <details className="flex flex-col group">
                <summary className="flex cursor-pointer items-center justify-between gap-6 py-2.5 rounded-lg px-3 hover:bg-primary/5 dark:hover:bg-primary/10">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-gray-600 dark:text-gray-300">biotech</span>
                    <p className="text-gray-800 dark:text-gray-200 text-sm font-medium leading-normal">Technical Specs</p>
                  </div>
                  <span className="material-symbols-outlined text-gray-600 dark:text-gray-300 group-open:rotate-180 transition-transform duration-200">
                    expand_more
                  </span>
                </summary>
                <div className="pl-7 mt-1 space-y-1 border-l-2 border-primary/20 ml-5">
                  <a
                    className="block text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary text-sm py-1"
                    href="#"
                  >
                    Training Data
                  </a>
                  <a
                    className="block text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary text-sm py-1"
                    href="#"
                  >
                    Environment Setup
                  </a>
                  <a
                    className="block text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary text-sm py-1"
                    href="#"
                  >
                    API Reference
                  </a>
                </div>
              </details>
              <a
                className="flex cursor-pointer items-center justify-between gap-6 py-2.5 rounded-lg px-3 hover:bg-primary/5 dark:hover:bg-primary/10"
                href="#"
              >
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-gray-600 dark:text-gray-300">article</span>
                  <p className="text-gray-800 dark:text-gray-200 text-sm font-medium leading-normal">Changelog</p>
                </div>
              </a>
              <a
                className="flex cursor-pointer items-center justify-between gap-6 py-2.5 rounded-lg px-3 hover:bg-primary/5 dark:hover:bg-primary/10"
                href="#"
              >
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-gray-600 dark:text-gray-300">group</span>
                  <p className="text-gray-800 dark:text-gray-200 text-sm font-medium leading-normal">Contributing</p>
                </div>
              </a>
            </div>
          </nav>
          <div className="mt-auto pt-6 flex flex-col gap-2">
            <button className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors">
              <span className="truncate">Contact Us</span>
            </button>
            <a
              className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              href="#"
            >
              <span className="material-symbols-outlined text-gray-600 dark:text-gray-300">settings</span>
              <p className="text-gray-800 dark:text-gray-200 text-sm font-medium leading-normal">Settings</p>
            </a>
            <a
              className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              href="#"
            >
              <span className="material-symbols-outlined text-gray-600 dark:text-gray-300">help</span>
              <p className="text-gray-800 dark:text-gray-200 text-sm font-medium leading-normal">Help</p>
            </a>
          </div>
        </div>
      </aside>
      <main className="sm:ml-72 flex-1 p-6 lg:p-10">
        <div className="max-w-4xl mx-auto flex gap-8">
          <div className="w-full lg:w-[calc(100%-16rem)] flex-shrink-0 space-y-8">
            <div className="bg-white/50 dark:bg-background-dark/50 backdrop-blur-lg rounded-xl p-6 shadow-sm border border-gray-200/50 dark:border-gray-700/50">
              <div className="flex flex-wrap gap-2 mb-4">
                <a
                  className="text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary text-sm font-medium leading-normal"
                  href="#"
                >
                  Docs
                </a>
                <span className="text-gray-400 dark:text-gray-500 text-sm font-medium leading-normal">/</span>
                <a
                  className="text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary text-sm font-medium leading-normal"
                  href="#"
                >
                  Core Research
                </a>
                <span className="text-gray-400 dark:text-gray-500 text-sm font-medium leading-normal">/</span>
                <span className="text-gray-800 dark:text-white text-sm font-medium leading-normal">
                  Model Architecture
                </span>
              </div>
              <div className="flex flex-wrap justify-between gap-3">
                <div className="flex min-w-72 flex-col gap-2">
                  <h1
                    className="text-gray-900 dark:text-white text-4xl font-black leading-tight tracking-[-0.033em]"
                    id="page-title"
                  >
                    Model Architecture
                  </h1>
                  <p className="text-gray-600 dark:text-gray-300 text-base font-normal leading-normal">
                    An in-depth look at the lightweight Graph Transformer model powering our system.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white/50 dark:bg-background-dark/50 backdrop-blur-lg rounded-xl p-8 shadow-sm border border-gray-200/50 dark:border-gray-700/50 space-y-8 prose prose-slate dark:prose-invert max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-a:text-primary hover:prose-a:text-primary/80 prose-code:bg-gray-100 dark:prose-code:bg-gray-800 prose-code:p-1 prose-code:rounded">
              <section id="abstract">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Abstract</h2>
                <p>
                  The LightGNN-Peptide system leverages a novel lightweight Graph Transformer (GTR) architecture
                  specifically designed for the efficient analysis of protein structures from BioPDB data. This model aims
                  to predict the stability of short peptides, a computationally intensive task, by focusing on key
                  structural relationships and minimizing parameter overhead. Our approach combines graph neural networks
                  (GNNs) for local feature extraction with a streamlined transformer mechanism for capturing long-range
                  dependencies within the molecular graph.
                </p>
                <div className="mt-6 p-4 rounded-lg bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-500/30 flex items-start gap-4">
                  <span className="material-symbols-outlined text-blue-500 mt-1">lightbulb</span>
                  <div>
                    <h3 className="font-semibold text-blue-800 dark:text-blue-300">Key Innovation</h3>
                    <p className="text-blue-700 dark:text-blue-400">
                      The core innovation lies in a sparse attention mechanism tailored for protein graphs, significantly
                      reducing the computational complexity from O(n<sup>2</sup>) to O(n log n) while maintaining high predictive
                      accuracy.
                    </p>
                  </div>
                </div>
              </section>
              <section id="graph-representation">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Graph Representation</h2>
                <p>Each protein structure is converted into a graph G = (V, E), where:</p>
                <ul className="list-disc pl-5 space-y-2 mt-4">
                  <li>
                    <strong>Nodes (V)</strong>: Represent individual amino acids. Node features include amino acid type,
                    secondary structure information, and solvent accessibility.
                  </li>
                  <li>
                    <strong>Edges (E)</strong>: Represent spatial proximity between amino acids. An edge exists if the Cα
                    distance between two residues is below a specified threshold (e.g., 8Å). Edge features can include
                    distance and orientation.
                  </li>
                </ul>
                <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto text-sm mt-4">
                  <code className="language-python">
                    {`# Example node feature vector
node_features = [
    # --- One-hot encoded amino acid type (20) ---
    0, 1, 0, ..., 0,
    # --- Secondary structure (Helix, Sheet, Coil) ---
    1, 0, 0,
    # --- Solvent Accessibility (float) ---
    0.78
]`}
                  </code>
                </pre>
              </section>
              <section id="attention-mechanism">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Sparse Graph Attention</h2>
                <p>
                  Unlike standard transformers that compute attention over all pairs of tokens, our model calculates
                  attention only over a node's local neighborhood and a set of globally important "hub" nodes. This is
                  defined by the equation:
                </p>
                <div className="my-4 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg overflow-x-auto">
                  <p className="text-center font-mono text-sm tracking-wider">
                    Attention(Q, K, V) = softmax( (QK<sup>T</sup>) / √d<sub>k</sub> )V
                  </p>
                </div>
                <p>
                  Where Q, K, and V are derived from node embeddings, and the attention matrix is masked to enforce
                  sparsity. This ensures computational tractability even for large protein complexes.
                </p>
              </section>
            </div>
            <div className="flex justify-between items-center bg-white/50 dark:bg-background-dark/50 backdrop-blur-lg rounded-xl px-6 py-4 shadow-sm border border-gray-200/50 dark:border-gray-700/50">
              <a
                className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
                href="#"
              >
                <span className="material-symbols-outlined">arrow_back</span>
                <div className="flex flex-col">
                  <span className="text-xs text-gray-500 dark:text-gray-400">Previous</span>
                  <span className="font-medium">Project Overview</span>
                </div>
              </a>
              <a
                className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors text-right"
                href="#"
              >
                <div className="flex flex-col">
                  <span className="text-xs text-gray-500 dark:text-gray-400">Next</span>
                  <span className="font-medium">Results & Validation</span>
                </div>
                <span className="material-symbols-outlined">arrow_forward</span>
              </a>
            </div>
          </div>
          <aside className="hidden lg:block w-64 flex-shrink-0 sticky top-10 self-start">
            <nav className="space-y-4">
              <h3 className="font-bold text-sm text-gray-900 dark:text-white tracking-wide">ON THIS PAGE</h3>
              <ul className="space-y-2 border-l-2 border-gray-200 dark:border-gray-700">
                <li>
                  <a
                    className="block pl-4 -ml-0.5 border-l-2 border-primary text-primary font-semibold text-sm py-1"
                    href="#page-title"
                  >
                    Model Architecture
                  </a>
                </li>
                <li>
                  <a
                    className="block pl-4 -ml-0.5 border-l-2 border-transparent hover:border-primary text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary font-normal text-sm py-1"
                    href="#abstract"
                  >
                    Abstract
                  </a>
                </li>
                <li>
                  <a
                    className="block pl-4 -ml-0.5 border-l-2 border-transparent hover:border-primary text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary font-normal text-sm py-1"
                    href="#graph-representation"
                  >
                    Graph Representation
                  </a>
                </li>
                <li>
                  <a
                    className="block pl-4 -ml-0.5 border-l-2 border-transparent hover:border-primary text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary font-normal text-sm py-1"
                    href="#attention-mechanism"
                  >
                    Sparse Graph Attention
                  </a>
                </li>
              </ul>
            </nav>
          </aside>
        </div>
      </main>
    </div>
  );
};

export default Documentation;
