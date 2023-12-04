import defaultImg from 'not-found.jpg'

function CastListItem({ character, name, profile_path}) {
                 const avatar = `https://image.tmdb.org/t/p/w200/${profile_path}`;

    return (
        <li>
            <img src={profile_path ? avatar : defaultImg} alt={name}/>  
            <p>{name}</p>
            <p>Character: {character}</p>
        </li>
    )
    
}
export default CastListItem; 