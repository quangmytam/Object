import React from 'react';

const About = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
      {/* HeroSection */}
      <div className="@container mb-16">
        <div className="@[480px]:p-4">
          <div
            className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-center justify-center px-4 pb-10 @[480px]:px-10 text-center"
            data-alt="Abstract blue and purple network graph background"
            style={{
              backgroundImage:
                'linear-gradient(rgba(16, 25, 34, 0.4) 0%, rgba(16, 25, 34, 0.7) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuBmjnGDmN3ER-Ek7O5ec-NKwBjC-tEV89INkX4NzyNUkp2v_4RpKZJTJmdnNJ-XF8RwlDliN9Ky5pUvWpC-LhX39YNi320o0HOBGS46IEMByPondS-vMBzRenaglVmxGy3R56VcwrP8u3WUDlGP_uhgooTjyNHQI70Y0kajJP6B9Gi8O68a2SOoOtWlAXi8AOQbU_8hJoNbHJBXlrQhXbNmKLuPby4eCGNA-AtZRxNnWQanff1-Ni-AEa0YZYDEeXdXq9dEW7sjjtg")',
            }}
          >
            <div className="flex flex-col gap-4">
              <h1 className="text-white text-4xl font-bold leading-tight tracking-tight @[480px]:text-6xl @[480px]:font-bold @[480px]:leading-tight @[480px]:tracking-tight">
                About LightGNN-Peptide
              </h1>
              <h2 className="text-slate-200 text-lg font-normal leading-normal @[480px]:text-xl @[480px]:font-normal @[480px]:leading-normal max-w-3xl mx-auto">
                Advancing bioinformatics by generating stable peptides with lightweight Graph Transformer models.
              </h2>
            </div>
            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 @[480px]:h-14 @[480px]:px-8 bg-primary text-white text-base font-bold leading-normal tracking-wide @[480px]:text-lg hover:bg-primary/90 transition-colors">
              <span className="truncate">Explore the Model</span>
            </button>
          </div>
        </div>
      </div>
      {/* TextGrid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        <div className="flex flex-col flex-1 gap-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-white/70 dark:bg-background-dark/70 backdrop-blur-lg p-6 hover:shadow-lg transition-shadow">
          <span className="material-symbols-outlined text-primary text-3xl">rocket_launch</span>
          <div className="flex flex-col gap-1">
            <h2 className="text-gray-900 dark:text-white text-lg font-bold leading-tight">Our Mission</h2>
            <p className="text-gray-600 dark:text-gray-300 text-sm font-normal leading-normal">
              To pioneer the generation of stable, short peptides using efficient and lightweight AI models, accelerating scientific discovery.
            </p>
          </div>
        </div>
        <div className="flex flex-col flex-1 gap-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-white/70 dark:bg-background-dark/70 backdrop-blur-lg p-6 hover:shadow-lg transition-shadow">
          <span className="material-symbols-outlined text-primary text-3xl">hub</span>
          <div className="flex flex-col gap-1">
            <h2 className="text-gray-900 dark:text-white text-lg font-bold leading-tight">The Technology</h2>
            <p className="text-gray-600 dark:text-gray-300 text-sm font-normal leading-normal">
              Utilizing state-of-the-art lightweight Graph Transformer models on comprehensive BioPDB data for novel peptide design.
            </p>
          </div>
        </div>
        <div className="flex flex-col flex-1 gap-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-white/70 dark:bg-background-dark/70 backdrop-blur-lg p-6 hover:shadow-lg transition-shadow">
          <span className="material-symbols-outlined text-primary text-3xl">science</span>
          <div className="flex flex-col gap-1">
            <h2 className="text-gray-900 dark:text-white text-lg font-bold leading-tight">The Impact</h2>
            <p className="text-gray-600 dark:text-gray-300 text-sm font-normal leading-normal">
              Accelerating drug discovery and biotechnological innovation through the automated generation of functionally viable peptides.
            </p>
          </div>
        </div>
      </div>
      {/* SectionHeader */}
      <h2 className="text-gray-900 dark:text-white text-3xl font-bold leading-tight tracking-tight text-center px-4 pb-4 pt-5 mb-8">
        Meet Our Research Team
      </h2>
      {/* ImageGrid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-4 mb-16">
        <div className="flex flex-col gap-3 text-center items-center pb-3">
          <div className="w-32 h-32">
            <div
              className="w-full h-full bg-center bg-no-repeat aspect-square bg-cover rounded-full"
              data-alt="Headshot of Dr. Grace Hopper"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBUz_v8LR__xdUvtvbP2t7wx5aN6e0DIO-R1w65RwVFeB16xXSVWUMiC_OAj-bQ4RqWgqwWbMpgMO-GK7MJmOzO2D8B80dfa-DHzI1HNwLU0aG1ZR3VbQyHp_MTevfCeAsDMwJGts9KGlfKVvJHPkchN6W-Rw7dt3E2IpwoOYRDY5JImMNiZlrxlz1dtRX5oFJSJ9c7qmRC4yXWiF9crngvE2yQsoxiIxt2fyrnuv6aTY0hFLPofOBLSVfyA-M0lLRyO_nVoF-zSZk")',
              }}
            ></div>
          </div>
          <div>
            <p className="text-gray-900 dark:text-white text-base font-bold leading-normal">Dr. Grace Hopper</p>
            <p className="text-gray-600 dark:text-gray-400 text-sm font-normal leading-normal">Principal Investigator</p>
          </div>
        </div>
        <div className="flex flex-col gap-3 text-center items-center pb-3">
          <div className="w-32 h-32">
            <div
              className="w-full h-full bg-center bg-no-repeat aspect-square bg-cover rounded-full"
              data-alt="Headshot of Dr. Alan Turing"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDKTKDxqY_Vjo-b1pcsmXX34Tc01AV7DGwkAQGoF-SeJ4P_JfjUt0uIlJn-tFStz9d4AwtGOPBnKiwpyR4S5mJwJcsYNTwUjqMbQ0BP0ud_SC9Znd0dNElh9IyZQfDcvUDrXeDVsGKLSFi24-tQpO_eM09cKR21jBe3-3FIEOaXJuIqBE8CfX-k_D_OATmdrClNLCiW9PKMyS-HZkA3Vs1ngbgucbKnXxwVIfTEX2aV3ghvdwEkxzUHq67Ks58Ap6r_NaTPVu_GT0g")',
              }}
            ></div>
          </div>
          <div>
            <p className="text-gray-900 dark:text-white text-base font-bold leading-normal">Dr. Alan Turing</p>
            <p className="text-gray-600 dark:text-gray-400 text-sm font-normal leading-normal">Lead Researcher</p>
          </div>
        </div>
        <div className="flex flex-col gap-3 text-center items-center pb-3">
          <div className="w-32 h-32">
            <div
              className="w-full h-full bg-center bg-no-repeat aspect-square bg-cover rounded-full"
              data-alt="Headshot of Dr. Ada Lovelace"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBND1DZj4PG77j-VuYuxgRIttqNyRaVVHwA1tJK5QpB2Wg8ujJObHAEswyMPmKstPgR5OwN7escEod4TcsGW2JBcgnu7crLD4Uwo5mSVaSlcqVHfwB7jVhvXW8xO7DZ0YlW6j2OtduKQ0mTFUD0g58uPAQJ0VDXJPARBbb_sD99lz5tnbDu6Lq9LpCOdP9nfEhxlcYPpw2Ox2NpguZi-I3lyQ9ioFW-xcSO0G75491dv-hLpZH8hxSKQmEogjuhquI9Yk4ANONWM2s")',
              }}
            ></div>
          </div>
          <div>
            <p className="text-gray-900 dark:text-white text-base font-bold leading-normal">Dr. Ada Lovelace</p>
            <p className="text-gray-600 dark:text-gray-400 text-sm font-normal leading-normal">PhD Candidate</p>
          </div>
        </div>
        <div className="flex flex-col gap-3 text-center items-center pb-3">
          <div className="w-32 h-32">
            <div
              className="w-full h-full bg-center bg-no-repeat aspect-square bg-cover rounded-full"
              data-alt="Headshot of Dr. Tim Berners-Lee"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBBjIN-O4lOu19Kuzxf0ZMpf0vtX21HGz04rLLb13c7a2HhI4o4fFsKIAy8YFMPX81EAZ6WAA6TrzQSFW-8zuB1yP76JrykkHbvu6p44qJyHOZUPcvGJqMEGWqXOuVNKXmIXghY2UOTRGDSZaKSz_j9sKJlsNsEsVr7A0Q505oDpBWH-mTgRAv8PXgtgRIEU3ebbR3V9Y7TPAdIFalWSQI5CfMXx46qRt3tZi_QZr2_sgi41jc7-M4SLX0OnlL_HFF6TJmh1pOnFt8")',
              }}
            ></div>
          </div>
          <div>
            <p className="text-gray-900 dark:text-white text-base font-bold leading-normal">Dr. Tim Berners-Lee</p>
            <p className="text-gray-600 dark:text-gray-400 text-sm font-normal leading-normal">Bioinformatics Specialist</p>
          </div>
        </div>
      </div>
      {/* Affiliations Section */}
      <div className="py-12">
        <h2 className="text-gray-900 dark:text-white text-3xl font-bold leading-tight tracking-tight text-center px-4 pb-4 pt-5 mb-10">
          Affiliations & Collaborators
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
          <img
            className="h-10 opacity-60 dark:opacity-70 dark:invert"
            data-alt="MIT Logo"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAbc9UzNGlDXAaUTCi8L8ewL_8gdRaULXgRC0wS-Tc1kUF5nyMhrn2GAlvvtXvjnUw0MNuS7_AEm7u65IxHEklJH2zekLmv8R6m0p5jTSpXQ0bZ5DbpvjLxDAOJmbn9-xcj6iG4hMA3khl2ieGyqWQzZg78ogrUPGFlRBojGdmAa3MUxKI9VkbnqW1ovuzbwCJumfhCdcjbVqIolaJ-bb5RAXxR46KLebO94jWoN-llFJhdbrs_TMRuh8tpgjmq_2qdX8VnBPEW0BM"
          />
          <img
            className="h-12 opacity-60 dark:opacity-70 dark:invert"
            data-alt="Harvard University Logo"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHRBhcefrcsaOeCfFeUEXavmzma63ef1_7wps3eUUr8_kJuiOvlfONuSHBMTQB2AhwxnhOwTzjoFSS_Z5NFhye3apOcOMXorJn7HcsUE4sYyaLk14HQKrZf-dDyurtqk6MpIGdkaNtBpyd5eafKDaQn1S--_xYRAuUMgVfLaKHI4FqXADjKIh9Rpqc929V0g450MeYR4Bu6kUrchyuamW5xXvtvvWVPNFPy1XAGy0xh8TiNGFLuv_NtZGnuPCX-84lZvv8ChQgg_U"
          />
          <img
            className="h-14 opacity-60 dark:opacity-70 dark:invert"
            data-alt="NIH Logo"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5BEOgmEbiwlIRWemrk1dZzoNH0cpwyGy-jlz5eKHdShZ0M9hQsTWRPnxRb6rTkGV0oVdVxwFG0V0yrFmhqfV1RmZ2NhPd_zfNDd4DCPm3IGTpSSLV3owYD-ihLiPdr2dzyMWSPUmvHbCny7uOyLrM_UJdradXEgnq_wDMhyVbfWf2ntFnlhabEvXpR_2tUpIFuQciqFxWYq2u38DbYQB5WP7S4nFpLQeNhE3DSW1lUlziwwg4ng-fawQ-7nkEUZpf9EQXfitMxjM"
          />
          <img
            className="h-10 opacity-60 dark:opacity-70 dark:invert"
            data-alt="Broad Institute Logo"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA40E0mzDSCtIitVvH7k9wWAzdkguNk_WyMIjxvSRKjAej9L7IxE_9gaIvVeYFxXk1_EpWiy3temj7ioAgpExG81Wgd8i-5FyYvHS59zKa0YotSMWQNfvGPuNP9gOMtWyYawOhE5Dapa979FvHY3wZlK8eOxn1CjWvOZBSvMG58OIFcrLZOT0PWSWeL0VH5PlxKMw_xWmw5swTzCtVLqFTHSKLu-J4lI0ymPYLof9dDEdOcFt2RfWFe3vC2SnQLluB7e97KNIX5bjk"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
