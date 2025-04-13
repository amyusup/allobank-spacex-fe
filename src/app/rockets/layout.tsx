import { RocketProvider } from "@/containers/rocket/rocket.context";

const RocketLayout = ({ children }: { children: React.ReactNode }) => {
  return <RocketProvider>{children}</RocketProvider>;
};

export default RocketLayout;
