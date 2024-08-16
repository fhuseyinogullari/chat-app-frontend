import MainHeader from "./MainHeader"

function MainPanel() {

  return (
    <>
      <MainHeader />
      <div>
        <div>
          {/* asagidaki div de mesajlari listeli bir sekilde yansit */}
          <div>
            <p>Mesaj icerigi</p><span>Mesaj tarihi</span>
          </div>
        </div>
        <div>
          <input type="text" />
          <button>Gonder</button>
        </div>
      </div>
    </>
  )
}

export default MainPanel