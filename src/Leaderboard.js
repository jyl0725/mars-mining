import React from 'react'


class Leaderboard extends React.Component{

  renderTopBots(){
    return this.props.bots.sort(bot => bot.Score).map(topBots =>(<div key={topBots.Id}> {topBots.Id} has a score {topBots.Score}</div>))
  }

  render(){
    console.log(this.props.bots.sort(bot =>bot.Score))
    return(
      <div>
      {this.renderTopBots()}
      </div>
    )
  }
}

export default Leaderboard
