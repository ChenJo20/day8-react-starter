import Counter from "./Counter";

const CounterGroup = (props) => {
    let array = [];
    for (let i = 1; i <= props.size; i++) {
        array.push(i);
    }
    return (
        <div>
            {array.map((_, index) => {
                return (<Counter key={index + Math.random()}/>)
            })}
        </div>
    )
}

export default CounterGroup;