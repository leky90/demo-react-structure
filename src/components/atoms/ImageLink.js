function ImageLink({ src, alt, url }) {
  return (
    <a href={url}>
      <img src={src} alt={alt} />
    </a>
  );
}

export default ImageLink;
