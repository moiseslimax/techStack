import React, { Component } from 'react';
import { CardSection } from './common/CardSection.js';
import { connect } from 'react-redux';
import { Text, TouchableWithoutFeedback, View,  UIManager, LayoutAnimation } from 'react-native';
import * as actions from '../actions';

class ListItem extends Component{
    componentWillUpdate() {
        UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
        LayoutAnimation.spring();
    }

    renderDescription(){
        if(this.props.expanded){
            return (
                <CardSection>
                    <Text>{this.props.library.description}</Text>
                </CardSection>   
            )
        }
    }

    render(){
        const { id, title} = this.props.library
        const { titleStyle } = styles;
        return(
            <TouchableWithoutFeedback onPress={() => this.props.selectLibrary(id)}>
                <View>
                    <CardSection>
                        <Text style={titleStyle}>{title}</Text>
                    </CardSection>
                    {this.renderDescription()}
                </View>
            </TouchableWithoutFeedback>
        )
    }
}

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    }
}

const mapStateToProps = (state, ownProps) => {

    const expanded = state.selectedLibraryId === ownProps.library.id;

    return { expanded };
}


export default connect(mapStateToProps, actions)(ListItem);