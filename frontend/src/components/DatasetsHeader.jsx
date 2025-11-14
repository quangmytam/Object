import React from 'react';

const DatasetsHeader = () => {
  return (
    <header className="sticky top-0 z-10 flex items-center justify-between whitespace-nowrap border-b border-solid border-[#e7edf3] dark:border-slate-800 px-6 sm:px-10 py-3 glass-card">
      <div className="flex items-center gap-4 text-[#0d141b] dark:text-white">
        <div className="size-6 text-primary">
          <svg fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
            <path clipRule="evenodd" d="M24 18.4228L42 11.475V34.3663C42 34.7796 41.7457 35.1504 41.3601 35.2992L24 42V18.4228Z" fillRule="evenodd"></path>
            <path clipRule="evenodd" d="M24 8.18819L33.4123 11.574L24 15.2071L14.5877 11.574L24 8.18819ZM9 15.8487L21 20.4805V37.6263L9 32.9945V15.8487ZM27 37.6263V20.4805L39 15.8487V32.9945L27 37.6263ZM25.354 2.29885C24.4788 1.98402 23.5212 1.98402 22.646 2.29885L4.98454 8.65208C3.7939 9.08038 3 10.2097 3 11.475V34.3663C3 36.0196 4.01719 37.5026 5.55962 38.098L22.9197 44.7987C23.6149 45.0671 24.3851 45.0671 25.0803 44.7987L42.4404 38.098C43.9828 37.5026 45 36.0196 45 34.3663V11.475C45 10.2097 44.2061 9.08038 43.0155 8.65208L25.354 2.29885Z" fillRule="evenodd"></path>
          </svg>
        </div>
        <h2 className="text-[#0d141b] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em]">LightGNN-Peptide</h2>
      </div>
      <div className="flex items-center justify-end gap-6">
        <nav className="hidden md:flex items-center gap-8">
          <a className="text-sm font-medium leading-normal text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary" href="#">Dashboard</a>
          <a className="text-sm font-medium leading-normal text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary" href="#">Models</a>
          <a className="text-sm font-medium leading-normal text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary" href="#">Results</a>
          <a className="text-sm font-medium leading-normal text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary" href="#">Documentation</a>
        </nav>
        <div className="flex items-center gap-4">
          <button className="flex cursor-pointer items-center justify-center rounded-lg h-10 w-10 bg-slate-200/50 dark:bg-slate-700/50 text-[#0d141b] dark:text-slate-200">
            <span className="material-symbols-outlined text-xl">dark_mode</span>
          </button>
          <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" data-alt="User profile avatar" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuASxvJpfTeJ6zDE7ZDed_dU88oDFtc_ksx9QdkEIMr3Ypo2CK_NzGnIoUW_n-s7WHCYPoxJb_KtEgVvFLxN7BwE2wrHw9dY5AZkGfWnHJqPROfDuN7cD5tlaXXNfg7CmV521-iK6GGVI8OUesgd9gdE75j0Owqiq-NGzKAG9XgcuwxPejD1Q864vpVOerkbTZ55KVw-UXB8iuEHzShe0nsoBkDr9S-c1VveKSm3Z149m3Odn5rtlg6teURz2vMX1AXTfWiKVEZRvl4')" }}></div>
        </div>
      </div>
    </header>
  );
};

export default DatasetsHeader;
