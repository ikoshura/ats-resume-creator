import { ResumeData, UILabels } from '@/types/resume';

export const labels = {
  en: {
    profile: "Profile",
    contact: "Contact",
    skills: "Skills",
    education: "Education",
    experience: "Experience & Projects",
    languages: "Languages",
    certificates: "Certificates",
    download: "Download PDF",
    preview: "Resume Preview"
  } as UILabels,
  id: {
    profile: "Profil",
    contact: "Kontak",
    skills: "Keahlian",
    education: "Pendidikan",
    experience: "Pengalaman & Proyek",
    languages: "Bahasa",
    certificates: "Sertifikat",
    download: "Unduh PDF",
    preview: "Pratinjau Resume"
  } as UILabels
};

const commonData = {
  name: "Abrar Zharifan Syah",
  contact: {
    email: "abrar.zharif@gmail.com",
    phone: "+62 852 1563 5500",
    location: "Bandung, West Java, Indonesia",
    linkedin: "linkedin.com/in/abrarzha",
    github: "github.com/ikoshura",
  },
  skills: [
    {
      category: "Programming Languages",
      items: ["Swift", "C#", "Kotlin", "JavaScript", "TypeScript", "HTML/CSS", "PHP", "Python"]
    },
    {
      category: "Frameworks & Libraries",
      items: ["React.js", "SwiftUI", "Tailwind CSS", "Bootstrap", "TensorFlow", "Keras"]
    },
    {
      category: "Game & AR/VR",
      items: ["Unity 3D", "Unreal Engine", "Blender", "Spark AR"]
    },
    {
      category: "Tools & Platforms",
      items: ["Git", "VS Code", "Xcode", "Android Studio", "Figma", "Adobe Creative Suite", "DaVinci Resolve"]
    }
  ],
  certificates: [
    {
      name: "Preparation Course for Azure AI Fundamentals (AI-900)",
      issuer: "Microsoft",
      date: "2024"
    },
    {
      name: "IT Support Google Specialization",
      issuer: "Coursera",
      credentialId: "T5HWJRSAKJ3F"
    },
    {
      name: "IBM People and Soft Skills for Professional Success",
      issuer: "Coursera",
      credentialId: "KYD2PEWMKX6D"
    },
    {
      name: "Design Thinking for Innovation",
      issuer: "University of Virginia (Coursera)",
      credentialId: "SGXY8J6BPZ7D"
    },
    {
      name: "Introduction to IoT & Embedded Systems",
      issuer: "UC Irvine (Coursera)",
      credentialId: "FYS5HHCNX2JA"
    }
  ]
};

