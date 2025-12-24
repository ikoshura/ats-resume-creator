import { Mail, Phone, MapPin, Linkedin, Github, ExternalLink, Link as LinkIcon } from "lucide-react";
import { ResumeData, UILabels } from "@/types/resume";

interface ResumeProps {
  data: ResumeData;
  labels: UILabels;
  showLinks?: boolean;
}

export const Resume = ({ data, labels, showLinks = false }: ResumeProps) => {
  return (
    <div className="bg-card text-card-foreground print:bg-white print:text-gray-800 text-left">
      {/* Header / Contact */}
      <header className="border-b-2 border-foreground pb-6 mb-6 break-inside-avoid print:border-gray-800">
        <h1 className="text-3xl md:text-4xl font-bold uppercase tracking-wider text-foreground mb-2 print:text-gray-900">
          {data.name}
        </h1>
        <h2 className="text-lg md:text-xl font-medium text-muted-foreground mb-4 print:text-gray-600">
          {data.title}
        </h2>
        
        <div className="flex flex-wrap gap-3 md:gap-4 text-sm text-muted-foreground print:text-gray-600">
          <div className="flex items-center gap-1.5">
            <MapPin className="w-4 h-4 flex-shrink-0" />
            <span>{data.contact.location}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Phone className="w-4 h-4 flex-shrink-0" />
            <span>{data.contact.phone}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Mail className="w-4 h-4 flex-shrink-0" />
            <a href={`mailto:${data.contact.email}`} className="hover:text-primary transition-colors print:text-gray-600">
              {data.contact.email}
            </a>
          </div>
          {data.contact.linkedin && (
            <div className="flex items-center gap-1.5">
              <Linkedin className="w-4 h-4 flex-shrink-0" />
              <a 
                href={`https://${data.contact.linkedin}`} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-primary transition-colors print:text-gray-600"
              >
                {data.contact.linkedin}
              </a>
            </div>
          )}
          {data.contact.github && (
            <div className="flex items-center gap-1.5">
              <Github className="w-4 h-4 flex-shrink-0" />
              <a 
                href={`https://${data.contact.github}`} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-primary transition-colors print:text-gray-600"
              >
                {data.contact.github}
              </a>
            </div>
          )}
        </div>
      </header>

      {/* Main Layout: 2 Columns */}
      <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] print:grid-cols-[2fr_1fr] gap-6 md:gap-8">
        
        {/* Left Column (Main Content) */}
        <div className="space-y-6">
          
          {/* Summary */}
          <section className="break-inside-avoid">
            <h3 className="text-sm font-bold uppercase tracking-widest border-b border-border pb-1 mb-3 text-foreground print:border-gray-300 print:text-gray-900">
              {labels.profile}
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground text-justify print:text-gray-700">
              {data.summary}
            </p>
          </section>

          {/* Experience / Projects */}
          <section>
            <h3 className="text-sm font-bold uppercase tracking-widest border-b border-border pb-1 mb-4 text-foreground break-inside-avoid print:border-gray-300 print:text-gray-900">
              {labels.experience}
            </h3>
            <div className="space-y-5">
              {data.projects.map((project, index) => (
                <div key={index} className="break-inside-avoid">
                  <div className="flex flex-wrap justify-between items-baseline gap-2 mb-1">
                    <div className="flex flex-col">
                      <div className="flex items-center gap-2">
                        <h4 className="font-bold text-foreground print:text-gray-800">{project.project}</h4>
                        {project.link && !showLinks && (
                          <a 
                            href={`https://${project.link}`} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-muted-foreground hover:text-primary print:hidden"
                          >
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        )}
                      </div>
                      {project.link && showLinks && (
                        <a 
                          href={`https://${project.link}`} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="flex items-center gap-1 text-xs text-primary hover:underline mt-0.5 print:text-blue-700"
                        >
                          <LinkIcon className="w-3 h-3" />
                          {project.link}
                        </a>
                      )}
                    </div>
                    <span className="text-xs font-semibold text-muted-foreground bg-muted px-2 py-0.5 rounded print:bg-transparent print:p-0 whitespace-nowrap">
                      {project.period}
                    </span>
                  </div>
                  <div className="text-sm font-medium text-primary mb-1 print:text-blue-700">{project.role} {project.company ? `| ${project.company}` : ''}</div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-2 print:text-gray-700">
                    {project.description}
                  </p>
                  {project.technologies && (
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((tech, i) => (
                        <span 
                          key={i} 
                          className="text-[10px] uppercase font-semibold text-muted-foreground border border-border px-1.5 py-0.5 rounded print:border-gray-400 print:text-gray-500"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

        </div>

        {/* Right Column (Sidebar) */}
        <div className="space-y-6">

          {/* Skills */}
          <section className="break-inside-avoid">
            <h3 className="text-sm font-bold uppercase tracking-widest border-b border-border pb-1 mb-3 text-foreground print:border-gray-300 print:text-gray-900">
              {labels.skills}
            </h3>
            <div className="space-y-4">
              {data.skills.map((skillGroup, index) => (
                <div key={index} className="break-inside-avoid">
                  <h4 className="text-xs font-bold text-muted-foreground uppercase mb-1.5 print:text-gray-500">
                    {skillGroup.category}
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {skillGroup.items.map((item, i) => (
                      <span 
                        key={i} 
                        className="text-xs text-foreground bg-muted px-2 py-1 rounded print:bg-transparent print:p-0 print:border print:border-gray-300 print:text-gray-800"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Education */}
          <section className="break-inside-avoid">
            <h3 className="text-sm font-bold uppercase tracking-widest border-b border-border pb-1 mb-3 text-foreground print:border-gray-300 print:text-gray-900">
              {labels.education}
            </h3>
            <div className="space-y-4">
              {data.education.map((edu, index) => (
                <div key={index} className="break-inside-avoid">
                  <h4 className="font-bold text-foreground text-sm print:text-gray-800">{edu.institution}</h4>
                  <div className="text-sm text-muted-foreground print:text-gray-700">{edu.degree}</div>
                  {edu.gpa && <div className="text-sm text-muted-foreground italic print:text-gray-600">GPA: {edu.gpa}</div>}
                  <div className="text-xs text-muted-foreground mt-1 print:text-gray-500">{edu.location}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Languages */}
          <section className="break-inside-avoid">
            <h3 className="text-sm font-bold uppercase tracking-widest border-b border-border pb-1 mb-3 text-foreground print:border-gray-300 print:text-gray-900">
              {labels.languages}
            </h3>
            <div className="space-y-2">
              {data.languages.map((lang, index) => (
                <div key={index} className="break-inside-avoid">
                  <div className="flex justify-between items-baseline">
                    <span className="font-medium text-sm text-foreground print:text-gray-800">{lang.language}</span>
                  </div>
                  <span className="text-xs text-muted-foreground print:text-gray-600">{lang.proficiency}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Certificates */}
          <section className="break-inside-avoid">
            <h3 className="text-sm font-bold uppercase tracking-widest border-b border-border pb-1 mb-3 text-foreground print:border-gray-300 print:text-gray-900">
              {labels.certificates}
            </h3>
            <ul className="space-y-3">
              {data.certificates.map((cert, index) => (
                <li key={index} className="text-sm break-inside-avoid">
                  <div className="font-medium text-foreground leading-tight print:text-gray-800">{cert.name}</div>
                  <div className="text-muted-foreground text-xs mt-0.5 print:text-gray-600">{cert.issuer} {cert.date ? `• ${cert.date}` : ''}</div>
                </li>
              ))}
            </ul>
          </section>

        </div>
      </div>
    </div>
  );
};

export default Resume;
