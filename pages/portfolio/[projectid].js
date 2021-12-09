import { useRouter } from "next/router";

function Projectid() {
  const router = useRouter();
  console.log(router.pathname);
  console.log(router.query);

  return (
    <div>
      <h1>the project id in array</h1>
    </div>
  );
}

export default Projectid;
