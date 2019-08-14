import React from "react"
import Form from "./form"
import Option from "./allimage"

class Meme extends React.Component//class coz will make request to API
{
    constructor()
    {
        super();
        this.state={
            toptext:"",
            bottomtext:"",
            randomimage:"http://i.imgflip.com/1bij.jpg",
            allmemeimages:[],
            load:false
        }
        this.changehandler=this.changehandler.bind(this);
        this.clickhandler=this.clickhandler.bind(this);
        this.fetch=this.fetch.bind(this)
    }

    clickhandler(url)
    {
        this.setState({
            randomimage:url
        })
    }

    changehandler(event)
    {
        let {name,value}=event.target;
        this.setState({
            [name]:value
        })
    }
    
    fetch()
    {
        if(this.state.allmemeimages.length!==0)
        {   
            this.setState({
                allmemeimages:[]
            })
            return;
        }
        this.setState({
            load:true
        })
        fetch("https://cors-anywhere.herokuapp.com/https://api.imgflip.com/get_memes")
        .then((data)=>{return data.json()})
        .then((array)=>{this.setState({allmemeimages:array.data.memes,load:false})})//memes contains the url,id and everything so copied that only instead of the whole array 
    }

    render()
    {
        let arr=[];
        if(this.state.allmemeimages.length!==0)
        {arr=this.state.allmemeimages.map((item)=>{
            if(item.name==="Expanding Brain"||item.name==="Boardroom Meeting Suggestion"||item.name==="American Chopper Argument"||item.name==="Inhaling Seagull"|item.name==="Tuxedo Winnie The Pooh"||item.name==="The Rock Driving"||item.name==="The Scroll Of Truth"||item.name==="Trump Bill Signing"||item.name==="Finding Neverland"||item.name==="Who Would Win?"||item.name==="Simba Shadowy Place"||item.name==="Marvel Civil War 1"||item.name==="Inception"||item.name==="Blank Starter Pack"||item.name==="Peter Parker Cry")
            {return null}
            return (<Option key={item.id} obj={item} clickhandler={this.clickhandler}/>)
        })}
        return(
            <div>
                <Form changehandler={this.changehandler}/>
                <br/>
                <div className="main">
                    <img src={this.state.randomimage} style={{width:"300px",marginLeft:"350px"}}/>
                    <h2 className="top">{this.state.toptext}</h2>
                    <h2 className="bottom">{this.state.bottomtext}</h2>
                </div>
                <br/><br/>
                <hr/>
                <br/><br/>
                <a href="#here"><button style={{marginLeft:"360px"}} onClick={this.fetch}>{this.state.allmemeimages.length===0?"PRESS THIS TO VIEW MORE OPTIONS":"PRESS THIS TO HIDE OTHER OPTIONS"}</button></a>
                <br/><br/>
                {this.state.load?<h1 id="here">LOADING...</h1>:<div id="here" className="options">{arr}</div>}
            </div>
        )
    }
}

export default Meme;