import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, Download, Link } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "NU Mart",
    date: "Jan 2025 – Present",
    description:
      "Web-based marketplace for Northeastern students using React, Node.js, PostgreSQL, OAuth 2.0, and secure payments.",
    link: "https://github.com/Naveennnm13/NU-Mart",
    attachment: "/attachments/nu_mart_docs.zip",
    github: "https://github.com/Naveennnm13/NU-Mart",
  },
  {
    title: "Apple vs Samsung Stock Analysis",
    date: "Sep 2024 – Dec 2024",
    description:
      "Compared 6,000+ data points on Apple vs Samsung stocks, used statistical analysis to quantify investment risk/returns.",
    link: "https://github.com/Naveennnm13/Navigating-Volatility",
    attachment: "/attachments/stock_analysis.zip",
    github: "https://github.com/Naveennnm13/Navigating-Volatility",
  },
  {
    title: "Rain Prediction System",
    date: "Oct 2021 – Jun 2022",
    description:
      "IoT-based rain prediction using ML algorithms and Firebase. Achieved 95% accuracy, boosted crop health by 25%.",
    link: "https://github.com/Naveennnm13/Rain-Prediction-System-",
    attachment: "/attachments/rain_prediction.zip",
    github: "https://github.com/Naveennnm13/Rain-Prediction-System-",
  },
];

const blogs = [
  {
    title: "Breaking into Product Management as an Engineer",
    summary: "How my engineering background helped me transition into product roles with confidence and data-driven decision making.",
  },
  {
    title: "Lessons in Agile: Intern to Consultant",
    summary: "What I learned about Agile, Scrum, and effective delivery from my journey at Bizom and Transpace.",
  },
  {
    title: "Optimizing Supply Chains with Data & Tech",
    summary: "Exploring tools and techniques that can streamline SCM using digital transformation."
  },
];

export default function Portfolio() {
  return (
    <main className="max-w-4xl mx-auto p-6 space-y-10">
      <motion.section className="text-center space-y-2" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <h1 className="text-4xl font-bold">Naveen Murali</h1>
        <p className="text-muted-foreground">MS in Engineering Management @ Northeastern | SaaS & ERP Consultant | Data & Product Enthusiast</p>
        <div className="flex justify-center gap-4 pt-2">
          <a href="mailto:murali.na@northeastern.edu"><Mail /></a>
          <a href="https://www.linkedin.com/in/naveennnmurali/"><Linkedin /></a>
          <a href="https://github.com/Naveennnm13"><Github /></a>
        </div>
      </motion.section>

      <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
        <h2 className="text-2xl font-semibold mb-4">Work Experience</h2>
        <Card>
          <CardContent className="p-4">
            <h3 className="font-semibold">SaaS Implementation Consultant – Bizom</h3>
            <p className="text-sm text-muted-foreground">Oct 2022 – Jul 2024</p>
            <ul className="list-disc ml-6 mt-2 space-y-1 text-sm">
              <li>Led SaaS onboarding & ERP integration, driving $10M+ revenue.</li>
              <li>Improved product performance via PRDs & roadmaps; reduced defects by 85%.</li>
              <li>Enhanced customer satisfaction to 97% by reducing ticket resolution time by 45%.</li>
            </ul>
          </CardContent>
        </Card>
        <Card className="mt-4">
          <CardContent className="p-4">
            <h3 className="font-semibold">Project Management Intern – Transpace Technologies</h3>
            <p className="text-sm text-muted-foreground">Jan 2022 – Jun 2022</p>
            <ul className="list-disc ml-6 mt-2 space-y-1 text-sm">
              <li>Accelerated product delivery by 35%, driving $30K in shipments.</li>
              <li>Performed analysis under ISRO/IPC standards on 4,000+ samples.</li>
              <li>Reduced test error rate to <1% through data-informed insights.</li>
            </ul>
          </CardContent>
        </Card>
        <Card className="mt-4">
          <CardContent className="p-4">
            <h3 className="font-semibold">Customer Success Intern – Shine Projects</h3>
            <p className="text-sm text-muted-foreground">Oct 2021 – Dec 2021</p>
            <ul className="list-disc ml-6 mt-2 space-y-1 text-sm">
              <li>Boosted enrollments by 15% through market analysis.</li>
              <li>Onboarded 350+ users through engagement-focused events.</li>
              <li>Improved client retention by 20% with optimized onboarding.</li>
            </ul>
          </CardContent>
        </Card>
      </motion.section>

      <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
        <h2 className="text-2xl font-semibold mb-4">Projects</h2>
        <div className="grid gap-4">
          {projects.map((proj) => (
            <Card key={proj.title}>
              <CardContent className="p-4 space-y-2">
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold text-lg">{proj.title}</h3>
                  <a href={proj.link} target="_blank" rel="noopener noreferrer">
                    <Button size="sm">View</Button>
                  </a>
                </div>
                <p className="text-sm text-muted-foreground">{proj.date}</p>
                <p className="text-sm">{proj.description}</p>
                <div className="flex gap-4 pt-2">
                  <a href={proj.github} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm"><Github className="mr-2" />GitHub</Button>
                  </a>
                  <a href={proj.attachment} download>
                    <Button variant="outline" size="sm"><Download className="mr-2" />Attachment</Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.section>

      <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
        <h2 className="text-2xl font-semibold mb-4">Blog</h2>
        <div className="grid gap-4">
          {blogs.map((blog) => (
            <Card key={blog.title}>
              <CardContent className="p-4">
                <h3 className="font-semibold text-lg mb-1">{blog.title}</h3>
                <p className="text-sm text-muted-foreground">{blog.summary}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.section>

      <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}>
        <h2 className="text-2xl font-semibold mb-4">Download Resume</h2>
        <div className="flex gap-4 flex-wrap">
          <a href="/resumes/Product_Management_Resume.pdf" download>
            <Button variant="outline"><Download className="mr-2" /> Product Management</Button>
          </a>
          <a href="/resumes/Project_Management_Resume.pdf" download>
            <Button variant="outline"><Download className="mr-2" /> Project Management</Button>
          </a>
          <a href="/resumes/Supply_Chain_Resume.pdf" download>
            <Button variant="outline"><Download className="mr-2" /> Supply Chain</Button>
          </a>
        </div>
      </motion.section>
    </main>
  );
}
