/**
 * Simple centered spinner shown while posts are being fetched.
 * Kept as its own component so the loading UI is consistent
 * anywhere we need it, not duplicated inline.
 */
const Loader = () => {
  return (
    <div className="flex justify-center items-center py-16">
      <div className="w-10 h-10 border-4 border-slate-200 border-t-indigo-600 rounded-full animate-spin" />
    </div>
  );
};

export default Loader;
