import { IconBrandGithub, IconCode } from "@tabler/icons";

type Props = {
  color: string;
  title: string;
  live?: string;
  image?: string;
  github?: string;
  language: string;
  description: string;
};

export default function WorkCard({
  live,
  color,
  title,
  image,
  github,
  language,
  description,
}: Props) {
  return (
    <div
      id="work-card"
      className={`relative overflow-hidden transition duration-200 border border-white/30 hover:bg-[${color}]`}
    >
      <div className="absolute z-10 w-full h-full overflow-hidden transition duration-200 hover:bg-black/70 black-bg">
        <div className="absolute flex justify-between w-full px-3 pt-3">
          <div className="flex items-center justify-center gap-3 w-fit">
            {!github ?? (
              <a
                href="#"
                title="View source code on GitHub"
                className={`z-10 p-1 text-xs font-semibold text-white uppercase border hover:bg-black/80 bg-black/50 border-white/30 transition duration-300 hover:border-[${color}] hover:text-[${color}]`}
              >
                <IconBrandGithub size={16} />
              </a>
            )}

            {!live ?? (
              <a
                href="#"
                title="Preview live project"
                className={`z-10 p-1 text-xs font-semibold text-white uppercase border hover:bg-black/80 bg-black/50 border-white/30 transition duration-300 hover:border-[${color}] hover:text-[${color}]`}
              >
                <IconCode size={16} />
              </a>
            )}
          </div>

          <span
            className={`px-1.5 pb-1 pt-[0.35rem] text-xs font-semibold text-white lowercase border border-white/30 bg-[${color}]`}
          >
            {language}
          </span>
        </div>

        <div className="relative flex flex-col items-start justify-end w-full h-full p-3 overflow-hidden">
          <h2 className="mb-4 text-sm font-semibold uppercase">{title}</h2>

          <p className="overflow-hidden text-xs tracking-wide text-left description">
            {description}
          </p>
        </div>
      </div>

      <div className="flex items-center justify-center overflow-hidden h-60">
        <img
          src={image}
          alt="portfolio"
          className="w-full h-60 portfolio-image"
        />
      </div>
    </div>
  );
}
