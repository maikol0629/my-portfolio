import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Send, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "michael.ruiz1@udea.edu.co",
    href: "mailto:michael.ruiz1@udea.edu.co",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "@maikol0629",
    href: "https://github.com/maikol0629",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Michael Steven Ruiz",
    href: "https://linkedin.com/in/michael-steven-ruiz-palacio-071469309",
  },
];

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            ¿Trabajamos <span className="gradient-text">Juntos</span>?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Estoy abierto a nuevas oportunidades y colaboraciones. ¡No dudes en contactarme!
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          {/* Contact cards */}
          <div className="grid gap-4 mb-12">
            {contactLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ x: 5 }}
                className="flex items-center gap-4 p-6 rounded-xl glass hover:glow transition-all group"
              >
                <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <link.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-muted-foreground">{link.label}</p>
                  <p className="font-medium text-foreground">{link.value}</p>
                </div>
                <Send className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </motion.a>
            ))}
          </div>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span>Medellín, Colombia</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
