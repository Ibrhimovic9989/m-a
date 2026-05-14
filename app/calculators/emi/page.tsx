import EmiCalc from "@/components/calculators/EmiCalc";
import { getCalculator } from "@/lib/calculators-meta";
import { notFound } from "next/navigation";

export default function Page() {
  const meta = getCalculator("emi");
  if (!meta) notFound();
  return (
    <EmiCalc
      meta={meta}
      preset={{
        defaultPrincipal: 10_00_000,
        defaultRate: 10.5,
        defaultTenureYears: 5,
        maxRate: 24,
        maxYears: 30,
      }}
    />
  );
}
