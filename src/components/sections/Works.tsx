import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';

import { github } from '../../assets';
import { SectionWrapper } from '../../hoc';
import { projects } from '../../constants';
import { fadeIn } from '../../utils/motion';
import { config } from '../../constants/config';
import { Header } from '../atoms/Header';
import { TProject } from '../../types';

const ProjectCard: React.FC<{ index: number } & TProject> = ({
  index,
  name,
  kind,
  description,
  tags,
  image,
  cover,
  sourceCodeLink,
}) => {
  return (
    <motion.div variants={fadeIn('up', 'spring', (index % 3) * 0.3, 0.75)}>
      <Tilt glareEnable tiltEnable tiltMaxAngleX={20} tiltMaxAngleY={20} glareColor="#aaa6c3">
        <div className="bg-tertiary flex h-full w-full flex-col rounded-2xl p-5 sm:w-[340px]">
          <div className="relative h-[200px] w-full">
            {image ? (
              <img src={image} alt={name} className="h-full w-full rounded-2xl object-cover" />
            ) : (
              <div
                className="flex h-full w-full items-end rounded-2xl p-5"
                style={{
                  background: `linear-gradient(135deg, ${cover[0]}, ${cover[1]})`,
                }}
              >
                <p className="text-[26px] font-black leading-tight text-white/90 drop-shadow">
                  {name}
                </p>
              </div>
            )}
            {sourceCodeLink && (
              <div className="card-img_hover absolute inset-0 m-3 flex justify-end">
                <a
                  href={sourceCodeLink}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${name} on GitHub`}
                  className="black-gradient flex h-10 w-10 cursor-pointer items-center justify-center rounded-full"
                >
                  <img src={github} alt="github" className="h-1/2 w-1/2 object-contain" />
                </a>
              </div>
            )}
          </div>
          <div className="mt-5 flex-1">
            <p className="text-[12px] font-semibold uppercase tracking-wider text-[#915EFF]">
              {kind}
            </p>
            <h3 className="mt-1 text-[22px] font-bold text-white">{name}</h3>
            <p className="text-secondary mt-2 text-[14px] leading-[22px]">{description}</p>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map(tag => (
              <p key={tag.name} className={`text-[14px] ${tag.color}`}>
                #{tag.name}
              </p>
            ))}
          </div>
          {sourceCodeLink && (
            <a
              href={sourceCodeLink}
              target="_blank"
              rel="noreferrer"
              className="mt-4 text-[14px] font-semibold text-white underline decoration-[#915EFF] underline-offset-4 hover:text-[#915EFF]"
            >
              View on GitHub →
            </a>
          )}
        </div>
      </Tilt>
    </motion.div>
  );
};

const ProjectGrid: React.FC<{
  group: TProject['group'];
  section: { p: string; h2: string; content: string };
}> = ({ group, section }) => (
  <>
    <Header useMotion={true} p={section.p} h2={section.h2} />

    <div className="flex w-full">
      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="text-secondary mt-3 max-w-3xl text-[17px] leading-[30px]"
      >
        {section.content}
      </motion.p>
    </div>

    <div className="mt-16 flex flex-wrap gap-7 max-sm:justify-center">
      {projects
        .filter(project => project.group === group)
        .map((project, index) => (
          <ProjectCard key={project.name} index={index} {...project} />
        ))}
    </div>
  </>
);

const WorksInner = () => <ProjectGrid group="professional" section={config.sections.works} />;

const OpenSourceInner = () => <ProjectGrid group="github" section={config.sections.github} />;

export const Works = SectionWrapper(WorksInner, 'projects');
export const OpenSource = SectionWrapper(OpenSourceInner, 'github');
