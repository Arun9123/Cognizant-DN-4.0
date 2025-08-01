export function OddPlayers([first,, third,, fifth]) {
    return(
        <div>
            <li> First : {first}1 </li>
            <li> Third : {third}3 </li>
            <li> Fifth : {fifth}5</li>
        </div>
    )
}


// export function OddPlayers(prop) {
//     return(
//         <div>
//             <li><span> First : {prop[0]}1</span></li>
//             <li><span> Third : {prop[2]}3</span></li>
//             <li><span> Fifth : {prop[4]}5</span></li>
//         </div>
//     )
// }