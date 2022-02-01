/*
 *   Copyright (c) 2022 DSAS Holdings LTD.
 *   All rights reserved.
 */
import mixpanel from "mixpanel-browser";

let initialized = false;

/**
 * An extension that enables sending mixpanel events. The extension should be added in the extensions tab. Then use the track event action to send an event to mixpanel.
 * @natura entity mixpanel tracking for <<token>>
 * @isa app extension
 * @param {String} token Your Mixpanel API token(placeholder:mixpanel API token;no suggestion)
 * @param {String} initialEvent event to send right after initialization. If not specified then send a `track` event
 * @expanded
 */
export function mixpanelExtension(token,initialEvent='track'){
	return {
		init: function(){
			if(!initialized){
				//only initialize on first call
				mixpanel.init(token);
				mixpanel.track(initialEvent);
				initialized = true;
			}
			return mixpanel;
		}
	}
}

/**
 * Track a mixpanel event
 * @natura action track mixpanel event <<eventName>>
 * @title track mixpanel event
 * @param {String} eventName name of event to track
 */
export function trackEvent(eventName){
	mixpanel.track(eventName);
}