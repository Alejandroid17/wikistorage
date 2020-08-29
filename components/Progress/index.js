export default function Progress({variant}) {
    return (
        <progress className={`progress ${variant}`} max='100'/>
    )
}