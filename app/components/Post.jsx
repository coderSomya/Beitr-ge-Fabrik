export default function({id, title, content, author}){
    return(
        <div style={{border: '1px solid black', padding: '15px', margin: '3px'}}>
            <h5>{author}</h5>
            <h4>{title}</h4>
            <p>{content}</p>
        </div>
    )
}