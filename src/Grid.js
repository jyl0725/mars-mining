import React from 'react'

class Grid extends React.Component{

  getNodePosition(){
    return this.props.nodes.map(node =>{ return <div key={node.Id} className='cell blue' style={{gridColumn: `${node.Location.X}/ ${node.Location.X}`,
                                                                                                 gridRow: `${node.Location.Y}/${node.Location.Y}`}}> {node.ClaimedBy}</div>})
  }

  getBotPosition(){
    return this.props.bots.map(bot =>{
      return <div key={bot.Id} className='cell red' style={{gridColumn: `${bot.Location.X}/ ${bot.Location.X}`,gridRow: `${bot.Location.Y}/${bot.Location.Y}`}}>{bot.Id}</div>
    })
  }

  getBotandNodePosition(){
    const nodeLocation = this.props.nodes.map(nodes => nodes.Location)

    return this.props.bots.filter(bot =>bot.Location === nodeLocation).map(nodeBot => {
      return <div key={nodeBot.Id} className='cell purple' style={{gridColumn: `${nodeBot.Location.X}/ ${nodeBot.Location.X}`,gridRow: `${nodeBot.Location.Y}/${nodeBot.Location.Y}`}}>{nodeBot.Id}</div>
    })
  }


  render(){
    console.log(this.props.nodes)
    return(
      <div id="grid">
        {this.props.nodes && this.getNodePosition()}
        {this.props.bots && this.getBotPosition()}
        {this.props.bots && this.getBotandNodePosition()}
      </div>
    )
  }
}

export default Grid
