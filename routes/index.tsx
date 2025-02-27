import Modulo from "../islands/Module.tsx";

const Page = () => {
  return (
    <>
      <Modulo name="Modulo 1" contador={0}></Modulo>
      <br/>
      <Modulo name="Modulo 2" contador={0}></Modulo>
      <br/>
      <Modulo name="Modulo 3" contador={0}></Modulo>
    </>
  );
}

export default Page;
