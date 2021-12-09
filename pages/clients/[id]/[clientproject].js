import { useRouter } from "next/router";

function SelectedClient() {
  const router = useRouter();
  console.log(router.pathname);
  console.log(router.query);
  return (
    <div>
      <h1>This is selected client project page</h1>
    </div>
  );
}

export default SelectedClient;
