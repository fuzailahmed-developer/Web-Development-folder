
export default async function Home() {

  await new Promise((res) => setTimeout(res,2000))

  return (
    <div>
      <h1>
        Hello World
      </h1>
    </div>
  );
}
