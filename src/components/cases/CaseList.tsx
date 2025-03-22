
import { Case, CaseCard } from "./CaseCard";

const mockCases: Case[] = [
  {
    id: "case-1",
    title: "Illegal Chemical Dumping in Biscayne Bay",
    summary: "Reports of industrial waste being dumped in protected waters during nighttime operations. Satellite imagery shows discoloration patterns consistent with chemical pollution.",
    category: "Water Pollution",
    timestamp: "2 hours ago",
  },
  {
    id: "case-2",
    title: "Factory Emissions Exceeding Legal Limits",
    summary: "Air quality sensors around the industrial zone are showing dangerous levels of particulate matter. Local residents reporting respiratory issues.",
    category: "Air Quality",
    timestamp: "5 hours ago",
  },
  {
    id: "case-3",
    title: "Protected Forest Illegal Logging Operation",
    summary: "Satellite imagery reveals systematic deforestation in protected areas. Local conservation groups have found equipment and access roads not shown on official maps.",
    category: "Deforestation",
    timestamp: "1 day ago",
  },
  {
    id: "case-4",
    title: "Oil Spill Detection in Pacific Shipping Lane",
    summary: "Satellite monitoring has identified a potential oil spill along a major shipping route. Initial estimates suggest a moderate-sized leak from a commercial vessel.",
    category: "Ocean Conservation",
    timestamp: "1 day ago",
  },
  {
    id: "case-5",
    title: "Carbon Offset Program Verification Issues",
    summary: "Investigation into whether a major corporation's carbon offset investments are actually resulting in the claimed carbon sequestration.",
    category: "Climate Policy",
    timestamp: "2 days ago",
  },
  {
    id: "case-6",
    title: "Groundwater Contamination Near Mining Site",
    summary: "Testing shows elevated levels of toxic metals in groundwater samples downhill from a mining operation. Local wells may be at risk of contamination.",
    category: "Water Quality",
    timestamp: "3 days ago",
  },
];

export function CaseList() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
      {mockCases.map((caseItem) => (
        <CaseCard key={caseItem.id} caseData={caseItem} />
      ))}
    </div>
  );
}
