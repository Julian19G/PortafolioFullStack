"use client"

import { fadeIn } from '@/utils/motion-transition'
import {motion} from 'framer-motion'


interface MotionTransitionProps {
    children: React.ReactNode
    position: 'right' | 'bottom'
}


const MotionTransition = (props: MotionTransitionProps) => {
    const { children, position } = props

    return (
        <motion.div
         variants={fadeIn(position)}
        >
            {children}
        </motion.div>
    );
}

export default MotionTransition;