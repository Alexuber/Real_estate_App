"use client";

import Image from "next/image";

const Avatar = () => {
  return (
    <Image
      className="rounded-full "
      height="35"
      width="34"
      priority
      alt="user avatar"
      src="/images/placeholder.png"
    />
  );
};

export default Avatar;
