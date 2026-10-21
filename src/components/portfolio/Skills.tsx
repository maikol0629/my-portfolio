import { motion } from "framer-motion";
import { Code2, LayoutTemplate, Database, Wrench } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const skillCategories = [
  {
    icon: Code2,
    title: "Lenguajes",
    skills: ["JavaScript", "TypeScript", "Python", "Java", "Kotlin", "SQL"],
  },
  {
    icon: LayoutTemplate,
    title: "Frontend",
    skills: ["React", "Next.js", "HTML/CSS", "Tailwind CSS"],
  },
  {
    icon: Database,
    title: "Backend y datos",
    skills: ["Node.js", "PostgreSQL", "MySQL", "Supabase", "REST APIs"],
  },
  {
    icon: Wrench,
    title: "Herramientas",
    skills: ["Git/GitHub", "Docker", "Linux", "Android Studio", "VS Code"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative bg-secondary/30 scroll-mt-20">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Habilidades <span className="gradient-text">Técnicas</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Tecnologías y herramientas con las que trabajo día a día
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
              className="p-6 rounded-xl glass hover:glow transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2 rounded-lg bg-primary/10">
                  <category.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                  >
                    <Badge
                      variant="secondary"
                      className="px-3 py-1 text-sm font-normal border border-transparent hover:border-primary/40 hover:text-foreground transition-colors"
                    >
                      {skill}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
