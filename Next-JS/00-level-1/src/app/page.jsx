import Heading from "./heading/Heading";

export default async function Home() {

  await new Promise((res) => setTimeout(res,2000) )

  return (
    <div>
      <Heading text="Home Page"/>
    </div>
  );
}
