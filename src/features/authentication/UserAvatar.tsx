type UserAvatarProps = {
  src: string;
  alt: string;
  username: string;
};

function UserAvatar({ src, alt, username }: UserAvatarProps) {
  return (
    <div className="flex gap-3 items-center font-medium text-sm text-grey-600">
      <img 
        className="block w-10 aspect-square object-cover object-center rounded-full outline-2 outline outline-grey-100" 
        src={src} 
        alt={alt} 
      />
      <span>{username}</span>
    </div>
  );
}

export default UserAvatar;
