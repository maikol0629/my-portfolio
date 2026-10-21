import { motion } from "framer-motion";
import { Github, ExternalLink, Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "TaskDrive",
    description:
      "Aplicación web para gestionar tareas, proyectos y equipos. Front-end en Next.js con Supabase para autenticación y persistencia de datos.",
    tech: ["Next.js", "TypeScript", "Supabase"],
    github: "https://github.com/maikol0629/TaskDrive",
    demo: "https://task-drive.vercel.app",
    image: "/projects/taskdrive.png",
    color: "from-violet-500 to-purple-500",
  },
  {
    title: "Cash Track",
    description:
      "Gestor de finanzas personales con autenticación y seguimiento de ingresos y gastos. Desplegado y en funcionamiento.",
    tech: ["React", "TypeScript", "Vercel"],
    github: "https://github.com/maikol0629/cash_track",
    demo: "https://cash-track-rho.vercel.app",
    image: "/projects/cash-track.png",
    color: "from-emerald-500 to-teal-500",
  },
  {
    title: "ReadShare",
    description:
      "Aplicación móvil para intercambiar libros entre lectores, con mapas y ubicación en tiempo real. Desarrollada en Kotlin y Jetpack Compose.",
    tech: ["Kotlin", "Android", "Compose"],
    github: "https://github.com/maikol0629/ReadShare",
    image: "/projects/readshare.png",
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Beauty Room",
    description:
      "Backend en Java para la gestión de citas entre clientes y estilistas, con API REST y organización de la agenda del salón.",
    tech: ["Java", "REST API", "Backend"],
    github: "https://github.com/maikol0629/beauty_room",
    image: "/projects/beauty-room.png",
    color: "from-pink-500 to-rose-500",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative scroll-mt-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Proyectos <span className="gradient-text">Destacados</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Una selección de mis trabajos más representativos
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative flex flex-col rounded-xl overflow-hidden glass"
            >
              {/* Cover */}
              <div className="relative aspect-[16/10] overflow-hidden bg-secondary">
                <img
                  src={project.image}
                  alt={`Portada del proyecto ${project.title}`}
                  width={1400}
                  height={875}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/10 to-transparent" />
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Code className="h-5 w-5 text-primary" />
                  <h3 className="text-xl font-bold text-foreground">{project.title}</h3>
                </div>

                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech badges */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Actions */}
                <div className="mt-auto flex gap-3">
                  <Button variant="outline" size="sm" className="flex-1 glass" asChild>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground"
                    >
                      <Github className="h-4 w-4 mr-2 text-foreground" />
                      Código
                    </a>
                  </Button>
                  {project.demo && (
                    <Button size="sm" className="flex-1" asChild>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Demo
                      </a>
                    </Button>
                  )}
                </div>
              </div>

              {/* Hover glow effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-10`} />
              </div>
            </motion.article>
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
            <a
              href="https://github.com/maikol0629?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground"
            >
              <Github className="h-5 w-5 mr-2 text-foreground" />
              Ver todos en GitHub
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
