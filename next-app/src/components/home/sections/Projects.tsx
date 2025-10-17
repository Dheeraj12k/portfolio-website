import {PORTFOLIO_PROJECTS} from "@/static/home/5-portfolioProjects"
import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import { SectionHeader } from "@/components/home/SectionHeader";
import { Card } from "@/components/home/Card";

export const ProjectsSection = () => {
  return (
    <section className="pb-16 lg:py-24" id="projects">
      <div className="container">
        <SectionHeader
          {...PORTFOLIO_PROJECTS.sectionHeader}
        />

        <div className="flex flex-col gap-20 mt-10 md:mt-20">
          {PORTFOLIO_PROJECTS.projects.map((project, projectIndex) => (
            <Card
              key={project.title}
              className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky"
              style={{ top: `calc(64px + ${projectIndex * 40}px)` }}
            >
              {/* Grid layout only applies on the larger screen sizes. */}
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="font-serif text-2xl mt-2 md:text-4xl md:mt-5">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-2 text-sm text-white/50 md:text-base"
                      >
                       <span className="w-6 flex justify-center items-center mt-1">
                        <CheckCircleIcon className="w-5 h-5  shrink-0" />
                        </span>
                        <span className="flex-1">{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  {project.link ? (
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <button
                        className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8"
                        type="button"
                      >
                        <span> {project.cta}</span>
                        <ArrowUpRightIcon className="size-4" />
                      </button>
                    </a>
                  ) : (
                    <button
                      className="bg-white/10 border border-white/20 text-white/70 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8 cursor-not-allowed"
                      type="button"
                      disabled
                    >
                      <span>{project.cta}</span>
                    </button>
                  )}
                </div>
                <div className="relative">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                    />
                  ) : (
                    <div className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none flex items-center justify-center bg-white/5 rounded-2xl border border-dashed border-white/20 p-8 text-center text-white/50">
                      Visual preview coming soon
                    </div>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
