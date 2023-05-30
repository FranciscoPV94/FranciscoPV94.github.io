
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import LineGradient from "../components/LineGradient";



const ServiceCard = ({ index, title, icon }) => (
    <Tilt className="xs:w-[250px] w-full">
        <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
        variants={{
          hidden: { opacity: 0, scale: 0.8 },
          visible: { opacity: 1, scale: 1 },
        }}
            className="w-full bg-gradient-purple p-[1px]  shadow-card"
        >
            <div
                options={{
                    max: 45,
                    scale: 1,
                    speed: 450,
                }}
                className="bg-tertiary py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
            >
                <img
                    src={icon}
                    alt="web-development"
                    className="w-16 h-16 object-contain"
                />
                <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
            </div>
        </motion.div>
    </Tilt>
);



const Tech = () => {
    return (
        <section id="tech" >
            <motion.div
                className="md:w-2/5 mx-auto text-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                hidden: { opacity: 0, y: -50 },
                visible: { opacity: 1, y: 0 },
                }}
            >
                <div>
                <p className="font-opensans font-semibold text-4xl uppercase">
                    <span className="text-green">tech</span>nologies
                </p>
                <div className="flex justify-center mt-5">
                    <LineGradient width="w-2/3" />
                </div>
                </div>
                <p className="mt-10 mb-10">
                Aliquam, amet dui feugiat facilisi dui. Aliquam aliquet integer ut
                fames odio in at. At magna ornare dictum lectus. Purus massa morbi
                </p>
            </motion.div>
      
            <div className="mt-20 flex flex-wrap gap-10 mx-auto justify-center">
                <ServiceCard title="Flutter" icon="https://img.shields.io/badge/Flutter-%2302569B.svg?style=for-the-badge&logo=Flutter&logoColor=white" index="0" />
                <ServiceCard title="Flutter" icon="https://img.shields.io/badge/Flutter-%2302569B.svg?style=for-the-badge&logo=Flutter&logoColor=white" index="1" />
                <ServiceCard title="Flutter" icon="https://img.shields.io/badge/Flutter-%2302569B.svg?style=for-the-badge&logo=Flutter&logoColor=white" index="2" />
                <ServiceCard title="Flutter" icon="https://img.shields.io/badge/Flutter-%2302569B.svg?style=for-the-badge&logo=Flutter&logoColor=white" index="0" />
                <ServiceCard title="Flutter" icon="https://img.shields.io/badge/Flutter-%2302569B.svg?style=for-the-badge&logo=Flutter&logoColor=white" index="1" />
                <ServiceCard title="Flutter" icon="https://img.shields.io/badge/Flutter-%2302569B.svg?style=for-the-badge&logo=Flutter&logoColor=white" index="2" />
                <ServiceCard title="Flutter" icon="https://img.shields.io/badge/Flutter-%2302569B.svg?style=for-the-badge&logo=Flutter&logoColor=white" index="0" />
                <ServiceCard title="Flutter" icon="https://img.shields.io/badge/Flutter-%2302569B.svg?style=for-the-badge&logo=Flutter&logoColor=white" index="1" />

            </div>
        </section>
    );
};

export default Tech;