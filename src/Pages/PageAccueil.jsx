import SimpleMenu from '../Components/SimpleMenu';
import Article from '../Components/Article';
import PiedDePage from '../Components/PiedDePage';
import CarouselAccueil from '../Components/CarouselAccueil';
import ReseauxSociaux from '../Components/ReseauxSociaux';

export default function PageAccueil(){
return(<>
<SimpleMenu />
<CarouselAccueil />
<ReseauxSociaux />
<PiedDePage />

</>)
}