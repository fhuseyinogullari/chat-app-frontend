import MainHeader from "./MainHeader"

function MainPanel() {

  return (
    <div className = "mainPanel">
      <MainHeader />
      <div className="main-chat">
        <div className="main-chat-info">
          {/* asagidaki div de mesajlari listeli bir sekilde yansit */}
          <div className="main-chat-info-text">
            <p>Mesaj icerigi <span>Mesaj tarihi</span> </p>
            
          </div>
        </div>
        <div className="main-chat-sending">
          <input type="text" />
          <button>Gonder</button>
        </div>
      </div>
    </div>
  )
}

export default MainPanel