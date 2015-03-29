/**
 * The examples provided by Facebook are for non-commercial testing and
 * evaluation purposes only.
 *
 * Facebook reserves all rights not expressly granted.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
 * OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON INFRINGEMENT. IN NO EVENT SHALL
 * FACEBOOK BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN
 * AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 * @flow
 */
'use strict';

var React = require('react-native');
var Account = require('./Account');
var Cart = require('./Cart');
var Home = require('./Home');
var Discover = require('./Discover');

var {
  StyleSheet,
  Image,
  TabBarIOS,
  Text,
  View,
} = React;
var TabBarItemIOS = TabBarIOS.Item;

var TaoApp = React.createClass({

  getInitialState: function() {
    return {
      selectedTab: 'home',
      notifCount: 0
    };
  },

  render: function() {

    return (
      <TabBarIOS
        selectedTab={this.state.selectedTab}>

        <TabBarItemIOS
          name="home"
          icon={require('image!home')}
          title='首页'
          accessibilityLabel="首页"
          selected={this.state.selectedTab === 'home'}
          onPress={() => {
            this.setState({
              selectedTab: 'home'
            });
          }}>
          <Home/>
        </TabBarItemIOS>
          
        <TabBarItemIOS
          accessibilityLabel="发现"
          name="discover"
          icon={require('image!discover')}
          title='发现'
          badgeValue={this.state.notifCount ? String(this.state.notifCount) : null}
          selected={this.state.selectedTab === 'discover'}
          onPress={() => {
            this.setState({
              selectedTab: 'discover',
              notifCount: this.state.notifCount,
            });
          }}>
          <Discover/>
        </TabBarItemIOS>

        <TabBarItemIOS
          accessibilityLabel="购物车"
          name="cart"
          icon={require('image!cart')}
          title='购物车'
          badgeValue={this.state.notifCount ? String(this.state.notifCount) : null}
          selected={this.state.selectedTab === 'cart'}
          onPress={() => {
            this.setState({
              selectedTab: 'cart',
              notifCount: this.state.notifCount,
            });
          }}>
          <Cart/>
        </TabBarItemIOS>


        <TabBarItemIOS
          name="account"
          icon={require('image!account')}
          title='我的淘宝'
          accessibilityLabel="我的淘宝"
          selected={this.state.selectedTab === 'account'}
          onPress={() => {
            this.setState({
              selectedTab: 'account'
            });
          }}>
          <Account/>
        </TabBarItemIOS>
      </TabBarIOS>
    );
  },

});

var styles = StyleSheet.create({
  tabContent: {
    flex: 1,
    alignItems: 'center',
  },
  tabText: {
    color: 'white',
    margin: 50,
  },
  img: {
    width: 64,
    height: 64,
  },
});

module.exports = TaoApp;
