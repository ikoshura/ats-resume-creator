import { useState } from "react";
import { Download, LayoutTemplate } from "lucide-react";
import { Button } from "@/components/ui/button";
import CVDocument from "@/components/CVDocument";
import Resume from "@/components/Resume";
import { resumeData } from "@/data/resumeData";

type DesignType = "classic" | "professional";

const Index = () => {
  const [design, setDesign] = useState<DesignType>("professional");

  const handleDownload = () => {
    window.print();
  };

  const toggleDesign = () => {
    setDesign(prev => prev === "classic" ? "professional" : "classic");
  };

  return (
    <div className="min-h-screen bg-muted py-8 px-4 sm:px-6 lg:px-8 print:p-0 print:bg-white print:min-h-0">
      {/* Navigation / Actions - Hidden when printing */}
      <nav className="max-w-[210mm] mx-auto mb-6 flex flex-col sm:flex-row justify-between items-center gap-4 no-print">
        <div>
          <h1 className="text-xl font-bold text-foreground">Resume Preview</h1>
          <p className="text-muted-foreground text-sm">Review content before downloading.</p>
        </div>
        <div className="flex gap-2">
          <Button
            onClick={toggleDesign}
            variant="outline"
            className="gap-2"
          >
            <LayoutTemplate className="w-4 h-4" />
            <span className="hidden sm:inline">{design === "classic" ? "Professional" : "Classic"}</span>
          </Button>
          <Button
            onClick={handleDownload}
            className="gap-2"
          >
            <Download className="w-5 h-5" />
            Download PDF (ATS Friendly)
          </Button>
        </div>
      </nav>

      {/* 
        A4 Container 
        On Screen: Simulates A4 paper with explicit dimensions and shadow.
        On Print: Removes restrictions to allow browser pagination to handle overflow naturally.
      */}
      <div className="max-w-[210mm] mx-auto print:max-w-none print:w-full">
        <div 
          id="resume-content" 
          className="bg-card shadow-2xl print:shadow-none p-[15mm] sm:p-[20mm] print:p-0 min-h-[297mm] print:min-h-0 print:h-auto overflow-hidden print:overflow-visible rounded-lg print:rounded-none"
        >
          {design === "professional" ? (
            <Resume data={resumeData} />
          ) : (
            <CVDocument />
          )}
        </div>
      </div>

      {/* Footer - Hidden when printing */}
      <footer className="max-w-[210mm] mx-auto mt-12 text-center text-muted-foreground text-sm no-print pb-8">
        <p>
          <strong>Tip:</strong> In the print dialog, ensure <strong>"Save as PDF"</strong> is selected.<br />
          In "More settings", uncheck "Headers and footers" for a clean look.
        </p>
      </footer>
    </div>
  );
};

export default Index;
