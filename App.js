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
var My = require('./My');
var Cart = require('./Cart');
var Index = require('./Index');

var {
  StyleSheet,
  TabBarIOS,
  Text,
  View,
} = React;
var TabBarItemIOS = TabBarIOS.Item;

var TaoApp = React.createClass({

  getInitialState: function() {
    return {
      selectedTab: 'index',
      notifCount: 0
    };
  },

  render: function() {
    return (
      <TabBarIOS
        selectedTab={this.state.selectedTab}>

        <TabBarItemIOS
          name="index"
          icon={{uri: './Chrome.png'}}
          title='首页'
          accessibilityLabel="首页"
          selected={this.state.selectedTab === 'index'}
          onPress={() => {
            this.setState({
              selectedTab: 'index'
            });
          }}>
          <Index/>
        </TabBarItemIOS>

        <TabBarItemIOS
          accessibilityLabel="购物车"
          name="cart"
          icon={{uri: './Chrome.png'}}
          title='首页'
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
          name="my"
          icon={{uri: './Chrome.png'}}
          title='首页'
          accessibilityLabel="我的淘宝"
          selected={this.state.selectedTab === 'my'}
          onPress={() => {
            this.setState({
              selectedTab: 'my'
            });
          }}>
          <My/>
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
});

module.exports = TaoApp;
