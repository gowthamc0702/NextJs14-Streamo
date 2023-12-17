import { isFollowingUser } from "@/lib/follow-service";
import { getUserByUserName } from "@/lib/user-service";
import { notFound } from "next/navigation";
import { Actions } from "@/app/(browse)/[username]/_components/actions"

interface UserPageProps {
  params: {
    username: string;
  };
}

const UserPage = async ({ params }: UserPageProps) => {
  const user = await getUserByUserName(params.username);
  if (!user) return notFound();

  const isFollowing = await isFollowingUser(user.id);

  return (
    <div className="flex flex-col gap-y-4">
      <p>username:{user.username}</p>
      <p>userId:{user.id}</p>
      <p>isFollowing:{`${isFollowing}`}</p>

      <Actions userId={user.id} isFollowing={isFollowing}/>
    </div>
  );
};

export default UserPage;
