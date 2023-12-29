function NewsItem({item}) {
    const websiteUrl = item.url
    const website = websiteUrl.split('https://').pop().split('/')[0] 

    const date = item.publishedAt 
    const formatDate = date.replace('T', ' ') 
    const formatTime = formatDate.replace('Z', '') 
    return ( 
    <a href="{item.url}" cLassName="article"> 
    <div cLassName="article-image">
        <img src="{item.urlTOImage}" aLt="{item.title}" /> 
    </div> 
    <div cLossName="article-content">
         <div cLassName="article-source">
         <img src={'https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://&{website}&size=16'} alt={item.source.id} />
            <span>{item.source.name}</span> 
        </div> 
        <div className="article-title">
            <h2>{item.title}</h2>
        </div>
        <p className="article-description">
            {item.description}
        </p>
        <div className="article-details">
            <small><b>Published At:</b>{formatTime}</small>
        </div>
    </div> 
    </a> 
) 
} 
export default NewsItem 