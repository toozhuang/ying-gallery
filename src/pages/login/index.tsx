import React, { useState } from 'react';
import AuthPage from '../../components/auth';
import useMeasure from 'react-use-measure';
import { useSpring, animated } from '@react-spring/web';
import classname from 'classnames';
import { Button } from 'antd';

import styles from './login.styles.module.css';

const Login = () => {
  const [open, toggle] = useState(false);
  const [ref, { width }] = useMeasure();
  const props = useSpring({ width: open ? width : 0 });

  return (
    <AuthPage>
      <div className={styles.container}>
        {/*Animation part*/}
        <div ref={ref} className={classname('block', styles.main)} onClick={() => toggle(!open)}>
          <animated.div className={styles.fill} style={props} />
          <animated.div className={styles.content}></animated.div>
        </div>
        {/*  Login Header*/}
        <div className={classname('text-4xl block ', styles.loginTitle)}>
          Login
          <div className={classname(styles.loginTitleDescription)}>Please sign in to continue</div>
        </div>

        <Button className={styles.loginBtn}> Login </Button>
      </div>
    </AuthPage>
  );
};
Login.propTypes = {};

export default Login;
