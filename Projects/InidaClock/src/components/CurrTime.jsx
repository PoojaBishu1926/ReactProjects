function CurrTime() {
    let time=new Date()
    return <p className="lead">This is the Time :{time.toLocaleString()}</p>
}

export default CurrTime