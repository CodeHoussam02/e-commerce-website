export default function clearInputs(...refs) {
    refs.map(e => {
        e.current.value = "";
    })
}