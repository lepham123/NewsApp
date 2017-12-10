import React, { Component } from 'react';
import { Container } from 'flux/utils';
import AppStore from '../store/AppStore';

import { FlatList, View, Text, Image, StyleSheet } from 'react-native';
import RssFeed from '../api/RssFeed';
import * as AppActions from '../action/AppActions';

class DemoListView extends Component {
	static getStores() {
		return [AppStore];
	}

	static calculateState(prevState) {
		return {
			_feeds: AppStore.getState()._feeds,
			le: AppStore.getState().le,
		};
	}

	// constructor(props) {
	// 	super(props);
	// 	this.state = {
	// 		url: '',
	// 		title: '',
	// 		description: '',
	// 		link: '',
	// 		entries: [],
	// 		isLoading: true,
	// 	};
	// }

	componentWillMount() {
		//this._loadInitialState().done();
		AppActions.initFeed();
		console.log('_feeds', this.state._feeds);
	}

	componentDidMount() {
		console.log('_feeds', this.state._feeds);
		this._loadInitialState();
	}

	shouldComponentUpdate(nextProps, nextState) {
		return true;
	}

	_loadInitialState() {
		// try {
		// 	var value = await RssFeed.feednami.load('http://dantri.com.vn/trangchu.rss').then(feed => feed.entries);
		// 	if (value !== null) {
		// 		console.log('--------------------------------');
		// 		console.log('value', value);
		// 		this.setState({ entries: value });
		// 		console.log('--------------------------------');
		// 		console.log('this.state.entries', this.state.entries);
		// 	}
		// } catch (error) {
		// 	console.log(error);
		// }

		RssFeed.feednami.load('http://danviet.vn/rss/home.rss').then(feed => {
			this.setState({ entries: feed.entries });
		});
	}

	getSrcImage(str) {
		var match = str.match(/\<img.+src\=(?:\"|\')(.+?)(?:\"|\')(?:.+?)\>/);
		return match[1];
	}
	_reRender = ({ item }) => {
		return (
			<View>
				<Text key={item.guid}>{item.title}</Text>
				<Image
					style={{ width: 400, height: 200 }}
					source={{
						uri: this.getSrcImage(item.description),
					}}
				/>
			</View>
		);
	};

	render() {
		console.log('view', this.state.le);

		return <FlatList data={this.state.entries} renderItem={this._reRender} />;
	}
}

export default Container.create(DemoListView);
