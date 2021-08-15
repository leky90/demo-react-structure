function Icon({ iconClass, onClick }) {
  return (
    <i className={iconClass} onClick={onClick}>
      &nbsp;
    </i>
  );
}

export default Icon;
