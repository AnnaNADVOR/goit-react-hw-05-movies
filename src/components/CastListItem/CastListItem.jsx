import defaultImg from 'not-found.jpg'
import {
    ActorCard,
    ActorInfo,
    ActorName,
    InfoText,
} from './CastListItem.styled';

function CastListItem({ character, name, profile_path}) {
    const avatar = `https://image.tmdb.org/t/p/w200/${profile_path}`;
    return (
        <ActorCard>
            <img src={profile_path ? avatar : defaultImg} alt={name} width="200" /> 
            <ActorInfo>
                <ActorName>{name}</ActorName>
                <InfoText><span>Character:</span>{character}</InfoText>
            </ActorInfo>
        </ActorCard>
    )    
}

export default CastListItem; 