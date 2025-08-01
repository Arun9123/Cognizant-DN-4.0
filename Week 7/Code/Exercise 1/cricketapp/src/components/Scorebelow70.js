function Scorebelow70({players})
{
    var players70=[];
    players.map((item)=>
    {
        if(item.score<=70)
        {
            players70.push(item);
        }
    })
    return(
        players70.map((item)=>
        {
            return(
                <div>
                    <li>Mr. {item.name}<span> {item.score} </span></li>
                </div>
            )
        })
    )
}
export default Scorebelow70;
