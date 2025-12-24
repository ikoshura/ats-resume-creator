import { useRef, useState } from "react";
import { Download, Printer, LayoutTemplate } from "lucide-react";
import { Button } from "@/components/ui/button";
import CVDocument from "@/components/CVDocument";
import CVDocumentTwoColumn from "@/components/CVDocumentTwoColumn";

type DesignType = "classic" | "two-column";

const Index = () => {
  const cvRef = useRef<HTMLDivElement>(null);
  const [design, setDesign] = useState<DesignType>("classic");

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadPDF = () => {
    window.print();
  };

  const toggleDesign = () => {
    setDesign(prev => prev === "classic" ? "two-column" : "classic");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Action Bar */}
      <div className="no-print sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
        <div className="max-w-[850px] mx-auto px-4 py-4 flex items-center justify-between gap-4">
          <div className="min-w-0">
            <h1 className="text-lg font-heading font-bold text-foreground truncate">CV Preview</h1>
            <p className="text-sm text-muted-foreground">ATS-Friendly Format</p>
          </div>
          <div className="flex gap-2 flex-shrink-0">
            <Button 
              variant="outline" 
              size="sm" 
              onClick={toggleDesign}
              className="gap-2"
            >
              <LayoutTemplate className="w-4 h-4" />
              <span className="hidden sm:inline">{design === "classic" ? "Two-Column" : "Classic"}</span>
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={handlePrint}
              className="gap-2"
            >
              <Printer className="w-4 h-4" />
              <span className="hidden sm:inline">Print</span>
            </Button>
            <Button 
              size="sm" 
              onClick={handleDownloadPDF}
              className="gap-2"
            >
              <Download className="w-4 h-4" />
              <span className="hidden sm:inline">Download PDF</span>
            </Button>
          </div>
        </div>
      </div>

      {/* CV Content */}
      <main className="py-8 px-4">
        <div ref={cvRef}>
          {design === "classic" ? <CVDocument /> : <CVDocumentTwoColumn />}
        </div>
      </main>

      {/* Footer */}
      <footer className="no-print py-6 text-center text-sm text-muted-foreground border-t border-border">
        <p>Click "Download PDF" and select "Save as PDF" in the print dialog for the best ATS-compatible format.</p>
      </footer>
    </div>
  );
};

export default Index;
