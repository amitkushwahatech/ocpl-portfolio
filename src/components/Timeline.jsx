

import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

import "./timeline.css";


const Exper = ({ experience }) => {
  return (
    <div class="timeline">
      <span class="icon fa fa-globe">
      <img
            src={experience.icon}
            alt={experience.company_name}
            className='w-full h-full object-contain'
          />
      </span>
      <a href="#" class="timeline-content">
        <h3 class="title">{experience.title}</h3>
        <p class="description">{experience.company_name}</p>
      </a>
      <ul className="mt-5 list-disc ml-5 space-y-2">
              {experience.points.map((point, index) => (
                <li
                  key={`experience-point-${index}`}
                  className="text-white-100 text-[14px] pl-1 tracking-wider"
                >
                  {point}
                </li>
              ))}
            </ul>
    </div>
  );
};

const Timeline = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          What I have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Work Experience.
        </h2>
      </motion.div>

 
      <div className="mt-20 flex flex-col">
        <div class="row">
          <div class="col-md-12">
            <div class="main-timeline2">
              {experiences.map((experience, index) => (
                <Exper key={`experience-${index}`} experience={experience} />
              ))}
            </div>
          </div>
        </div>
      </div>

    
    </>
  );
};

export default SectionWrapper(Timeline, "timeline");





















// import React from 'react'
// import "./timeline.css"
// const Timeline = () => {
//   return (
//     <>

//         <div class="container">
//             <h4>Timeline Style :</h4>
//             <div class="row">
//                 <div class="col-md-12">
//                     <div class="main-timeline2">
//                         <div class="timeline">
//                             <span class="icon fa fa-globe"></span>
//                             <a href="#" class="timeline-content">
//                                 <h3 class="title">Web Designer</h3>
//                                 <p class="description">
//                                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer malesuada tellus lorem, et condimentum neque commodo quis.
//                                 </p>
//                             </a>
//                         </div>
//                         <div class="timeline">
//                             <span class="icon fa fa-rocket"></span>
//                             <a href="#" class="timeline-content">
//                                 <h3 class="title">Web Developer</h3>
//                                 <p class="description">
//                                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer malesuada tellus lorem, et condimentum neque commodo quis.
//                                 </p>
//                             </a>
//                         </div>
//                         <div class="timeline">
//                             <span class="icon fa fa-briefcase"></span>
//                             <a href="#" class="timeline-content">
//                                 <h3 class="title">Web Designer</h3>
//                                 <p class="description">
//                                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer malesuada tellus lorem, et condimentum neque commodo quis.
//                                 </p>
//                             </a>
//                         </div>
//                         <div class="timeline">
//                             <span class="icon fa fa-mobile"></span>
//                             <a href="#" class="timeline-content">
//                                 <h3 class="title">Web Developer</h3>
//                                 <p class="description">
//                                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer malesuada tellus lorem, et condimentum neque commodo quis.
//                                 </p>
//                             </a>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//         <hr/>

//         <div class="container">
//             <h4>Timeline Style : Demo-2</h4>
//             <div class="row">
//                 <div class="col-md-12">
//                     <div class="main-timeline5">
//                         <div class="timeline">
//                             <div class="timeline-icon"><span class="year">2018</span></div>
//                             <div class="timeline-content">
//                                 <h3 class="title">Web Desginer</h3>
//                                 <p class="description">
//                                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia mi ultrices, luctus nunc ut, commodo enim. Vivamus sem erat.
//                                 </p>
//                             </div>
//                         </div>
//                         <div class="timeline">
//                             <div class="timeline-icon"><span class="year">2017</span></div>
//                             <div class="timeline-content">
//                                 <h3 class="title">Web Developer</h3>
//                                 <p class="description">
//                                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia mi ultrices, luctus nunc ut, commodo enim. Vivamus sem erat.
//                                 </p>
//                             </div>
//                         </div>
//                         <div class="timeline">
//                             <div class="timeline-icon"><span class="year">2016</span></div>
//                             <div class="timeline-content">
//                                 <h3 class="title">Web Desginer</h3>
//                                 <p class="description">
//                                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia mi ultrices, luctus nunc ut, commodo enim. Vivamus sem erat.
//                                 </p>
//                             </div>
//                         </div>
//                         <div class="timeline">
//                             <div class="timeline-icon"><span class="year">2015</span></div>
//                             <div class="timeline-content">
//                                 <h3 class="title">Web Developer</h3>
//                                 <p class="description">
//                                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia mi ultrices, luctus nunc ut, commodo enim. Vivamus sem erat.
//                                 </p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//         <hr/>

//         <div class="demo">
//             <div class="container">
//                 <h4>Timeline Style : Demo-4</h4>
//                 <div class="row">
//                     <div class="col-md-12">
//                         <div class="main-timeline6">
//                             <div class="timeline">
//                                 <div class="timeline-content">
//                                     <span class="year">2018</span>
//                                     <div class="content-inner">
//                                         <span class="icon"><i class="fa fa-globe"></i></span>
//                                         <h3 class="title">Web Designer</h3>
//                                         <p class="description">
//                                             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer malesuada tellus lorem, et condimentum neque commodo quis. Quisque eu ornare risus, vitae fermentum eros. Etiam venenatis ac.
//                                         </p>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div class="timeline">
//                                 <div class="timeline-content">
//                                     <span class="year">2017</span>
//                                     <div class="content-inner">
//                                         <span class="icon"><i class="fa fa-rocket"></i></span>
//                                         <h3 class="title">Web Developer</h3>
//                                         <p class="description">
//                                             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer malesuada tellus lorem, et condimentum neque commodo quis. Quisque eu ornare risus, vitae fermentum eros. Etiam venenatis ac.
//                                         </p>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div class="timeline">
//                                 <div class="timeline-content">
//                                     <span class="year">2016</span>
//                                     <div class="content-inner">
//                                         <span class="icon"><i class="fa fa-briefcase"></i></span>
//                                         <h3 class="title">Web Designer</h3>
//                                         <p class="description">
//                                             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer malesuada tellus lorem, et condimentum neque commodo quis. Quisque eu ornare risus, vitae fermentum eros. Etiam venenatis ac.
//                                         </p>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div class="timeline">
//                                 <div class="timeline-content">
//                                     <span class="year">2015</span>
//                                     <div class="content-inner">
//                                         <span class="icon"><i class="fa fa-mobile"></i></span>
//                                         <h3 class="title">Web Developer</h3>
//                                         <p class="description">
//                                             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer malesuada tellus lorem, et condimentum neque commodo quis. Quisque eu ornare risus, vitae fermentum eros. Etiam venenatis ac.
//                                         </p>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>

//         <hr/>

//     </>
//   )
// }

// export default Timeline
