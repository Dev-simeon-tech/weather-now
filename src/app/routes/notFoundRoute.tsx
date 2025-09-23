import { Link } from "react-router";
import Navbar from "../../components/ui/navbar";

const NotFoundRoute = () => {
  return (
    <div className="min-h-screen lg:pt-(--spacing-600) 2xl:px-(--spacing-1400) lg:px-(--spacing-600) px-(--spacing-200) pt-(--spacing-200) lg:pb-(--spacing-1000) pb-(--spacing-600)'>">
      <Navbar />
      <main className='flex flex-col gap-(--spacing-300) text-center items-center pt-(--spacing-500)'>
        <h1>
          <h1 className='lg:text-present-2 text-present-3 font-dm-sans-light'>
            <span className='font-dm-sans-bold'>404</span> - Not Found
          </h1>
        </h1>
        <p>Sorry, the page you are looking for does not exist.</p>
        <Link to={"/"} aria-label='Go to home page'>
          <button className=' bg-[#262540] hover:bg-neutral-600 px-(--spacing-200) py-(--spacing-150) rounded-lg '>
            Go to home
          </button>
        </Link>
      </main>
    </div>
  );
};

export default NotFoundRoute;
