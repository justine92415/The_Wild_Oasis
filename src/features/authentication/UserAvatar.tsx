import { useUser } from "./useUser";

function UserAvatar() {
  const { user } = useUser();
  const { fullName, avatar } = user?.user_metadata!;

  return (
    <div className="text-grey-600 flex items-center gap-3 text-sm font-medium">
      <img
        className="outline-grey-100 block aspect-square w-10 rounded-full object-cover
          object-center outline outline-2"
        src={avatar || "default-user.jpg"}
        alt={`Avatar for ${fullName}`}
      />
      <span>{fullName}</span>
    </div>
  );
}

export default UserAvatar;
