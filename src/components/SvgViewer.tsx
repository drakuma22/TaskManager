import { SvgIcon } from '@mui/material';
import Logo from '../assets/logo.svg';

const SvgViewer = () => {
  return (

    // TODO: Continuare l'implementazione del componente per logo SVG
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <SvgIcon component={Logo} style={{ maxWidth: '500px', margin: '0 auto' }}/>
    </div>
  );
};

export default SvgViewer;