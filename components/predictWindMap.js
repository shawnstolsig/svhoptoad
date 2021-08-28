function PredictWindMap({props, className}){
    return (
        <div {...props} className={className}>
            <iframe src="https://forecast.predictwind.com/tracking/display/Hoptoad" className={'w-full h-full'}/>
        </div>
    )
}

export default  PredictWindMap


// predict winds sample: https://codepen.io/anon/pen/BoPbXp
// <div className="iframe-wrap">
//     <iframe src="http://forecast.predictwind.com/tracking/display/Zeebink"></iframe>
// </div>
//     .iframe-wrap iframe {
//     max-width: 100%;
//     position: absolute;
//     left: 0px;
//     top: 0px;
//     width: 100%;
//     height: 100%;
// }
