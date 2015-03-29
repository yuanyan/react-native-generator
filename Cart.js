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
var Button = require('./Button');
var {
  StyleSheet,
  Text,
  View,
} = React;

module.exports = React.createClass({

  render: function() {
    return (
      <View style={[styles.container]}>
        
        <View style={styles.bar}>
        <Button style={styles.wwBtn} icon={require('image!ww')}>客服</Button>    
        <Button style={styles.favBtn} icon={require('image!fav')}>收藏</Button>    
        <Button style={styles.cartBtn}>
        加入购物车
        </Button>
        <Button style={styles.buyBtn}>
        立即购买
        </Button>
        </View>
        
      </View>
    );
  },

});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },

  bar: {
     position: 'absolute',
     bottom: 50,
     left: 0,
     right:0,
     flexDirection: 'row',
  },
  wwBtn: {  
    flex: 1,
    borderTopColor: '#cccccc', 
    borderTopWidth: 1,  
  },
  favBtn: {
    flex: 1,
    borderLeftColor: '#cccccc',  
    borderLeftWidth: 1,
  },
  cartBtn: {
    height: 40,
    lineHeight: 30,   
    flex: 3,
    backgroundColor:'#FF9402',
    color: 'white'
  },
  buyBtn: {
    height: 40, 
    lineHeight: 30,  
    flex: 3,
    backgroundColor:'#FF5000',
    color: 'white'
  }
});
