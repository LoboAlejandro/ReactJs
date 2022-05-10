//Components
import ItemListContainer from "../components/Main/ItemListContainer";
import ItemFilters from '../components/Main/ItemFilters'

export default function HomePage(){

    return(
        <div>
            <ItemFilters/>
            <ItemListContainer/>
        </div>
    );
}