import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Dimensions,
    Platform,
    Image
} from 'react-native';
import CustomTextButton from '../../ButtonMod/CustomTextButton';
import OptionalPoll from '../../Poll/OptionalPoll';
import { APP_GLOBAL_COLOR, normalize } from '../../../../../Constant';

export default class optionalQuestionView extends Component  {
    state = {
        clicked: false
    }

    showPoll = () => {
        this.setState({ clicked: true })
    }
  
    renderPoll = () => {
        const { data } = this.props;

        if(data.userAnswerId) {
          return (
            <OptionalPoll 
              surveyAnswerList={this.props.data.surveyAnswerList}
              userAnswerId={this.props.data.userAnswerId}
            />
          )
        } else return null;
    }

    renderOptions = () => {
        const { data } = this.props;
            return (
                <View style={{ flex: 1, height: 30, flexDirection: 'row' }} >
                    <View style={{ flex: 1.5, justifyContent: 'center', alignContent: 'center' }} >

                    </View>
                    <View style={{ flex: 8.5, marginRight: 10, flexDirection: 'row' }}>
                        <CustomTextButton 
                            style={data.userAnswerId == 1 ? buttonViewStyle.selectedStyle : buttonViewStyle.unSelectedStyle} 
                            textColor={data.userAnswerId == 1 ? "#fff" :  '#000'}
                            onPress={() => {
                                if(this.props.isSurveyTaken === 'N') {
                                    data.userAnswerId = 1;
                                    this.props.onChangeData(data, this.props.index);
                                }
                            }
                        }> YES </CustomTextButton>
                        <CustomTextButton  
                            style={data.userAnswerId == 2 ? buttonViewStyle.selectedStyle : buttonViewStyle.unSelectedStyle} 
                            textColor={data.userAnswerId == 2 ? "#fff" :  '#000'}
                            onPress={() => {
                                if(this.props.isSurveyTaken === 'N') {
                                    data.userAnswerId = 2;
                                    this.props.onChangeData(data, this.props.index);
                                }
                            }
                        }> NO</CustomTextButton>
                    </View>
                </View>
            )
    }

    render() {
        return (
            <View style={[this.props.style, { marginBottom: normalize(10) }]}>
                <View style={{ flexDirection: 'row', paddingTop: 10, paddingBottom: 10, marginBottom: normalize(10) }} >
                    <View style={{ flex: 1.5, justifyContent: 'center', alignContent: 'center' }} >
                        <Text style={{ textAlign: 'center', }}>{this.props.i}</Text>
                    </View>
                    <View style={{ flex: 8.5, marginRight: 10 }} >
                        <Text >{this.props.data.questionText}</Text>
                    </View>
                </View>
                {this.renderOptions()}
                {/* {this.renderPoll()} */}
            </View>
        )
    }

    
};

const buttonViewStyle = StyleSheet.create({
    selectedStyle: { 
        borderColor: APP_GLOBAL_COLOR, 
        borderRadius: 5, 
        borderWidth: 1, 
        width: 100 ,
        height : '90%',
        margin : 5,
        backgroundColor: APP_GLOBAL_COLOR,
    },
    unSelectedStyle: {
        borderColor: APP_GLOBAL_COLOR, 
        borderRadius: 5, 
        borderWidth: 1, 
        width: 100 ,
        height : '90%',
        margin : 5
    },
});


