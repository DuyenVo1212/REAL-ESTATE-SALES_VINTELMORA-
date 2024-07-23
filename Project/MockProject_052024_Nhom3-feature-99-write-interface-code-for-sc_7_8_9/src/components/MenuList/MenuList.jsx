import Button from '../Button';
import './MenuList.scss';

function MenuList({ data = [], textLeft = false, textRight = false }) {
  let classes = '';

  if (textLeft) {
    classes += 'menu-text-left';
  } else if (textRight) {
    classes += 'menu-text-right';
  }

  return (
    <ul className='menu--list'>
      {data.map((item) => (
        <Button key={item.key} small leftIcon={item.icon} className={`menu--item ${classes}`}>
          {item.title ?? (
            <>
              <span className='menu--item--street'>
                {`${item.address.street.number} ${item.address.street.name} st, `}
              </span>
              <span className='menu--item--ward'> {`${item.address.ward}, `} </span>
              <span className='menu--item--district'> {`${item.address.district}, `} </span>
              <span className='menu--item--city'>{`${item.address.city} city`}</span>
            </>
          )}
        </Button>
      ))}
    </ul>
  );
}

export default MenuList;
