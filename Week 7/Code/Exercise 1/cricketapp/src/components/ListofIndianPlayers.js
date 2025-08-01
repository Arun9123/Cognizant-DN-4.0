function ListofIndianPlayers({IndianPlayers})
{
    return(
        IndianPlayers.map((item)=>
        {
            return(
                <div>
                    <li> Mr. {item}</li>
                </div>
            )
        })
    )
}
export default ListofIndianPlayers;
