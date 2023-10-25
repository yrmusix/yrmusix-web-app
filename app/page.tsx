import NextLink from "next/link";
import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-lg text-center justify-center">
        <h1 className={title()}>Enjoy&nbsp;</h1>
        <h1 className={title({ color: "violet" })}>Your&nbsp;Musix&nbsp;</h1>
        <br />
        <h1 className={title()}>without any limits on the web.</h1>
        <h2 className={subtitle({ class: "mt-4" })}>
          Offline, mobile first, totally free, all musix.
        </h2>
      </div>

      <div className="flex gap-3">
        <Link
          isExternal
          as={NextLink}
          href={siteConfig.links.docs}
          className={buttonStyles({
            color: "primary",
            radius: "full",
            variant: "shadow",
          })}
        >
          Get started
        </Link>
      </div>
    </section>
  );
}

export const runtime = "edge";
