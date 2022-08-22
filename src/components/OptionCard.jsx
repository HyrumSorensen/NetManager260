import './OptionCard.css'

const OptionCard = ({image, buttonText, foo}) => {


    return (
        <div>
            <div className='card'>
                <div>
                    <img className='icon' src={image}/>
                </div>
                <div>
                    <button onClick={foo} className='option-button'>{buttonText}</button>
                </div>
            </div>
        </div>
    )
}

export default OptionCard