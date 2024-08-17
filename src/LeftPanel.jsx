import LeftHeader from "./LeftHeader"
import LeftMain from "./LeftMain"
import LeftNewChat from "./LeftNewChat"


function LeftPanel() {
  
  return (
    <div className="leftPanel">
      <LeftHeader />
      <LeftMain />
      <LeftNewChat />
    </div>
  )
}

export default LeftPanel