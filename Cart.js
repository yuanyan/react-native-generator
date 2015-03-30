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
var Separator = require('./Separator');

var {
  StyleSheet,
  ScrollView,
  Text,
  Image,
  View,
} = React;

module.exports = React.createClass({

  renderBar: function(){

    return (
        <View style={styles.bar}>

            <Separator />

            <View style={styles.barContent}>
                <View style={{flex:1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: 2 }}>
                    <Image style={styles.wwBtn} source={require('image!ww')} />
                    <Text style={styles.smallText}>客服</Text>
                </View>

                <Separator vertical/>

                <View style={{flex:1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: 2}}>
                    <Image style={styles.favBtn} source={require('image!fav')} />
                    <Text style={styles.smallText}>收藏</Text>
                </View>

                <Button style={styles.cartBtn}><Text>加入购物车</Text></Button>
                <Button style={styles.buyBtn}><Text>立即购买</Text></Button>
            </View>
        </View>

        )
  },

  renderItem: function(){
       return (
          <ScrollView></ScrollView>
           )
  },
    //<Button style={styles.wwBtn} icon={require('image!ww')}>客服</Button>
    //<Button style={styles.favBtn} icon={require('image!fav')}>收藏</Button>
  render: function() {

    return (
      <View style={[styles.container]}>
      {this.renderItem()}
      {this.renderBar()}
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
            flexDirection: 'column',
  },
  barContent: {

     flexDirection: 'row',
  },
  wwBtn: {  
    width: 20,
    height: 20,
    //resizeMode: Image.resizeMode.contain
  },
  favBtn: {
    width: 20,
    height: 20,
    //resizeMode: Image.resizeMode.contain
  },
    smallText: {
        fontFamily: 'Helvetica',
        fontSize: 10,
        marginTop: 4,
        fontWeight: 'normal',
        color: '#666666',
        backgroundColor: 'transparent',
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
