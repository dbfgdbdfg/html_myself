<div id ="root"></div>
const element = <h1>안녕!</h1>;
ReactDOM.render(element, document.getElementById('root'));

function tick(){
    const element =(
        <div>
            <h1>안녕</h1>
            <h2>현재시간 : {new Date().toLocaleTimeString()}</h2>          
        </div>
    );
    ReactDOM.render(element, document.getElementById('root'));
}
setInterval(tick, 1000);