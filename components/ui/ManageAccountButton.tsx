import { generatePortalLink } from "@/actions/generatePortalLink";

function ManageAccountButton() {
  return (
    <form action={generatePortalLink}>
      <button type="submit"> Manage Biling</button>
    </form>
  );
}

export default ManageAccountButton;
