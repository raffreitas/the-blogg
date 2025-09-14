import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

type PostImageProps = {
  imageProps: React.ComponentProps<typeof Image>;
  linkProps: React.ComponentProps<typeof Link>;
};

export function PostImageCover({ linkProps, imageProps }: PostImageProps) {
  return (
    <Link
      {...linkProps}
      className={clsx(
        "h-full w-full overflow-hidden rounded-xl",
        linkProps.className,
      )}
    >
      <Image
        {...imageProps}
        className={clsx(
          "h-full w-full object-cover object-center group-hover:scale-105 transition",
          imageProps.className,
        )}
      />
    </Link>
  );
}
