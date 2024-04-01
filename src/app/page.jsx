
export default function RootPage() {

    return(
        <div>
            <nav className="flex flex-row justify-center items-center space-x-4 bg-[#F3DFBF] pb-10 pt-10 shadow-[0_35px_60px_0px_rgba(0,0,0,0.4)]">
                <a href="/" className="text-8xl">JaJ</a>
                <div className="w-[4px] h-[150px] bg-black"></div>

                { 
                    //JaJ logo and name
                }
                <svg className="w-32" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"></path>
                </svg>
            </nav>
        </div>
    );
}
