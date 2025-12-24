import { Mail, Phone, MapPin, Linkedin, Github, ExternalLink } from "lucide-react";

const CVDocumentTwoColumn = () => {
  return (
    <div className="cv-container bg-card text-card-foreground max-w-[850px] mx-auto shadow-lg rounded-lg overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] print:grid-cols-[240px_1fr]">
        {/* Left Column - Sidebar */}
        <aside className="bg-primary text-primary-foreground p-6 md:p-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-2xl font-heading font-bold mb-1">
              ABRAR ZHARIFAN SYAH
            </h1>
            <p className="text-primary-foreground/80 text-sm">
              Digital Creative Multimedia
            </p>
          </div>

          {/* Contact */}
          <div className="mb-8">
            <h2 className="text-sm font-bold uppercase tracking-wider mb-3 border-b border-primary-foreground/30 pb-1">
              Contact
            </h2>
            <div className="space-y-2 text-sm">
              <a href="mailto:abrar.zharif@gmail.com" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span className="break-all">abrar.zharif@gmail.com</span>
              </a>
              <a href="tel:+6285215635500" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>+62 852 1563 5500</span>
              </a>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 flex-shrink-0" />
                <span>Bandung, West Java</span>
              </div>
              <a 
                href="https://linkedin.com/in/abrarzha" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:opacity-80 transition-opacity"
              >
                <Linkedin className="w-4 h-4 flex-shrink-0" />
                <span>linkedin.com/in/abrarzha</span>
              </a>
              <a 
                href="https://github.com/ikoshura" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:opacity-80 transition-opacity"
              >
                <Github className="w-4 h-4 flex-shrink-0" />
                <span>github.com/ikoshura</span>
              </a>
            </div>
          </div>

          {/* Skills */}
          <div className="mb-8">
            <h2 className="text-sm font-bold uppercase tracking-wider mb-3 border-b border-primary-foreground/30 pb-1">
              Skills
            </h2>
            <div className="space-y-3 text-sm">
              <div>
                <p className="font-semibold text-primary-foreground/90">Graphic Design</p>
                <p className="text-primary-foreground/70">Photoshop, Figma, UI/UX</p>
              </div>
              <div>
                <p className="font-semibold text-primary-foreground/90">3D Modeling</p>
                <p className="text-primary-foreground/70">Blender, Animation</p>
              </div>
              <div>
                <p className="font-semibold text-primary-foreground/90">Video Production</p>
                <p className="text-primary-foreground/70">DaVinci Resolve, Premiere</p>
              </div>
              <div>
                <p className="font-semibold text-primary-foreground/90">Game Development</p>
                <p className="text-primary-foreground/70">Unity 3D, Unreal Engine, C#</p>
              </div>
              <div>
                <p className="font-semibold text-primary-foreground/90">Web Development</p>
                <p className="text-primary-foreground/70">React, JavaScript, PHP</p>
              </div>
              <div>
                <p className="font-semibold text-primary-foreground/90">App Development</p>
                <p className="text-primary-foreground/70">Swift, SwiftUI, Kotlin</p>
              </div>
            </div>
          </div>

          {/* Languages */}
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider mb-3 border-b border-primary-foreground/30 pb-1">
              Languages
            </h2>
            <div className="space-y-2 text-sm">
              <div>
                <p className="font-semibold text-primary-foreground/90">Indonesian</p>
                <p className="text-primary-foreground/70">Native</p>
              </div>
              <div>
                <p className="font-semibold text-primary-foreground/90">English</p>
                <p className="text-primary-foreground/70">Excellent reading/listening, Basic speaking</p>
              </div>
            </div>
          </div>
        </aside>

        {/* Right Column - Main Content */}
        <main className="p-6 md:p-8">
          {/* Summary */}
          <section className="mb-6">
            <h2 className="text-lg font-heading font-bold text-cv-heading border-b-2 border-cv-divider pb-1 mb-3">
              PROFESSIONAL SUMMARY
            </h2>
            <p className="text-cv-text text-sm leading-relaxed">
              Applied Digital Creative Multimedia graduate with a strong focus on interactive application development, visual design, and creative technology. Experienced in Game Programming, AR, Graphic Design, Video Editing, and Web Development. Adept at collaborative work and completing projects from concept to final product.
            </p>
          </section>

          {/* Education */}
          <section className="mb-6">
            <h2 className="text-lg font-heading font-bold text-cv-heading border-b-2 border-cv-divider pb-1 mb-3">
              EDUCATION
            </h2>
            <div className="space-y-3 text-sm">
              <div>
                <h3 className="font-semibold text-cv-subheading">Telkom University</h3>
                <p className="text-cv-text">B.A.Sc. in Digital Creative Multimedia</p>
                <p className="text-muted-foreground">GPA: 3.71 / 4.00</p>
              </div>
              <div>
                <h3 className="font-semibold text-cv-subheading">Islamic Integrated Boarding School of Yapena</h3>
                <p className="text-cv-text">Junior & Senior High School • Lhokseumawe, Aceh</p>
              </div>
            </div>
          </section>

          {/* Projects */}
          <section>
            <h2 className="text-lg font-heading font-bold text-cv-heading border-b-2 border-cv-divider pb-1 mb-3">
              PROJECT EXPERIENCE
            </h2>
            <div className="space-y-3 text-sm">
              <ProjectItem
                title="UMKM Documentary Video – Gunung Puntang"
                description="Led complete production: planning, recording, editing, color grading, sound mixing."
              />
              <ProjectItem
                title="3D Asset Modeler – Metaverse Graduation (Telkom University)"
                description="Created 3D environment & character assets for virtual graduation using Mozilla Hubs."
              />
              <ProjectItem
                title="Website for TRM Study Program"
                description="Built academic website using PHP & MySQL for Telkom University."
              />
              <ProjectItem
                title="Game Programmer Mentor (MBKM)"
                description="Mentored participants in Unity & C# for basic game programming."
              />
              <ProjectItem
                title="Sajda – Prayer Times App for macOS"
                description="Built SwiftUI app with auto-location, multilingual UI, and notifications."
              />
              <ProjectItem
                title="Interactive Quran Learning App"
                description="Developed React.js + Supabase platform with gamification features."
              />
              <ProjectItem
                title="VR Exploration – Smart Village Edu"
                description="Created VR experience in Unity for KKNT program using Meta Quest."
              />
              <ProjectItem
                title="AR Traditional Music Learning App"
                description="Built AR application in Unity for interactive traditional music learning."
              />
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

const ProjectItem = ({ title, description }: { title: string; description: string }) => (
  <div>
    <h3 className="font-semibold text-cv-subheading">{title}</h3>
    <p className="text-cv-text">{description}</p>
  </div>
);

export default CVDocumentTwoColumn;
