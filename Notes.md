# Framer Motion

- Install Framer Motion
    `npm i motion`

- Import motion component
     `import {motion} from 'motion/react'` 

- Make you element motion component 
     ` <motion.div>Box</motion.div>`

- Attributes/Props
     `animate={{ x:1000,y:50,scale:1.5 }}` 
     `transition={{ duration:2,delay:1 }}`     

### What is Framer Motion?

Framer motion is an open-source animation library specifically designed for React. It allows developers to create animations and interactions with minimal code. Framer Motion is built on the foundation of the Framer library and provides a declarative API for defining animations, making it easy to create complex motion designs. It is widely used for:

- Creating smooth, fluid animations
- Enhancing user experience
- High performance

### Is Framer Motion Good?

Framer Motion is considered one of the best animation libraries for React due to its:

- Ease of use
- Powerful features
- community support

### When To Choose Framer Motion:

- You are working primarily with React and want a library that integrates seamlessly with it.
- You need to quickly implement animations with simple and declarative API.
- Your project involves a lot of interactive animations, such as drag, hover, and top gestures.

### When To Choose GSAP:

- You need advanced animations capabilities and highly customized animations.
- Your project is not limit to React, or you are sing multiple frameworks.
- You require the use of GSAP's powerful plugins for tasks like scroll-based animatons or complete SVG animations.


### Outline

#### Introduction to framer motion

- Overview of framer motion.
- Key features and benefits.
- Installing framer motion.
- Basic project setup with react-vite.

#### Basic Animations

- Motion components ('motion.div',etc)
- Animate props ('initial', 'animate', 'exit')
- Simple Transitions
- Creating and using variant.

#### Advanced ANimations

- Using keyframes
- Drag animations
- Hover and tap animations
- 