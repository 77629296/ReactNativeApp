import React, {Component} from 'react';
import {
    Scene,
    Router,
    Lightbox, Drawer
} from 'react-native-router-flux';
import WelcomePage from '../components/page/WelcomePage'
import MyPage from '../components/page/MyPage'
import HomePage from '../components/page/HomePage'
import TabIcon from '../components/widget/TabIcon'
import styles from '../style'
import * as Constant from "../style/constant"

/**
 * 全局路由
 */
const getRouter = () => {
  return (
      <Router
          getSceneStyle={() => {
              return styles.routerStyle
          }}>
          <Lightbox>
              <Scene key="main">
                  <Scene key="WelcomePage" component={WelcomePage} hideNavBar hideTabBar hide/>
              </Scene>
              <Scene key="root"
                     navigationBarStyle={styles.navigationBar}
                     titleStyle={{color: Constant.titleTextColor}}>
                  <Scene key="mainTabPage"
                         tabs
                         lazy
                         wrap={false}
                         showLabel={false}
                         tabBarPosition={"bottom"}
                         title={'appName'}
                         tabBarStyle={{
                             height: Constant.tabBarHeight,
                             alignItems: 'center',
                             justifyContent: 'center',
                             backgroundColor: Constant.tabBackgroundColor
                         }}>
                      <Scene
                          key="MyPage"
                          component={MyPage}
                          icon={TabIcon}
                          title={'MyPage'}
                          tabIconName={'tabMy'}
                      />
                      <Scene
                          key="HomePage"
                          component={HomePage}
                          icon={TabIcon}
                          title={'HomePage'}
                          tabIconName={'tabHome'}
                      />
                  </Scene>
              </Scene>
          </Lightbox>
      </Router>
  )
};


export default getRouter;
