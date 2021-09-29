function PredictWindMap({props, classes}){
    return (
        <div {...props} className={classes}>
            <iframe src="https://forecast.predictwind.com/tracking/display/Hoptoad" className={'w-full h-full'} />
        </div>
    )
}

export default  PredictWindMap