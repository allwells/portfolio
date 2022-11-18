type Props = {
  pageHeading: string;
};

export default function PageHeading({ pageHeading }: Props) {
  return (
    <div className="flex items-center justify-start w-full mb-4">
      <h1 className="text-base font-extrabold cursor-default md:text-xl dark:text-emerald-500">
        <span className="dark:text-blue-600">$</span> allwell{" "}
        <span className="text-md dark:text-red-500">
          onen{" "}
          <span className="font-normal dark:text-lime-500">
            --{pageHeading}
          </span>
        </span>
        <span className="text-white animate-ping">_</span>
      </h1>
    </div>
  );
}
