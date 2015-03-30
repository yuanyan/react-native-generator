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

var Carousel = require('./Carousel')
var {
  StyleSheet,
  Text,
  Image,
  View,
} = React;


module.exports = React.createClass({


  render: function() {

    return (
        <View style={{flex:1}}>
            <Carousel
            style={{flex:1, height: 120, position: 'relative'}}
            indicatorColor="#ffffff"
            >
                <Image style={styles.page} source={{uri: 'http://gw.alicdn.com/tps/i4/TB1qsfTHpXXXXbVXpXXdIns_XXX-1125-352.jpg_q50.jpg'}}/>
                <Image style={styles.page} source={{uri: 'http://gw.alicdn.com/tps/i3/TB1UEnJHpXXXXXsaXXXdIns_XXX-1125-352.jpg_q50.jpg'}}/>
                <Image style={styles.page} source={{uri: 'http://gw.alicdn.com/tps/i1/TB1vljRHpXXXXcjXXXXdIns_XXX-1125-352.jpg_q50.jpg'}}/>
                <Image style={styles.page} source={{uri: 'http://gw.alicdn.com/tps/i2/TB1TOPKHpXXXXbhXVXXdIns_XXX-1125-352.jpg_q50.jpg'}}/>
            </Carousel>
        </View>

    );
  }
});

var styles = StyleSheet.create({
  page: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 375,
    height: 120,
    resizeMode: Image.resizeMode.contain
  }
});
