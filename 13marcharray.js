const onearray=[1,2,3,4]
const twoarray=[5,6,7,8]

// const threearray=onearray.concat(twoarray)
// const threearray=[onearray,twoarray]
//...can be act as rest operator as well as spread operator it depends on how it is used
//spred as the name suggest it spreads the element as individuals out of the array for eg ...onearray= 1,2,3,4
const threearray=[...onearray,...twoarray]
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// console.log(threearray);



// REST
// it packs  the thigs in one array

function manyarrgument()
{
    console.log(typeof arguments);
    console.log(Array.from(arguments));
}
function manyarrgumentv2(...args)
{
    let finArray=args.map( e => e)
    console.log(finArray);
}
manyarrgument(2,3,4,5,6)
manyarrgumentv2(2,3,4,5.6)