export const resumeDataEn: ResumeData = {
  ...commonData,
  title: "Digital Creative Multimedia Graduate | Software Engineer",
  summary: "Bachelor of Applied Science in Digital Creative Multimedia graduate with a strong focus on interactive application development, visual design, and creative technology. Experienced in Game Programming, Augmented Reality, Graphic Design, Video Editing, and Web Development. Adept at collaborative work and managing projects from conceptualization to final product delivery.",
  education: [
    {
      institution: "Telkom University",
      degree: "Bachelor of Applied Science in Digital Creative Multimedia",
      gpa: "3.71 / 4.00",
      location: "Bandung, Indonesia"
    },
    {
      institution: "Islamic Integrated Boarding School of Yapena",
      degree: "Junior & Senior High School",
      location: "Lhokseumawe, Aceh"
    }
  ],
  projects: [
    {
      role: "Swift Developer",
      project: "Sajda - Prayer Times App for macOS",
      period: "2025",
      type: "Project",
      description: "Developed a minimalist macOS utility app using SwiftUI. Features include accurate prayer time calculations, auto-location detection, multilingual UI support, and system notifications.",
      link: "github.com/ikoshura/Sajda",
      technologies: ["Swift", "SwiftUI", "macOS SDK"]
    },
    {
      role: "Web Developer",
      project: "Interactive Quran Learning App (Yaqro)",
      period: "2024",
      type: "Project",
      description: "Built an interactive web platform for Quran learning using React.js and Supabase. Implemented gamification features such as streaks, points, and quizzes to enhance user engagement.",
      link: "yaqro.vercel.app",
      technologies: ["React.js", "Supabase", "Tailwind CSS"]
    },
    {
      role: "ML Engineer & Researcher",
      project: "Classification of Ficus Carica Variants",
      period: "2024",
      type: "Research",
      description: "Conducted research utilizing VGG-16 Transfer Learning (TensorFlow/Keras) to classify variants of Ficus Carica. Managed dataset collection, image preprocessing, and model evaluation.",
      link: "researchgate.net/scientific-contributions/Abrar-Zharifan-Syah-2281678838",
      technologies: ["Python", "TensorFlow", "Keras", "Machine Learning"]
    },
    {
      role: "AR Programmer & Designer",
      project: "Augmented Reality: The History of Aircraft",
      period: "2023",
      type: "Project",
      description: "Created an Android-based AR educational application. Led 3D modeling in Blender and AR development in Unity to visualize the evolution of aviation from early gliders to modern jets.",
      link: "youtu.be/iEu8aLQlmiU",
      technologies: ["Unity", "C#", "Blender", "Android"]
    },
    {
      role: "Web Developer",
      project: "Digital Creative Multimedia Program Website",
      period: "2023",
      type: "Work",
      description: "Developed the official website for the study program, providing curriculum details, lecturer profiles, and academic news. Utilized PHP and MySQL to create a dynamic content management system.",
      link: "dsm.telkomuniversity.ac.id",
      technologies: ["PHP", "MySQL", "Web Development"]
    },
    {
      role: "Mentor",
      project: "Game Programmer Mentoring (MBKM)",
      company: "ICE Institute",
      period: "2022",
      type: "Volunteering",
      description: "Served as a mentor for the MBKM program, teaching Unity game engine fundamentals and C# programming to beginner game developers.",
      link: "youtu.be/5NlD-fhPvRY",
      technologies: ["Mentoring", "Unity", "C#"]
    },
    {
      role: "3D Environment Artist",
      project: "Metaverse Graduation Ceremony",
      period: "2022",
      type: "Project",
      description: "Modeled 3D assets (characters and environments) for Indonesia's first metaverse-based graduation ceremony, integrated into Mozilla Hubs for VR accessibility.",
      link: "youtu.be/FsYnhXEpu0Y",
      technologies: ["Blender", "Mozilla Hubs", "VR"]
    },
    {
      role: "Web Developer",
      project: "360° Immersive Career Days Website",
      period: "2022",
      type: "Project",
      description: "Developed a 360° immersive virtual event website using Blender for environment rendering and Lapentor for interactive web navigation.",
      link: "app.lapentor.com/sphere/virtual-career",
      technologies: ["Blender", "Lapentor", "Web Design"]
    }
  ],
  languages: [
    {
      language: "Indonesian",
      proficiency: "Native"
    },
    {
      language: "English",
      proficiency: "Professional Working Proficiency (TOEFL Equivalent: 530)"
    }
  ]
};

