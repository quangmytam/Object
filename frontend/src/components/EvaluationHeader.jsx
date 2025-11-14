import React from 'react';

const EvaluationHeader = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm border-b border-slate-200 dark:border-slate-800">
      <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex items-center justify-between whitespace-nowrap py-3">
          <div className="flex items-center gap-4 text-slate-900 dark:text-slate-50">
            <div className="size-6 text-primary">
              <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path clipRule="evenodd" d="M24 18.4228L42 11.475V34.3663C42 34.7796 41.7457 35.1504 41.3601 35.2992L24 42V18.4228Z" fill="currentColor" fillRule="evenodd"></path>
                <path clipRule="evenodd" d="M24 8.18819L33.4123 11.574L24 15.2071L14.5877 11.574L24 8.18819ZM9 15.8487L21 20.4805V37.6263L9 32.9945V15.8487ZM27 37.6263V20.4805L39 15.8487V32.9945L27 37.6263ZM25.354 2.29885C24.4788 1.98402 23.5212 1.98402 22.646 2.29885L4.98454 8.65208C3.7939 9.08038 3 10.2097 3 11.475V34.3663C3 36.0196 4.01719 37.5026 5.55962 38.098L22.9197 44.7987C23.6149 45.0671 24.3851 45.0671 25.0803 44.7987L42.4404 38.098C43.9828 37.5026 45 36.0196 45 34.3663V11.475C45 10.2097 44.2061 9.08038 43.0155 8.65208L25.354 2.29885Z" fill="currentColor" fillRule="evenodd"></path>
              </svg>
            </div>
            <h2 className="text-lg font-bold leading-tight tracking-tight">LightGNN-Peptide</h2>
          </div>
          <div className="hidden md:flex flex-1 justify-center gap-8">
            <div className="flex items-center gap-9">
              <a className="text-slate-700 dark:text-slate-300 hover:text-primary dark:hover:text-primary text-sm font-medium leading-normal" href="#">Dashboard</a>
              <a className="text-primary dark:text-primary text-sm font-bold leading-normal" href="#">Evaluation</a>
              <a className="text-slate-700 dark:text-slate-300 hover:text-primary dark:hover:text-primary text-sm font-medium leading-normal" href="#">Datasets</a>
              <a className="text-slate-700 dark:text-slate-300 hover:text-primary dark:hover:text-primary text-sm font-medium leading-normal" href="#">Models</a>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[-0.015em]">
              <span className="truncate">Export Report</span>
            </button>
            <button className="hidden md:flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 gap-2 text-sm font-bold leading-normal tracking-[-0.015em] min-w-0 px-2.5">
              <span className="material-symbols-outlined">settings</span>
            </button>
            <button className="hidden md:flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 gap-2 text-sm font-bold leading-normal tracking-[-0.015em] min-w-0 px-2.5">
              <span className="material-symbols-outlined">notifications</span>
            </button>
            <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" data-alt="User avatar image" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBM-VtDN70FkFKkGwIm7vOAVg9XXfH9pwJDfw4-5XHuOGr_tFmy_fmx6LjTqXYqhy4YcKTIZYeycu3HDZZ-328G57c8VkHTRIw5c5sQ2svw6kAp3DkZEBVVmX6cW8Dg7dOMyI-1LMVd8NkcS4o4eHWfxqPD3_5C5Hbu_ALk6Ny6b3WIGe7hzioQUQbKsk8GcpM7mNY_FBmp5SaopDHXnqTVtrt2NdxbCVmLijjzo-3vPdavnV3NHrViHO0-If40K77t1TtEVKaY0Ac')" }}></div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default EvaluationHeader;
