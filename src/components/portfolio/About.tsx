import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Target, Users } from "lucide-react";

const highlights = [
  {
    icon: GraduationCap,
    title: "Formación",
    description: "Ingeniería de Sistemas - Universidad de Antioquia",
  },
  {
    icon: Briefcase,
    title: "Experiencia",
    description: "Auxiliar de Programación en la UdeA",
  },
  {
    icon: Target,
    title: "Enfoque",
    description: "Desarrollo web, móvil, backend y machine learning",
  },
  {
    icon: Users,
    title: "Valores",
    description: "Trabajo en equipo y aprendizaje continuo",
  },
];

const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Sobre <span className="gradient-text">Mí</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Desarrollador en formación apasionado por crear soluciones tecnológicas con impacto real
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              Soy un desarrollador en formación que disfruta aprender y crear soluciones 
              que conecten la tecnología con las personas. Me motiva la construcción de 
              proyectos que tengan <span className="text-foreground font-medium">impacto real</span>.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Constantemente estoy explorando nuevas herramientas y metodologías que 
              potencien mis habilidades. Me caracterizo por mi <span className="text-foreground font-medium">curiosidad constante</span>, 
              capacidad para construir proyectos desde la idea hasta la implementación, 
              y mi disposición para compartir conocimiento.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Actualmente me encuentro profundizando en <span className="text-primary font-medium">Machine Learning</span> y 
              su aplicación en proyectos reales, además de explorar el desarrollo multiplataforma 
              con Kotlin y tecnologías web modernas.
            </p>
          </motion.div>

          {/* Highlights grid */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.3 }}
                className="p-6 rounded-xl glass hover:glow transition-all duration-300 group"
              >
                <item.icon className="h-8 w-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold mb-2 text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
