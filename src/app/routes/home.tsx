import Navbar from "../../components/ui/navbar";
import SearchForm from "../../components/ui/searchForm";

const Home = () => {
  return (
    <div className='min-h-screen lg:pt-(--spacing-600) lg:px-(--spacing-1400) px-(--spacing-200) pt-(--spacing-200) lg:pb-(--spacing-1000) pb-(--spacing-600) '>
      <Navbar />
      <main>
        <h1 className='font-bricolage text-center my-(--spacing-800) text-5xl lg:text-present-2'>
          How’s the sky looking today?
        </h1>
        <SearchForm />
      </main>
    </div>
  );
};

export default Home;
