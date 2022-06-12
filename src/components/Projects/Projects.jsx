import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList } from './Projects.style';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';
import { useAnimation } from 'framer-motion';



const Projects = () => {

  const controls = useAnimation();
  const { ref, inView } = useInView();

  const variants = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 1
      }
    },
    transition: { 
      delay: 0, 
      duration: 0.5, 
      type:'spring', 
      stiffness: 120, 
      bounce: 0.3,
      when: "beforeChildren",
      staggerChildren: 0.8 
    },
    exit : {
      opacity: 0
    }
  };

  const childrenVariant = {
    hidden: { y: 0, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  }

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
    if (!inView) {
      controls.start('hidden');
    }
  }, [controls, inView]);


  return (
    <Section nopadding id="blog">
      <SectionDivider />
      <SectionTitle main>Blogs</SectionTitle>
        <GridContainer variants={variants} initial="hidden" animate={controls} ref={ref}>
          {projects.map(({ title, description, id, image, tags, source, visit }) => {
            return (
              <BlogCard key={id} variants={childrenVariant}>
                {/* <Img src={image} /> */}
                <TitleContent>
                  <HeaderThree title>{title}</HeaderThree>
                  <Hr />
                  <CardInfo>{description}</CardInfo>
                  <div>
                    <TitleContent>
                      <TagList>
                        {tags.map((tag, i) => (
                          <Tag key={i} id={i}>{tag}</Tag>
                        ))}
                      </TagList>
                    </TitleContent>
                  </div>
                  <UtilityList>
                    <ExternalLinks href={visit}>Visit</ExternalLinks>
                    <ExternalLinks href={source}>Source</ExternalLinks>
                  </UtilityList>
                </TitleContent>
              </BlogCard>
            )
          })}
        </GridContainer>
    </Section>
  );
}

export default Projects;