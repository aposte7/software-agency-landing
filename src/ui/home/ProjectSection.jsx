import { useState } from 'react';
import Circle from '../../components/Circle';
import ProjectContainerAnime from '../../components/home/ProjectContainerAnime';
import FadeInSection from '../../components/FadeInSection';

const aboutMenu = [
  {
    id: 1,
    label: 'Figma',
    imgUrl: 'images/figma-project.png',
    description: 'Product Design With Good Animation',
  },
  {
    id: 2,
    label: 'Wordpress',
    imgUrl: 'images/wordpress-project.png',
    description: 'Next Design For Your Costumer And Better feature',
  },
  {
    id: 3,
    label: 'Css',
    imgUrl: 'images/css-project.png',
    description: 'Styling Like Changing Body Of Your Design Into Faction',
  },
  {
    id: 4,
    label: 'Javascript',
    imgUrl: 'images/javascript-project.png',
    description: 'Web App With GSAP And Full Mega Animation',
  },
  {
    id: 5,
    label: 'Python',
    imgUrl: 'images/python-project.png',
    description: 'Time For Building New System And New AI',
  },
];
function ProjectSection() {
  const [activeProjectIndex, setActiveProjectIndex] = useState(3);

  return (
    <FadeInSection>
      <section className='px-6 py-14 text-white'>
        <div className='space-y-4 py-20'>
          <h2 className='text-4xl font-semibold'>Our Project</h2>
          <p>See Our Projects What We Made Feel Deep With Us</p>
        </div>
        <div className='grid h-[550px] grid-cols-[15rem_1fr] gap-24'>
          {/* Left Side */}
          <div className='self-center py-7'>
            <div className='relative flex h-[22rem] flex-col justify-between'>
              {aboutMenu.map((value, index) => (
                <div
                  key={value.id}
                  onClick={() => setActiveProjectIndex(index)}
                  className='z-10 cursor-pointer text-3xl'
                >
                  {value.label}
                </div>
              ))}
              <Circle
                styling={`project-square absolute transition-all ease-in-out duration-500  z-10 -left-16 rounded-xl`}
                height='2.3rem'
                width='2.3rem'
                style={{ top: `${4.94 * activeProjectIndex}rem` }}
              />

              <div
                className='square-menu-line absolute left-[25%] h-[4px] w-[180px] -translate-x-1/2 -translate-y-1/2 rounded-e-[50%] transition-all duration-500 ease-in-out'
                style={{ top: `calc(4.7% + ${5 * activeProjectIndex}rem)` }}
              ></div>
            </div>
          </div>

          <ProjectContainerAnime
            img_styling='w-72 height-[20rem]'
            project={aboutMenu[activeProjectIndex]}
          />
        </div>
      </section>
    </FadeInSection>
  );
}

export default ProjectSection;