export const resumeDataId: ResumeData = {
  ...commonData,
  title: "Lulusan Digital Creative Multimedia | Software Engineer",
  summary: "Lulusan Sarjana Terapan Digital Creative Multimedia dengan fokus kuat pada pengembangan aplikasi interaktif, desain visual, dan teknologi kreatif. Berpengalaman dalam Pemrograman Game, Augmented Reality, Desain Grafis, Video Editing, dan Pengembangan Web. Mahir dalam kerja kolaboratif dan mengelola proyek dari konsep hingga pengiriman produk akhir.",
  education: [
    {
      institution: "Telkom University",
      degree: "Sarjana Terapan Digital Creative Multimedia",
      gpa: "3.71 / 4.00",
      location: "Bandung, Indonesia"
    },
    {
      institution: "Islamic Integrated Boarding School of Yapena",
      degree: "SMP & SMA",
      location: "Lhokseumawe, Aceh"
    }
  ],
  projects: [
    {
      role: "Pengembang Swift",
      project: "Sajda - Aplikasi Waktu Sholat untuk macOS",
      period: "2025",
      type: "Project",
      description: "Mengembangkan aplikasi utilitas macOS minimalis menggunakan SwiftUI. Fitur mencakup perhitungan waktu sholat yang akurat, deteksi lokasi otomatis, dukungan UI multibahasa, dan notifikasi sistem.",
      link: "github.com/ikoshura/Sajda",
      technologies: ["Swift", "SwiftUI", "macOS SDK"]
    },
    {
      role: "Pengembang Web",
      project: "Aplikasi Belajar Al-Quran Interaktif (Yaqro)",
      period: "2024",
      type: "Project",
      description: "Membangun platform web interaktif untuk pembelajaran Al-Quran menggunakan React.js dan Supabase. Mengimplementasikan fitur gamifikasi seperti streak, poin, dan kuis untuk meningkatkan keterlibatan pengguna.",
      link: "yaqro.vercel.app",
      technologies: ["React.js", "Supabase", "Tailwind CSS"]
    },
    {
      role: "ML Engineer & Peneliti",
      project: "Klasifikasi Varian Ficus Carica",
      period: "2024",
      type: "Research",
      description: "Melakukan penelitian menggunakan VGG-16 Transfer Learning (TensorFlow/Keras) untuk mengklasifikasikan varian Ficus Carica. Mengelola pengumpulan dataset, pra-pemrosesan gambar, dan evaluasi model.",
      link: "researchgate.net/scientific-contributions/Abrar-Zharifan-Syah-2281678838",
      technologies: ["Python", "TensorFlow", "Keras", "Machine Learning"]
    },
    {
      role: "Programmer & Desainer AR",
      project: "Augmented Reality: Sejarah Pesawat Terbang",
      period: "2023",
      type: "Project",
      description: "Membuat aplikasi pendidikan AR berbasis Android. Memimpin pemodelan 3D di Blender dan pengembangan AR di Unity untuk memvisualisasikan evolusi penerbangan dari glider awal hingga jet modern.",
      link: "youtu.be/iEu8aLQlmiU",
      technologies: ["Unity", "C#", "Blender", "Android"]
    },
    {
      role: "Pengembang Web",
      project: "Website Program Studi Digital Creative Multimedia",
      period: "2023",
      type: "Work",
      description: "Mengembangkan situs web resmi untuk program studi, menyediakan detail kurikulum, profil dosen, dan berita akademik. Menggunakan PHP dan MySQL untuk membuat sistem manajemen konten yang dinamis.",
      link: "dsm.telkomuniversity.ac.id",
      technologies: ["PHP", "MySQL", "Web Development"]
    },
    {
      role: "Mentor",
      project: "Mentoring Programmer Game (MBKM)",
      company: "ICE Institute",
      period: "2022",
      type: "Volunteering",
      description: "Bertugas sebagai mentor untuk program MBKM, mengajarkan dasar-dasar mesin game Unity dan pemrograman C# kepada pengembang game pemula.",
      link: "youtu.be/5NlD-fhPvRY",
      technologies: ["Mentoring", "Unity", "C#"]
    },
    {
      role: "Artist Lingkungan 3D",
      project: "Upacara Wisuda Metaverse",
      period: "2022",
      type: "Project",
      description: "Memodelkan aset 3D (karakter dan lingkungan) untuk upacara wisuda berbasis metaverse pertama di Indonesia, diintegrasikan ke dalam Mozilla Hubs untuk aksesibilitas VR.",
      link: "youtu.be/FsYnhXEpu0Y",
      technologies: ["Blender", "Mozilla Hubs", "VR"]
    },
    {
      role: "Pengembang Web",
      project: "Website Career Days Imersif 360°",
      period: "2022",
      type: "Project",
      description: "Mengembangkan situs web acara virtual imersif 360° menggunakan Blender untuk rendering lingkungan dan Lapentor untuk navigasi web interaktif.",
      link: "app.lapentor.com/sphere/virtual-career",
      technologies: ["Blender", "Lapentor", "Web Design"]
    }
  ],
  languages: [
    {
      language: "Bahasa Indonesia",
      proficiency: "Penutur Asli"
    },
    {
      language: "Bahasa Inggris",
      proficiency: "Kemahiran Kerja Profesional (Setara TOEFL: 530)"
    }
  ]
};
