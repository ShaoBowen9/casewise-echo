
import { useParams, Link } from "react-router-dom";
import { Sidebar } from "@/components/layout/Sidebar";
import { ChatInterface } from "@/components/chat/ChatInterface";
import { ArrowLeft, Users, Calendar, MapPin, AlertCircle } from "lucide-react";

const CaseDetail = () => {
  const { id } = useParams<{ id: string }>();
  
  // This would be fetched from an API in a real application
  const caseDetails = {
    id: id || "unknown",
    title: "Illegal Chemical Dumping in Biscayne Bay",
    description: "Reports of industrial waste being dumped in protected waters during nighttime operations. Satellite imagery shows discoloration patterns consistent with chemical pollution. Local marine life appears to be affected with unusual mortality rates among certain species. Gathering evidence and coordinating with local authorities is the priority for this case.",
    category: "Water Pollution",
    location: "Biscayne Bay, Florida",
    dateReported: "May 15, 2023",
    status: "Active",
    participants: 12,
  };

  return (
    <div className="flex h-screen w-full bg-background">
      <Sidebar />
      
      <main className="flex-1 overflow-hidden flex flex-col">
        <header className="border-b py-4 px-6">
          <div className="flex items-center gap-2 mb-2">
            <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
              <div className="flex items-center gap-1">
                <ArrowLeft className="h-4 w-4" />
                <span className="text-sm">Back to cases</span>
              </div>
            </Link>
            <div className="w-1 h-1 rounded-full bg-muted-foreground"></div>
            <span className="text-sm text-muted-foreground">{caseDetails.category}</span>
          </div>
          
          <h1 className="text-2xl font-bold">{caseDetails.title}</h1>
          
          <div className="flex flex-wrap gap-4 mt-4">
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span>{caseDetails.location}</span>
            </div>
            
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              <span>Reported: {caseDetails.dateReported}</span>
            </div>
            
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Users className="h-4 w-4" />
              <span>{caseDetails.participants} participants</span>
            </div>
            
            <div className="flex items-center gap-1 text-sm">
              <AlertCircle className="h-4 w-4 text-primary" />
              <span className="font-medium text-primary">{caseDetails.status}</span>
            </div>
          </div>
        </header>
        
        <div className="flex-1 overflow-hidden grid grid-cols-[2fr,1fr]">
          <div className="border-r overflow-y-auto">
            <div className="p-6">
              <h2 className="text-lg font-semibold mb-3">Case Details</h2>
              <p className="text-sm text-card-foreground/80 leading-relaxed">
                {caseDetails.description}
              </p>
              
              <div className="mt-8">
                <h3 className="text-lg font-semibold mb-3">Evidence</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-lg border bg-card p-4 shadow-sm">
                    <h4 className="font-medium mb-2">Satellite Images</h4>
                    <div className="aspect-video bg-slate-200 dark:bg-slate-800 rounded-md flex items-center justify-center">
                      <span className="text-xs text-muted-foreground">Satellite imagery</span>
                    </div>
                    <p className="mt-2 text-xs text-muted-foreground">
                      Shows patterns of chemical dispersion
                    </p>
                  </div>
                  
                  <div className="rounded-lg border bg-card p-4 shadow-sm">
                    <h4 className="font-medium mb-2">Water Samples</h4>
                    <div className="aspect-video bg-slate-200 dark:bg-slate-800 rounded-md flex items-center justify-center">
                      <span className="text-xs text-muted-foreground">Test results</span>
                    </div>
                    <p className="mt-2 text-xs text-muted-foreground">
                      Chemical analysis confirms industrial waste
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="overflow-hidden flex flex-col">
            <div className="border-b p-3">
              <h2 className="font-semibold">Case Discussion</h2>
            </div>
            <ChatInterface caseId={caseDetails.id} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default CaseDetail;
