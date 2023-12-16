import { UserButton } from "@clerk/nextjs"

export default function page() {
  return (
    <div>
      <p>dashborad</p>
      <UserButton
      afterSignOutUrl="/"
      />
    </div>
  )
}
