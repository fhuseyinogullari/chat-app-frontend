function MainHeader() {
  return (
    <div className="mainHeader">
      <div className="mainHeader-info">
        <div className="mainHeader-info-img">
          <img src='../public/J0003_m.png' alt='avatar' />
        </div>
        <div className="mainHeader-info-text">
            <p>name</p>
            <p>tarih</p>
        </div>
      </div>
      <div className="mainHeader-buttons">
        <button type="button">chat ara</button>
        <button type="button">ara</button>
        <button type="button">secenekler</button>

      </div>
    </div>
  );
}

export default MainHeader;
