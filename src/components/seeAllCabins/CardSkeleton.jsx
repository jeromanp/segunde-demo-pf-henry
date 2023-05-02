export default function CardSkeleton() {
  return (
    <div className="border rounded-2xl overflow-hidden shadow-lg flex flex-col animate-pulse md:flex-row m-1">
      <div className="relative w-80 h-56 flex-shrink-0 p-4">
        <div className="bg-gray-300 dark:bg-brand-green animate-pulse rounded-2xl w-full h-full"></div>
      </div>
      <div className="pl-8 pr-4 pt-6 w-full">
        <div className="h-5 bg-gray-200 rounded-full dark:bg-brand-green w-40 mb-4"></div>
        <div className="h-4 bg-gray-200 rounded-full dark:bg-brand-green max-w-[480px] mb-2"></div>
        <div className="h-4 bg-gray-200 rounded-full dark:bg-brand-green mb-2"></div>
        <div className="h-4 bg-gray-200 rounded-full dark:bg-brand-green max-w-[440px] mb-2"></div>
        <div className="h-4 bg-gray-200 rounded-full dark:bg-brand-green max-w-[460px] mb-2"></div>
        <div className="h-4 bg-gray-200 rounded-full dark:bg-brand-green max-w-[360px]"></div>
      </div>
    </div>
  );
}
