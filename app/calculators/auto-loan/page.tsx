import EmiCalc from "@/components/calculators/EmiCalc";
import { getCalculator } from "@/lib/calculators-meta";
import { notFound } from "next/navigation";

export default function Page() {
  const meta = getCalculator("auto-loan");
  if (!meta) notFound();
  return (
    <EmiCalc
      meta={meta}
      preset={{
        defaultPrincipal: 6_00_000,
        defaultRate: 9.5,
        defaultTenureYears: 5,
        maxRate: 18,
        maxYears: 8,
      }}
    />
  );
}
