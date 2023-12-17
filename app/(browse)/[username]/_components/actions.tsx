"use client";
import { onBlock, onUnBlock } from "@/actions/block";
import { onFollow, onUnFollow } from "@/actions/follow";
import { Button } from "@/components/ui/button";
import { useTransition } from "react";
import { toast } from "sonner";

interface ActionProps {
  isFollowing: boolean;
  userId: string;
}

export const Actions = ({ isFollowing, userId }: ActionProps) => {
  const [isPending, startTransition] = useTransition();

  const handleFollow = () => {
    startTransition(() => {
      onFollow(userId)
        .then((data) =>
          toast.success(`You are now following ${data.following.username}`)
        )
        .catch(() => toast.error("Something went wrong"));
    });
  };
  const handleUnFollow = () => {
    startTransition(() => {
      onUnFollow(userId)
        .then((data) =>
          toast.success(`You have unFollowed ${data.following.username}`)
        )
        .catch(() => toast.error("Something went wrong"));
    });
  };
  const onClick = () => {
    if (isFollowing) {
      handleUnFollow();
    } else {
      handleFollow();
    }
  };

  const handleBlock=()=>{
    startTransition(()=>{
      onUnBlock(userId).then((data)=>{toast.success(`Blocked the user ${data.blocked.username}`)}).catch(()=>toast.error("Something went wrong"))
    })
  }
  return (
    <>
      <Button variant="primary" onClick={onClick} disabled={isPending}>
        {isFollowing ? "Unfollow" : "Follow"}
      </Button>
      <Button
      onClick={handleBlock}
      disabled={isPending}
      >
        Block
      </Button>
    </>
  );
};


