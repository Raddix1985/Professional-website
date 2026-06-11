"use client"

import { motion } from "framer-motion"
import { useIsMobile } from "@/components/ui/use-mobile"

const experiences = [
  {
    title: "Senior Infrastructure & DevOps Engineer",
    company: "Tech Innovations Inc.",
    period: "2021 - Present",
    description:
      "Lead the cloud infrastructure team in designing and operating highly available, scalable AWS systems. Implemented secure CI/CD pipelines, automated Infrastructure as Code (IaC) deployment with Terraform, and engineered event-driven autoscaling mechanisms.",
  },
  {
    title: "Site Reliability Engineer",
    company: "Digital Solutions Co.",
    period: "2019 - 2021",
    description:
      "Architected fault-tolerant serverless API gateways and edge delivery networks. Instrumented comprehensive monitoring and alerting pipelines (using Prometheus/Grafana and Slack API integration), resolving latencies and achieving 99.99% system uptime.",
  },
  {
    title: "Systems Engineer",
    company: "Creative Agency",
    period: "2017 - 2019",
    description:
      "Designed and maintained robust backend API architectures, automated system backups, and database replication routines. Optimized relational database performance and managed Docker container deployments.",
  },
  {
    title: "Cloud Infrastructure Intern",
    company: "Startup Hub",
    period: "2016 - 2017",
    description: "Assisted in containerizing legacy applications, configuring Linux server environments, and writing shell scripts to automate deployment tasks.",
  },
]

export function Timeline() {
  const isMobile = useIsMobile()

  return (
    <div
      className={`space-y-12 relative ${
        !isMobile
          ? "before:absolute before:inset-0 before:left-1/2 before:ml-0 before:-translate-x-px before:border-l-2 before:border-zinc-700 before:h-full before:z-0"
          : ""
      }`}
    >
      {experiences.map((experience, index) => (
        <div
          key={index}
          className={`relative z-10 flex items-center ${index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"}`}
        >
          <motion.div
            className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pl-10" : "md:pr-10"}`}
            initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="relative overflow-hidden rounded-xl bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 p-6 transition-all duration-300 hover:border-purple-500/50">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl blur opacity-25 hover:opacity-100 transition duration-1000 hover:duration-200"></div>

              <div className="relative">
                <h3 className="text-xl font-bold">{experience.title}</h3>
                <div className="text-zinc-400 mb-4">
                  {experience.company} | {experience.period}
                </div>
                <p className="text-zinc-300">{experience.description}</p>
              </div>
            </div>
          </motion.div>

          {!isMobile && (
            <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center">
              <motion.div
                className="w-6 h-6 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 z-10 flex items-center justify-center"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="w-2 h-2 rounded-full bg-white"></div>
              </motion.div>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
