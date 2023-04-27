import React from "react";
import Tilt from 'react-parallax-tilt';
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import "./card.scss"
import "./card.js"
const Cards = () => {
  return (
    <section class="cards">
    <div class="card charizard animated"></div>
    <div class="card pika animated"></div>
    <div class="card eevee animated"></div>
    <div class="card mewtwo animated"></div>
  </section>
  )
}

export default SectionWrapper(Cards, "");