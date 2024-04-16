import "./footer.scss";

function Footer() {
  const date = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>Copyright &copy; {date}</p>
    </footer>
  );
}

export default Footer;
