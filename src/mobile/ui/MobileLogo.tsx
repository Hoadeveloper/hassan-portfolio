import Image from "next/image";

export function MobileLogo() {
  return (
    <Image
      src="/images/hoa-logo.png"
      alt=""
      width={30}
      height={30}
      sizes="30px"
      className="h-[1.875rem] w-[1.875rem] shrink-0 object-contain"
      unoptimized
      priority
    />
  );
}
