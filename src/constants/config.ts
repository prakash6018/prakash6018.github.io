type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    shortName: string;
    email: string;
    phone: string;
    linkedin: string;
    github: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    works: Required<TSection>;
    github: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: 'Sai Prakash Reddy | Full-Stack Software Engineer',
    fullName: 'Sai Prakash Reddy Chandupatla',
    shortName: 'Sai Prakash Reddy',
    email: 'prakashreddy0515@gmail.com',
    phone: '+91 8179139091',
    linkedin: 'https://www.linkedin.com/in/sai-prakash-reddy-chandupatla-13910a174/',
    github: 'https://github.com/prakash6018',
  },
  hero: {
    name: 'Sai Prakash',
    p: ['I build AI agents, RAG systems', 'and full-stack web platforms end to end'],
  },
  contact: {
    p: 'Get in touch',
    h2: 'Contact.',
    form: {
      name: {
        span: 'Your Name',
        placeholder: "What's your name?",
      },
      email: { span: 'Your Email', placeholder: "What's your email?" },
      message: {
        span: 'Your Message',
        placeholder: 'What do you want to say?',
      },
    },
  },
  sections: {
    about: {
      p: 'Introduction',
      h2: 'Overview.',
      content: `I'm a full-stack software engineer in Hyderabad with 3.6+ years of
      experience building AI products and production web platforms end to end:
      React and Next.js frontends, Python (FastAPI) and Node.js APIs, PostgreSQL,
      and cloud deployment on Azure and AWS. I've built a voice-agent platform
      with RAG knowledge search, an AI governance platform with policy
      guardrails, and an AI quoting system that reads engineering drawings.`,
    },
    experience: {
      p: 'What I have done so far',
      h2: 'Experience.',
    },
    works: {
      p: 'Professional work',
      h2: 'Projects.',
      content: `Products I've built at NCompas Business Solutions for clients and
      internal teams. The code is private, so these cards describe what I built
      and the stack behind it.`,
    },
    github: {
      p: 'Open source',
      h2: 'On GitHub.',
      content: `Projects I've built and published on my own. Each card links to
      its repository, with a README explaining how it works and how to run it.`,
    },
  },
};
