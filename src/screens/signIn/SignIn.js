import React from 'react';
import {View, Text, Image, ImageBackground, SafeAreaView} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
//import {SafeAreaView} from 'react-native-safe-area-context';

export class SignIn extends React.Component {
  render() {
    return (
      <KeyboardAwareScrollView contentContainerStyle={{flexGrow: 2}}>
        <View style={{flex: 1}}>
          <SafeAreaView />
          <ImageBackground
            style={{
              height: hp('30%'),
              width: wp('100%'),
              justifyContent: 'center',
              alignItems: 'center',
            }}
            source={require('./../../assets/images/img.png')}>
            <View>
              <Image source={require('./../../assets/images/Logo.png')} />
            </View>
          </ImageBackground>

          <View
            style={{
              marginTop: -hp('3%'),
              alignItems: 'center',
            }}>
            {/* Signin & signup style */}
            <View
              style={{
                flexDirection: 'row',
              }}>
              <TouchableOpacity
                style={{
                  height: hp('7%'),
                  width: wp('30%'),
                  backgroundColor: '#4CB8C4',
                  // marginTop: -30,
                  borderBottomLeftRadius: 20,
                  borderTopLeftRadius: 20,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={{color: 'white'}}>SignIn</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('SignUp')}
                style={{
                  height: hp('7%'),
                  width: wp('30%'),
                  backgroundColor: 'white',
                  // marginTop: -30,
                  borderBottomRightRadius: 20,
                  borderTopRightRadius: 20,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={{color: '#4CB8C4'}}>SignUp</Text>
              </TouchableOpacity>
            </View>
            {/* Text View style */}
            <Text
              style={{
                paddingTop: hp('4%'),
                fontSize: hp('2%'),
              }}>
              User SignIn
            </Text>

            {/* Email View */}
            <View
              style={{
                borderColor: 'rgba(0,0,0,0.4)',
                borderTopWidth: 0.5,
                borderLeftWidth: 0.5,
                borderRightWidth: 0.5,
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
                flexDirection: 'row',
                marginTop: hp('4%'),
              }}>
              <View
                style={{
                  width: wp('15%'),
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Icon name="ios-mail" size={hp('3%')} color="#4CB8C4" />
              </View>
              <TextInput
                style={{
                  height: hp('8%'),
                  width: wp('55%'),
                  fontSize: hp('2%'),
                  //borderRadius: 50,
                  //marginTop: hp('2%'),

                  //textAlign: 'center',
                }}
                placeholder={'Email'}
              />
            </View>

            <View
              style={{
                borderColor: 'rgba(0,0,0,0.4)',
                borderWidth: 0.5,
                borderBottomRightRadius: 20,
                borderBottomLeftRadius: 20,
                flexDirection: 'row',
              }}>
              <View
                style={{
                  width: wp('15%'),
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Icon name="ios-key" size={hp('3%')} color="#4CB8C4" />
              </View>
              <TextInput
                style={{
                  height: hp('8%'),
                  width: wp('55%'),
                  fontSize: hp('2%'),
                  //borderRadius: 50,
                  //marginTop: hp('2%'),

                  //textAlign: 'center',
                }}
                placeholder={'Password'}
              />
            </View>
          </View>

          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <TouchableOpacity
              style={{
                height: hp('7%'),
                width: wp('60%'),
                backgroundColor: '#4CB8C4',
                flexDirection: 'row',
                borderRadius: 20,
                marginTop: hp('3%'),
              }}>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '70%',
                }}>
                <Text style={{color: 'white', fontSize: hp('2%')}}>
                  Proceed
                </Text>
              </View>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '30%',
                }}>
                <Icon name="ios-arrow-round-forward" size={40} color="#fff" />
              </View>
            </TouchableOpacity>
            <View
              style={{
                borderBottomWidth: 1,
                borderBottomColor: 'grey',
                width: wp('80%'),
                marginTop: hp('5%'),
              }}
            />
          </View>
        </View>
      </KeyboardAwareScrollView>
    );
  }
}
