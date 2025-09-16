import ErrorIcon from "@/assets/images/icon-error.svg?react";
import RetryIcon from "@/assets/images/icon-retry.svg?react";

const ApiErrorLayout = ({ refetch }: { refetch: () => void }) => {
  return (
    <div className='flex flex-col gap-(--spacing-300) items-center pt-(--spacing-500)'>
      <ErrorIcon width={"3rem"} height={"3rem"} />
      <h1 className='text-present-2 font-bricolage'>Something went wrong</h1>
      <p className='text-present-5 max-w-[40ch] text-center'>
        We couldn’t connect to the server (API error). Please try again in a few
        moments.
      </p>
      <button
        className=' bg-[#262540] flex items-center gap-(--spacing-125) px-(--spacing-200) py-(--spacing-150) rounded-lg '
        onClick={() => refetch()}
      >
        <RetryIcon />
        <p className='text-present-7'>Retry</p>
      </button>
    </div>
  );
};

export default ApiErrorLayout;
