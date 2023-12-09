export default function News(props)
{
    console.log(props);
    return(
        <div className="news">
            <div className="news-img">
                {
                    props.article.urlToImage!=null?
                    <img src={props.article.urlToImage}/>:
                    <img src="https://propertywiselaunceston.com.au/wp-content/themes/property-wise/images/no-image@2x.png"/>
                }
                <img src={props.article.urlToImage}></img>
            </div>
            <div>
                <h4>{props.article.title?.substring(0,20)}</h4>
                <p>{props.article.description?.substring(0,70).concat("...")}<a href={props.article.url} target="_blank"> <br/>readmore</a></p>
                <div className="source">
                    <p>-{props.article.author?.substring(0,20)}</p>
                    <p>{props.article.source.name}</p>
                </div>
            </div>
        </div>
    )
}