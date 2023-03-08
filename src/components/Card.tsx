"use client";
import { useEffect } from "react";
import { motion } from "framer-motion"
import { fadeIn, parentVariants, childVariants } from "../utils/motion";
import Link from "next/link";

export interface cardProps {
    img: string
}

const Card: React.FC<cardProps> = ({img}) => {
    return (
            <div className="glow-card">
                <img className="glow-card-image" src={img} alt="card" />
            </div>
    )
}

export default Card;