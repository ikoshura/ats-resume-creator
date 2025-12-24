import { Mail, Phone, MapPin, Linkedin, Github, ExternalLink } from "lucide-react";

const CVDocument = () => {
  return (
    <div className="cv-container bg-card text-card-foreground p-8 md:p-12 max-w-[850px] mx-auto shadow-lg rounded-lg">
      {/* Header */}
      <header className="text-center mb-8 animate-fade-in">
        <h1 className="text-3xl md:text-4xl font-heading font-bold text-cv-heading mb-3">
          ABRAR ZHARIFAN SYAH
        </h1>
        <div className="flex flex-wrap justify-center gap-4 text-sm text-cv-text">
          <a href="mailto:abrar.zharif@gmail.com" className="flex items-center gap-1.5 hover:text-cv-link transition-colors">
            <Mail className="w-4 h-4" />
            abrar.zharif@gmail.com
          </a>
          <a href="tel:+6285215635500" className="flex items-center gap-1.5 hover:text-cv-link transition-colors">
            <Phone className="w-4 h-4" />
            +62 852 1563 5500
          </a>
          <span className="flex items-center gap-1.5">
            <MapPin className="w-4 h-4" />
            Bandung, West Java, Indonesia
          </span>
        </div>
        <div className="flex justify-center gap-4 mt-2 text-sm">
          <a 
            href="https://linkedin.com/in/abrarzha" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-cv-link hover:underline"
          >
            <Linkedin className="w-4 h-4" />
            linkedin.com/in/abrarzha
          </a>
          <a 
            href="https://github.com/ikoshura" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-cv-link hover:underline"
          >
            <Github className="w-4 h-4" />
            github.com/ikoshura
          </a>
        </div>
      </header>

      {/* About Me */}
      <section className="mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
        <h2 className="text-lg font-heading font-bold text-cv-heading border-b-2 border-cv-divider pb-1 mb-3">
          PROFESSIONAL SUMMARY
        </h2>
        <p className="text-cv-text leading-relaxed">
          Applied Digital Creative Multimedia graduate with a strong focus on interactive application development, visual design, and creative technology. Experienced in Game Programming, Augmented Reality (AR), Graphic Design, Video Editing, and Web Development. Adept at collaborative work and completing projects from concept to final product.
        </p>
      </section>

      {/* Skills */}
      <section className="mb-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
        <h2 className="text-lg font-heading font-bold text-cv-heading border-b-2 border-cv-divider pb-1 mb-3">
          TECHNICAL SKILLS
        </h2>
        <div className="grid gap-3 text-sm text-cv-text">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
            <div className="font-semibold text-cv-subheading">Graphic Design</div>
            <div className="md:col-span-2">Adobe Photoshop, Figma • UI/UX Design, Visual Design</div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
            <div className="font-semibold text-cv-subheading">3D Modeling</div>
            <div className="md:col-span-2">Blender • 3D Modeling, Animation, Rendering</div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
            <div className="font-semibold text-cv-subheading">Video Production</div>
            <div className="md:col-span-2">DaVinci Resolve, Adobe Premiere Pro, Capcut • Video Editing, Color Grading, Audio Editing</div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
            <div className="font-semibold text-cv-subheading">Game Development</div>
            <div className="md:col-span-2">Unity 3D, Unreal Engine • C#, Blueprint</div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
            <div className="font-semibold text-cv-subheading">Web Development</div>
            <div className="md:col-span-2">Git, VS Code • HTML, CSS, JavaScript, PHP, MySQL, React.js</div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
            <div className="font-semibold text-cv-subheading">App Development</div>
            <div className="md:col-span-2">Xcode, Visual Studio, Android Studio • Swift, SwiftUI, C#, Kotlin</div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="mb-6 animate-fade-in" style={{ animationDelay: "0.3s" }}>
        <h2 className="text-lg font-heading font-bold text-cv-heading border-b-2 border-cv-divider pb-1 mb-3">
          EDUCATION
        </h2>
        <div className="space-y-3">
          <div>
            <h3 className="font-semibold text-cv-subheading">Telkom University</h3>
            <p className="text-cv-text">Bachelor of Applied Science in Digital Creative Multimedia</p>
            <p className="text-sm text-muted-foreground">GPA: 3.71 / 4.00</p>
          </div>
          <div>
            <h3 className="font-semibold text-cv-subheading">Islamic Integrated Boarding School of Yapena</h3>
            <p className="text-cv-text">Junior & Senior High School • Lhokseumawe, Aceh</p>
          </div>
        </div>
      </section>

      {/* Languages */}
      <section className="mb-6 animate-fade-in" style={{ animationDelay: "0.4s" }}>
        <h2 className="text-lg font-heading font-bold text-cv-heading border-b-2 border-cv-divider pb-1 mb-3">
          LANGUAGES
        </h2>
        <div className="text-cv-text space-y-1">
          <p><span className="font-semibold text-cv-subheading">Indonesian:</span> Native</p>
          <p><span className="font-semibold text-cv-subheading">English:</span> Excellent reading and listening comprehension. Able to fully understand books, articles, and videos in English. Basic speaking proficiency.</p>
        </div>
      </section>

      {/* Projects */}
      <section className="animate-fade-in" style={{ animationDelay: "0.5s" }}>
        <h2 className="text-lg font-heading font-bold text-cv-heading border-b-2 border-cv-divider pb-1 mb-3">
          PROJECT EXPERIENCE
        </h2>
        <div className="space-y-4 text-sm">
          <ProjectItem
            title="UMKM Documentary Video – Gunung Puntang"
            link="https://youtu.be/Sf6fRcq1Bq0"
            description="Led the complete production process including planning, recording, and post-production. Handled narrative structure, offline/online editing, color grading, and sound mixing."
          />
          <ProjectItem
            title="Graphic Designer – Unyu Food Booth (Market Day Telkom University)"
            link="https://www.instagram.com/unyufood/"
            description="Created visual branding, promotional materials, and graphic assets for the booth as part of a Market Day business project."
          />
          <ProjectItem
            title="Music Video with VFX & Green Screen"
            link="https://youtu.be/kaW-NtDZ5kw"
            description="Integrated actor recordings from green screen with 3D backgrounds in Blender. Added creative visual effects to match the music concept."
          />
          <ProjectItem
            title="3D Headphone Commercial Animation"
            link="https://youtu.be/oxbp5MYIBcE"
            description="Created a complete 3D advertising animation from start to finish, highlighting product design and quality with engaging visuals."
          />
          <ProjectItem
            title="3D Asset Modeler – Metaverse Graduation Ceremony (Telkom University)"
            link="https://youtu.be/FsYnhXEpu0Y"
            description="Developed 3D assets (environment & characters) for a virtual graduation ceremony using Mozilla Hubs."
          />
          <ProjectItem
            title="360° Immersive Career Days Website"
            link="https://app.lapentor.com/sphere/virtual-career"
            description="Built an immersive 360° website using Blender and Lapentor for the Career Days event."
          />
          <ProjectItem
            title="Website for TRM Study Program (Telkom University)"
            link="https://dsm.telkomuniversity.ac.id"
            description="Developed the TRM study program website using PHP & MySQL to support academic needs and promotion."
          />
          <ProjectItem
            title="Game Programmer Mentor (MBKM Program)"
            link="https://youtu.be/5NlD-fhPvRY"
            description="Mentored MBKM participants in Unity & C# for basic game programming."
          />
          <ProjectItem
            title="Sajda – Prayer Times App for macOS"
            link="https://ikoshura.gumroad.com/l/sajda"
            description="Built a SwiftUI-based macOS application for prayer time scheduling with auto-location, multilingual UI, and notifications."
          />
          <ProjectItem
            title="Interactive Quran Learning App with Gamification"
            link="https://yaqro.vercel.app"
            description="Developed an interactive web platform using React.js and Supabase with features including streaks, points, and quizzes."
          />
          <ProjectItem
            title="VR Exploration – Smart Village Edu (Desa Rancamanyar)"
            link="https://youtu.be/OoA6JlwPjkk"
            description="Developed a VR exploration experience in Unity for the KKNT Smart Village program using Meta Quest."
          />
          <ProjectItem
            title="AR Application for Traditional Music Learning"
            link="https://youtu.be/gqz1Vk0aIHY"
            description="Built an augmented reality application in Unity to support interactive learning of Indonesian traditional music instruments."
          />
        </div>
      </section>
    </div>
  );
};

interface ProjectItemProps {
  title: string;
  link: string;
  description: string;
}

const ProjectItem = ({ title, link, description }: ProjectItemProps) => (
  <div>
    <div className="flex items-start gap-2">
      <h3 className="font-semibold text-cv-subheading">{title}</h3>
      <a 
        href={link} 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-cv-link hover:underline flex-shrink-0"
      >
        <ExternalLink className="w-3.5 h-3.5" />
      </a>
    </div>
    <p className="text-cv-text mt-0.5">{description}</p>
  </div>
);

export default CVDocument;
