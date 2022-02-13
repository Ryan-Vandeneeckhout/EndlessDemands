const ScrollUpButton = () => { 

    const scrollUp = () => {
        window.scrollTo({ top: 100, behavior: 'smooth' });
    }

    return (

    <div className='scrollUp' onClick={scrollUp}>
        <i className="fas fa-angle-up"></i>
    </div>

    )

}

export default ScrollUpButton 