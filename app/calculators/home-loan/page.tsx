import EmiCalc from "@/components/calculators/EmiCalc";
import { getCalculator } from "@/lib/calculators-meta";
import { notFound } from "next/navigation";

export default function Page() {
  const meta = getCalculator("home-loan");
  if (!meta) notFound();
  return (
    <EmiCalc
      meta={meta}
      preset={{
        defaultPrincipal: 50_00_000,
        defaultRate: 8.75,
        defaultTenureYears: 20,
        maxRate: 18,
        maxYears: 30,
      }}
    />
  );
}
