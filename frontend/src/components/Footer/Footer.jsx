import "./Footer.css";

function Footer() {
  const handleBlur = () => {
    alert("Merci ! Rendez-vous bientôt pour d'incroyables nouvelles !");
  };

  return (
    <footer className="wj-footer">
      <div className="wj-footer-elem picto">
        Pour les passionné·e·s de plantes 🌿🌱🌵
      </div>
      <div className="wj-footer-elem">Laissez-nous votre mail</div>
      <input placeholder="Entrez votre mail..." onBlur={handleBlur} />
    </footer>
  );
}

export default Footer;
