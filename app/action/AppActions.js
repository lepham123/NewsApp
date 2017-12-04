import { dispatcher } from '../dispatcher/AppDispatcher';
import * as AppConstants from '../constant/AppConstants';

const addFeed = feed => {
	dispatcher({ type: AppConstants.ADD_FEED, data: feed });
};

const removeFeed = feed => {
	dispatcher({ type: AppConstants.REMOVE_FEED, data: feed });
};

export { addFeed, removeFeed };
