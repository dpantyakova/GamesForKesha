import "./ScoreBoard.css"
const ScoreBoard = ({ score }) => {
    return (
      <div className="score-board">
        Your score:
        <br/>
        {score}
      </div>
    )
  }
  
  export default ScoreBoard