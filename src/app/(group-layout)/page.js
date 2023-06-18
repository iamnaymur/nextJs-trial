import image1 from "@/assets/imageOne.jpg";

import Image from "next/image";
const HomePage = () => {
  return (
    <main>
      <h1>This is home page</h1>
      <Image width={600} height={400} src={image1} alt="" />
    </main>
  );
};

export default HomePage;
