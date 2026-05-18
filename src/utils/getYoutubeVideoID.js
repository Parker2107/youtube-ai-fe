export default function getYoutubeVideoId(
  url
) {

  try {

    const parsedUrl =
      new URL(url);

    // youtu.be links
    if (
      parsedUrl.hostname ===
      "youtu.be"
    ) {
      return parsedUrl.pathname.slice(1);
    }

    // youtube.com/watch?v=
    if (
      parsedUrl.searchParams.get("v")
    ) {
      return parsedUrl.searchParams.get("v");
    }

    // youtube.com/embed/
    if (
      parsedUrl.pathname.includes(
        "/embed/"
      )
    ) {
      return parsedUrl.pathname.split(
        "/embed/"
      )[1];
    }

    return null;

  } catch {

    return null;
  }
}