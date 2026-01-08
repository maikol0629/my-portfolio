import { motion } from "framer-motion";
import { Github, ExternalLink, Calendar, Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "Beauty Room",
    description: "Sistema de gestión de citas entre clientes y estilistas. Aplicación completa con backend en Java para salones de belleza.",
    tech: ["Java", "Backend", "REST API"],
    github: "https://github.com/maikol0629/beauty_room",
    color: "from-pink-500 to-rose-500",
  },
  {
    title: "ReadShare",
    description: "Aplicación móvil para compartir y descubrir lecturas. Desarrollada con Kotlin para Android con interfaz moderna.",
    tech: ["Kotlin", "Android", "Mobile"],
    github: "https://github.com/maikol0629/ReadShare",
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "TaskDrive",
    description: "Gestor de tareas moderno desarrollado con TypeScript. Incluye funcionalidades avanzadas de organización y productividad.",
    tech: ["TypeScript", "React", "Web App"],
    github: "https://github.com/maikol0629/TaskDrive",
    color: "from-violet-500 to-purple-500",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Proyectos <span className="gradient-text">Destacados</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Una selección de mis trabajos más representativos
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative rounded-xl overflow-hidden glass"
            >
              {/* Gradient header */}
              <div className={`h-32 bg-gradient-to-br ${project.color} opacity-80`}>
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6 -mt-8 relative">
                <div className="flex items-center gap-2 mb-3">
                  <Code className="h-5 w-5 text-primary" />
                  <h3 className="text-xl font-bold">{project.title}</h3>
                </div>
                
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tech badges */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <Badge 
                      key={tech} 
                      variant="secondary" 
                      className="text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1 glass" 
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Código
                    </a>
                  </Button>
                </div>
              </div>

              {/* Hover glow effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-10`} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* View all projects link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <Button variant="outline" size="lg" className="glass" asChild>
            <a href="https://github.com/maikol0629?tab=repositories" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5 mr-2" />
              Ver todos en GitHub
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
