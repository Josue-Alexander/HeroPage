import { merch } from '../data/heroes';
import { MerchCard } from './MerchCard';

export const MerchList = ({ publisher }) => {

    return (
        
        <div className='row rows-cols-1 row-cols-md-3 g-3 mt-5'>
            {merch.map(item => (
                <MerchCard key={item.id} {...item} />
            ))}
        </div>
    );
};
