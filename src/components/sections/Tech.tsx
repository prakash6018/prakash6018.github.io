import { motion } from 'framer-motion';

import { BallCanvas } from '../canvas';
import { SectionWrapper } from '../../hoc';
import { skillGroups, technologies } from '../../constants';
import { fadeIn } from '../../utils/motion';
import { Header } from '../atoms/Header';

const Tech = () => {
  return (
    <>
      <Header useMotion={true} p="What I work with" h2="Skills." />

      <div className="mt-12 flex flex-row flex-wrap justify-center gap-10">
        {technologies.map(technology => (
          <div className="h-28 w-28" key={technology.name} title={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>

      <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, index) => (
          <motion.div
            key={group.title}
            variants={fadeIn('up', 'spring', (index % 3) * 0.2, 0.75)}
            className="bg-tertiary rounded-2xl p-5"
          >
            <h3 className="text-[16px] font-bold text-white">{group.title}</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {group.items.map(item => (
                <span
                  key={item}
                  className="bg-black-200 text-secondary rounded-full px-3 py-1 text-[12px]"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, 'tech');
