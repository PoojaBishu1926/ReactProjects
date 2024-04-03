function Hello() {
    var name = "Pooja"
    function completeName(){
        return 'Pooja Bishu';
    }
    return <h1>HELLO {name} Full Name {completeName()} </h1>
}

export default Hello