var NewsIndividual = (props) => {
    return  (
        <div id='mainNews'>
            <img src={props.data.img} />
            <div id='newsInfoContainer'>
                <div id='Newsheaders'>
                    <div id='articleTime'> 
                        <h5 id='dataSource'> {props.data.source} </h5>
                        <h6 id='time'> {props.data.time} </h6>
                    </div>
                    <h4 id='dataTitle'> {props.data.title} </h4>
                    <p id='dataDescription'> {props.data.description} </p>
                </div>

                <div id='views'>
                <svg title="494 views" width="14" height="11" viewBox="0 0 14 11" id='theEye'><path fillRule="evenodd" d="M7,10.8888889 C3.13400675,10.8888889 0,7.04766168 0,5.44444444 C9.81687425e-17,3.84122721 3.13400675,0 7,0 C10.8659932,0 14,3.84312609 14,5.44444444 C14,7.0457628 10.8659932,10.8888889 7,10.8888889 Z M7,7.77777778 C8.28866442,7.77777778 9.33333333,6.73310886 9.33333333,5.44444444 C9.33333333,4.15578003 8.28866442,3.11111111 7,3.11111111 C5.71133558,3.11111111 4.66666667,4.15578003 4.66666667,5.44444444 C4.66666667,6.73310886 5.71133558,7.77777778 7,7.77777778 Z"></path></svg>
                <p className='numberViews'> {props.data.viewership}</p>
                </div>
            </div>
        </div>
    )
}

export default NewsIndividual