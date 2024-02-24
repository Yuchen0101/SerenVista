function HomeHeader() {
  return (
    <>
      <header className="header">
        <div className="header__logo-box">
          <img src="logo-light.png" alt="Logo" className="header__logo" />
        </div>
        <div className="header__text-box">
          <h1 className="heading-primary">
            <span className="heading-primary--main">SerenVista</span>
            <span className="heading-primary--sub">where life happens</span>
          </h1>
          <a href="#about" className="btn btn--white btn--animated">
            Discover
          </a>
        </div>
      </header>
    </>
  );
}

export default HomeHeader;
