import Head from "next/head";

export default function PageHead({
  title = "I'am Jojo",
  description = "Hi! I'am a Frontend Developer who might helping you to create digital things. Let's collaborate",
  icon = "/favicon.ico",
}) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href={icon} />
    </Head>
  );
}
