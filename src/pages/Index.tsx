import { useState, useEffect } from "react";
import { Download, LayoutTemplate, Globe, Link as LinkIcon, Edit, Save } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
  SheetClose
} from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { toast } from "sonner";

import CVDocument from "@/components/CVDocument";
import CVDocumentTwoColumn from "@/components/CVDocumentTwoColumn";
import Resume from "@/components/Resume";
import { resumeDataEn, resumeDataId, labels } from "@/data/resumeData";
import { ResumeData } from "@/types/resume";

type DesignType = "classic" | "professional";
type Language = "en" | "id";

const Index = () => {
  const [design, setDesign] = useState<DesignType>("professional");
  const [lang, setLang] = useState<Language>("en");
  const [showLinks, setShowLinks] = useState(false);
  
  // Initialize state with the EN data initially
  const [data, setData] = useState<ResumeData>(resumeDataEn);

  // When language changes, update the data reference
  // Note: This resets manual edits if switching languages.
  useEffect(() => {
    setData(lang === "en" ? resumeDataEn : resumeDataId);
  }, [lang]);

  const handleDownload = () => {
    window.print();
  };

  const toggleDesign = () => {
    setDesign(prev => prev === "classic" ? "professional" : "classic");
  };

  const toggleLanguage = () => {
    setLang(prev => prev === "en" ? "id" : "en");
    toast.info(`Switched to ${lang === "en" ? "Indonesian" : "English"}`);
  };

  const handleDataChange = (field: string, value: string) => {
    setData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleContactChange = (field: string, value: string) => {
    setData(prev => ({
      ...prev,
      contact: {
        ...prev.contact,
        [field]: value
      }
    }));
  };

  return (
    <div className="min-h-screen bg-muted py-8 px-4 sm:px-6 lg:px-8 print:p-0 print:bg-white print:min-h-0">
      {/* Navigation / Actions - Hidden when printing */}
      <nav className="max-w-[210mm] mx-auto mb-6 flex flex-col xl:flex-row justify-between items-center gap-4 no-print bg-card p-4 rounded-lg shadow-sm border">
        <div className="flex flex-col text-left w-full xl:w-auto">
          <h1 className="text-xl font-bold text-foreground flex items-center gap-2">
            Resume Preview <span className="text-xs font-normal text-muted-foreground bg-muted px-2 py-1 rounded">ATS Friendly</span>
          </h1>
          <p className="text-muted-foreground text-sm">Review content, edit, and download.</p>
        </div>
        
        <div className="flex flex-wrap gap-3 items-center w-full xl:w-auto justify-center xl:justify-end">
          {/* Controls Group */}
          <div className="flex items-center gap-4 border-r pr-4 mr-2">
            <div className="flex items-center space-x-2">
              <Switch 
                id="show-links" 
                checked={showLinks}
                onCheckedChange={setShowLinks}
              />
              <Label htmlFor="show-links" className="flex items-center gap-1 cursor-pointer">
                <LinkIcon className="w-3.5 h-3.5" />
                <span className="text-xs hidden sm:inline">Show Links</span>
              </Label>
            </div>
          </div>

          <Button
            onClick={toggleLanguage}
            variant="outline"
            size="sm"
            className="gap-2"
          >
            <Globe className="w-4 h-4" />
            <span>{lang === "en" ? "EN" : "ID"}</span>
          </Button>

          <Button
            onClick={toggleDesign}
            variant="outline"
            size="sm"
            className="gap-2"
          >
            <LayoutTemplate className="w-4 h-4" />
            <span className="hidden sm:inline">{design === "classic" ? "Two Column" : "Single Column"}</span>
          </Button>

          {/* Edit Sheet */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="secondary" size="sm" className="gap-2">
                <Edit className="w-4 h-4" />
                Edit Content
              </Button>
            </SheetTrigger>
            <SheetContent className="w-[400px] sm:w-[540px] overflow-hidden flex flex-col">
              <SheetHeader>
                <SheetTitle>Edit Resume Content</SheetTitle>
                <SheetDescription>
                  Make changes to your resume. Click save to see updates immediately.
                </SheetDescription>
              </SheetHeader>
              <ScrollArea className="flex-1 pr-4 mt-4">
                <div className="space-y-6 pb-6">
                  {/* Personal Info */}
                  <div className="space-y-4">
                    <h3 className="font-semibold border-b pb-2">Personal Information</h3>
                    <div className="grid gap-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input 
                        id="name" 
                        value={data.name} 
                        onChange={(e) => handleDataChange('name', e.target.value)}
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="title">Professional Title</Label>
                      <Input 
                        id="title" 
                        value={data.title} 
                        onChange={(e) => handleDataChange('title', e.target.value)}
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="summary">Professional Summary</Label>
                      <Textarea 
                        id="summary" 
                        value={data.summary} 
                        className="h-32"
                        onChange={(e) => handleDataChange('summary', e.target.value)}
                      />
                    </div>
                  </div>

                  {/* Contact Info */}
                  <div className="space-y-4">
                    <h3 className="font-semibold border-b pb-2">Contact Details</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="grid gap-2">
                        <Label htmlFor="email">Email</Label>
                        <Input 
                          id="email" 
                          value={data.contact.email} 
                          onChange={(e) => handleContactChange('email', e.target.value)}
                        />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="phone">Phone</Label>
                        <Input 
                          id="phone" 
                          value={data.contact.phone} 
                          onChange={(e) => handleContactChange('phone', e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="location">Location</Label>
                      <Input 
                        id="location" 
                        value={data.contact.location} 
                        onChange={(e) => handleContactChange('location', e.target.value)}
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="grid gap-2">
                        <Label htmlFor="linkedin">LinkedIn</Label>
                        <Input 
                          id="linkedin" 
                          value={data.contact.linkedin || ''} 
                          onChange={(e) => handleContactChange('linkedin', e.target.value)}
                        />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="github">GitHub</Label>
                        <Input 
                          id="github" 
                          value={data.contact.github || ''} 
                          onChange={(e) => handleContactChange('github', e.target.value)}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Advanced Edit Notice */}
                  <div className="bg-muted p-4 rounded-md text-sm text-muted-foreground">
                    <p className="font-semibold mb-1">Editing Lists (Experience, etc.)</p>
                    <p>To edit projects, education, or skills, please modify the <code>src/data/resumeData.ts</code> file directly for persistent changes, or use this JSON editor below for temporary tweaks.</p>
                  </div>

                  {/* JSON Override for Power Users */}
                  <div className="space-y-2">
                     <Label htmlFor="json-data">Raw Data (Advanced)</Label>
                     <Textarea 
                        id="json-data"
                        className="font-mono text-xs h-64"
                        value={JSON.stringify(data, null, 2)}
                        onChange={(e) => {
                          try {
                            const parsed = JSON.parse(e.target.value);
                            setData(parsed);
                          } catch (err) {
                            // Silent fail for invalid JSON while typing
                          }
                        }}
                     />
                  </div>
                </div>
              </ScrollArea>
              <SheetFooter className="mt-4">
                <SheetClose asChild>
                  <Button type="submit" className="w-full">
                    <Save className="w-4 h-4 mr-2" />
                    Close & Preview
                  </Button>
                </SheetClose>
              </SheetFooter>
            </SheetContent>
          </Sheet>

          <Button
            onClick={handleDownload}
            className="gap-2"
          >
            <Download className="w-4 h-4" />
            Download PDF
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
            <Resume 
              data={data} 
              labels={labels[lang]} 
              showLinks={showLinks}
            />
          ) : (
            <CVDocumentTwoColumn /> 
            // Note: CVDocumentTwoColumn would also need to be updated to accept data props 
            // to support the editing features fully. 
            // For now, switching back to professional shows the edits.
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
