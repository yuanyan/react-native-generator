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
var {
  StyleSheet,
  StatusBarIOS,
  Image,
  TextInput,
  Text,
  View,
} = React;

module.exports = React.createClass({
    
    componentWillMount(){
        StatusBarIOS.setStyle(StatusBarIOS.Style.lightContent);
    },
    
    getShowcase(){
        // border top/left/bottom/right width not working
       // https://github.com/facebook/react-native/issues/29
        return (
            <View style={{
                marginTop: 10,
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'white'
            }}>
                <View style={{flex: 450,
                    borderColor: '#E8E8E8',
                    borderRightWidth: 0.5
                }}>
                    <Image
                    style={{
                        flex:1,
                        resizeMode: Image.resizeMode.stretch
                    }}
                    source={{uri: 'http://gw.alicdn.com/tps/i2/TB1WODPHpXXXXbEXFXX3.xE_XXX-450-540.png?imgtag=avatar'}}/>
                </View>

                <View style={{flex: 675, flexDirection: 'column'}}>

                    <Image
                    style={{flex: 675,
                        borderColor: '#E8E8E8',
                        borderBottomWidth: 0.5,
                        resizeMode: Image.resizeMode.stretch
                    }}
                    source={{uri: 'http://gw.alicdn.com/tps/i2/TB1FmJxHpXXXXX7XpXX.l5FJpXX-675-216.jpg_q50.jpg'}}
                    />

                    <View style={{flex: 675, flexDirection: 'row'}}>
                        <Image
                        style={{ flex: 333,
                            resizeMode: Image.resizeMode.contain,
                            borderColor: '#E8E8E8',
                            borderWidth: 0.5
                        }}
                        source={{uri: 'http://gw.alicdn.com/tps/i4/TB1Z7PQHpXXXXb5XFXXW2_Z5VXX-333-324.png'}}
                        />
                        <Image
                        style={{ flex: 333,
                            resizeMode: Image.resizeMode.stretch,
                            borderColor: '#E8E8E8',
                            borderWidth: 0.5
                        }}
                        source={{uri: 'http://gw.alicdn.com/tps/i1/TB1bELNHpXXXXXxXFXXW2_Z5VXX-333-324.png'}}
                         />
                    </View>
                </View>
          </View>)
    },


  render() {
    
    var frtLineIcons = [
        'http://gw.alicdn.com/tps/i1/TB1eSyDGFXXXXaRXVXXszjdGpXX-140-140.png',
        'http://gw.alicdn.com/tps/i2/TB1mhqJGFXXXXaBXpXXszjdGpXX-140-140.png',
        'http://gw.alicdn.com/tps/i2/TB1oq4xHXXXXXbxXpXXszjdGpXX-140-140.png',
        'http://gw.alicdn.com/tps/i3/TB1QeiDGFXXXXb8XVXXszjdGpXX-140-140.png'
    ]

    var scdLineIcons = [
        'http://gw.alicdn.com/tps/i3/TB1pAV7HXXXXXX5aXXXszjdGpXX-140-140.png',
        'http://gw.alicdn.com/tps/i1/TB1z8qiHpXXXXceaXXXszjdGpXX-140-140.png',
        'http://gw.alicdn.com/tps/i3/TB1hW9KGFXXXXXLXpXXszjdGpXX-140-140.png',
        'http://gw.alicdn.com/tps/i4/TB1Ed9LGFXXXXc3XXXXszjdGpXX-140-140.png'
    ]

    var FrtLineIcons = frtLineIcons.map(function(uri, i){
        return <Image style={styles.img} key={i} source={ {uri} }/>
    });

    var ScdLineIcons = scdLineIcons.map(function(uri, i){
        return <Image style={styles.img} key={i} source={ {uri} }/>
    })
  
    return (
      <View style={[styles.container, {backgroundColor: '#eeeeee'}]}>
          
        <View style={styles.header}>
          <TextInput
            style={styles.search}
            autoCapitalize="none"
            placeholder="搜索宝贝"
            clearButtonMode="while-editing"
            autoCorrect={false}
          />
        </View>
          
        <View style={styles.section}>
        {FrtLineIcons}
        </View>
        
        <View style={styles.section}>
        {ScdLineIcons}
        </View>
    
        {this.getShowcase()}
             
        {this.getShowcase()}

        {this.getShowcase()}
      </View>
    );
  },

});

var styles = StyleSheet.create({
  container: {
      flex: 1,
      flexDirection: 'column',
  },
    
    header: {
        paddingTop: 16,
        paddingBottom: 4,
        backgroundColor: '#ff4400'
    },
    
    search: {
        height: 26,
        borderWidth: 0.5,
        marginHorizontal: 50,
        marginVertical: 6,
        paddingHorizontal: 10,
        color: 'white',
        backgroundColor: '#E45029',
        borderColor: '#E45029',
        fontSize: 18,
    },

  section: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: 'white',
  },

  img: {
    width: 48,
    height: 48,
    marginHorizontal: 8,
    marginVertical: 6,
  },

  text: {
    color: 'white',
    paddingHorizontal: 8,
  },

  rowText: {
    color: '#888888',
  },

  thumbText: {
    fontSize: 20,
    color: '#888888',
  },

});
