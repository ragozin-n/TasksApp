import React, {Component} from 'react';
import {Card, CardSection, Input, Button, Spinner} from './common';
import {connect} from 'react-redux';
import {emailChanged, passwordChanged, loginUser} from '../actions';

class LoginForm extends Component {
	handleEmailChange = text => {
		this.props.emailChanged(text);
	}

	handlePasswordChange = text => {
		this.props.passwordChanged(text);
	}

	handleLogin = () => {
		const {email, password} = this.props;

		this.props.loginUser({email, password});
	}

	renderButton = () => {
		if (this.props.loading) {
			return <Spinner size="large"/>;
		}
		return (
			<Button onPress={this.handleLogin}>
				Login
			</Button>
		);
	}

	render() {
		return (
			<Card style={{marginTop: 100}}>
				<CardSection>
					<Input
						label="Email"
						placeholder="example@gmail.com"
						onChangeText={this.handleEmailChange}
						value={this.props.email}
					/>
				</CardSection>

				<CardSection>
					<Input
						secureTextEntry
						label="Password"
						placeholder="password"
						onChangeText={this.handlePasswordChange}
						value={this.props.password}
					/>
				</CardSection>

				<CardSection>
					{this.renderButton()}
				</CardSection>
			</Card>
		);
	}
}

const mapStateToProps = ({auth}) => {
	const {email, password, error, loading} = auth;
	return {email, password, error, loading};
};

export default connect(mapStateToProps, {emailChanged, passwordChanged, loginUser})(LoginForm);
