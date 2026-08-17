import SectionHeading from "@/components/ui/SectionHeading";
import WinnerCard from "@/components/winners/WinnerCard";
import { winnersData } from "@/data/mockData";

export default function WinnersPage() {
  return (
    <div className="pt-32 pb-20 bg-luxury-black text-ivory min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeading
          number="PRIME SUCCESS · HONOUREES"
          eyebrow="DIGITAL HALL OF FAME"
          title="ALL HONOURED INDIVIDUALS"
          subtitle="Every visionary recognised by Prime Success — leaders, innovators, and changemakers immortalised on the permanent record."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-16">
          {winnersData.map((winner, idx) => (
            <WinnerCard key={winner.id} winner={winner} index={`0${idx + 1}`.slice(-2)} />
          ))}
        </div>
      </div>
    </div>
  );
}
