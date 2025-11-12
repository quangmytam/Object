import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col">
      <header className="sticky top-0 z-10 flex items-center justify-between whitespace-nowrap border-b border-solid border-border-light dark:border-border-dark px-6 md:px-10 py-3 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
        <div className="flex items-center gap-4 text-text-light dark:text-text-dark">
          <div className="size-6 text-primary">
            <svg fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path clipRule="evenodd" d="M24 18.4228L42 11.475V34.3663C42 34.7796 41.7457 35.1504 41.3601 35.2992L24 42V18.4228Z" fillRule="evenodd"></path>
              <path clipRule="evenodd" d="M24 8.18819L33.4123 11.574L24 15.2071L14.5877 11.574L24 8.18819ZM9 15.8487L21 20.4805V37.6263L9 32.9945V15.8487ZM27 37.6263V20.4805L39 15.8487V32.9945L27 37.6263ZM25.354 2.29885C24.4788 1.98402 23.5212 1.98402 22.646 2.29885L4.98454 8.65208C3.7939 9.08038 3 10.2097 3 11.475V34.3663C3 36.0196 4.01719 37.5026 5.55962 38.098L22.9197 44.7987C23.6149 45.0671 24.3851 45.0671 25.0803 44.7987L42.4404 38.098C43.9828 37.5026 45 36.0196 45 34.3663V11.475C45 10.2097 44.2061 9.08038 43.0155 8.65208L25.354 2.29885Z" fillRule="evenodd"></path>
            </svg>
          </div>
          <h2 className="text-lg font-bold tracking-tight">LightGNN-Peptide</h2>
        </div>
        <nav className="hidden md:flex flex-1 justify-center items-center gap-9">
            <Link to="/" className="text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">Home</Link>
            <Link to="/training" className="text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">Training</Link>
            <Link to="/evaluation" className="text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">Evaluation</Link>
            <Link to="/generation" className="text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">Generation</Link>
            <Link to="/datasets" className="text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">Datasets</Link>
        </nav>
        <div className="flex flex-1 justify-end gap-4 items-center">
          <button className="flex items-center justify-center rounded-lg h-10 w-10 bg-surface-light dark:bg-surface-dark/50 border border-border-light dark:border-border-dark shadow-sm hover:bg-background-light/50 dark:hover:bg-background-dark">
            <span className="material-symbols-outlined text-xl text-text-light/80 dark:text-text-dark/80">settings</span>
          </button>
          <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 border-2 border-primary/50" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC330Gsrhx37pbkDxfDOoV70IE8p1CEUDRMcqQ2Mutgej2g8h_IUVqTSwaxGksZEigOqejFio1Vp0EQVvslT3wl88Cv7VDTGuF3ThGTKTvW1WhTl-hBlP7-ysbXne8Nxi4jzhElAI8Ya4X51A9uTwIC-BqRNCXgit9urNxk0jnQxN0F76jzgWikmKeCxBqmxVxWsg586EY87TdDEeUW1UrhZQBBu2MPfz2oZicLvyiMTgvWPbNb4Tr9JAhx48ON1n_O4BgdvVv5bLI")'}}></div>
        </div>
      </header>
      <main className="flex-1 p-6 md:p-10">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
