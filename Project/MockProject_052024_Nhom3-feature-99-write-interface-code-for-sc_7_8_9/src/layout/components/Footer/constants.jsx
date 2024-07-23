import { FiPhone } from 'react-icons/fi';
import { MdOutlineEmail } from 'react-icons/md';
import { IoHomeOutline } from 'react-icons/io5';

const CONTACTS = [
  { key: 'footer-phone', icon: <FiPhone />, title: '+84xxxxxxxxxx' },
  { key: 'footer-gmail', icon: <MdOutlineEmail />, title: 'tempura@gmail.com' },
  {
    key: 'footer-address',
    icon: <IoHomeOutline />,
    address: {
      street: { number: '230/5', name: ' Chau Thi Vinh Te' },
      ward: 'My An',
      district: 'Ngu Hanh Son',
      city: 'Da Nang',
    },
  },
];

export { CONTACTS };
