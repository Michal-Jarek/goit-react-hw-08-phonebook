import { Dna } from 'react-loader-spinner';
import scss from './Loader.module.scss'

export const Loader = () =>  (
  <div className={scss.overlay}>
        <Dna
          visible={true}
          height="150"
          width="150"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper"
        />
      </div>
    );


