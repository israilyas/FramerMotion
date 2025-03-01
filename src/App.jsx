import React from 'react'
import { motion, useScroll } from 'motion/react'

function App() {

const {scrollYProgress} = useScroll()

  return (
    <div className='w-full bg-black text-center font-mono'>

{/* Key Frame Animation */}
      {/* <motion.div >
        <motion.img 
        initial={{
          x:0,
          y:0
        }}
        animate={{
          x: [0,1000,1000,0,0],
          y:[0,0,300,300,0],
          rotate:[0,360,0,-360,0]
        }}
          transition={{
            duration: 4,
            delay: 1,
            repeat: Infinity,
            ease: 'anticipate'
          }}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXDE64dpw-ziSSWqJkv4LLFNZbEmjqmSiejw&s" alt="" />
      </motion.div> */}

      {/* <motion.div 
     animate={{
      x:1000,
      rotate:360
     }} 
     transition={{
      duration:3,
      delay:2,
     }}
     className='h-[200px] w-[200px] bg-red-500 text-xl flex justify-center items-center'>
      Box
     </motion.div>

     <motion.div animate={{
      scale:1.5,
      x:400
     }}
     transition={{
      delay:3,
      duration:3
     }}
      className='h-[200px] w-[200px] bg-red-500 text-xl flex justify-center items-center rounded-full'>
      Circle
     </motion.div> */}

     {/* === Hover and tap */}
     {/* <motion.div 
     whileHover={{
      background:'blue'
     }}
     whileTap={{
      rotate:360
     }}
     transition={{
      duration:1
     }}
     className='bg-red-500 w-[200px] h-[200px] border-2 border-black m-3'></motion.div> */}

     {/* Drag */}
     {/* <motion.div 
     drag
     whileDrag={{
      scale:0.8
     }}
     dragConstraints={{
      left:0,
      top:0,
      right:1000,
      bottom:300
     }}
     dragDirectionLock="true"
     whileHover={{
      background:'blue'
     }}
     whileTap={{
      
     }}
     transition={{
     }}
     className='bg-red-500 w-[200px] h-[200px] border-2 border-black m-3'></motion.div> */}

     {/* Scrolling Anmation */}
     
     <motion.div 
     style={{
      scaleX:scrollYProgress
     }}
     className='origin-left rounded-full bg-red-500 w-full h-3 fixed top-0 '></motion.div>

     <div className=' px-20 py-20  text-white font-monospace flex flex-col gap-[50px]'>
      <h2 className='text-4xl font-bold mb-8'>Scrolling Animation</h2>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum sed corporis officia pariatur officiis? Et, repudiandae quas, fuga rerum iusto provident blanditiis architecto sint nam quod quae, laudantium tempora voluptates enim odit! Quo, reprehenderit. Quaerat saepe laborum error repudiandae ea quod, molestias aut, ipsa fuga excepturi doloremque quisquam deserunt, accusamus blanditiis animi ut magnam. Exercitationem accusamus ea deleniti quod reprehenderit. Deleniti vel accusantium atque quos voluptate delectus consectetur sapiente inventore obcaecati possimus, nulla tempore voluptatem! Ipsam illum aliquid nihil vel voluptatem ipsa iste, hic quam ex ut veniam deserunt dolore! Saepe facere, dolorum expedita esse hic at aliquam perferendis itaque.</p>
      <br />
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis, explicabo. Ipsa quod vero soluta iure! Deserunt quidem nisi unde quibusdam enim nulla hic itaque fugit sint repellat iste, vero error nesciunt voluptatibus ad architecto ea autem laboriosam est odio facere alias ipsam minima quas! Nisi sit quo earum quaerat amet animi a! Cumque, reiciendis consectetur? Consequuntur ex eum velit quis eligendi. Ab obcaecati aut laboriosam? Aliquam fuga atque odit quasi, accusamus illo possimus perspiciatis corrupti aspernatur vel labore dolore eos veritatis nihil nesciunt impedit doloribus ab non ullam. Blanditiis libero unde nisi sequi alias, dolorum tempore, quidem odio corporis eligendi dicta. Debitis quibusdam ipsam perferendis velit corporis. Incidunt placeat suscipit ut sapiente aliquid vitae. Deserunt, tempora nisi! Dignissimos officia cum maxime debitis et facere illo aspernatur suscipit est aliquid fugit quam quas nisi fugiat commodi iure veritatis repudiandae corporis asperiores autem quis, nihil sunt? Voluptate rerum ducimus tempore minus, labore magnam nam veritatis facilis accusantium consequuntur quam totam eius iste, praesentium assumenda debitis a nesciunt recusandae cupiditate? Facilis repudiandae officiis dignissimos natus delectus. Laboriosam minima ducimus dolorem beatae veniam velit dolor! Nulla provident minima est a praesentium, consectetur consequatur ad dolores, perferendis numquam pariatur ab dolorem laborum sunt iusto hic.</p>
      <br />
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam hic architecto repudiandae in totam incidunt esse ipsum neque voluptatibus quam consequuntur necessitatibus recusandae repellendus quidem soluta, expedita fuga ratione facere amet! Dolore iure, quam harum ratione vero sapiente quia accusantium, numquam aut ab laudantium qui impedit sit! Ipsa, animi consectetur? Nihil ipsam impedit vitae minus inventore reprehenderit temporibus odio maxime eum recusandae dolor blanditiis, aliquid, assumenda corporis debitis accusamus asperiores, nostrum dicta ad. Repellat, beatae voluptatibus. Sunt consequuntur quas commodi nemo dolor perferendis esse iste exercitationem minus alias quo error tenetur vitae inventore iusto ab obcaecati labore beatae pariatur iure, repellendus necessitatibus. Modi voluptatem quisquam, labore harum id sed perspiciatis ipsum. Esse autem consequatur eius harum odit iusto, in illo enim modi, alias ipsam unde labore totam necessitatibus. Minus accusamus velit iusto vitae cupiditate! Doloribus maiores accusamus ullam cum provident corrupti natus. Quos obcaecati vero ex commodi voluptatibus dolorum, asperiores cumque explicabo debitis dolores iste! Provident molestias vero incidunt hic. Dolor voluptate, laudantium officiis aut in aliquam nihil vero possimus, dolores deserunt tenetur id ducimus soluta quae! Aliquid blanditiis, eos consequuntur laboriosam accusamus aut minima, non, quam nam nulla exercitationem veritatis eaque repellendus at rem ad aspernatur possimus molestias! Quod!</p>
     </div>

    </div>
  )
}

export default App
