export default function CardSkeleton() {
  return (
    <div className="border rounded-2xl overflow-hidden shadow-lg flex flex-col animate-pulse md:flex-row m-1">
      <div className="relative w-80 h-56 flex-shrink-0 p-4">
        <div className="bg-brand-cream dark:bg-brand-brown animate-pulse rounded-2xl w-full h-full flex items-center justify-center">
          <svg
            className="w-12 h-12 text-brand-cream dark:text-brand-olive"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 640 512"
          >
            <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" />
          </svg>
        </div>
      </div>
      <div className="pl-8 pr-4 pt-6 w-full">
        <div className="h-6 bg-brand-cream rounded-full dark:bg-brand-brown w-40 mb-8 mt-2"></div>
        <div className="h-4 bg-brand-cream rounded-full dark:bg-brand-brown max-w-[430px] mb-2"></div>
        <div className="h-4 bg-brand-cream rounded-full dark:bg-brand-brown max-w-[140px] mb-2"></div>
        <div className="h-4 bg-brand-cream rounded-full dark:bg-brand-brown max-w-[220px] mb-2"></div>
        <div className="h-4 bg-brand-cream rounded-full dark:bg-brand-brown max-w-[180px]"></div>
      </div>
    </div>
  );
}
