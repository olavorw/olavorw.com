import UnifiedSection from '@/components/UnifiedSection';
// noinspection JSDeprecatedSymbols
import {
  Brain,
  Code,
  Cog,
  Diff,
  GitBranchIcon,
  GitCommit,
  GitFork,
  Github,
  GitPullRequest,
  GlassesIcon,
  LucideUsers,
  NewspaperIcon,
  PlusIcon,
  Star,
  User,
  Users,
} from 'lucide-react';
import { CommandLineIcon } from '@heroicons/react/24/outline';

export default function Contribute() {
  // noinspection XmlDeprecatedElement
  return (
    <>
      <UnifiedSection
        title={'Contributing to Open Source'}
        description={
          'This page will show you how you can contribute to open-source projects, and how you can help me out with my projects!'
        }
        centered={true}
        tagline={'Glad you want to help!'}
        topOfPage={true}
        content={
          'I’m a huge advocate for open-source software and love to contribute to open source projects' +
          " I'm glad you landed on this page and might want to contribute as welL!" +
          ' If you have an open-source project that could use some help, I’d love to hear from you!\n Contributing' +
          'to open source projects is great for the following reasons:'
        }
        features={[
          {
            title: 'Transparency',
            description:
              'Open-source projects are transparent, meaning you can see the code and how it works. ' +
              'This is great for trust and security.',
            icon: <Cog />,
          },
          {
            title: 'Community',
            description:
              'Open-source projects are built by communities of developers who work together to build something ' +
              'amazing. No corporate overlords here!',
            icon: <LucideUsers />,
          },
          {
            title: 'Learn new skills',
            description:
              'Contributing to open-source projects is a great way to learn new skills and improve your ' +
              'programming abilities.',
            icon: <Brain />,
          },
        ]}
        additionalContent={
          'And much more! There are so many reasons to contribute to open-source projects!'
        }
      />
      <UnifiedSection
        title={'How To Contribute'}
        centered={true}
        topOfPage={false}
        content={
          'There are many ways to contribute to open-source projects. Here are a few ideas to get you started:'
        }
        features={[
          {
            title: 'Code Contributions',
            description:
              'The most common way to contribute to open-source projects is by writing code. You can fix bugs, ' +
              'add new features, and improve the project in many ways.',
            icon: <Code />,
          },
          {
            title: 'Documentation',
            description:
              'Another great way to contribute is by improving the project documentation. You can write guides, ' +
              'tutorials, and other helpful resources to make the project easier to use.',
            icon: <NewspaperIcon />,
          },
          {
            title: 'Testing',
            description:
              'Testing is an important part of any software project. You can help by testing the project, finding ' +
              'bugs, and reporting issues to the developers.',
            icon: <GlassesIcon />,
          },
          {
            title: 'Community',
            description:
              'You can also contribute to open-source projects by helping out in the community. This can include ' +
              'answering questions, helping other users, and promoting the project to others.',
            icon: <Users />,
          },
        ]}
        additionalContent={
          'These are just a few ideas to get you started. There are many other ways to contribute to open-source ' +
          'projects, so find something that interests you and get involved!\n' +
          'If you want to help me out with my projects, check out my GitHub and see if there’s anything you can ' +
          'contribute to!\nWith all of that being said, this guide is for contributing to' +
          "GitHub projects, and the same logic should apply to most other platforms as well. Let's get started!"
        }
        links={[
          {
            name: 'Video Tutorial',
            href: '#',
          },
          {
            name: "GitHub's Guide",
            href: 'https://guides.github.com/activities/contributing-to-open-source/',
          },
        ]}
      />
      <UnifiedSection
        tagline={'Step 1'}
        title={'Find a Project'}
        description={
          "This assumes you don't already have a project in mind. If you do, feel free to skip this step!"
        }
        centered={true}
        topOfPage={false}
        boldTitle={false}
        content={
          'The first step to contributing to open-source projects is to find a project that interests you. ' +
          'There are thousands of open-source projects out there, so finding one that you like should be easy.'
        }
        features={[
          {
            title: 'GitHub',
            description:
              'GitHub is a great place to find open-source projects. You can search for projects by language, ' +
              'topic, or keyword to find something that interests you.',
            icon: <Github />,
          },
          {
            title: 'Open Source Directories',
            description:
              'There are also many open-source directories that list projects by category. You can browse these ' +
              'directories to find projects that match your interests.',
            icon: <Code />,
          },
          {
            title: 'Personal Projects',
            description:
              'If you have a project of your own that you want to open-source, you can do that too! Just create a ' +
              'repository on GitHub and share it with the world.',
            icon: <User />,
          },
        ]}
        additionalContent={
          'Once you’ve found a project that interests you, take some time to explore the code, read the documentation, and ' +
          'get familiar with how the project works. This will help you get started with contributing.'
        }
        links={[
          {
            name: 'GitHub',
            href: 'https://github.com',
          },
          {
            name: 'Explore Repositories',
            href: 'https://github.com/explore',
          },
        ]}
      />
      <UnifiedSection
        tagline={'Step 2'}
        title={'Fork the Project'}
        description={
          'Once you’ve found a project that interests you, the next step is to fork the project on GitHub.'
        }
        centered={true}
        topOfPage={false}
        boldTitle={false}
        content={
          'Forking a project creates a copy of the project in your own GitHub account. This allows you to make changes to ' +
          'the project without affecting the original project.'
        }
        features={[
          {
            title: 'Fork Button',
            description:
              'To fork a project, simply click the “Fork” button on the project page on GitHub. This will create a copy of the project ' +
              'in your account.',
            icon: <GitFork />,
          },
          {
            title: 'Clone the Repository',
            description:
              'Once you’ve forked the project, you can clone the repository to your local machine using Git or by hitting clone and downloading ' +
              'the zip of the repository on GitHub.' +
              ' This will download the project files to your computer.',
            icon: <CommandLineIcon />,
          },
          {
            title: 'Add a Remote',
            description:
              'To keep your fork up to date with the original project, you can add a remote to the original project. This will allow you to ' +
              'pull in changes from the original project.',
            icon: <PlusIcon />,
          },
        ]}
        additionalContent={
          'Once you’ve forked the project and cloned the repository, you’re ready to start making changes to the project. This is where the ' +
          'fun begins!'
        }
      />
      <UnifiedSection
        tagline={'Step 3'}
        title={'Make Changes'}
        description={
          'Now that you have a copy of the project on your local machine, you can start making changes to the project.'
        }
        centered={true}
        topOfPage={false}
        boldTitle={false}
        content={
          'There are many ways to contribute to open-source projects, but the most common way is by writing code. You can fix bugs, ' +
          'add new features, and improve the project in many ways.'
        }
        features={[
          {
            title: 'Create a Branch',
            description:
              'The first step to making changes is to create a new branch in the project. This allows you to work on your changes ' +
              'without affecting the main project.',
            icon: <GitBranchIcon />,
          },
          {
            title: 'Make Changes',
            description:
              'Once you’ve created a branch, you can start making changes to the project. You can fix bugs, add new features, ' +
              'and improve the project in many ways.',
            icon: <Diff />,
          },
          {
            title: 'Commit Changes',
            description:
              'After you’ve made your changes, you can commit them to your branch. This saves your changes to the project ' +
              'and prepares them to be pushed to GitHub.',
            icon: <GitCommit />,
          },
        ]}
        additionalContent={
          'Once you’ve made your changes, you’re ready to push them to GitHub and create a pull request. This is where you submit ' +
          'your changes to the project maintainers for review.'
        }
      />
      <UnifiedSection
        tagline={'Step 4'}
        title={'Create a Pull Request'}
        description={
          'Once you’ve made your changes to the project, the next step is to create a pull request on GitHub.'
        }
        centered={true}
        topOfPage={false}
        boldTitle={false}
        content={
          'A pull request is a way to submit your changes to the project maintainers for review. They can review your changes, ' +
          'provide feedback, and decide whether to merge your changes into the main project.'
        }
        features={[
          {
            title: 'Create a Pull Request',
            description:
              'To create a pull request, simply navigate to the project on GitHub and click the “New Pull Request” button. ' +
              'This will open a form where you can submit your changes for review.',
            icon: <GitPullRequest />,
          },
          {
            title: 'Describe Your Changes',
            description:
              'When creating a pull request, be sure to describe your changes in detail. This will help the project maintainers ' +
              'understand what you’ve done and why.',
            icon: <NewspaperIcon />,
          },
          {
            title: 'Review Changes',
            description:
              'Once you’ve created a pull request, the project maintainers will review your changes. They may ask questions, ' +
              'provide feedback, and suggest improvements.',
            icon: <GlassesIcon />,
          },
        ]}
        additionalContent={
          'Once your pull request has been reviewed and approved, the project maintainers will merge your changes into the main project. ' +
          'Congratulations, you’ve successfully contributed to an open-source project!'
        }
      />
      <UnifiedSection
        tagline={'Step 5'}
        title={'Celebrate!'}
        description={
          'Congratulations, you’ve successfully contributed to an open-source project! Now it’s time to celebrate!'
        }
        centered={true}
        topOfPage={false}
        boldTitle={false}
        content={
          'Contributing to open-source projects is a great way to give back to the community, learn new skills, and improve ' +
          'your programming abilities. You should be proud of what you’ve accomplished!'
        }
        features={[
          {
            title: 'Share Your Success',
            description:
              'Share your success with others! Let your friends, family, and colleagues know that you’ve contributed to an ' +
              'open-source project. They’ll be proud of you!',
            icon: <Star />,
          },
          {
            title: 'Keep Contributing',
            description:
              'Contributing to open-source projects is addictive! Once you’ve made your first contribution, you’ll want to ' +
              'keep going and contribute to more projects. Keep up the great work!',
            icon: <GitFork />,
          },
          {
            title: 'Learn and Grow',
            description:
              'Contributing to open-source projects is a great way to learn new skills and improve your programming abilities. ' +
              'Take what you’ve learned and apply it to your own projects!',
            icon: <Brain />,
          },
        ]}
        additionalContent={
          'Congratulations on your first open-source contribution! Keep up the great work and continue to make a difference in the ' +
          'open-source community!'
        }
      />
      <UnifiedSection
        centered={true}
        title={'Get Started!'}
        content={
          'Now that you know how to contribute to open-source projects, it’s time to get started! Find a project that interests you, ' +
          "make some changes, and submit a pull request. You’ll be amazed at how rewarding it can be!\nIt's also worth mentioning that" +
          ' GitHub has organizations, which can be great communities of makers to join and contribute to. If you want to join one, ' +
          'maybe consider joining 4934, a community run organization of makers, creators, and builders!'
        }
        topOfPage={false}
        links={[
          {
            name: 'Learn About 4934',
            href: 'https://olavorw.com/4934',
          },
          {
            name: 'Join 4934',
            href: 'https://4934.tech/contact',
          },
        ]}
      />
    </>
  );
}
