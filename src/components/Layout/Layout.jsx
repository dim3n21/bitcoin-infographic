import React, { Fragment} from 'react';

import NavBar from '../../containers/NavBar/NavBar';

const Layout = (props) => {
      return (
            <Fragment>
                  <div><NavBar /></div>
                  <main>
                        {props.children}
                  </main>
            </Fragment>
      );
};

export default Layout;