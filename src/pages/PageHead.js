import Head from "next/head";

export default function PageHead({
  title = "I'am Jojo",
  description = "Hi! I'am a Frontend Developer who might helping you to create digital things. Let's collaborate",
  icon = "/favicon.ico",
  keywords,
}) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content={keywords} />
      <link rel="icon" href={icon} />
    </Head>
  );
}
