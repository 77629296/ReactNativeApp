import React, {Component} from 'react';
import {
    Scene,
    Router,
    Lightbox, Drawer
} from 'react-native-router-flux';
import WelcomePage from '../components/page/WelcomePage'
import HomePage from '../components/page/HomePage'
import CategoryPage from '../components/page/CategoryPage'
import ShoppingCartPage from '../components/page/HomePage'
import MyPage from '../components/page/MyPage'
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
                         title={'标题'}
                         tabBarStyle={{
                             height: Constant.tabBarHeight,
                             alignItems: 'center',
                             justifyContent: 'center',
                             backgroundColor: Constant.tabBackgroundColor
                         }}>
                      <Scene
                          key="HomePage"
                          component={HomePage}
                          icon={TabIcon}
                          title={'首页'}
                          tabIconName={'tabHome'}
                      />
                      <Scene
                          key="CategoryPage"
                          component={CategoryPage}
                          icon={TabIcon}
                          title={'分类'}
                          tabIconName={'tabCategory'}
                      />
                      <Scene
                          key="ShoppingCartPage"
                          component={ShoppingCartPage}
                          icon={TabIcon}
                          title={'购物车'}
                          tabIconName={'tabShoppingCart'}
                      />
                      <Scene
                          key="MyPage"
                          component={MyPage}
                          icon={TabIcon}
                          title={'我的'}
                          tabIconName={'tabMy'}
                      />
                      
                  </Scene>
              </Scene>
          </Lightbox>
      </Router>
  )
};


export default getRouter;
