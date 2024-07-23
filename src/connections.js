import Cart from "./connectionimg.js";
function Connections(){
// const arr = ['a','b','c','d','e','f','g','h'];
return <div style={{display:"flex",flexFlow:"row wrap"}}>
                <Cart path={'girl-1.jpeg'} name={'Scott Ayres'} description={'Resource Person'}/>
                <Cart path={'girl-2.jpeg'} name={'Samantha'} description={'Resource Person'}/>
                <Cart path={'boy-1.jpeg'} name={'William jin'} description={'Resource Person'}/>
                <Cart path={'boy-2.jpeg'} name={'John ayres'} description={'Resource Person'}/>
                <Cart path={'boy-3.jpeg'} name={'Samantha'} description={'Resource Person'}/>
                <Cart path={'girl-3.jpeg'} name={'Scott Ayres'} description={'Resource Person'}/>
                <Cart path={'boy-4.jpeg'} name={'Scott Ayres'} description={'Resource Person'}/>
                <Cart path={'boy-5.jpeg'} name={'Scott Ayres'} description={'Resource Person'}/>
         </div>
}
export default Connections;