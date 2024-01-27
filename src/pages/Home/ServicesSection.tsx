import BatteryReplacement from "@/components/ServicesTiles/BatteryReplacement";
import ChipsetReplacement from "@/components/ServicesTiles/ChipsetReplacement";
import DataRecovery from "@/components/ServicesTiles/DataRecovery";
import Container from "@/components/ui/Container";

const ServicesSection = () => {
  return (
    <Container className="my-40">
      <div className="text-center flex flex-col justify-center items-center">
        <h1>Services that we provide.</h1>
        <p className="max-w-[80ch] mt-8 mb-16">
          We provide various computer repair services and solutions for our new
          and regular customers. Feel free to find out more below.
        </p>
      </div>

      <div className="grid grid-cols-12 gap-5">
        <BatteryReplacement></BatteryReplacement>
        <ChipsetReplacement></ChipsetReplacement>
        <DataRecovery></DataRecovery>
        <div className="bg-red-600 h-[515px] rounded-2xl col-span-12"></div>
        <div className="bg-red-600 h-[515px] rounded-2xl col-span-12 md:col-span-6 lg:col-span-4"></div>
        <div className="bg-red-600 h-[515px] rounded-2xl col-span-12 md:col-span-6 lg:col-span-4"></div>
        <div className="bg-red-600 h-[515px] rounded-2xl col-span-12 lg:col-span-4"></div>
      </div>
    </Container>
  );
};

export default ServicesSection;
