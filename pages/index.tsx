import { useFSClient } from "@nvs-context/FSClientContext";
import { TitleApp } from "@nvs-widget/TitleApp";
import type { NextPage } from "next";

const Home: NextPage = () => {
  const client = useFSClient();

  return (
    <>
      <TitleApp title={"Dashboard"} />
    </>
  );
};

export default Home;
